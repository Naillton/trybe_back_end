module.exports = (sequelize, _DataTypes) => {
    const UserBook = sequelize.define('UserBook',
      {},
      { timestamps: false },
    );
  
    UserBook.associate = (models) => {
      // ids belongToMany realcionamentos N:N
      models.Book.belongsToMany(models.User, {
        as: 'users',
        through: UserBook,
        foreignKey: 'book_id',
        otherKey: 'user_id',
      });
      models.User.belongsToMany(models.Book, {
        as: 'books',
        through: UserBook,
        foreignKey: 'user_id',
        otherKey: 'book_id',
      });
      // OBS: foreignKey sempre se refere ao model em que chamamos belongsToMany, enquanto otherKey se refere ao model com o qual estamos criando a associação.
    };
  
    return UserBook;
  };