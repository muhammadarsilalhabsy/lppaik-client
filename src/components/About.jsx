import React from "react";
import { kegiatan } from "../constants/data";
import { GrAchievement } from "react-icons/gr";
const About = () => {
  return (
    <section id="about" className="bg-orange-300 py-36 border-b-2 border-black">
      <div className="container ">
        <div className="flex flex-wrap">
          {/* left side */}
          <div className="w-full md:w-1/2 lg:w-3/5 xl:w-7/12 text-center md:text-left">
            <h4 className="md:text-lg text-white font-bold mb-4 uppercase">
              Tentang
            </h4>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4  leading-loose">
              Lembaga Pengkajian dan Penerapan Al-Islam Kemuhammadiyahan
            </h1>
            <p className="font-medium leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              incidunt suscipit inventore doloremque fugiat enim dicta harum
              ipsa ad temporibus.
            </p>

            {/* grid */}
            <div className="grid grid-cols-2 gap-5 mb-10">
              {kegiatan.map(({ judul, desc, color }, index) => (
                <div
                  key={index}
                  className={`${color} px-2 py-4 rounded-lg ex-border`}
                >
                  <GrAchievement className="mx-auto mb-2 md:mx-0" />
                  <h1 className="font-semibold text-xl">{judul}</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              ))}
            </div>
          </div>
          {/* right side */}
          <div className="w-full md:w-1/2 md:pl-10 lg:w-2/5 xl:w-5/12 ">
            <div className="bg-white h-full ex-border overflow-hidden p-2">
              <img
                src="kajian3.jpeg"
                alt="kajian"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
