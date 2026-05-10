import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://body-process.de";
  const shouldIndex =
    !siteUrl.includes("github.io") && !siteUrl.includes("localhost");

  return {
    rules: {
      userAgent: "*",
      allow: shouldIndex ? "/" : "",
      disallow: shouldIndex ? "" : "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
