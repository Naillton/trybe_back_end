module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
      id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      city: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
      employeeId: { 
        type: DataTypes.INTEGER,
        foreignKey: true 
      },
    },
    {
      timestamps: false,
      tableName: 'Addresses',
      underscored: true,
    });
  
    Address.associate = (models) => {
      // belongsTo => pertence a, belongsToMany => pertence a muitos
      Address.belongsTo(models.Employee,
        { foreignKey: 'employeeId', as: 'employees' });
    };
  
    return Address;
  };