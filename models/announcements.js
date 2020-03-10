module.exports = function(sequelize, DataTypes) {

    var Announcement = sequelize.define("Announcement", {
        announcement_text: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        type_of_event: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        league: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
       
    //TIMESTAMPS
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    })
    Announcement.associate = (models) => {
        Announcement.belongsTo(models.League, {
            foreignKey: {
                allowNull: false,
            }
        });
    };
    return Announcement;
    };





    // CREATE TABLE announce(
    //     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    //     announcement VARCHAR(250) NOT NULL,
    //     league INT NOT NULL REFERENCES league(id)
    // );