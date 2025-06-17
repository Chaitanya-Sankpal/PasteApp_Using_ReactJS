// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             {/* Title removed */}
//           </div>
//           <div className="flex space-x-8">
//             <NavLink 
//               to="/"
//               className={({ isActive }) =>
//                 `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
//                   isActive 
//                     ? 'text-purple-600 bg-purple-50' 
//                     : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
//                 }`
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/paste"
//               className={({ isActive }) =>
//                 `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
//                   isActive 
//                     ? 'text-purple-600 bg-purple-50' 
//                     : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
//                 }`
//               }
//             >
//               Paste
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          {/* Title removed */}
        </div>
        <div className="flex space-x-8">
          <NavLink 
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/paste"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`
            }
          >
            Paste
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
