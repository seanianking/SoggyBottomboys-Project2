module.exports = function(sequelize, DataTypes) {

    const participants = sequelize.define("participants", {
        first_name: {
            Type:DataTypes.STRING,
        },
        last_name: {
            Type:DataTypes.STRING,
        },
        age:{
            Type: DataTypes.INT,
        },
        position: {
            Type: DataTypes.STRING,
        },
       
    //TIMESTAMPS
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    })
    return participants;
    };


    // CREATE TABLE participants(
    //     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    //     first_name VARCHAR(50) NOT NULL,
    //     last_name VARCHAR(50) NOT NULL,
    //     age INT(3),
    //     position VARCHAR(30)
    //     );