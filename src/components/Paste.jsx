import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteID) {
    if (window.confirm('Are you sure you want to delete this paste?')) {
      dispatch(removeFromPastes(pasteID));
      toast.success('Paste deleted successfully!');
    }
  }

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-16">
      <div className="relative mb-8">
        <input
          className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
          type="search"
          placeholder="Search your pastes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {filteredData.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">No pastes found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or create a new paste</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredData.map((paste) => (
            <div
              key={paste._id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{paste.title}</h3>
                    <p className="text-gray-600 line-clamp-2">{paste.content}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{formatDate(paste.createdAt)}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    to={`/?pasteId=${paste._id}`}
                    className="px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors duration-200"
                  >
                    Edit
                  </Link>

                  <Link
                    to={`/viewpaste/${paste._id}`}
                    className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                  >
                    View
                  </Link>

                  <button
                    onClick={() => handleDelete(paste._id)}
                    className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors duration-200"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste.content);
                      toast.success('Content copied to clipboard!');
                    }}
                    className="px-4 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors duration-200"
                  >
                    Copy
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.origin + `/viewpaste/${paste._id}`);
                      toast.success('Share link copied to clipboard!');
                    }}
                    className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Paste;
