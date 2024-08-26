import React, { useEffect, useState } from 'react';

const BusinessDetails = () => {
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://creatorequity.onrender.com/api/businesses')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBusinesses(data);
        setFilteredBusinesses(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching business details.');
        setLoading(false);
        console.error('Error fetching business details:', error);
      });
  }, []);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = businesses.filter(business =>
      (business.companyName && business.companyName.toLowerCase().includes(query)) ||
      (business.industry && business.industry.toLowerCase().includes(query)) ||
      (business.description && business.description.toLowerCase().includes(query))
    );
    setFilteredBusinesses(filtered);
  };

  const handleClear = () => {
    setSearchQuery('');
    setFilteredBusinesses(businesses);
  };

  if (loading) return <p className="text-center text-lg font-medium min-h-screen flex flex-col bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">Loading business details...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
      <h2 className="text-3xl font-bold text-black pt-6 text-center mb-6">Businesses</h2>
      <div className="px-10 mb-6 flex items-center w-screen">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search businesses..."
          className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400"
        >
          Search
        </button>
        <button
          onClick={handleClear}
          className="ml-2 px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800"
        >
          Clear
        </button>
      </div>
      {filteredBusinesses.length > 0 ? (
        <div className="p-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBusinesses.map(business => (
            <div key={business._id} className="bg-white shadow-md rounded-lg p-6 flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{business.companyName}</h3>
              <p className="text-gray-600 mb-2"><strong>Industry:</strong> {business.industry}</p>
              <p className="text-gray-600 mb-2"><strong>Description:</strong> {business.description}</p>
              <p className="text-gray-600 mb-2"><strong>Website:</strong>
                <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{business.website}</a>
              </p>
              <p className="text-gray-600 mb-2"><strong>Contact Person:</strong> {business.contactPerson}</p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> {business.email}</p>
              <p className="text-gray-600 mb-2"><strong>Equity Offered:</strong> {business.equity}</p>
              <p className="text-gray-600 mb-2"><strong>Needs/Goals:</strong> {business.needsGoals}</p>
              <p className="text-gray-600 mb-2"><strong>Funding Stage:</strong> {business.fundingStage}</p>
              <p className="text-gray-600"><strong>Target Audience:</strong> {business.targetAudience}</p>
              <a
                href={`mailto:${business.email}`}
                className="mt-4 inline-block px-4 py-2 text-center bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400"
              >
                Contact
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-6">No businesses found.</p>
      )}
    </div>
  );
};

export default BusinessDetails;
