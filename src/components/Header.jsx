function Header() {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#2563eb",
        color: "white",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h1 style={{ margin: 0 }}>Job Tracker</h1>
      <p style={{ marginTop: "30px", marginBottom: 0  }}>
        Track your applications.
      </p>
    </header>
  );
}

export default Header;