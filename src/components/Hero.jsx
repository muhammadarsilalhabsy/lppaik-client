import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="border-b-2 border-black mt-16">
      <div className="flex-wrap flex">
        {/* left side */}
        <div className="w-full py-20 lg:w-1/2 bg-pink-500 pt-20 border-b-2 lg:border-b-0 lg:border-r-2 border-black overflow-hidden">
          <div className="mt-16">
            <div className="lg:float-right lg:mr-32 ml-5 lg:ml-0">
              <h3 className="text-lg text-white font-bold mb-2">
                Tingkatkan Kemampuan
              </h3>
              <h1 className="text-3xl lg:text-4xl font-bold max-w-md mb-container 5 tracking-wide">
                Baca Tulis Al-Quran Dengan Metode Yang Efektif Dan Efisien
              </h1>

              <p className="text-sm lg:text-base font-medium text-white max-w-lg my-5 tracking-wide">
                Menjadikan Civitas Akademik Universitas Muhammadiyah Kendari
                Bebas Buta Baca Tulis Al-Qur'an, Bertakwa dan Berakhlakul
                Karimah.
              </p>
              <Link
                to="/kegiatan"
                className="mt-2 tracking-wider font-medium btn btn-warning ex-border hover:text-white transition duration-200"
              >
                Lihat Kegiatan
              </Link>
            </div>
            <div className="clear-right"></div>
          </div>
        </div>
        {/* right side */}
        <div className="w-full py-10 lg:w-1/2 bg-sky-500 overflow-hidden">
          <img
            src="./vector.png"
            alt="gambar"
            className="w-[520px] h-[500px] mx-auto lg:ml-20 "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
