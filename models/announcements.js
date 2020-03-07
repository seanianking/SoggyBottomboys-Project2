module.exports = function(sequelize, DataTypes) {

    const announcement = sequelize.define("announcement", {
        announcement: {
            Type: DataTypes.STRING,
            allowNull:false,
        },
        type_of_event: {
            Type: DataTypes.STRING,
            allowNull: false,
        },
        league: {
            Type: DataTypes.INT,
            allowNull: false,
        },
       
    //TIMESTAMPS
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    })
    announcement.associate = (models) => {
        announcement.belongsTo(models.league);
    };
    return announcement;
    };





    // CREATE TABLE announce(
    //     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    //     announcement VARCHAR(250) NOT NULL,
    //     league INT NOT NULL REFERENCES league(id)
    // );