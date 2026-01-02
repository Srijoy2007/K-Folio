interface Props {
  activeSection?: string;
}

// Footer
// Site footer for the landing page. Uses inline style objects so styles are
// colocated with markup; receives `activeSection` purely for display (and
// previously for theming). Keep visual logic here small so it stays portable.
export default function Footer({ activeSection }: Props) {
  const footerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",
    padding: "80px 100px",
    background: "black",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    color: "white",
  };

  const logoStyle: React.CSSProperties = { fontSize: 24, fontWeight: 600 };
  const linksStyle: React.CSSProperties = { display: "flex", gap: "80px" };
  const h4Style: React.CSSProperties = { marginBottom: 16, fontSize: 14, opacity: 0.8 };
  const linkStyle: React.CSSProperties = {
    display: "block",
    marginBottom: 10,
    fontSize: 14,
    opacity: 0.7,
    color: "inherit",
    textDecoration: "none",
  };
  const visualStyle: React.CSSProperties = { display: "flex", justifyContent: "flex-end", alignItems: "center" };
  const nowStyle: React.CSSProperties = { textTransform: "capitalize", opacity: 0.7 };

  return (
    <footer style={footerStyle} data-active={activeSection ?? "hero"}>
      <div style={logoStyle}>K-Folio</div>

      <div style={linksStyle}>
        <div>
          <h4 style={h4Style}>Explore</h4>
          <a style={linkStyle}>Home</a>
          <a style={linkStyle}>Stories</a>
          <a style={linkStyle}>Profile</a>
          <a style={linkStyle}>Create Post</a>
          <a style={linkStyle}>Search</a>
          <a style={linkStyle}>Messages</a>
        </div>

        <div>
          <h4 style={h4Style}>Resources</h4>
          <a style={linkStyle}>About K-Folio</a>
          <a style={linkStyle}>Contact Us</a>
          <a style={linkStyle}>Privacy and Terms</a>
        </div>
      </div>

      <div style={visualStyle}>
        <div style={nowStyle}>{activeSection}</div>
      </div>
    </footer>
  );
}
