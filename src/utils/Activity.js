import dateFormat from "dateformat";

export const getDayOfWeek = (date) => {
  return dateFormat(date, "dddd");
};

export const getDate = (date) => {
  return dateFormat(date, "mmmm d, yyyy");
};
