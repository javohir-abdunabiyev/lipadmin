/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4000/api/:path*", // прокси на Express backend
      },
    ];
  },
  images: {
    domains: ["s3.lipadmin.ru"], // разрешаем внешние изображения с твоего S3
  },
};

module.exports = nextConfig;
