import React from "react";

const countryData = [
  {
    flag: "US",
    country: "United States",
    sales: 25560,
    value: 234658,
    bounce: 23.14
  },
  {
    flag: "DE",
    country: "Germany",
    sales: 37455,
    value:  10220,
    bounce:   54.12 
  },
  {
    flag: "BR",
    country: "Brazil",
    sales: 38448,
    value: 97123,
    bounce: 67.34 
  },
  {
    flag: "GB",
    country: "Great Britain",
    sales: 45673,
    value: 23457,
    bounce: 23.12 
  }
]


const SalesByCountry = () => {
  return (
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sales by Country</h2>
          
          <div className="grid grid-cols-4 gap-4 px-4 py-2 bg-gray-50 rounded-t-lg text-sm font-medium text-gray-500">
            <div>Country</div>
            <div className="text-right pr-3">Sales</div>
            <div className="text-right pr-6">Value</div>
            <div className="text-right">Bounce Rate</div>
          </div>
          {/* Data Rows */}
          <div className="divide-y divide-gray-100">
            {countryData.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 px-4 py-4 items-center hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{item.flag}</span>
                  <span className="font-medium text-gray-800">{item.country}</span>
                </div>
                <div className="text-right font-medium text-gray-800">
                  {item.sales.toLocaleString()}
                </div>
                <div className="text-right font-medium text-gray-800">
                  ${item.value.toLocaleString()}
                </div>
                <div className="text-right font-medium text-gray-800">
                  {item.bounce}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default SalesByCountry;