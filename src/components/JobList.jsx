import JobCard from "./JobCard";

function JobList({ jobs, deleteJob, updateJobStatus }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {jobs.length === 0 ? (
        <p style={{ textAlign: "center" }}>No jobs yet</p>
      ) : (
        jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            deleteJob={deleteJob}
            updateJobStatus={updateJobStatus}
          />
        ))
      )}
    </div>
  );
}

export default JobList;