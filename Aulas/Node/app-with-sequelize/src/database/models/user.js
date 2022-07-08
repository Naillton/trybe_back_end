const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    phone_num: DataTypes.STRING,
    email: DataTypes.STRING,
    RG: DataTypes.INTEGER,
  });

  return User;
}

module.exports = User;