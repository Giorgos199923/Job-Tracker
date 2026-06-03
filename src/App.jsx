import { useEffect, useState } from "react";
import Header from "./components/Header";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import Stats from "./components/Stats";

function App() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  const addJob = (job) => {
    setJobs((prevJobs) => [job, ...prevJobs]);
  };

  const deleteJob = (id) => {
    setJobs((prevJobs) =>
      prevJobs.filter((job) => job.id !== id)
    );
  };

  const updateJobStatus = (id, newStatus) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id
          ? { ...job, status: newStatus }
          : job
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  return (
    <div className="app-container">
      <Header />

      <Stats jobs={jobs} />

      <JobForm addJob={addJob} />

      <JobList
        jobs={jobs}
        deleteJob={deleteJob}
        updateJobStatus={updateJobStatus}
      />
    </div>
  );
}

export default App;