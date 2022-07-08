const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    phone_num: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'Users',
  }
  );

  return User;
}

module.exports = User;