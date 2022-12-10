const bookModel = require("../Models/bookModel");
const magazineModel = require("../Models/magazineModel");


const createBook = async (req, res) => {
  try {
    let data = req.body;

    // checking uniqueness of isbn
    const bookISBN = await bookModel.find({ isbn: data.isbn });
    const magazineISBN = await magazineModel.find({ isbn: data.isbn });
    if (bookISBN.length>0 || magazineISBN.length>0) {
      return res
        .status(400)
        .send({ status: false, message: "ISBN should be unique" });
    }
    const book = await bookModel.create(data);
    return res
      .status(201)
      .send({ status: true, message: "book created successfully", data: book });
  } catch (error) {
    res.status(500).send({ status: false, error: error });
  }
};



const getBookAndMagazine = async (req, res) => {
  let query = req.query;
  try {
    let books = await bookModel.find({ ...query }, { _id: 0 });
    let magazines = await magazineModel.find({ ...query }, { _id: 0 });
    let data = magazines.concat(books);
    console.log(data);
    data.sort((a, b) => {
      let ta = a.title.toLowerCase(),
        tb = b.title.toLowerCase();

      if (ta < tb) {
        return -1;
      }
      if (ta > tb) {
        return 1;
      }
      return 0;
    });
console.log(data);
    res
      .status(200)
      .send({ status: true, message: "fetched data successfully", data: data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, error: error });
  }
};

module.exports = { getBookAndMagazine, createBook };
