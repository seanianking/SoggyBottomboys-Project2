module.exports = function(sequelize, DataTypes) {

    const league = sequelize.define("league", {
        league_name: {
            type:DataTypes.STRING,
            allowNull:false,       
        },
        sport:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        age_range:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        announcement: {
            type: DataTypes.INTEGER,
        },
       
    //TIMESTAMPS
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    })
    league.associate = (models) => {
        league.hasMany(models.announcements, {
            onDelete: "cascade"
        });
    }
    return league;
    };







// CREATE TABLE league(
// 	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     league_name VARCHAR(30) NOT NULL,
//     sport VARCHAR(30) NOT NULL,
//     age_range INT(10) NOT NULL,
//     city VARCHAR(50),
//     state VARCHAR(30),
//     location VARCHAR(200),
//     announcements INT NOT NULL REFERENCES announce(id)
// );