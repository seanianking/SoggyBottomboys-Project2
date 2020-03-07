module.exports = function(sequelize, DataTypes) {

    const users_leagues = sequelize.define("users_leagues", {
        users: {
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        leagues:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        admin:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
        },
    })
    users_leagues.associate = (models) => {
        users_leagues.belongsTo(models.users);
        users_leagues.belongsTo(models.league);
    };
        return users_leagues;
    };

// CREATE TABLE users_leagues(
//     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     user INT NOT NULL REFERENCES users(id),
//     league INT NOT NULL REFERENCES league(id)
//     );