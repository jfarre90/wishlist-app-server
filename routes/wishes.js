const express = require('express');
const router = express.Router();

const db = require("../models");

const {
  getWishes,
  createWish,
  getWish,
  updateWish,
  deleteWish,
  deleteCategory
} = require('../handlers/wishes');

// prefix for all routes will be: /api/wishes

router
  .route('/')
  .get(getWishes)
  .post(createWish);

router
  .route('/:wish_id')
  .get(getWish)
  .put(updateWish)
  .delete(deleteWish);
  
router
  .route('/categories/:category')
  .delete(deleteCategory);

module.exports = router;