var express = require('express');
var router = express.Router();

var manufacturers = [
  {
  id: 1,
  name: "vivo",
  imageUrl: "https://cf.shopee.com.my/file/bc8c311a30e64400989c82d3bbdec333_tn",
  },
  {
  id: 2,
  name: "realme Official Store",
  imageUrl: "https://cf.shopee.com.my/file/d9ae852be2ef6442c95472e4ff18f314_tn",
  },
];
var products = [
  {
  id: 1,
  name: "vivo V25 Pro Smartphone 12GB+8GB RAM, 256GB ROM, 64MP OIS Ultra-Sensing Camera, 66W FlashCharge, 120Hz Curved Screen",
  price: 2499.00,
  imageUrl: "https://cf.shopee.com.my/file/sg-11134201-22090-7ureixzg4yhvd1",
  description: "NFC, 8GB Extended RAM, 3D Curve Screen, 66W FlashCharge, 64MP OIS Ultra-Sensing Camera",
  manufacturerId: 1,
  },
  {
  id: 2,
  name: "vivo X70 5G Smartphone (8+4GB RAM + 128GB ROM/ZEISS T Coating/Ultra-Sensing Gimbal Camera/120Hz Refresh Rate)",
  price: 1649.00,
  imageUrl: "https://cf.shopee.com.my/file/61a3b65e71066bf20668764a959a0a45",
  description: "ZEISS OPTIC T* Coating l Ultra-Sensing Gimbal Camera l Flagship SOC 6nm D1200 l 120Hz Refresh Rate",
  manufacturerId: 1,
  },
  {
  id: 3,
  name: "realme Techlife Buds T100 - 28 hours Total Playback | Ai Noise Cancellation Calls | IPX5 Water Resistance",
  price: 129.00,
  imageUrl: "https://cf.shopee.com.my/file/sg-11134201-22100-m9t7jegfg7iva9",
  description: "In the box : realme Techlife Buds x1, Quick Start Guide x1, Ear tips x6 (M size is pre-installed)",
  manufacturerId: 2,
  },
  {
  id: 4,
  name: "realme GT 2 Pro Snapdragon 8 Gen 1 Platform 2K Super Reality Display (12GB RAM + 256GB ROM)",
  price: 2999.99,
  imageUrl: "https://cf.shopee.com.my/file/5617b723d9406d75cb551ed1359197f3",
  description: "What's in the box: realme GT2 Pro , USB Type-C Cable, 65W SuperDart Charge Adapter, SIM Card Needle, Phone Case, User Manual.",
  manufacturerId: 2,
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect(302, "products");
});
/* GET products listing page. */
router.get("/products", function (req, res, next) {
  res.render("products", {
  title: "Product Listing",
  description: "This page shows a list of products.",
  products: products,
  });
});
/* GET product page. */
router.get("/products/:id", function (req, res, next) {
  // Fill in the code: get the parameter
  var requestedId = parseInt(req.params.id);
  // Get the requested product from the product list
  var requestedProduct = products.filter(function (product) {
    return product.id === requestedId;
    });
  // Check if the requested product id exist
  if (requestedProduct.length > 0) {
  res.render("product", {
  title: "Product Page",
  product: requestedProduct[0],
  description: "This page shows the details of a product",
  });
  } else {
  // 404 Product not found
  res.status(404).send("Product not found");
  }
});
/* GET manufacturer listing page. */
router.get("/manufacturers", function (req, res, next) {
  res.render("manufacturers", {
  title: "Manufacturer Page",
  description: "This page shows a list of manufacturers.",
  manufacturers: manufacturers,
  });
});
/* GET manufacturer page. */
router.get("/manufacturers/:id", function (req, res, next) {
  // Fill in the code: get the parameter
  var requestedId = parseInt(req.params.id);
  // Get the requested product from the product list
  var requestedProducts = products.filter(function (product) {
  return product.manufacturerId == requestedId;
  });
  
  res.render("products", {
    title: "Manufacturer Page",
    products: requestedProducts,
    description: "This page shows a list of products from this manufacturer.",
  });
});

module.exports = router;
