const { DataTypes} = require('sequelize')

const db = require('../utils/database');
const Users = require('./users.models');

  const Participants = db.define('participants', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUID
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Users, 
            key: 'id'
        }
      },
      conversation_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });

module.exports = Participants
