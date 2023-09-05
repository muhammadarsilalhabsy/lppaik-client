import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { PREV_IMG } from "../constants/data";
import {
  GetActivities,
  activitySelector,
} from "../features/activity/activitySlice";
import axios from "axios";

const Kegiatan = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const activities = useSelector(activitySelector.selectAll);
  const { user } = useSelector((state) => state.userState);

  console.log(activities);
  useEffect(() => {
    dispatch(GetActivities());
  }, [dispatch]);

  return (
    <section className="mt-16 pb-20">
      <div className="border-b-2 border-black bg-sky-500 py-11  ">
        <h1 className="text-center text-3xl lg:text-4xl font-semibold">
          Kegiatan
        </h1>
      </div>
      <div className="container mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {user?.role == "ADMIN" && (
            <div className=" w-full ">
              <div className="overflow-hidden rounded-md border-2 border-black">
                <div
                  className="bg-success flex items-center justify-center cursor-pointer"
                  onClick={() => navigate("/kegiatan/create")}
                >
                  <div className="py-28">
                    <IoMdAddCircle className="w-20 h-20 mx-auto my-auto text-white " />
                  </div>
                </div>
                <h3 className="p-2 font-medium border-t-2 border-black">
                  Create new activity
                </h3>
                <div className="flex justify-between border-t-2 border-black">
                  <h4 className="p-2 ">Lihat lebih lanjut --</h4>
                  <div className="flex border-l-2 border-black px-5 py-1.5">
                    <button
                      onClick={() => navigate(`/detail`)}
                      className="rounded-full px-2 text-sm font-medium btn btn-primary normal-case btn-sm ex-border "
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* second */}
          {activities ? (
            activities.map(({ image, title, id, color }) => (
              <div key={id} className=" w-full ">
                <div className="overflow-hidden rounded-md border-2 border-black">
                  <div className={`${color} flex items-center justify-center`}>
                    <img src={PREV_IMG + image} alt={title} />
                  </div>
                  <h3 className="p-2 font-medium border-t-2 border-black">
                    {title}
                  </h3>
                  <div className="flex justify-between border-t-2 border-black">
                    <h4 className="p-2 ">Lihat lebih lanjut --</h4>
                    <div className="flex border-l-2 border-black px-5 py-1.5">
                      <button
                        onClick={() => navigate(`/kegiatan/${id}`)}
                        className="rounded-full px-2 text-sm font-medium btn btn-primary normal-case btn-sm ex-border "
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center font-medium">
              Kegiatan Belum Dibuat...
            </h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
