const getFormattedTime = dateTime => {
  return new Date(dateTime).toDateString();
};

const getDateFromString = dateString => {
  return new Date(dateString);
};
export { getFormattedTime, getDateFromString };
