const { Book, User } = require('../database/models');

const UsersService = {
  async getById(id) {
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });
    return user;
  }
}

module.exports = UsersService;
