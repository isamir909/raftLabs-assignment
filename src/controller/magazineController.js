const bookModel = require("../Models/bookModel");
const magazineModel = require("../Models/magazineModel");


const createMagazine = async (req, res) => {
  try {
    let data = req.body;

    // checking uniqueness of isbn
    const bookISBN = await bookModel.find({ isbn: data.isbn });
    const magazineISBN = await magazineModel.find({ isbn: data.isbn });
    console.log();
    if (bookISBN.length>0 || magazineISBN.length>0) {
      return res
        .status(400)
        .send({ status: false, message: "ISBN should be unique" });
    }

    const magazine = await magazineModel.create(data);
    return res
      .status(201)
      .send({
        status: true,
        message: "magazine created successfully",
        data: magazine,
      });
  } catch (error) {
    res.status(500).send({ status: false, error: error });
  }
};


module.exports = { createMagazine };