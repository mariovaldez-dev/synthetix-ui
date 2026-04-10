import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: true,
        },
      ],
    ],
  },
});

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: [
    "@synthetix-ui/core",
    "@synthetix-ui/utils",
    "@synthetix-ui/hooks",
    "@synthetix-ui/tokens"
  ],
};

export default withMDX(nextConfig);
