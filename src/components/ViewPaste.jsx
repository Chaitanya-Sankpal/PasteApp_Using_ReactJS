// import { useParams } from 'react-router-dom';
// import React from 'react'
// import { useSelector } from 'react-redux';
// import toast from 'react-hot-toast';

// const ViewPaste = () => {
//   const { id } = useParams();
//   const allPastes = useSelector((state) => state.paste.pastes);
//   const paste = allPastes.find((p) => p._id === id);

//   if (!paste) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Paste Not Found</h1>
//           <p className="text-gray-600">The paste you're looking for doesn't exist or has been deleted.</p>
//         </div>
//       </div>
//     );
//   }

//   const copyContentToClipboard = () => {
//     navigator.clipboard.writeText(paste.content);
//     toast.success("Content copied to clipboard!");
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8 mt-16">
//       <div className="bg-white rounded-2xl shadow-xl p-6 backdrop-blur-lg bg-opacity-90">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
//             {paste.title}
//           </h1>
//           <div className="flex items-center space-x-2 text-sm text-gray-500">
//             <span>Created: {new Date(paste.createdAt).toLocaleDateString()}</span>
//           </div>
//         </div>

//         <div className="space-y-10">
//           <div className="relative">
//             <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 max-h-[80vh] overflow-auto">
//   <pre className="whitespace-pre-wrap break-words font-mono text-gray-700">
//     {paste.content}
//   </pre>
// </div>

//             <button
//               onClick={copyContentToClipboard}
//               className="absolute top-4 right-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
//               title="Copy content"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewPaste;

// New Updated Code ---------------------------
// import { useParams } from 'react-router-dom';
// import React from 'react';
// import { useSelector } from 'react-redux';
// import toast from 'react-hot-toast';

// const ViewPaste = () => {
//   const { id } = useParams();
//   const allPastes = useSelector((state) => state.paste.pastes);
//   const paste = allPastes.find((p) => p._id === id);

//   if (!paste) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Paste Not Found</h1>
//           <p className="text-gray-600">The paste you're looking for doesn't exist or has been deleted.</p>
//         </div>
//       </div>
//     );
//   }

//   const copyContentToClipboard = () => {
//     navigator.clipboard.writeText(paste.content);
//     toast.success("Content copied to clipboard!");
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8 mt-16">
//       <div className="bg-white rounded-2xl shadow-xl p-6 backdrop-blur-lg bg-opacity-90">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
//             {paste.title}
//           </h1>
//           <div className="flex items-center space-x-2 text-sm text-gray-500">
//             <span>Created: {new Date(paste.createdAt).toLocaleDateString()}</span>
//           </div>
//         </div>

//         <div className="space-y-10">
//           <div className="relative">
//             <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 min-h-[300px] overflow-y-auto">
//               <pre className="whitespace-pre-wrap break-words font-mono text-gray-700 w-full text-base leading-relaxed">
//                 {paste.content}
//               </pre>
//             </div>

//             <button
//               onClick={copyContentToClipboard}
//               className="absolute top-4 right-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
//               title="Copy content"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewPaste;

// New Code for disabling the copy button -------------------
import { useParams } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Paste Not Found</h1>
          <p className="text-gray-600">The paste you're looking for doesn't exist or has been deleted.</p>
        </div>
      </div>
    );
  }

  const copyContentToClipboard = () => {
    navigator.clipboard.writeText(paste.content);
    toast.success("Content copied to clipboard!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-16">
      <div className="bg-white rounded-2xl shadow-xl p-6 backdrop-blur-lg bg-opacity-90">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {paste.title}
          </h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Created: {new Date(paste.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="space-y-10">
          <div className="relative">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 min-h-[300px] overflow-y-auto">
              <pre className="whitespace-pre-wrap break-words font-mono text-gray-700 w-full text-base leading-relaxed">
                {paste.content}
              </pre>
            </div>

            {/* Copy button is intentionally hidden */}
            <button
              className="invisible absolute top-4 right-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
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
  );
};

export default ViewPaste;



