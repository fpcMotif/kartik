import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kartik Labhshetwar - Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 64,
        background: "linear-gradient(to bottom right, #1e293b, #0f172a)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
      }}
    >
      Kartik Labhshetwar
    </div>,
    { ...size },
  );
}
