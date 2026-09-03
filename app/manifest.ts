import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lumière Interiors — Interior Design Studio",
    short_name: "Lumière",
    description:
      "We don't just design spaces — we design how they feel.",
    start_url: "/",
    display: "standalone",
    theme_color: "#161412",
    background_color: "#161412",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
