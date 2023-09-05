import React, { useEffect, useState } from "react";
import { PREV_IMG } from "../constants/data";
import { getDate, getDayOfWeek } from "../utils/Activity";

const ActivityDetail = ({
  title,
  image,
  color,
  location,
  description,
  link,
  time,
  date,
}) => {
  let prevImage;

  if (typeof image == "object") {
    prevImage = URL.createObjectURL(image);
  } else {
    prevImage = PREV_IMG + image;
  }

  return (
    <main className="container">
      <div className="lg:w-2/3 w-full mt-32 mb-20 border-2 border-black rounded-lg overflow-hidden mx-auto">
        <div className={`border-b-2 border-black ${color}`}>
          <div>
            <h1 className="text-white text-4xl font-bold text-center p-5">
              {title}
            </h1>
          </div>
          <div className="flex justify-center">
            <img src={prevImage} alt="gambar kegiatan" />
            {/* <img src={`/${image}`} alt="gambar kegiatan" /> */}
          </div>
        </div>
        {/* article */}
        <article className="flex flex-wrap ">
          {/* left */}
          <div className="lg:w-8/12 w-full pb-5 lg:border-r-2 lg:border-b-0 border-b-2 border-black">
            <div className="p-5 border-b-2 border-black">
              <h2 className="font-semibold text-xl">{title}</h2>
            </div>
            <div className="p-5">
              <p>{description}</p>
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
                    <td className="px-2">{time}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Hari</th>
                    <td className="px-2">:</td>
                    <td className="px-2">{getDayOfWeek(date)}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Tanggal</th>
                    <td className="px-2">:</td>
                    <td className="px-2">{getDate(date)}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Tempat</th>
                    <td className="px-2">:</td>
                    <td className="px-2">{location}</td>
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

export default ActivityDetail;
