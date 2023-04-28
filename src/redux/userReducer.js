import { createSlice } from "@reduxjs/toolkit"


const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    user: {
      displayName: '',
      email: '',
      photoURL: '',
      uid: '',
      idToken: ''
    },
    bookmarks: [123456, 456456],
  },
  reducers: {
    loginUser: (state, action) => {
      console.log('loginUser', action.payload)
      state.user = action.payload;
      state.loggedIn = true;
    },
    logoutUser: (state) => {
      state.loggedIn = false;
      state.user = {
        displayName: '',
        email: '',
        photoURL: '',
        uid: '',
        bookmarks: [],
        idToken: '' //this is for API calls
      };
    },
    removeBookmark: (state, action) => {
      state = {
        ...state,
        bookmarks: state.user.bookmarks.filter(bookmark => bookmark !== action.payload),
      }
    },
    addBookmark: (state, action) => {
      console.log(state.user.bookmarks, 'bookmarks');
      state = {
        ...state,
        bookmarks: state.user.bookmarks.push(action.payload),
      }
    }
  },
  // extraReducers: {
  //   [createUser.fulfilled]: (state, action) => {
  //     state.loggedIn = true;
  //   },
  //   [createUser.rejected]: (state, action) => {
  //     state.loggedIn = false;
  //   },
  // },
})

export const { loginUser, logoutUser, addBookmark, removeBookmark } = userSlice.actions
export default userSlice.reducer