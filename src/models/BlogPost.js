/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const BlogPostsSchema = (sequelize, DataTypes) => {
  const BlogPostsTable = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  BlogPostsTable.associate = (models) => {
    BlogPostsTable.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
  }

  return BlogPostsTable
};

module.exports = BlogPostsSchema