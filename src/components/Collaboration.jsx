import React from "react";

const Collaboration = () => {
  return (
    <section
      id="collaborate"
      className="pt-20 pb-10 bg-slate-100 border-b-2 border-black"
    >
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-10">
          <div className="relative">
            <img
              src="half-circle.png"
              alt="half-circle"
              className="absolute left-0 md:left-20 top-0"
            />

            <h4 className="text-accent text-lg mb-2 font-semibold uppercase xl:text-2xl">
              Kolaborasi
            </h4>
          </div>
          <h2 className="font-bold text-black mb-4 text-3xl ">
            <span>Dibangung</span>
            <span className="ml-4 underline decoration-wavy underline-offset-8 decoration-[6px]">
              bersama
            </span>
          </h2>
        </div>

        {/* logos */}

        <div className="flex-wrap flex items-center justify-center">
          <a href="#" className="collaborate-logo">
            <img src="umk.png" alt="umk" />
          </a>
          <a href="#" className="collaborate-logo">
            <img src="hmps.png" alt="hmps" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
