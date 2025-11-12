import { ImageResponse } from "@vercel/og";
export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "The Crit Pit";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#121317",
          color: "white",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, fontFamily: "Impact, sans-serif" }}>{title}</div>
        <div style={{ marginTop: 16, fontSize: 24, color: "#f86600" }}>Enter the Pit. Roll the Crit.</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
