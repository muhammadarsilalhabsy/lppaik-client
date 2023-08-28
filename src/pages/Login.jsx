import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../features/user/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, message, isError, isSuccess } = useSelector(
    (state) => state.userState
  );

  const [userLog, setUser] = useState({
    username: "",
    password: "",
  });

  function handelChange(e) {
    setUser({ ...userLog, [e.target.name]: e.target.value });
  }

  function handelSubmit(e) {
    e.preventDefault();
    dispatch(userLogin(userLog));
  }

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
      toast.success("Selamat datang");
    }
    if (isError && !isSuccess) {
      toast.error(message);
    }
  }, [user, message, isError, isSuccess, navigate, dispatch]);

  return (
    <section className="">
      <div className="flex flex-wrap">
        {/* right side */}
        <div className="w-full lg:w-1/2 bg-teal-600 h-screen flex items-center justify-center">
          <div className="bg-sky-600 w-4/5 md:w-3/5 px-5 py-10 ex-border">
            <h1 className="font-bold text-white text-xl md:text-2xl text-center mb-10 ">
              Selamat Datang
            </h1>
            <form onSubmit={handelSubmit}>
              <div>
                <label htmlFor="username" className="font-semibold">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="w-full mt-2 mb-6 py-2 px-4 rounded-lg border-2 border-black"
                  placeholder="Nomor induk "
                  onChange={handelChange}
                  value={userLog.username}
                />
              </div>

              <div>
                <label htmlFor="password" className="font-semibold">
                  Katasandi
                </label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="w-full mt-2 mb-4  py-2 px-4 rounded-lg border-2 border-black"
                  placeholder="*****"
                  onChange={handelChange}
                  value={userLog.password}
                />
              </div>
              <div className="font-medium text-slate-300">
                <p className="inline">Belum punya akun?</p>

                <a href="" className="ml-2 font-semibold hover:text-black">
                  Daftar
                </a>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="btn btn-md btn-warning normal-case ex-border px-6 hover:text-white"
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* left side */}
        <div className="w-full float-left hidden lg:flex lg:w-1/2 bg-sky-600 h-screen border-l-2 border-black  items-center justify-center ">
          <img src="btq.png" alt="btq" className="mx-auto my-auto" />
        </div>
      </div>
    </section>
  );
};

export default Login;
