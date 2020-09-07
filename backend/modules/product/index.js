const productModel = require("./model");

const handlers = {
  async findMany(req, res, next) {
    try {
    //   let {
    //     pageIndex,
    //     pageSize,
    //     sortBy, // 'tittle'
    //     sort, // 'asc' | 'desc'
    //     search = "",
    //     fields = "",
    //   } = req.query;
    //   pageSize = parseInt(pageSize) || 20;
    //   pageIndex = parseInt(pageIndex) || 1;

    //   let limit = pageSize;
    //   let skip = (pageIndex - 1) * pageSize;
    //   let sortInfor = `${sort == "desc" ? "-" : ""}${sortBy}`;
    //   //fields = 'title,description' => fieldsArr = ['title','description']
    //   let fieldsArr = fields.split(",").map((field) => field.trim());
    //   let condition = {};
    //   if (search) {
    //     condition.title = new RegExp(search, "i"); //i la ko phan biet viet hoa vietthuong
    //   }

    //   let items = await productModel
    //     .find(condition, fieldsArr)
    //     .skip(skip)
    //     .limit(limit)
    //     .sort(sortInfor)
    //     .populate("categories", ["title"]);
      let items = await productModel.find({})
      res.json(items);
    } catch (err) {
      next(err);
    }
  },
  async findOne(req, res, next) {
    try {
      let id = req.params.id;
      // console.log(req)
      let item = await productModel
        .findById(id)
        // .populate("categories", ["title"]);
      res.json(item);
    } catch (err) {
      next(err);
    }
  },
  async create(req, res, next) {
    try {
      let data = req.body;
      let item = await productModel.create(data); //{_id: title : descripttion}
      res.json(item);
    } catch (err) {
      next(err);
    }
  },
  async update(req, res, next) {
    try {
      let data = req.body;
      console.log(data)
      let id = req.body._id;

      if (!id) {
        throw new Error(`Require 'id' to update`);
      }
      let item = await productModel.findByIdAndUpdate(id, data, { new: true });
      res.json(item);
    } catch (err) {
      next(err);
    }
  },
  async delete(req, res, next) {
    try {
      let id = req.params.id;
      let item = await productModel.findByIdAndDelete(id);
      res.send(item);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = handlers;
