module.exports = function(sequelize, DataTypes) {

const users = sequelize.define("users", {
    Email: {
        type:DataTypes.STRING,
        validate:{
            isEmail: true,
        }, 
        unique: {
            args: true,
            msg: 'Email address already in use!'
        },
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min: 8,
        }
    },
   
//TIMESTAMPS
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
})
return users;
};
// CREATE TABLE users(
// 	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
// 	user_name VARCHAR(80) NOT NULL,
//     password VARCHAR(100) NOT NULL
// );