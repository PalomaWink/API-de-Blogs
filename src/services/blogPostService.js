const { BlogPost } = require('../models');

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll();
  return { status: 200, data: allPosts };
};

module.exports = {
  getAllPosts,
};
