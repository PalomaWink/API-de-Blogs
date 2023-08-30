const { BlogPost, User, Category } = require('../models');

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return { status: 200, data: allPosts };
};

module.exports = {
  getAllPosts,
};