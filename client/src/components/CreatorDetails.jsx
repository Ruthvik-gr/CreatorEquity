import React, { useEffect, useState } from 'react';

const CreatorDetails = () => {
  const [creators, setCreators] = useState([]);
  const [filteredCreators, setFilteredCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const response = await fetch('https://creatorequity.onrender.com/api/creators');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCreators(data);
        setFilteredCreators(data);
      } catch (error) {
        console.error('Error fetching creator details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = creators.filter(creator =>
      (creator.name && creator.name.toLowerCase().includes(query)) ||
      (creator.socialMedia && creator.socialMedia.toLowerCase().includes(query)) ||
      (creator.website && creator.website.toLowerCase().includes(query)) ||
      (creator.niche && creator.niche.toLowerCase().includes(query))
    );
    setFilteredCreators(filtered);
  };

  const handleClear = () => {
    setSearchQuery('');
    setFilteredCreators(creators);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen flex flex-col bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
      <h2 className="text-3xl font-bold text-black pt-6 text-center mb-6 w-full">Creators</h2>
      <div className="px-10 mb-6 flex items-center w-screen">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search creators..."
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
      {filteredCreators.length > 0 ? (
        <div className="p-6 md:p-10 mx-auto w-full max-w-screen-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCreators.map((creator) => (
            <div key={creator._id} className="bg-white shadow-md rounded-lg p-6 flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{creator.name}</h3>
              <p className="text-gray-600 mb-1"><strong>Social Media:</strong> {creator.socialMedia}</p>
              <p className="text-gray-600 mb-1"><strong>Website:</strong> <a href={creator.website} className="text-blue-500 hover:underline">{creator.website}</a></p>
              <p className="text-gray-600 mb-1"><strong>Followers:</strong> {creator.followers}</p>
              <p className="text-gray-600 mb-1"><strong>Engagement Rate:</strong> {creator.engagementRate}</p>
              <p className="text-gray-600 mb-1"><strong>Niche:</strong> {creator.niche}</p>
              <p className="text-gray-600 mb-1"><strong>Samples:</strong> {creator.samples}</p>
              <p className="text-gray-600 mb-1"><strong>Email:</strong> {creator.email}</p>
              <p className="text-gray-600 mb-1"><strong>Brands/Products:</strong> {creator.brandsProducts}</p>
              <p className="text-gray-600 mb-1"><strong>Equity:</strong> {creator.equity}</p>
              <a
                href={`mailto:${creator.email}`}
                className="mt-4 inline-block px-4 py-2 text-center bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400"
              >
                Contact
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700 w-full">No creators found.</p>
      )}
    </div>
  );
};

export default CreatorDetails;
