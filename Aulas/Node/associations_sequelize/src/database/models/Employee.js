module.exports = (sequelize, Datatypes) => {
  const Employee = sequelize.define('Employee', {
    id: { 
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: Datatypes.STRING,
    lastName: Datatypes.STRING,
    age: Datatypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de usar createdAt e updatedAt
    tableName: 'Employees',
    underscored: true,
  });
  // métodos de criação de associações hasOne, belongsTo, hasMany, belongsToMany
  // hasOne relacionamento 1:1, hasMany relacionamento 1:N
  Employee.associate = (models) => {
    Employee.hasMany(models.Address,
      { foreignKey: 'employeeId', as: 'addresses'});
  };

  return Employee;
}