// Generated from QuerySeparationGrammar.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var QuerySeparationGrammarListener = require('./QuerySeparationGrammarListener').QuerySeparationGrammarListener;
var grammarFileName = "QuerySeparationGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0006 \u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0007",
    "\u0002\b\n\u0002\f\u0002\u000e\u0002\u000b\u000b\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0007\u0003\u0010\n\u0003\f\u0003\u000e\u0003\u0013",
    "\u000b\u0003\u0003\u0003\u0006\u0003\u0016\n\u0003\r\u0003\u000e\u0003",
    "\u0017\u0003\u0003\u0007\u0003\u001b\n\u0003\f\u0003\u000e\u0003\u001e",
    "\u000b\u0003\u0003\u0003\u0002\u0002\u0004\u0002\u0004\u0002\u0003\u0003",
    "\u0002\u0004\u0006\u0002!\u0002\t\u0003\u0002\u0002\u0002\u0004\u0011",
    "\u0003\u0002\u0002\u0002\u0006\b\u0005\u0004\u0003\u0002\u0007\u0006",
    "\u0003\u0002\u0002\u0002\b\u000b\u0003\u0002\u0002\u0002\t\u0007\u0003",
    "\u0002\u0002\u0002\t\n\u0003\u0002\u0002\u0002\n\f\u0003\u0002\u0002",
    "\u0002\u000b\t\u0003\u0002\u0002\u0002\f\r\u0007\u0002\u0002\u0003\r",
    "\u0003\u0003\u0002\u0002\u0002\u000e\u0010\u0007\u0003\u0002\u0002\u000f",
    "\u000e\u0003\u0002\u0002\u0002\u0010\u0013\u0003\u0002\u0002\u0002\u0011",
    "\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012",
    "\u0015\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0014",
    "\u0016\t\u0002\u0002\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016",
    "\u0017\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017",
    "\u0018\u0003\u0002\u0002\u0002\u0018\u001c\u0003\u0002\u0002\u0002\u0019",
    "\u001b\u0007\u0003\u0002\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b",
    "\u001e\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c",
    "\u001d\u0003\u0002\u0002\u0002\u001d\u0005\u0003\u0002\u0002\u0002\u001e",
    "\u001c\u0003\u0002\u0002\u0002\u0006\t\u0011\u0017\u001c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'" ];

var symbolicNames = [ null, null, "CHAR", "STRING", "COMMENT" ];

var ruleNames =  [ "queriesText", "statement" ];

function QuerySeparationGrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

QuerySeparationGrammarParser.prototype = Object.create(antlr4.Parser.prototype);
QuerySeparationGrammarParser.prototype.constructor = QuerySeparationGrammarParser;

Object.defineProperty(QuerySeparationGrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

QuerySeparationGrammarParser.EOF = antlr4.Token.EOF;
QuerySeparationGrammarParser.T__0 = 1;
QuerySeparationGrammarParser.CHAR = 2;
QuerySeparationGrammarParser.STRING = 3;
QuerySeparationGrammarParser.COMMENT = 4;

QuerySeparationGrammarParser.RULE_queriesText = 0;
QuerySeparationGrammarParser.RULE_statement = 1;


function QueriesTextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QuerySeparationGrammarParser.RULE_queriesText;
    return this;
}

QueriesTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueriesTextContext.prototype.constructor = QueriesTextContext;

QueriesTextContext.prototype.EOF = function() {
    return this.getToken(QuerySeparationGrammarParser.EOF, 0);
};

QueriesTextContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

QueriesTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof QuerySeparationGrammarListener ) {
        listener.enterQueriesText(this);
	}
};

QueriesTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof QuerySeparationGrammarListener ) {
        listener.exitQueriesText(this);
	}
};




QuerySeparationGrammarParser.QueriesTextContext = QueriesTextContext;

QuerySeparationGrammarParser.prototype.queriesText = function() {

    var localctx = new QueriesTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, QuerySeparationGrammarParser.RULE_queriesText);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QuerySeparationGrammarParser.T__0) | (1 << QuerySeparationGrammarParser.CHAR) | (1 << QuerySeparationGrammarParser.STRING) | (1 << QuerySeparationGrammarParser.COMMENT))) !== 0)) {
            this.state = 4;
            this.statement();
            this.state = 9;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 10;
        this.match(QuerySeparationGrammarParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QuerySeparationGrammarParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.CHAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QuerySeparationGrammarParser.CHAR);
    } else {
        return this.getToken(QuerySeparationGrammarParser.CHAR, i);
    }
};


StatementContext.prototype.STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QuerySeparationGrammarParser.STRING);
    } else {
        return this.getToken(QuerySeparationGrammarParser.STRING, i);
    }
};


StatementContext.prototype.COMMENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QuerySeparationGrammarParser.COMMENT);
    } else {
        return this.getToken(QuerySeparationGrammarParser.COMMENT, i);
    }
};


StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QuerySeparationGrammarListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QuerySeparationGrammarListener ) {
        listener.exitStatement(this);
	}
};




QuerySeparationGrammarParser.StatementContext = StatementContext;

QuerySeparationGrammarParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, QuerySeparationGrammarParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===QuerySeparationGrammarParser.T__0) {
            this.state = 12;
            this.match(QuerySeparationGrammarParser.T__0);
            this.state = 17;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 19; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 18;
        		_la = this._input.LA(1);
        		if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QuerySeparationGrammarParser.CHAR) | (1 << QuerySeparationGrammarParser.STRING) | (1 << QuerySeparationGrammarParser.COMMENT))) !== 0))) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        			this._errHandler.reportMatch(this);
        		    this.consume();
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 21; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 26;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 23;
                this.match(QuerySeparationGrammarParser.T__0); 
            }
            this.state = 28;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.QuerySeparationGrammarParser = QuerySeparationGrammarParser;
