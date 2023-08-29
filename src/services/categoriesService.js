const { Category } = require('../models');

const newCategory = async (nameCategory) => {
  const registerNewCategory = await Category.create(nameCategory);
  return { status: 201, data: registerNewCategory };
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return { status: 200, data: allCategories };
};

module.exports = {
  newCategory,
  getAllCategories,
};