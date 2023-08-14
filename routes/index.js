var express = require('express');
var router = express.Router();
const multer = require('multer')
var category = require('../models/category')
var subcategory = require('../models/sub_category')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


// add category data start
router.post('/category', upload.single('file'), async function (req, res, next) {
  try {
    var obj = {
      name: req.body.name,
      image: req.file.originalname
    }
    var data = await category.create(obj)
    res.status(200).json({
      status: 'success',
      data
    })
  }
  catch (err) {
    res.status(400).json({
      status: err
    })
  }
});
// add category data end


// get allcategory data start
router.get('/getdata', async function (req, res, next) {
  try {
    var data = await category.find()
    res.status(200).json({
      status: 'success',
      data
    })
  }
  catch (err) {
    res.status(400).json({
      status: err
    })
  }
});
// get allcategory data end

// get product category data start

router.get('/getcategory/:id', async function (req, res, next) {
  try {
    console.log(req.params.id);
    var data = await subcategory.find({ category_id: req.params.id })
    res.status(200).json({
      status: 'success',
      data
    })
  }
  catch (err) {
    res.status(400).json({
      status: err
    })
  }
});

// get single category data end

// get single product  data start

router.get('/getsingleproduct/:id', async function (req, res, next) {
  try {
    console.log(req.params.id);
    var data = await subcategory.findById(req.params.id)
    res.status(200).json({
      status: 'success',
      data
    })
  }
  catch (err) {
    res.status(400).json({
      status: err
    })
  }
});

// get single product  data end

// add subcategory data start

router.post('/subcategory', upload.single('file'), async function (req, res, next) {
  try {
    var obj = {
      category_id: req.body.category_id,
      name: req.body.name,
      image: req.file.originalname
    }
    console.log(obj);
    var data = await subcategory.create(obj)
    res.status(200).json({
      status: 'success',
      data
    })
  }
  catch (err) {
    res.status(400).json({
      status: err
    })
    console.log(err);
  }
});

// add subcategory data end
module.exports = router;
