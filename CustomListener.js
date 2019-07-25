var QuerySeparationGrammarListener = require('./QuerySeparationGrammarListener').QuerySeparationGrammarListener;

var CustomListener = function(result) {
  this.result = result;
  QuerySeparationGrammarListener.call(this); // inherit default listener
  return this;
};

// continue inheriting default listener
CustomListener.prototype = Object.create(QuerySeparationGrammarListener.prototype);
CustomListener.prototype.constructor = CustomListener;

// override default listener behavior
CustomListener.prototype.exitStatement = function(ctx) {
  this.result.push([ctx.start.start, ctx.stop.stop]); // storing the start and stop indices of every statement
};



exports.CustomListener = CustomListener;
