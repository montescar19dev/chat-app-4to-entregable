
const { DataTypes} = require('sequelize')

const db = require('../utils/database')

  const Conversations = db.define('conversations', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    profile_image: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    is_group: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });

module.exports = Conversations

