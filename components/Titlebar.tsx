"use client";

export default function Titlebar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        background: "#3c3c3c",
        borderBottom: "1px solid #2d2d2d",
        height: "30px",
        fontSize: "12px",
        color: "#cccccc",
        flexShrink: 0,
        userSelect: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
      </div>

      <span>tahir-bibic — portfolio.tsx — Visual Studio Code</span>

      <div style={{ display: "flex", gap: "16px", fontSize: "11px", opacity: 0.7 }}>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Terminal</span>
      </div>
    </div>
  );
}