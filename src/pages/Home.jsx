import React, { useEffect } from "react";

import { About, Collaboration, Footer, Hero, Post } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../features/user/userSlice";

const Home = () => {
  const { token } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(currentUser());
    }
    console.log("User tidak ada");
  }, [token]);

  return (
    <main>
      <Hero />
      <Collaboration />
      <Post />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
