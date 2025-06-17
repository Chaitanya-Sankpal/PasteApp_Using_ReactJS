import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();
  const pastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const foundPaste = pastes.find((p) => p._id === pasteId);
      if (foundPaste) {
        setTitle(foundPaste.title);
        setValue(foundPaste.content);
      }
    }
  }, [pasteId, pastes]);

  function creatPaste() {
    if (!title.trim() || !value.trim()) {
      toast.error("Title and content are required!");
      return;
    }

    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId) {
      dispatch(updateToPastes(paste));
      toast.success("Paste updated successfully!");
    } else {
      dispatch(addToPastes(paste));
      toast.success("Paste created successfully!");
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  function copyContentToClipboard() {
    if (!value.trim()) {
      toast.error("No content to copy!");
      return;
    }
    navigator.clipboard.writeText(value);
    toast.success("Content copied to clipboard!");
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-16">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex justify-center space-x-4 mb-8">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:from-purple-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Home
          </Link>
          <Link
            to="/paste"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:from-purple-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Paste
          </Link>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
              type="text"
              placeholder="Enter a title for your paste"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <button
              onClick={creatPaste}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:from-purple-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {pasteId ? "Update Paste" : "Create Paste"}
            </button>
          </div>

          <div className="relative">
            <textarea
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400 min-h-[400px] font-mono"
              value={value}
              placeholder="Enter your content here..."
              onChange={(e) => setValue(e.target.value)}
            />

            <button
              onClick={copyContentToClipboard}
              className="absolute top-4 right-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
              title="Copy content"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
