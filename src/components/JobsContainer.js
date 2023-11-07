import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import Loading from "./Loading";
import Job from "./Job";
import { useEffect } from "react";
import { getAllJobs } from "../features/allJobs/allJobsSlice";

const JobsContainer = () => {
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs to Display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>Jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
