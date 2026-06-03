import { useState } from "react";

function JobForm({ addJob }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company || !position) return;

    const newJob = {
      id: Date.now(),
      company,
      position,
    };

    addJob(newJob);

    setCompany("");
    setPosition("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
         display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{  padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #ccc", }}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          style={{  padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",}}
        />
      </div>

      <button
        type="submit"
        style={{
                    padding: "10px 15px",
                    borderRadius: "6px",
                    border: "none",
                    background: "#2563eb",
                    color: "white",
                    cursor: "pointer",
        }}
      >
        Add Job
      </button>
    </form>
  );
}

export default JobForm;