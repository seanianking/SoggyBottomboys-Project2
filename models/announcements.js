module.exports = function(sequelize, DataTypes) {

    const users = sequelize.define("users", {
        Email: {
            Type:Sequelize.STRING,
               
        },
        password:{
            type: Sequelize.STRING,
            validate:{
                min: 8,
                notNull: true,
            }
        },
       
    //TIMESTAMPS
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    })
    };





    // CREATE TABLE announce(
    //     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    //     announcement VARCHAR(250) NOT NULL,
    //     league INT NOT NULL REFERENCES league(id)
    // );