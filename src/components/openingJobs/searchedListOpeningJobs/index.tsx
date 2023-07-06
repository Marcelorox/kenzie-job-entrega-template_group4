import React from "react";
import { IFilteredJobs } from "../../../pages/searchOpenningsJob";
import { OpeningJobsCard } from "../openingJobsCard";

interface SearchedListJobOpenningsProps { filteredJobs: IFilteredJobs[]; }

export const SearchedListOpeningJobs: React.FC<SearchedListJobOpenningsProps> = ({ filteredJobs }) => {
  return (
    <>
      {filteredJobs.map((job) => (
          <OpeningJobsCard  key={job.id}
          position={job.position}
          description={job.description} 
          jobApplyID={job.id} 
          userApplyID={job.userId} />
        ))}
    </>
  );
};