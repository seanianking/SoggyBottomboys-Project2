module.exports = function(sequelize, DataTypes) {

    const UsersLeagues = sequelize.define("UsersLeagues", {
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
    UsersLeagues.associate = (models) => {
        UsersLeagues.belongsTo(models.Users);
        UsersLeagues.belongsTo(models.League);
    };
        return UsersLeagues;
    };

// CREATE TABLE users_leagues(
//     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     user INT NOT NULL REFERENCES users(id),
//     league INT NOT NULL REFERENCES league(id)
//     );