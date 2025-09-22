// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import authService from './authService';

// export const registerUser = createAsyncThunk(
//     'auth/register',
//     async (userData, thunkAPI) => {
//         try {
//             return await authService.register(userData);
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data.message);
//         }
//     }
// );

// export const loginUser = createAsyncThunk(
//     'auth/login',
//     async (credentials, thunkAPI) => {
//         try {
//             return await authService.login(credentials);
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data.message);
//         }
//     }
// );

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         user: null,
//         isLoading: false,
//         error: null,
//     },
//     reducers: {
//         logout: (state) => {
//             state.user = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(registerUser.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(registerUser.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.user = action.payload;
//             })
//             .addCase(registerUser.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             })
//             .addCase(loginUser.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(loginUser.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.user = action.payload;
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             });
//     },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
