export default function sitemap() {
  return [
    {
      url: "https://www.indubrolk.tech",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // Since it's a single page portfolio currently, we only need the root URL here.
    // Additional routes would be added here if you add separate pages (e.g., /blog, /about).
  ];
}
