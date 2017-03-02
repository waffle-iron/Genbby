import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup

  Accounts.onCreateUser(function(options, user) {

    user.first_name = options.first_name;
    user.last_name = user.last_name;
    user.birthdate = options.birthdate;
    user.gender = options.gender;

    // if(user.services.steam)
    // {
    //   Meteor.users.update({_id: Meteor.user()._id}, { $set: { extraField2:"SteamCreated this" } });
    // }
    //
    // if (Meteor.user() != null) {
    //     Meteor.users.update({_id: Meteor.user()._id}, { $set: { 'services.steam.id': user.services.steam.id } });
    //     return Meteor.user();
    // }

    return user;
  });



  process.env.MAIL_URL = "smtp://genbbybot123%40gmail.com:gennbybot123@smtp.gmail.com:465/";
});
