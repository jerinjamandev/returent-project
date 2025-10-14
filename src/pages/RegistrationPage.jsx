import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import Sociallogin from '../components/Sociallogin';


const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        console.log(res.user);
        navigate('/')
        toast.success('registration sucssesfull')
      
      })
      .catch(error => {
        console.log(error.message);
        toast.error(error.message)
      })

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Registration attempt with:', { name, email, password });

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const backgroundImageUrl = "https://images.unsplash.com/photo-1543886566-b33a763c3a9d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      </div>

      <div className="relative bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-md m-4 z-10">

        <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Join us today!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-150"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-150"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-150"
              placeholder="Choose a password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-150"
              placeholder="Re-enter your password"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200"
            >
              Register Account
            </button>
          </div>
        </form>
      <Sociallogin></Sociallogin>
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="#" className="font-medium text-red-600 hover:text-red-500">
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;