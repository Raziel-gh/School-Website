import React from 'react'
import { useState } from 'react';


  const Login = () => {
    const [role, setRole] = useState('');
  
    const handleLogin = (e, selectedRole) => {
      e.preventDefault();
      setRole(selectedRole);
    };

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    
 
  return (
    <section className='w-full'>

      <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-md w-full space-y-8 items-center">
      <div className='rounded-2xl border-gray-800  p-2 mb-24 shadow-2xl shadow-black'>
        <ul className='text-slate-950 flex flex-row gap-12 justify-center'>
          <li className='hover:underline hover:text-cyan-400 transition-all h-full cursor-pointer duration-500 ' onClick={()=>{
            setRole('Admin')
          }}>Admin</li>
          <li className='hover:underline hover:text-cyan-400 transition-all h-full cursor-pointer duration-500 ' onClick={()=>{
            setRole('Faculty')
          }}>Faculty</li>
          <li className='hover:underline hover:text-cyan-400 transition-all h-full cursor-pointer duration-500 ' onClick={()=>{
            setRole('Student')
          }}>Student</li>
        </ul>
      </div>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{role} Login</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only"></label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Login Id"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>

      </div>
    </div>
    </section>
  )
}

export default Login