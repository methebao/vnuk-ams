import moment from "moment";

const getFormattedTime = dateTime => {
  return moment(dateTime).format("MMMM Do YYYY, h:mm:ss a");
};

const getDateFromString = dateString => {
  return new Date(dateString);
};
export { getFormattedTime, getDateFromString };
