module.exports = function(sequelize) {
  const UsersLeagues = sequelize.define("UsersLeagues", {
    // admin: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false
    // }
  });
  UsersLeagues.associate = models => {
    UsersLeagues.belongsTo(models.Users);
    UsersLeagues.belongsTo(models.League);
    // UsersLeagues.belongsTo(models.Participants);
  };
  return UsersLeagues;
};

// CREATE TABLE users_leagues(
//     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     user INT NOT NULL REFERENCES users(id),
//     league INT NOT NULL REFERENCES league(id)
//     );
