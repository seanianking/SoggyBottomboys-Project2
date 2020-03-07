module.exports = function(sequelize, DataTypes) {

    const users_leagues = sequelize.define("users_leagues", {
        users: {
            Type:Sequelize.INT,
            validate:{
                notNull: true,
            },
        },
        leagues:{
            type:Sequelize.INT,
            validate: {
                notNull:true,
            }
        },
        admin:{
            type: Sequelize.BOOLEAN,
            validate: {
                notNull:true,
            }
        },
    })
    users_leagues.associate = (models) => {
        users_leagues.belongsTo(models.users);
        users_leagues.belongsTo(models.league);
    };
        return users_leagues;
    };




    // module.exports = function(sequelize, DataTypes) {
    //     var Depts_Emps = sequelize.define(“Depts_Emps”, {
    //       depEmpFromDate: {
    //         type: DataTypes.DATEONLY,
    //         allowNull: false
    //       },
    //       depEmpToDate: {
    //         type: DataTypes.DATEONLY
    //       }
    //     },
    //     {
    //       paranoid: true
    //     })
    //     Depts_Emps.associate = (models) => {
    //       Depts_Emps.belongsTo(models.Departments);
    //       Depts_Emps.belongsTo(models.Employees);
    //     };
    //       return Depts_Emps;
    //   };

// CREATE TABLE users_leagues(
//     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     user INT NOT NULL REFERENCES users(id),
//     league INT NOT NULL REFERENCES league(id)
//     );