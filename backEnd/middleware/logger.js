import moment from "moment-timezone";
const logger = (req, res, next) => {
  const currentTime = moment().tz("Asia/Dubai").format("YYYY-MM-DD HH:mm:ss");
  console.log(`${req.method}   ${req.url} [${currentTime}]`);

  next();
};

export default logger;
