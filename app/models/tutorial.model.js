module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("staffapp_generalactivities", {

    docket_no: {
      type: Sequelize.STRING
    },
    account_no: {
      type: Sequelize.STRING
    },
    product: {
      type: Sequelize.STRING
    },
    segment: {
      type: Sequelize.STRING
    },
    datetime: {
      type: Sequelize.DATE
    },
    activity: {
      type: Sequelize.STRING
    },
    customer_name: {
      type: Sequelize.STRING
    },
    remarks: {
      type: Sequelize.STRING
    }

  });

  return Tutorial;
};
