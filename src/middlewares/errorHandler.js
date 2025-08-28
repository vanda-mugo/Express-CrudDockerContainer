//centralized error handling 

const errorHandlingMiddleware = (err, req, res, next) => {
  console.error("Error occurred:", err);
  console.log(err.stack);
  res.status(500).json({ 
    status: 500,
    message: "something went wrong",
    error: `Internal Server Error ${err.message}` });
};

export default errorHandlingMiddleware;
