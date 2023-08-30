const { blogPostService } = require('../services');

const allPosts = async (_req, res) => {
  const { status, data } = await blogPostService.getAllPosts();
  return res.status(status).json(data);
};

module.exports = {
  allPosts,
};