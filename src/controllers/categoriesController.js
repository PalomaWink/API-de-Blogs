const { registerCategories } = require('../services');

const registerNewCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    console.log(req.body);
    return res.status(400).json({ message: '"name" is required' });
  }
  const { status, data } = await registerCategories.newCategory(req.body);
  return res.status(status).json(data);
};

module.exports = {
  registerNewCategory,
};