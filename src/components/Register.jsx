// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../features/auth/authSlice';

// const Register = () => {
//     const [form, setForm] = useState({
//         name: '',
//         gmail: '',
//         age: '',
//         username: '',
//         password: '',
//         contactNumber: '',
//         gender: '',
//     });
//     const dispatch = useDispatch();
//     const { loading, error, user } = useSelector((state) => state.user);

//     const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(registerUser(form));
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit} className="mt-3">
//                 <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="name"
//                         value={form.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Email</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         name="gmail"
//                         value={form.gmail}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Age</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         name="age"
//                         value={form.age}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Username</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="username"
//                         value={form.username}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Password</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         name="password"
//                         value={form.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Contact Number</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="contactNumber"
//                         value={form.contactNumber}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Gender</label>
//                     <select
//                         className="form-select"
//                         name="gender"
//                         value={form.gender}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="">Select Gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                     </select>
//                 </div>
//                 <button type="submit" className="btn btn-primary" disabled={loading}>
//                     {loading ? 'Registering...' : 'Register'}
//                 </button>
//             </form>
//             {error && <p className="text-danger mt-3">{error}</p>}
//             {user && <p className="text-success mt-3">Registration successful! Welcome, {user.name}.</p>}
//         </div>
//     );
// };

// export default Register;
