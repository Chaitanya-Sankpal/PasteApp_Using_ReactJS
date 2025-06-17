// import { createSlice } from '@reduxjs/toolkit'
// import { toast } from 'react-hot-toast'

// const initialState = {
//   pastes: localStorage.getItem("pastes")

//     ? JSON.parse(localStorage.getItem("pastes"))

//     : []
// }

// export const pasteSlice = createSlice({
//   name: 'pastes',
//   initialState,
//   reducers: {
//     addToPastes : (state, action) => {

//         const paste = action.payload;
//         state.pastes.push(paste);
//         localStorage.setItem("pastes", JSON.stringify(state.pastes));
//         toast("Paste Created Successfully :")
      
//     },

//     updateToPastes : (state, action) => {
      
//     },

//     resetAllPastes : (state, action) => {
      

//     },

//      removeFromPastes : (state, action) => {
      
        
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { addToPastes, updateToPastes , resetAllPastes,  removeFromPastes } = pasteSlice.actions

// export default pasteSlice.reducer

import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';



let savedPastes = [];
try {
  const localData = localStorage.getItem("pastes");
  savedPastes = localData ? JSON.parse(localData) : [];
} catch (err) {
  console.error("Failed to parse localStorage pastes:", err);
  localStorage.removeItem("pastes"); // optional cleanup
}

const initialState = {
  pastes: savedPastes,
};

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully");
    },

    updateToPastes: (state, action) => {
      const updatedPaste = action.payload;
      const index = state.pastes.findIndex(p => p.id === updatedPaste.id);
      if (index !== -1) {
        state.pastes[index] = updatedPaste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated Successfully");
      }
    },

    removeFromPastes: (state, action) => {
      const id = action.payload;
      state.pastes = state.pastes.filter(p => p._id !== id);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Removed");
    },

    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast("All Pastes Cleared");
    },
  },
});

export const {
  addToPastes,
  updateToPastes,
  removeFromPastes,
  resetAllPastes
} = pasteSlice.actions;

export default pasteSlice.reducer;
