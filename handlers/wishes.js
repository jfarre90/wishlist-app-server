const db = require ('../models');

//GET /api/wishes
exports.getWishes = async function(req,res,next){
  try{
    let wishes = await db.Wish.find();
    return res.status(200).json(wishes);
  } catch (error) {
    return next(error);
  }
};

//POST /api/wishes
exports.createWish = async function(req,res,next){
  try {
    let wish = await db.Wish.create({
      text: req.body.text.toLowerCase(),
      category: req.body.category.toLowerCase()
    });
    return res.status(200).json(wish);
  } catch (error) {
    return next(error);
  }
};

//GET /api/wishes/:wish_id
exports.getWish = async function(req,res,next) {
    try {
        let wish = await db.Wish.findById(req.params.wish_id);
        return res.status(200).json(wish);
    } catch (error) {
        return next(error);
    }
    
};

//PUT /api/wishes/:wish_id
exports.updateWish = async function(req,res,next) {
  try {
    let wish = await db.Wish.findById(req.params.wish_id);
    // TO BE COMPLETED
  } catch (error){
    return next (error);
  }
};

//DELETE /api/wishes/:wish_id
exports.deleteWish = async function(req,res,next) {
  try {
    let foundWish = await db.Wish.findByIdAndRemove(req.params.wish_id);
     console.log(foundWish);
    return res.status(200).json(foundWish);
  } catch (error) {
    return next(error);
  }
};

//DELETE /api/wishes/categories/:category
exports.deleteCategory = async function(req,res,next) {
  try {
    const categoryToDelete = req.params.category.replace(/_/g, " ");
    console.log(categoryToDelete);
    let foundWishes = await db.Wish.deleteMany({'category':categoryToDelete});
    console.log(foundWishes);
    return res.status(200).json(foundWishes);
  } catch (error) {
    return next(error);
  }
};