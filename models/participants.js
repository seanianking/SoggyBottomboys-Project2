module.exports = function(sequelize, DataTypes) {

    const Participants = sequelize.define("Participants", {
        first_name: {
            type:DataTypes.STRING,
        },
        last_name: {
            type:DataTypes.STRING,
        },
        age:{
            type: DataTypes.INTEGER,
        },
        position: {
            type: DataTypes.STRING,
        },
       
    //TIMESTAMPS
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    })
    return Participants;
    };


    // CREATE TABLE participants(
    //     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    //     first_name VARCHAR(50) NOT NULL,
    //     last_name VARCHAR(50) NOT NULL,
    //     age INT(3),
    //     position VARCHAR(30)
    //     );