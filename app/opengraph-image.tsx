import { ImageResponse } from "next/og";

export const alt = "The F.M. Zavala Law Firm — Santa Clarita Divorce Attorney";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#F8F4ED",
          padding: "80px 100px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Accent bar */}
          <div
            style={{
              height: 5,
              width: 92,
              background: "#5F7A9E",
              marginBottom: 48,
            }}
          />

          <div
            style={{
              fontSize: 66,
              lineHeight: 1.05,
              fontWeight: 600,
              color: "#334155",
              letterSpacing: "-0.025em",
            }}
          >
            The F.M. Zavala Law Firm
          </div>

          <div
            style={{
              marginTop: 22,
              fontSize: 30,
              color: "#5A5A5A",
              letterSpacing: "-0.01em",
            }}
          >
            Santa Clarita Divorce &amp; Family Law Attorney
          </div>
        </div>

        <div
          style={{
            fontSize: 17,
            color: "#5F7A9E",
            letterSpacing: "3.5px",
          }}
        >
          COMPASSIONATE  •  EXPERIENCED  •  DEDICATED
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
