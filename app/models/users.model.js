module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define("users", {

    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    phone_number: {
      type: Sequelize.STRING
    },
    employee_id_number: {
      type: Sequelize.BIGINT
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },

    is_admin: {
      type: Sequelize.BOOLEAN
    },
  });

  return users;
};
