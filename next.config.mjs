/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [
        {
          source: '/',
          destination: '/home',
          permanent: true, // Use true for permanent redirection, false for temporary
        },
      ],
};

export default nextConfig;
