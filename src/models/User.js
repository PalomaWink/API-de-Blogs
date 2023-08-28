/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const UsersSchema = (sequelize, DataTypes) => {
    const UsersTable = sequelize.define('User', {
        id: DataTypes.INTEGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.INTEGER,
        image: DataTypes.STRING
    }, {
        tableName: 'users',
        underscored: true, // Transforma snake_case em camelCase na leitura
        timestamps: false
    });

    UsersTable.associate = (models) => {
        UsersTable.hasMany(models.BlogPost, {
          as: 'blogPosts',
          foreignKey: 'userId',
        })
      }

    return UsersTable;
};

module.exports = UsersSchema;
