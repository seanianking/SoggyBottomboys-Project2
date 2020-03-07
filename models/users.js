import { Sequelize } from ".";

module.exports = function(sequelize, DataTypes) {

const users = sequelize.define("users", {
    Email: {
        Type:Sequelize.STRING,
        validate:{
            isEmail: true,
            notIn: [["users"]],
        }, 
        unique: {
            args: true,
            msg: 'Email address already in use!'
        },
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
return users;
};
// CREATE TABLE users(
// 	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
// 	user_name VARCHAR(80) NOT NULL,
//     password VARCHAR(100) NOT NULL
// );