import React from "react";
import { kegiatan } from "../constants/data";
const LayoutDetail = () => {
  const { color, image } = kegiatan?.[0];
  return (
    <main className="container">
      <div className="lg:w-2/3 w-full mt-32 mb-20 border-2 border-black rounded-lg overflow-hidden mx-auto">
        <div className=" bg-sky-400 border-b-2 border-black">
          <div>
            <h1 className="text-white text-4xl font-bold text-center p-5">
              Baca Tulis Al-Qur'an
            </h1>
          </div>
          <div className="flex justify-center">
            <img src={image} alt="gambar kegiatan" />
          </div>
        </div>
        {/* article */}
        <article className="flex flex-wrap ">
          {/* left */}
          <div className="lg:w-8/12 w-full pb-5 lg:border-r-2 lg:border-b-0 border-b-2 border-black">
            <div className="p-5 border-b-2 border-black">
              <h2 className="font-semibold text-xl">Baca Tulis Al-Qur'an</h2>
            </div>
            <div className="p-5">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                reprehenderit sequi eius a non eaque nemo cupiditate, ipsum
                accusamus voluptate. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Magnam eligendi exercitationem dolore vel
                totam nihil sint nulla voluptate asperiores, reprehenderit
                reiciendis voluptates explicabo rerum deleniti eius aspernatur
                dignissimos necessitatibus iusto nobis quibusdam, aliquam
                dolorum. Ut eos laborum repellat quas nesciunt! Cupiditate eum
                rerum voluptatibus. Laborum incidunt, ut pariatur nesciunt,
                necessitatibus ex eveniet omnis suscipit nemo voluptatem aliquam
                animi facere soluta ipsa? Iure beatae itaque repudiandae dolores
                minus perferendis eum nesciunt accusantium maxime laudantium
                veniam, fugit illum vel sapiente soluta optio ipsum. Cumque, hic
                tempore vel odio nobis in. Molestiae rerum dolorum corporis
                ratione fugiat fugit porro neque vitae cumque omnis.
              </p>
            </div>
          </div>

          {/* right */}
          <div className="lg:w-4/12 lg:mx-auto w-full">
            <div className="p-5">
              <h3 className="font-medium pt-2 pb-4">Detail kegiatan:</h3>
              <table>
                <tbody className="text-sm">
                  <tr>
                    <th className="text-left">Waktu</th>
                    <td className="px-2">:</td>
                    <td className="px-2">20.20</td>
                  </tr>
                  <tr>
                    <th className="text-left">Hari</th>
                    <td className="px-2">:</td>
                    <td className="px-2">Kamis</td>
                  </tr>
                  <tr>
                    <th className="text-left">Tanggal</th>
                    <td className="px-2">:</td>
                    <td className="px-2">20 september 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center px-5 pb-5">
              <button className="btn btn-sm px-6 btn-info ex-border hover:text-white w-full">
                Ikut
              </button>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default LayoutDetail;
