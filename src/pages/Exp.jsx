import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";
import {
  GetActivities,
  ProductSelectors,
} from "../features/activity/activitySlice";
import { useNavigate } from "react-router-dom";

const Exp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activities = useSelector(ProductSelectors.selectAll);

  console.log(activities);
  useEffect(() => {
    dispatch(GetActivities());
  }, [dispatch]);

  return (
    <div className="mt-32">
      <div className="bg-green-500 w-96 h-32"></div>
    </div>
  );
};

export default Exp;
