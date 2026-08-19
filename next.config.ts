import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Repo de proyecto (github.com/mausawicki7/comega-landing-page), no repo de
  // usuario: GitHub Pages sirve el sitio bajo /comega-landing-page/.
  basePath: "/comega-landing-page",
  assetPrefix: "/comega-landing-page/",
};

export default nextConfig;
