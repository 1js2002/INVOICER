import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./prisma";
import { resend } from "@/lib/email";
import MagicLinkEmail from "@/lib/magic-link-email";
import { siteConfig } from "./site";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    EmailProvider({
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const user = await prisma.user.findUnique({
          where: {
            email: identifier,
          },
          select: {
            name: true,
            emailVerified: true,
          },
        });
        const userVerified = user?.emailVerified ? true : false;
        const authSubject = userVerified
          ? `Sign-in link for ${siteConfig.name}`
          : "Activate your account";
        try {
          const result = await resend.emails.send({
            from: "onboarding@resend.dev",
            to:
              process.env.NODE_ENV === "development"
                ? "dgoud99120@gmail.com"
                : identifier,
            subject: authSubject,
            react: MagicLinkEmail({
              firstName: user?.name as string,
              actionUrl: url,
              mailType: userVerified ? "login" : "register",
              siteName: siteConfig.name,
            }),
            headers: {
              "X-Entity-Ref-ID": new Date().getTime() + "",
            },
          });
          console.log("result===>", result);
        } catch (error) {
          console.log(error);
          throw new Error("Failed to send verification email.");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: user?.email,
        },
      });
      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
};
