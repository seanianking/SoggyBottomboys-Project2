const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  const Users = sequelize.define("Users", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: {
        args: true,
        msg: "Email address already in use!"
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8
      }
    },

    //TIMESTAMPS
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });
  Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  Users.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return Users;
};
// CREATE TABLE users(
// 	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
// 	user_name VARCHAR(80) NOT NULL,
//     password VARCHAR(100) NOT NULL
// );
