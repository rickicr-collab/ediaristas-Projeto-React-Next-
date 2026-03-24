/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ativa o modo estrito do React
  compiler: {
    // se você precisar de alguma configuração de compilador, coloque aqui
    // exemplo para styled-components:
    // styledComponents: true,
  },
};

module.exports = nextConfig;
