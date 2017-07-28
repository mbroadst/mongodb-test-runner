'use strict';

var TravisFilter = function(name) {
  // console.dir(process.env)
  name = name || 'TRAVIS_JOB_ID';
  
  // Get environmental variables that are known
  this.filter = function(test) {
    if (!test.metadata) return false;
    if (!test.metadata.ignore) return false;
    if (!test.metadata.ignore.travis) return false;
    if (process.env[name] !== null && test.metadata.ignore.travis === true) return true;
    return false;
  };
};

module.exports = TravisFilter;