import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [flipped, setFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can validate email/password
    navigate("/Home"); // redirect to home page
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Here you can save signup info
    navigate("/Home"); // redirect to home page
  };

  const styles = `
    .perspective { perspective: 1500px; }
    .transform-style-preserve { transform-style: preserve-3d; }
    .backface-hidden { backface-visibility: hidden; }
    .rotate-y-180 { transform: rotateY(180deg); }
    .text-stroke { -webkit-text-stroke: 2px black; }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        <div
          className="relative w-full max-w-md h-[550px] perspective"
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
        >
          <div
            className={`duration-700 transform-style-preserve preserve-3d w-full h-full relative ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front - Login */}
            <form
              onSubmit={handleLogin}
              className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 sm:p-8"
            >
              <div className="text-center mb-4">
                <span className="block text-3xl font-extrabold tracking-wide text-black">
                  URBAN
                </span>
                <span className="block text-3xl font-extrabold text-transparent text-stroke">
                  STRIDE
                </span>
                <span className="block text-lg font-medium text-gray-800">
                  online store
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-gray-800 mt-3">
                Login
              </h2>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-6 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <button
                type="submit"
                className="bg-gray-900 text-white w-full py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Login
              </button>

              <p
                className="mt-4 text-sm text-gray-600 cursor-pointer hover:underline"
                onClick={() => setFlipped(true)}
              >
                Don't have an account? Sign Up
              </p>
            </form>

            {/* Back - Signup */}
            <form
              onSubmit={handleSignup}
              className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 sm:p-8 rotate-y-180"
            >
              <div className="text-center mb-4">
                <span className="block text-3xl font-extrabold tracking-wide text-black">
                  URBAN
                </span>
                <span className="block text-3xl font-extrabold text-transparent text-stroke">
                  STRIDE
                </span>
                <span className="block text-lg font-medium text-gray-800">
                  online store
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-gray-800 mt-3">
                Sign Up
              </h2>

              <input
                type="text"
                placeholder="Username"
                className="mb-4 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="mb-4 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-6 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <button
                type="submit"
                className="bg-gray-900 text-white w-full py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Sign Up
              </button>

              <p
                className="mt-4 text-sm text-gray-600 cursor-pointer hover:underline"
                onClick={() => setFlipped(false)}
              >
                Already have an account? Login
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
