import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/auth"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return session?.user
}