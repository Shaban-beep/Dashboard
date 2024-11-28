import React from "react";
import {
  Smartphone,
  Ticket,
  AlertTriangle,
  Users,
  ChevronRight,
} from "lucide-react";

const categoryData = [
  {
    icon: Smartphone,
    title: "Devices",
    description: "250 in stock, 346+ sold",
  },
  {
    icon: Ticket,
    title: "Tickets",
    description: "123 closed, 15 open",
  },
  {
    icon: AlertTriangle,
    title: "Error logs",
    description: "1 is active, 40 closed",
  },
  {
    icon: Users,
    title: "Happy users",
    description: "+ 430",
  },
];

const Categories = () => {
  return (
    <div className="min-w-[34vw] bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Categories</h2>
      <div className="space-y-4">
        {categoryData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between py-3 border-b last:border-0 hover:bg-gray-50 rounded-lg px-3 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-5">
              <div className="bg-gray-900 p-2 rounded-lg">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
