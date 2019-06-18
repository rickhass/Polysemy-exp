/**
* adaptation of config.js from jhamrick
* Configuration for Beaty, Kenett, Hass, & Schacter FAN effect
****/
// object to hold experiment phases
var EXPERIMENT = Object.freeze({
    practice: 0,
    test: 1,
    length: 2
});

// object to hold trial order
var TRIAL = Object.freeze({
    prompton: 0,
    responding: 1,
    promptoff: 2,
    length: 3
});

// configuration object for the experiment

var CIGconfig = function(condition, counterbalance, timelimit) {

  this.condition = condition;
  this.counterbalance = counterbalance;

  this.fade = 200;

  this.debug = true; // set to false for actual run

  this.instructions = [
    "instructions/instruct-1.html",
    "instructions/instruct-2.html",
    "instructions/instruct-3.html"
  ];

  this.pages = [
        "trial.html",
        "postquestionnaire.html",
        "thanks-mturksubmit.html"
      ];

  this.block = new Object();
  this.block[EXPERIMENT.practice] = ["instruct-practice"];
  this.block[EXPERIMENT.test] = ["instruct-test"];

  this.promptlist = new Object();
  this.promptlist[EXPERIMENT.practice] = ["Name as many COLORS as you can"];
  this.promptlist[EXPERIMENT.test] = _.shuffle([
        "Word1","Word2","Word3","Word4","Word5","Word6","Word7","Word8"
      ]);

  this.timelimit = timelimit; // in milliseconds

  //this.rest = 5000; // break time between trials in milliseconds, depricated

};
