import * as fs from "node:fs";
import path from "path";
import { blogs } from "../src/blog/index";

const siteUrl = "https://www.vuluvan.com";

const addBlogToSitemap = () => {
  const sitemapPath = path.join(__dirname, "..", "public", "sitemap.xml");

  if (!fs.existsSync(sitemapPath)) {
    throw new Error("❌ public/sitemap.xml bulunamadı.");
  }

  let sitemap = fs.readFileSync(sitemapPath, "utf8");

  const newBlogs = blogs
    .filter((post: any) => {
      const url = `${siteUrl}/blog/${post.Slug}`;

      return !sitemap.includes(`<loc>${url}</loc>`);
    })
    .sort(
      (a: any, b: any) =>
        new Date(b.PublishTime).getTime() - new Date(a.PublishTime).getTime(),
    );

  if (newBlogs.length === 0) {
    console.log("✅ Sitemap güncel. Eklenecek yeni blog yok.");
    return;
  }

  const newBlogXml = newBlogs
    .map((post: any) => {
      const url = `${siteUrl}/blog/${post.Slug}`;
      const lastmod = new Date(post.PublishTime).toISOString();

      return ` <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.9</priority>
  </url>`;
    })
    .join("\n\n");

  const firstBlogLoc = `<loc>${siteUrl}/blog/`;

  const locIndex = sitemap.indexOf(firstBlogLoc);

  if (locIndex !== -1) {
    const urlStartIndex = sitemap.lastIndexOf("<url>", locIndex);

    sitemap =
      sitemap.slice(0, urlStartIndex) +
      newBlogXml +
      "\n\n  " +
      sitemap.slice(urlStartIndex);
  } else {
    sitemap = sitemap.replace("</urlset>", `${newBlogXml}\n</urlset>`);
  }

  fs.writeFileSync(sitemapPath, sitemap, "utf8");

  console.log(`✅ ${newBlogs.length} yeni blog sitemap'e eklendi:`);

  newBlogs.forEach((post: any) => {
    console.log(`   → ${post.Title}`);
  });
};

addBlogToSitemap();
