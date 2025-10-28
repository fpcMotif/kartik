import { ImageResponse } from "next/og";
import { getBlogById } from "@/data/blogs";

export const runtime = "edge";
export const alt = "Blog Post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Image({ params }: Props) {
  const { id } = await params;
  const blog = getBlogById(id);
  const title = blog?.title ?? "Blog Post";

  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to bottom right, #1e293b, #0f172a)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "20px" }}>{title}</div>
      <div style={{ fontSize: 24, opacity: 0.8 }}>
        Kartik Labhshetwar - Blog
      </div>
    </div>,
    { ...size },
  );
}
