const toDate = dateString => {
    // let timestamp =  / 1000;
    return new Date(Date.parse(dateString));
};
export default toDate;
