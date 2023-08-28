'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', { 
      post_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
