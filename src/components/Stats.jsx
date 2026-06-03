function Stats({ jobs }) {
  const total = jobs.length;
  const applied = jobs.filter((job) => job.status === "Applied").length;
  const interview = jobs.filter((job) => job.status === "Interview").length;
  const rejected = jobs.filter((job) => job.status === "Rejected").length;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        background: "white",
        padding: "15px",
        margin: "20px 0",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        textAlign: "center",
      }}
    >
      <div>
        <h3 style={{ margin: 0 }}>{total}</h3>
        <p style={{ margin: 0 }}>Total</p>
      </div>

      <div>
        <h3 style={{ margin: 0 }}>{applied}</h3>
        <p style={{ margin: 0 }}>Applied</p>
      </div>

      <div>
        <h3 style={{ margin: 0 }}>{interview}</h3>
        <p style={{ margin: 0 }}>Interview</p>
      </div>

      <div>
        <h3 style={{ margin: 0 }}>{rejected}</h3>
        <p style={{ margin: 0 }}>Rejected</p>
      </div>
    </div>
  );
}

export default Stats;