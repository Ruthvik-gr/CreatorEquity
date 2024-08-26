import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreatorForm() {
  const [formData, setFormData] = useState({
    name: '',
    socialMedia: '',
    website: '',
    followers: '',
    engagementRate: '',
    niche: '',
    samples: '',
    email: '',
    brandsProducts: '',
    equity: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://creatorequity.onrender.com/api/creators', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Data submitted successfully!');
        setFormData({
          name: '',
          socialMedia: '',
          website: '',
          followers: '',
          engagementRate: '',
          niche: '',
          samples: '',
          email: '',
          brandsProducts: '',
          equity: ''
        });
      } else {
        toast.error('Failed to submit data.');
      }
    } catch (error) {
      toast.error('An error occurred while submitting data.');
    }
  };

  return (
    <div className="h-screen w-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Creator form</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-12">
          <div className="sm:col-span-4">
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Creator Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="social-media" className="block text-sm font-medium leading-6 text-gray-900">
              Social Media Handles
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="social-media"
                  name="socialMedia"
                  type="text"
                  value={formData.socialMedia}
                  onChange={handleChange}
                  placeholder="Twitter, Instagram, etc."
                  autoComplete="social-media"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
              Personal Website or Blog
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  autoComplete="website"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="followers" className="block text-sm font-medium leading-6 text-gray-900">
              Number of Followers/Subscribers
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="followers"
                  name="followers"
                  type="number"
                  value={formData.followers}
                  onChange={handleChange}
                  placeholder="10000"
                  autoComplete="followers"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="engagement-rate" className="block text-sm font-medium leading-6 text-gray-900">
              Average Engagement Rate
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="engagement-rate"
                  name="engagementRate"
                  type="text"
                  value={formData.engagementRate}
                  onChange={handleChange}
                  placeholder="5% - 10%"
                  autoComplete="engagement-rate"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="niche" className="block text-sm font-medium leading-6 text-gray-900">
              Content Niche/Focus
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="niche"
                  name="niche"
                  type="text"
                  value={formData.niche}
                  onChange={handleChange}
                  placeholder="Tech, Lifestyle, Fashion"
                  autoComplete="niche"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="samples" className="block text-sm font-medium leading-6 text-gray-900">
              Samples of Past Work
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="samples"
                  name="samples"
                  type="text"
                  value={formData.samples}
                  onChange={handleChange}
                  placeholder="Links or descriptions of past work"
                  autoComplete="samples"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email Address
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                  autoComplete="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="brands-products" className="block text-sm font-medium leading-6 text-gray-900">
              Brands/Products Interested In Collaborating With
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="brands-products"
                  name="brandsProducts"
                  type="text"
                  value={formData.brandsProducts}
                  onChange={handleChange}
                  placeholder="List of brands/products"
                  autoComplete="brands-products"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="equity" className="block text-sm font-medium leading-6 text-gray-900">
              Equity Percentage Offered
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="equity"
                  name="equity"
                  type="text"
                  value={formData.equity}
                  onChange={handleChange}
                  placeholder="0% - 100%"
                  autoComplete="equity"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-start gap-x-6">
            <button
              type="button"
              className="text-sm bg-white font-semibold leading-6 text-gray-900"
              onClick={() => setFormData({
                name: '',
                socialMedia: '',
                website: '',
                followers: '',
                engagementRate: '',
                niche: '',
                samples: '',
                email: '',
                brandsProducts: '',
                equity: ''
              })}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
