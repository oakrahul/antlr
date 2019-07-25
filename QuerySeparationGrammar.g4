/* 
 * This file is the grammar for a single rule/concept. The convention we can follow is that within
 * our lib/antlr directory, we will have a separate directory for each rule/concept. So this
 * queryseparation directory contains the grammar defining the rules of this concept (this g4
 * file is the grammar file), as well as the generated files in the _genfiles folder, and finally
 * the CustomListener.js and any other files that export js functions to our app that can parse
 * this grammar.
 *
 * When making a new rule, first I write this antlr grammar file. grep our C++ code for 'g4' to 
 * see the sql grammar our backend uses as an example of antlr grammar. The g4 file defines the 
 * grammar rules.
 *
 * Next, I make the _genfiles directory and run this command to generate the files:
 *   antlr4 -Dlanguage=JavaScript QuerySeparationGrammar.g4 -o _genfiles
 * In order to run this command, you first need antlr on your local. Try:
 *   sudo apt-get install antlr4 - for sanbox
 *   https://www.antlr.org/index.html - instructions for other machines
 *
 * The generated files, include Lexer, Parser, and Listener. You can see in SplitQueries.js how
 * these files are used to build a tree, and walk on it (with Listener). The generated Listener
 * should be inherited from when you write a custom Listener. A custom lister js file can specify
 * the entrance and exit functions that will be executed when walking over the tree.
 *
 * Finally, write a js script that imports all these files, generates the tree and walks over
 * using the custom listener. To start, you can run the file using node in your terminal, and
 * print out ctx in your listener functions to see what you get. Essentially these ctx objects
 * contain information about the node you are entering/exitting.
 *
 * When you are ready, you can turn your script into an exportable class/function to use in the
 * app!
 *
 * Additional Resources:
 *   https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md
 *   https://tomassetti.me/antlr-mega-tutorial/
 *
 * Rahul Patel wrote this code, so please feel free to ask me questions.
 */

grammar QuerySeparationGrammar;

queriesText 
    : statement* EOF
    ;

statement 
    : ';'* (CHAR | STRING | COMMENT)+ ';'*
    ;

CHAR 
    : ~';' 
    ;

STRING
    : '\'' ( ~'\'' | '\'\'' )* '\''
    ;

COMMENT
    : SIMPLE_COMMENT | BRACKETED_COMMENT 
    ;

fragment SIMPLE_COMMENT
    : '--' ~[\r\n]* '\r'? '\n'?
    ;

fragment BRACKETED_COMMENT
    : '/*' .*? '*/'
    ;