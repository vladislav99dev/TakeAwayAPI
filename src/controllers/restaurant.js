const getAll = (req, res) => {
  console.log("Hello from get all");
  res.end();
};
const getOne = (req, res) => {
  console.log("Hello from get one");
  res.end();
};
const createOne = (req, res) => {
  console.log("Hello from create one");
  res.end();
};
const updateOne = (req, res) => {
  console.log("Hello from update one");
  res.end();
};
const deleteOne = (req, res) => {
  console.log("Hello from delete one");
  res.end();
};

const controller = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};

module.exports = controller;
