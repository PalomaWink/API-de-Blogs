/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER
    }, {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
    });
    return PostCategoryTable
  };
  
  module.exports = PostCategorySchema;