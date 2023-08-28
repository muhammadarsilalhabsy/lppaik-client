import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-sky-600 pt-24 pb-12">
      <div className="container">
        <div className="flex-wrap flex">
          {/* left / 1 */}
          <div className="w-full mb-12 text-black font-medium md:w-1/3">
            <h2 className="text-4xl text-white font-bold mb-5">LPPAIK.</h2>
            <h3 className="text-2xl font-bold mb-2">Hubungi Kami</h3>
            <p>lppaik@umkendari.ac.id</p>
            <p>Jalan KH. Ahmad Dahlan No. 10</p>
            <p>Kendari, Sulawesi Tenggara, Indonesia</p>
          </div>

          {/* center / 2 */}
          <div className="w-full mb-12 text-black font-medium md:w-1/3">
            <h2 className="text-xl text-white font-bold mb-5">Kategori</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-white mb-2 inline-block">
                  Kajian
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white mb-2 inline-block">
                  Baca Tulis Al-Quran
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white mb-2 inline-block">
                  Kegiatan lainnya
                </a>
              </li>
            </ul>
          </div>

          {/* right / 3 */}
          <div className="w-full mb-12 text-black font-medium md:w-1/3">
            <h2 className="text-xl text-white font-bold mb-5">Tautan</h2>
            <ul>
              <li>
                <a href="#home" className="hover:text-white mb-2 inline-block">
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#kegiatan"
                  className="hover:text-white mb-2 inline-block"
                >
                  Kegiatan
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white mb-2 inline-block">
                  Tentang
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black w-full pt-10">
          <div className="flex mb-5 items-center justify-center">
            <Socials />
          </div>
          <p className="text-center font-medium text-sm text-white">
            Copyright &copy; Lembaga Pengkajian dan Penerapan Al-Islam
            Kemuhammadiyahan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
