/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', 
    trailingSlash: true, 
    images: { unoptimized: true } /*should be erased for building to web host */
}

module.exports = nextConfig
