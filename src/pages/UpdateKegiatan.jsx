import React, { useEffect, useState } from "react";
import ActivityDetail from "../components/ActivityDetail";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { activitySelector } from "../features/activity/activitySlice";

const UpdateKegiatan = () => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.userState);
  const activity = useSelector((state) =>
    activitySelector.selectById(state, id)
  );
  const [kegiatan, setKegiatan] = useState({
    title: activity.title,
    image: activity.image,
    location: activity.location,
    description: activity.description,
    link: activity.link,
    time: activity.time,
    date: activity.date,
    color: activity.color,
  });
  const [preview, setPreview] = useState("");

  const navigate = useNavigate();

  function handelChange(e) {
    setKegiatan({ ...kegiatan, [e.target.name]: e.target.value });
  }

  function handelImage(e) {
    const image = e.target.files[0];
    console.log(image);
    setKegiatan({ ...kegiatan, image });
    // setPreview(URL.createObjectURL(image));
  }

  function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  }

  async function handelSubmit(e) {
    e.preventDefault();
    const data = getFormData(kegiatan);

    try {
      const res = await axios.patch(
        `http://localhost:8080/api/v1/activity/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-API-TOKEN": token,
          },
        }
      );
      console.log(res.data);
      toast.success("Success update kegiatan");
      navigate("/kegiatan");
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div className="bg-[url('/pattern-1.png')] py-16">
      <div className="border-b-2 border-black bg-success py-11  ">
        <h1 className="text-center text-3xl lg:text-4xl font-semibold">
          Update Kegiatan
        </h1>
      </div>
      <div className="container">
        <div className="bg-white mt-16 border-2 border-black p-3 rounded-lg">
          <form onSubmit={handelSubmit}>
            <div className="flex flex-wrap">
              {/* left side */}
              <div className="lg:w-1/2 w-full p-2">
                <div>
                  <label
                    htmlFor="title"
                    className="font-medium text-sm tracking-wider"
                  >
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="w-full my-2 py-2 px-4 rounded-lg border-2 border-black"
                    placeholder="Judul kegiatan"
                    onChange={handelChange}
                    value={kegiatan.title}
                  />
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="font-medium text-sm tracking-wider"
                  >
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    className="w-full my-2 py-2 px-4 rounded-lg border-2 border-black"
                    placeholder="Tempat kegiatan"
                    onChange={handelChange}
                    value={kegiatan.location}
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="font-medium text-sm tracking-wider"
                  >
                    Image
                  </label>
                  <input
                    accept="image/*"
                    type="file"
                    className="file-input border-2 border-black file-input-success w-full my-2"
                    onChange={handelImage}
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="font-medium text-sm tracking-wider block"
                  >
                    description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Deskripsi detail kegiatan"
                    className="textarea h-28 w-full  border-2 border-black my-2"
                    onChange={handelChange}
                    value={kegiatan.description}
                  ></textarea>
                </div>
              </div>
              {/* left side */}
              <div className="lg:w-1/2 w-full p-2">
                <div>
                  <label
                    htmlFor="date"
                    className="font-medium text-sm tracking-wider"
                  >
                    Calendar
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="text"
                    className="w-full my-2 py-2 px-4 rounded-lg border-2 border-black"
                    placeholder="yyyy-MM-dd"
                    onChange={handelChange}
                    value={kegiatan.date}
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="font-medium text-sm tracking-wider"
                  >
                    Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="text"
                    className="w-full my-2 py-2 px-4 rounded-lg border-2 border-black"
                    placeholder="HH:mm"
                    onChange={handelChange}
                    value={kegiatan.time}
                  />
                </div>
                <div>
                  <label
                    htmlFor="link"
                    className="font-medium text-sm tracking-wider"
                  >
                    Youtube link
                  </label>
                  <input
                    id="link"
                    name="link"
                    type="text"
                    className="w-full my-2 py-2 px-4 rounded-lg border-2 border-black"
                    placeholder="Link video youtube"
                    onChange={handelChange}
                    value={kegiatan.link}
                  />
                </div>
                <div>
                  <label
                    htmlFor="color"
                    className="font-medium text-sm tracking-wider"
                  >
                    Choose background color
                  </label>
                  <div className="flex gap-2 mt-2">
                    <input
                      type="radio"
                      name="color"
                      className="radio checked:bg-slate-500 border-4 border-slate-500"
                      value="bg-slate-500"
                      onChange={handelChange}
                      checked={kegiatan.color === "bg-slate-500"}
                    />
                    <input
                      type="radio"
                      name="color"
                      className="radio checked:bg-red-500 border-4 border-red-500"
                      value="bg-red-500"
                      onChange={handelChange}
                      checked={kegiatan.color === "bg-rede-500"}
                    />
                    <input
                      type="radio"
                      name="color"
                      className="radio checked:bg-orange-500 border-4 border-orange-500"
                      value="bg-orange-500"
                      onChange={handelChange}
                      checked={kegiatan.color === "bg-orange-500"}
                    />
                    <input
                      type="radio"
                      name="color"
                      className="radio checked:bg-yellow-500 border-4 border-yellow-500"
                      value="bg-yellow-500"
                      onChange={handelChange}
                      checked={kegiatan.color === "bg-yellow-500"}
                    />
                    <input
                      type="radio"
                      name="color"
                      className="radio checked:bg-sky-500 border-4 border-sky-500"
                      value="bg-sky-500"
                      onChange={handelChange}
                      checked={kegiatan.color === "bg-sky-500"}
                    />
                    <input
                      type="radio"
                      name="color"
                      className="radio checked:bg-blue-500 border-4 border-blue-500"
                      value="bg-blue-500"
                      onChange={handelChange}
                      checked={kegiatan.color === "bg-blue-500"}
                    />
                    <input
                      type="radio"
                      name="color"
                      className="radio checked:bg-teal-500 border-4 border-teal-500"
                      value="bg-teal-500"
                      onChange={handelChange}
                      checked={kegiatan.color === "bg-teal-500"}
                    />
                    <input
                      type="radio"
                      name="color"
                      className="radio checked:bg-green-500 border-4 border-green-500"
                      value="bg-green-500"
                      onChange={handelChange}
                      checked={kegiatan.color === "bg-green-500"}
                    />
                    <input
                      type="radio"
                      name="color"
                      className="radio checked:bg-violet-500 border-4 border-violet-500"
                      value="bg-violet-500"
                      onChange={handelChange}
                      checked={kegiatan.color === "bg-violet-500"}
                    />
                    <input
                      type="radio"
                      name="color"
                      className="radio checked:bg-pink-500 border-4 border-pink-500"
                      value="bg-pink-500"
                      onChange={handelChange}
                      checked={kegiatan.color === "bg-pink-500"}
                    />
                    <input
                      type="radio"
                      name="color"
                      className="radio checked:bg-indigo-500 border-4 border-indigo-500"
                      value="bg-indigo-500"
                      onChange={handelChange}
                      checked={kegiatan.color === "bg-indigo-500"}
                    />
                    <input
                      type="radio"
                      name="color"
                      className="radio checked:bg-black border-4 border-black"
                      value="bg-black"
                      onChange={handelChange}
                      checked={kegiatan.color === "bg-black"}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-5">
              <button
                type="submit"
                className="btn btn-md btn-success normal-case ex-border px-6 hover:text-white"
              >
                Update kegiatan
              </button>
            </div>
          </form>
        </div>
      </div>

      <article id="preview">
        <h1 className="text-center font-bold mt-10 text-2xl">
          Kegiatan preview
        </h1>
        <ActivityDetail {...kegiatan} className="-mt-30" />
      </article>
    </div>
  );
};

export default UpdateKegiatan;
