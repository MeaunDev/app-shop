/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:"http",
        hostname:'i.dummyjson.com'
      },
    ],
    unoptimized:true
  }
}
module.exports = nextConfig
