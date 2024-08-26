import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BusinessForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    description: '',
    website: '',
    contactPerson: '',
    email: '',
    equity: '',
    needsGoals: '',
    fundingStage: '',
    targetAudience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://creatorequity.onrender.com/api/businesses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');
      toast.success('Business data submitted successfully!');
      setFormData({
        companyName: '',
        industry: '',
        description: '',
        website: '',
        contactPerson: '',
        email: '',
        equity: '',
        needsGoals: '',
        fundingStage: '',
        targetAudience: '',
      });
    } catch (error) {
      toast.error(`Submission failed: ${error.message}`);
    }
  };

  return (
    <div className="h-screen w-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Business </h2>
      <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
            <div className="sm:col-span-6">
              <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
                Company Name
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Company Name"
                  autoComplete="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="industry" className="block text-sm font-medium leading-6 text-gray-900">
                Industry/Niche
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="industry"
                  name="industry"
                  type="text"
                  placeholder="Industry/Niche"
                  autoComplete="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Business Description
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Business Description"
                  autoComplete="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                Website URL
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://example.com"
                  autoComplete="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="contactPerson" className="block text-sm font-medium leading-6 text-gray-900">
                Primary Contact Person
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="contactPerson"
                  name="contactPerson"
                  type="text"
                  placeholder="Primary Contact Person"
                  autoComplete="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email Address
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="equity" className="block text-sm font-medium leading-6 text-gray-900">
                Equity Percentage Offered
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="equity"
                  name="equity"
                  type="text"
                  placeholder="Equity Percentage Offered"
                  autoComplete="equity"
                  value={formData.equity}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="needsGoals" className="block text-sm font-medium leading-6 text-gray-900">
                Specific Needs/Goals
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="needsGoals"
                  name="needsGoals"
                  type="text"
                  placeholder="Specific Needs/Goals"
                  autoComplete="needsGoals"
                  value={formData.needsGoals}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="fundingStage" className="block text-sm font-medium leading-6 text-gray-900">
                Funding Stage
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="fundingStage"
                  name="fundingStage"
                  type="text"
                  placeholder="Funding Stage"
                  autoComplete="fundingStage"
                  value={formData.fundingStage}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="targetAudience" className="block text-sm font-medium leading-6 text-gray-900">
                Target Audience
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="targetAudience"
                  name="targetAudience"
                  type="text"
                  placeholder="Target Audience"
                  autoComplete="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-start gap-x-6">
          <button type="button" className="text-sm bg-white font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
