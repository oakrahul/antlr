// Generated from QuerySeparationGrammar.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0006=\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u0018\n\u0004\f\u0004\u000e",
    "\u0004\u001b\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0005\u0005!\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006\'\n\u0006\f\u0006\u000e\u0006*\u000b\u0006\u0003\u0006",
    "\u0005\u0006-\n\u0006\u0003\u0006\u0005\u00060\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0007\u00076\n\u0007\f\u0007\u000e\u0007",
    "9\u000b\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u00037\u0002\b\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0002\r\u0002\u0003\u0002",
    "\u0005\u0003\u0002==\u0003\u0002))\u0004\u0002\f\f\u000f\u000f\u0002",
    "A\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0003\u000f\u0003\u0002\u0002\u0002\u0005\u0011\u0003\u0002\u0002",
    "\u0002\u0007\u0013\u0003\u0002\u0002\u0002\t \u0003\u0002\u0002\u0002",
    "\u000b\"\u0003\u0002\u0002\u0002\r1\u0003\u0002\u0002\u0002\u000f\u0010",
    "\u0007=\u0002\u0002\u0010\u0004\u0003\u0002\u0002\u0002\u0011\u0012",
    "\n\u0002\u0002\u0002\u0012\u0006\u0003\u0002\u0002\u0002\u0013\u0019",
    "\u0007)\u0002\u0002\u0014\u0018\n\u0003\u0002\u0002\u0015\u0016\u0007",
    ")\u0002\u0002\u0016\u0018\u0007)\u0002\u0002\u0017\u0014\u0003\u0002",
    "\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002",
    "\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002",
    "\u0002\u0002\u001a\u001c\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0007)\u0002\u0002\u001d\b\u0003\u0002\u0002",
    "\u0002\u001e!\u0005\u000b\u0006\u0002\u001f!\u0005\r\u0007\u0002 \u001e",
    "\u0003\u0002\u0002\u0002 \u001f\u0003\u0002\u0002\u0002!\n\u0003\u0002",
    "\u0002\u0002\"#\u0007/\u0002\u0002#$\u0007/\u0002\u0002$(\u0003\u0002",
    "\u0002\u0002%\'\n\u0004\u0002\u0002&%\u0003\u0002\u0002\u0002\'*\u0003",
    "\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002",
    "),\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002+-\u0007\u000f\u0002",
    "\u0002,+\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-/\u0003\u0002",
    "\u0002\u0002.0\u0007\f\u0002\u0002/.\u0003\u0002\u0002\u0002/0\u0003",
    "\u0002\u0002\u00020\f\u0003\u0002\u0002\u000212\u00071\u0002\u00022",
    "3\u0007,\u0002\u000237\u0003\u0002\u0002\u000246\u000b\u0002\u0002\u0002",
    "54\u0003\u0002\u0002\u000269\u0003\u0002\u0002\u000278\u0003\u0002\u0002",
    "\u000275\u0003\u0002\u0002\u00028:\u0003\u0002\u0002\u000297\u0003\u0002",
    "\u0002\u0002:;\u0007,\u0002\u0002;<\u00071\u0002\u0002<\u000e\u0003",
    "\u0002\u0002\u0002\n\u0002\u0017\u0019 (,/7\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function QuerySeparationGrammarLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

QuerySeparationGrammarLexer.prototype = Object.create(antlr4.Lexer.prototype);
QuerySeparationGrammarLexer.prototype.constructor = QuerySeparationGrammarLexer;

Object.defineProperty(QuerySeparationGrammarLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

QuerySeparationGrammarLexer.EOF = antlr4.Token.EOF;
QuerySeparationGrammarLexer.T__0 = 1;
QuerySeparationGrammarLexer.CHAR = 2;
QuerySeparationGrammarLexer.STRING = 3;
QuerySeparationGrammarLexer.COMMENT = 4;

QuerySeparationGrammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

QuerySeparationGrammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

QuerySeparationGrammarLexer.prototype.literalNames = [ null, "';'" ];

QuerySeparationGrammarLexer.prototype.symbolicNames = [ null, null, "CHAR", 
                                                        "STRING", "COMMENT" ];

QuerySeparationGrammarLexer.prototype.ruleNames = [ "T__0", "CHAR", "STRING", 
                                                    "COMMENT", "SIMPLE_COMMENT", 
                                                    "BRACKETED_COMMENT" ];

QuerySeparationGrammarLexer.prototype.grammarFileName = "QuerySeparationGrammar.g4";



exports.QuerySeparationGrammarLexer = QuerySeparationGrammarLexer;

