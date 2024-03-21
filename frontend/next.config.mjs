/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.affigueiredo.com.br',
            }
        ]
    }
};

export default nextConfig;
