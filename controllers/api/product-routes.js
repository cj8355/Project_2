const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  Product.findAll({
    attributes: ['id', 'product_name', 'price', 'stock','category_id', 'size', 'filename', 'parentFolder', 'gender'],
    include: [
      {
        model: Category,
        attributes: ['category_name']
      },
    ]
  })
    .then(data => {
      // console.log('zz', data.dataValues)

      const dbProductData = data.map((product) => product.get({ plain: true }));
      res.render('products', { dbProductData });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// get /:gender
// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'product_name', 'price', 'stock', 'category_id', 'size', 'filename', 'parentFolder', 'gender'],
    include: [
      {
        model: Category,
        attributes: ['category_name']
      },
     
    ]
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({message: 'No product found with this id'});
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create new product
router.post('/', (req, res) => {
 Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id,
   
    })
    .then((product) => res.status(200).json(product))
    .catch((err) => {
      res.status(400).json(err)
    })    
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((product) => res.status(200).json(product))
  return res.json(product)

  });

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbProductData => {
    if (!dbProductData) {
      rs.status(404).json({message: 'No product found with this id'});
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get("/:gender", (req, res) => {
  Product.findAll({
    where: {
      gender: req.params.gender,
    },
    attributes: [
      "id",
      "product_name",
      "price",
      "stock",
      "category_id",
      "size",
      "filename",
      "parentFolder",
      "gender",
    ],
    include: [
      {
        model: Category,
        attributes: ["category_name"],
      },
    ],
  })
    .then((data) => {
      console.log("zz", data.dataValues);
      const dbProductData = data.map((product) => product.get({ plain: true }));
      res.render("homepage", { dbProductData });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
