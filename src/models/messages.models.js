const { DataTypes} = require('sequelize')

const db = require('../utils/database')

  const Messages = db.define('messages', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUID,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      participant_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'participants',
          key: 'id',
        },
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'Sended',
      },
    });

module.exports = Messages
