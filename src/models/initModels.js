const Users = require("./users.models");
const Conversations = require("./conversations.models");
const Participants = require("./participants.models");
const Messages = require("./messages.models");

const initModels = () => {
 Users.hasMany(Participants)
  Participants.belongsTo(Users)
  Conversations.hasMany(Participants)
  Participants.belongsTo(Conversations)
  Participants.hasMany(Messages)
  Messages.belongsTo(Participants)

};

module.exports = initModels;
