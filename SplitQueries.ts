import * as antlr4 from 'antlr4';
import { QuerySeparationGrammarLexer } from './QuerySeparationGrammarLexer';
import { QuerySeparationGrammarParser } from './QuerySeparationGrammarParser';
import { QuerySeparationGrammarListener } from './QuerySeparationGrammarListener';
import { CustomListener } from'./CustomListener';

export const SplitQueries = (input) => {

  const chars = new antlr4.InputStream(input);
  const lexer = new QuerySeparationGrammarLexer(chars);
  const tokens  = new antlr4.CommonTokenStream(lexer);
  const parser = new QuerySeparationGrammarParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.queriesText(); // the tree upon which I'll walk

  const result = [];

  const listener = new CustomListener(result); // custom listener builds on the empty results array
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  return listener.result; // this function returns the start and stop indices.
};
