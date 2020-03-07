module.exports = function(sequelize, DataTypes) {

    const league = sequelize.define("league", {
        league: {
            Type:DataTypes.STRING,
            validate:{
                notNull: true,
            },        
        },
        sport:{
            type: DataTypes.STRING,
        },
        age_range:{
            Type: DataTypes.INT,
            allowNull: false,
        },
        city: {
            Type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            Type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            Type: DataTypes.STRING,
            allowNull: false,
        },
        announcement: {
            Type: DataTypes.INT,
        },
       
    //TIMESTAMPS
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    })
    league.associate = (models) => {
        league.belongsTo(models.announcements);
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