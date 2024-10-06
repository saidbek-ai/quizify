import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/autSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const notify = (m) => toast(m);
  if (isAuthenticated) {
    notify("Successfully logged in!");
    setTimeout(() => navigateTo("/quiz"), 1500);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username));
  };

  return (
    <div className="max-w-[1280px] w-full mx-auto h-screen px-4 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-teal-700 p-4 rounded-md flex flex-col justify-center items-center gap-4"
      >
        <h3 className="text-xl p-4 text-white font-semibold text-center">
          Enter your username to log in
        </h3>
        <input
          type="text"
          className="w-full rounded-md py-2 px-4 focus:outline-orange-400"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-orange-400 py-2 px-4 rounded-md w-full"
        >
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
