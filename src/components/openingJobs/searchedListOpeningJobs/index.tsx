import React from "react";
import { IFilteredJobs } from "../../../pages/searchOpenningsJob";

interface SearchedListJobOpenningsProps { filteredJobs: IFilteredJobs[]; }

export const SearchedListOpeningJobs: React.FC<SearchedListJobOpenningsProps> = ({ filteredJobs }) => {
  return (
    <>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <li key={job.id}>
            <h4>{job.position}</h4>
          </li>
        ))
      ) : (
        <div className="emptyList">
          <h3 className="emptyListTitle">Desculpe :(!</h3>
          <p className="emptyListText">Nenhum resultado encontrado</p>
        </div>
      )}
    </>
  );
};