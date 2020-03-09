module.exports = function(sequelize, DataTypes) {

    var League = sequelize.define("League", {
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
       
    //TIMESTAMPS
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    })
    League.associate = (models) => {
        League.hasMany(models.Announcement, {
            onDelete: "CASCADE"
        });
    }
    return League;
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