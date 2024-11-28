import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
const ProjectsData = [
  {
    project: "Spotify",
    budjet: "$2500",
    status: "working",
    completion: 60,
    // icon: ''
  },
  {
    project: "Spotify",
    budjet: "$2500",
    status: "working",
    completion: 60,
    // icon: ''
  },
  {
    project: "Spotify",
    budjet: "$2500",
    status: "working",
    completion: 60,
    // icon: ''
  },
  {
    project: "Spotify",
    budjet: "$2500",
    status: "working",
    completion: 60,
    // icon: ''
  },
  {
    project: "Spotify",
    budjet: "$2500",
    status: "working",
    completion: 60,
    // icon: ''
  },
  {
    project: "Spotify",
    budjet: "$2500",
    status: "working",
    completion: 60,
    // icon: ''
  },
];

const ProjectsTable = () => {
  return (
    <div className="bg-white w-full my-5 rounded-lg">
      <div className="px-4 py-7">
        <div className="px-4">
          <h2 className="text-xl font-medium text-gray-700">Projects table</h2>
        </div>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="text-sm text-gray-500 font-medium flex items-center gap-32 py-5">
              <th className="pr-40 pl-10">PROJECT</th>
              <th>BUDGET</th>
              <th>STATUS</th>
              <th>COMPLETION</th>
            </tr>
          </thead>
          <tbody>
            {ProjectsData.map((item, index) => (
              <tr key={index} className="flex items-center justify-around border-t border-gray-200 text-white">
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;
