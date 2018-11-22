'use strict'
module.exports = (sequelize, DataTypes) => {
  const ContactDetails = sequelize.define('ContactDetails', {
    nickname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    number: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
  ContactDetails.associate = (models) => {
    ContactDetails.belongsTo(models.Contact, {
      foreignKey: 'contactId',
      onDelete: 'CASCADE'
    })
  }
  return ContactDetails
}
