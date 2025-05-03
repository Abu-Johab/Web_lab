import React, { useState, useEffect } from "react";
import axios from "axios";

function RealTimeBillionaires() {
  const [billionaires, setBillionaires] = useState([]);

  useEffect(() => {
    // Example API call (replace with actual API)
    axios.get("https://api.example.com/billionaires")
      .then((response) => {
        setBillionaires(response.data);
      })
      .catch((error) => {
        console.error("Error fetching billionaire data:", error);
      });
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-center text-3xl font-semibold mb-10">Real-Time Billionaires</h2>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {billionaires.map((billionaire, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">{billionaire.name}</h3>
            <p className="text-green-500 text-lg mb-1">{billionaire.netWorth}</p>
            <p className="text-sm text-gray-600">{billionaire.source}</p>
            <p className="text-sm text-gray-500">{billionaire.country}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RealTimeBillionaires;
