function JobCard({ job, deleteJob, updateJobStatus }) {
  return (
    <div
      style={{
        background: "white",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <div>
        <h3 style={{ margin: 0 }}>{job.company}</h3>

        <p style={{ margin: "5px 0", color: "gray" }}>
          {job.position}
        </p>

        <select
          value={job.status}
          onChange={(e) =>
            updateJobStatus(job.id, e.target.value)
          }
          style={{
            padding: "5px",
            borderRadius: "5px",
            marginTop: "5px",
          }}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <button
        onClick={() => deleteJob(job.id)}
        style={{
          background: "#ef4444",
          color: "white",
          border: "none",
          padding: "6px 10px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default JobCard;