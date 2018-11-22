'use strict'
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Contact.associate = (models) => {
    Contact.hasMany(models.ContactDetails, {
      foreignKey: 'contactId',
      as: 'contactDetails'
    })
  }
  return Contact
}
