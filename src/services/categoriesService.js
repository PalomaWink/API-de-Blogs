const { Category } = require('../models');

const newCategory = async (nameCategory) => {
  const registerNewCategory = await Category.create(nameCategory);
  return { status: 201, data: registerNewCategory };
};

module.exports = {
  newCategory,
};