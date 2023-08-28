/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    }, {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    });

    PostCategoryTable.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        foreignKey: 'postId',
        otherkey: 'categoryId',
        through: PostCategoryTable,
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blogPosts',
        foreignKey: 'categoryId',
        otherkey: 'postId',
        through: PostCategoryTable,
      });
    };

    return PostCategoryTable
  };
  
  module.exports = PostCategorySchema;