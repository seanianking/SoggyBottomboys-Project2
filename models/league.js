module.exports = function(sequelize, DataTypes) {

    const league = sequelize.define("league", {
        league: {
            Type:Sequelize.STRING,
            validate:{
                notNull: true,
            },        
        },
        sport:{
            type: Sequelize.STRING,
        },
        age_range:{
            Type: Sequelize.INT,
            allowNull: false,
        },
        city: {
            Type: Sequelize.STRING,
            allowNull: false,
        },
        state: {
            Type: Sequelize.STRING,
            allowNull: false,
        },
        location: {
            Type: Sequelize.STRING,
            allowNull: false,
        },
        announcement: {
            Type: Sequelize.INT,
        },
       
    //TIMESTAMPS
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    })
    league.associate = (models) => {
        league.belongsTo(models.announcements);
    }
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