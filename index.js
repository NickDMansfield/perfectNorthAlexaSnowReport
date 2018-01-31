'use strict'

var APP_ID = 'amzn1.ask.skill.5e4a9fb3-b6e1-48c1-9d6f-61cb66173c97'; //replace with "amzn1.echo-sdk-ams.app.[amzn1.echo-sdk-ams.appamzn1.ask.skill.d0fe50ad-7f5f-4c65-8911-57b75bd1b743]";


var AlexaSkill = require('./AlexaSkill');
const request = require('request');
var parkInfo = {
  weather: 'default weatherz'
};


var IT = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
IT.prototype = Object.create(AlexaSkill.prototype);
IT.prototype.constructor = IT;

IT.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("IT onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

IT.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("IT onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    var speechOutput = "What would you like to know?  Say weather report, hours, or chair information.";
    var repromptText = "Say weather report, hours, or chair information to get information about said topic.";
        response.ask(speechOutput, repromptText);
};

IT.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("IT onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

IT.prototype.intentHandlers = {
    // register custom intent handlers
    WeatherIntent: function (intent, session, response) {
      var speechOutput = parkInfo.weather;
        response.ask(speechOutput, "Awaiting request.");
    },
    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say hello to me!", "You can say hello to me!");
    }
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
          // Create an instance of the IT skill.
          var ff = new IT();
          ff.execute(event, context);
};
