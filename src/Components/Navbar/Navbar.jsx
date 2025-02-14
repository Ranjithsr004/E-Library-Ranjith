import React from 'react';
import { auth } from '../Authenticate/Firebase';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <Link to="/dashboard"><div className="flex items-center">
          <img src="/logo1.png" alt="Logo" className="h-8 mr-2" />
          <span className="text-white  text-lg font-bold hidden md:inline">Ranjith E-Library</span>
        </div> </Link>
        <div className="flex items-center">
          {user ? (
            <>
              <span className="text-white mr-4">{user.email}</span>
              <button onClick={handleLogout} className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/login')} className="text-white px-4 py-2 rounded-md bg-blue-500 mr-4">Login</button>
              <button onClick={() => navigate('/signup')} className="text-blue-500 border border-blue-500 px-4 py-2 rounded-md">Sign Up</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
