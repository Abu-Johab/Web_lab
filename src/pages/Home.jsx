import React, { useState } from "react";
import axios from "axios"; // Import axios to make API requests

function HomePage() {
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState({
    name: "",
    sector: "",
    logo: "",
    headquarters: "",
    founded: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  // Add new company to the database and the state
  const handleAddCompany = async () => {
    try {
      // Sending data to the backend (POST request)
      const response = await axios.post("http://localhost:5000/api/companies", company);
      
      // If the data is successfully added to the database
      setCompanies([...companies, response.data]); // Add the new company to the state
      setCompany({ name: "", sector: "", logo: "", headquarters: "", founded: "" }); // Reset the form fields
    } catch (error) {
      console.error("Error adding company:", error);
    }
  };

  // Delete a company from the state
  const handleDeleteCompany = (index) => {
    const updatedCompanies = companies.filter((_, i) => i !== index);
    setCompanies(updatedCompanies);
  };

  // Edit a company's data in the state
  const handleEditCompany = (index) => {
    setCompany(companies[index]);
    handleDeleteCompany(index);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Existing Navbar and Hero Section */}
      {/* Navbar */}
      <nav className="fixed w-full bg-black bg-opacity-80 backdrop-blur z-10 px-8 py-4 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-white text-2xl font-bold tracking-wide">Forbes</h1>
          <div className="space-x-6">
            <a href="/" className="text-white hover:text-gray-300">Home</a>
            <a href="/billionaires" className="text-white hover:text-gray-300">Real-Time Billionaires</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-purple-900 to-blue-800 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Real-Time Billionaires</h1>
        <p className="text-lg mb-8">Tracking the world's richest people, in real time.</p>
        <p className="text-sm text-gray-300">Stay up-to-date with billionaires around the globe!</p>
      </section>

      {/* Table to Add & Show Companies */}
      <div className="bg-white p-6 rounded shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Add Company</h2>
        <input
          type="text"
          name="name"
          value={company.name}
          onChange={handleInputChange}
          placeholder="Company Name"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="sector"
          value={company.sector}
          onChange={handleInputChange}
          placeholder="Sector"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="logo"
          value={company.logo}
          onChange={handleInputChange}
          placeholder="Logo URL"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="headquarters"
          value={company.headquarters}
          onChange={handleInputChange}
          placeholder="Headquarters"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="founded"
          value={company.founded}
          onChange={handleInputChange}
          placeholder="Year Founded"
          className="border p-2 mb-4 w-full"
        />
        <button
          onClick={handleAddCompany}
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Add Company
        </button>
      </div>

      {/* Table to Display Companies */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Company List</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Logo</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Sector</th>
              <th className="px-4 py-2 border">Headquarters</th>
              <th className="px-4 py-2 border">Founded</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{company.logo}</td>
                <td className="px-4 py-2 border">{company.name}</td>
                <td className="px-4 py-2 border">{company.sector}</td>
                <td className="px-4 py-2 border">{company.headquarters}</td>
                <td className="px-4 py-2 border">{company.founded}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleEditCompany(index)}
                    className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCompany(index)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
