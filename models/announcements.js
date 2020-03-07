module.exports = function(sequelize, DataTypes) {

    const users = sequelize.define("users", {
        announcement: {
            Type: Sequelize.STRING,
            allowNull: false,
        },
        league: {
            Type: Sequelize.INT,
            allowNull: false,
        },
       
    //TIMESTAMPS
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    })
    league.associate = (models) => {
        league.belongsTo(models.announcements);
    };
    return league;
    };





    // CREATE TABLE announce(
    //     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    //     announcement VARCHAR(250) NOT NULL,
    //     league INT NOT NULL REFERENCES league(id)
    // );