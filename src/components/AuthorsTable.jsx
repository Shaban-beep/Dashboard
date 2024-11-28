import React from "react";

const authorsData = [
  {
    name: "John Michael",
    email: "john@creative-tim.com",
    function: "Manager",
    department: "Organization",
    status: "ONLINE",
    statusColor: "bg-green-400",
    employed: "23/04/18",
    image: "https://demos.creative-tim.com/argon-dashboard/assets/img/team-2.jpg"
  },
  {
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    function: "Programator",
    department: "Developer",
    status: "OFFLINE",
    statusColor: "bg-gray-500",
    employed: "11/01/19",
    image:"https://demos.creative-tim.com/argon-dashboard/assets/img/team-3.jpg"
  },
  {
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    function: "Executive",
    department: "Projects",
    status: "ONLINE",
    statusColor: "bg-green-400",
    employed: "19/09/17",
    image:"https://demos.creative-tim.com/argon-dashboard/assets/img/team-4.jpg"
  },
  {
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    function: "Programator",
    department: "Developer",
    status: "ONLINE",
    statusColor: "bg-green-400",
    employed: "24/12/08",
    image:"https://demos.creative-tim.com/argon-dashboard/assets/img/team-2.jpg"
  },
  {
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    function: "Manager",
    department: "Executive",
    status: "OFFLINE",
    statusColor: "bg-gray-500",
    employed: "04/10/21",
    image:"https://demos.creative-tim.com/argon-dashboard/assets/img/team-3.jpg"
  },
  {
    name: "Miriam Eric",
    email: "miriam@creative-tim.com",
    function: "Programator",
    department: "Developer",
    status: "OFFLINE",
    statusColor: "bg-gray-500",
    employed: "14/09/20",
    image:"https://demos.creative-tim.com/argon-dashboard/assets/img/team-4.jpg"
  },
];
const AuthorsTable = () => {
  return (
    <div className="w-full bg-white py-6 rounded-lg shadow-md h-auto">
      <div className="space-y-2">
        <div className="bg-white ml-10">
          <h2 className="text-xl font-medium text-gray-700">Authors table</h2>
        </div>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="flex items-center justify-around">
              <th className="pr-40 py-4 text-left font-medium text-sm text-gray-500">Author</th>
              <th className="px-2 py-4 text-right font-medium text-sm text-gray-500">Function</th>
              <th className="px-2 py-4 font-medium text-sm text-gray-500">Status</th>
              <th className="px-2 py-4 font-medium text-sm text-gray-500">Employed</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {authorsData.map((author, index) => (
              <tr key={index} className="flex items-center justify-around border-t border-gray-200 text-white">
                <td className="w-56 mr-24">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-gray-200">
                     <img src={author.image} className="w-full h-full rounded-xl"/>
                    </div>
                    <div className="ml-4">
                      <span className="text-sm font-bold text-gray-800">{author.name}</span>
                      <p className="text-sm text-gray-600">{author.email}</p>
                    </div>
                  </div>
                </td>
                <td className="function py-3 w-24">
                  <span className="text-sm font-bold text-gray-800">{author.function}</span>
                  <p className="text-sm text-gray-600">{author.department}</p>
                </td>
                <td className="px-6 py-3 ml-4"><span
                    className={`px-2 py-1 text-xs font-medium rounded-lg ${author.statusColor}`}
                  >
                    {author.status}</span></td>
                <td className="px-6 py-4 text-sm text-gray-600 mx-5">{author.employed}</td>
                <td className="px-6 py-4 text-gray-500 text-sm font-semibold cursor-pointer">Edit</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuthorsTable;
