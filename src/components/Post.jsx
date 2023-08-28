import React, { useEffect, useState } from "react";
import { kegiatan } from "../constants/data";
const Post = () => {
  const [windowDimension, detectWidth] = useState({
    winWidth: window.innerWidth,
  });

  const detectSize = () => {
    detectWidth({ winWidth: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <section
      id="kegiatan"
      className="bg-[url('/pattern-1.png')] py-36 bg-slate-100 border-b-2 border-black relative"
    >
      <img
        src="yellow-star.png"
        alt="yellow-star"
        className="absolute -top-9 left-0 "
      />
      <img
        src="green-star.png"
        alt="green-star"
        className="absolute right-0 -bottom-9 z-10"
      />
      <div className="container ">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h4 className="text-accent text-lg mb-2 font-semibold uppercase xl:text-2xl">
            Kegiatan
          </h4>
          <p className="font-medium text-dark-sec text-md md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            enim dolor porro?
          </p>
        </div>

        {kegiatan.map(({ judul, image, desc, color }, index) => (
          <div
            key={index}
            className="flex flex-wrap border-2 border-black rounded-lg overflow-hidden mb-10 "
          >
            {index % 2 == 0 || windowDimension.winWidth <= 1024 ? (
              <>
                <div className="bg-white p-4 w-full lg:w-1/2 border-b-2 lg:border-b-0 lg:border-r-2 border-black ">
                  <div
                    className={`w-11/12 ${color} flex items-center justify-center ex-border mx-auto`}
                  >
                    <img src={image} alt={image} className="w-2/4 h-2/4 " />
                  </div>
                </div>

                <div className="bg-white w-full lg:w-1/2 lg:pt-10 px-6 ">
                  <h3 className="font-semibold text-xl p-4 truncate">
                    {judul}
                  </h3>
                  <p className="text-sm px-4 py-2 leading-6">{desc}</p>
                  <a
                    href=""
                    className="btn btn-warning mx-4 my-4 ex-border hover:text-white normal-case"
                  >
                    Lihat lebih lanjut
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white w-full px-6 lg:w-1/2 lg:pt-10 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
                  <h3 className="font-semibold text-xl p-4 truncate">
                    {judul}
                  </h3>
                  <p className="text-sm px-4 py-2 leading-6">{desc}</p>
                  <a
                    href=""
                    className="btn btn-warning mx-4 my-4 ex-border hover:text-white normal-case"
                  >
                    Lihat lebih lanjut
                  </a>
                </div>

                <div className="bg-white p-4 w-full lg:w-1/2 ">
                  <div
                    className={`w-11/12 ${color} flex items-center justify-center ex-border mx-auto`}
                  >
                    <img src={image} alt={image} className="w-2/4 h-2/4 " />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Post;
