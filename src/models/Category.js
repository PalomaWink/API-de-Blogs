/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const CategoriesSchema = (sequelize, DataTypes) => {
    const CategoriesTable = sequelize.define('Category', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING
    }, {
        tableName: 'categories',
        underscored: true, 
        timestamps: false
    });
    return CategoriesTable;
};

module.exports = CategoriesSchema;
