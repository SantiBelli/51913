// Generated from c:/Users/santi/ssl-antlr-calculator/TPanalizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,14,103,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,1,0,1,0,5,0,32,8,0,10,0,12,0,35,9,0,1,0,1,0,1,1,1,1,1,1,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,
1,12,1,13,4,13,98,8,13,11,13,12,13,99,1,13,1,13,0,0,14,1,1,3,2,5,3,7,4,9,
5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,1,0,2,3,0,10,10,13,13,
34,34,3,0,9,10,13,13,32,32,104,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,
19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,1,29,1,0,
0,0,3,38,1,0,0,0,5,41,1,0,0,0,7,50,1,0,0,0,9,55,1,0,0,0,11,65,1,0,0,0,13,
71,1,0,0,0,15,80,1,0,0,0,17,86,1,0,0,0,19,88,1,0,0,0,21,90,1,0,0,0,23,92,
1,0,0,0,25,94,1,0,0,0,27,97,1,0,0,0,29,33,5,34,0,0,30,32,8,0,0,0,31,30,1,
0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,35,33,1,0,
0,0,36,37,5,34,0,0,37,2,1,0,0,0,38,39,5,115,0,0,39,40,5,105,0,0,40,4,1,0,
0,0,41,42,5,101,0,0,42,43,5,110,0,0,43,44,5,116,0,0,44,45,5,111,0,0,45,46,
5,110,0,0,46,47,5,99,0,0,47,48,5,101,0,0,48,49,5,115,0,0,49,6,1,0,0,0,50,
51,5,115,0,0,51,52,5,105,0,0,52,53,5,110,0,0,53,54,5,111,0,0,54,8,1,0,0,
0,55,56,5,118,0,0,56,57,5,101,0,0,57,58,5,114,0,0,58,59,5,100,0,0,59,60,
5,97,0,0,60,61,5,100,0,0,61,62,5,101,0,0,62,63,5,114,0,0,63,64,5,111,0,0,
64,10,1,0,0,0,65,66,5,102,0,0,66,67,5,97,0,0,67,68,5,108,0,0,68,69,5,115,
0,0,69,70,5,111,0,0,70,12,1,0,0,0,71,72,5,105,0,0,72,73,5,109,0,0,73,74,
5,112,0,0,74,75,5,114,0,0,75,76,5,105,0,0,76,77,5,109,0,0,77,78,5,105,0,
0,78,79,5,114,0,0,79,14,1,0,0,0,80,81,5,115,0,0,81,82,5,97,0,0,82,83,5,108,
0,0,83,84,5,105,0,0,84,85,5,114,0,0,85,16,1,0,0,0,86,87,5,40,0,0,87,18,1,
0,0,0,88,89,5,41,0,0,89,20,1,0,0,0,90,91,5,123,0,0,91,22,1,0,0,0,92,93,5,
125,0,0,93,24,1,0,0,0,94,95,5,59,0,0,95,26,1,0,0,0,96,98,7,1,0,0,97,96,1,
0,0,0,98,99,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,101,1,0,0,0,101,102,
6,13,0,0,102,28,1,0,0,0,3,0,33,99,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class analizadorLexer extends antlr4.Lexer {

    static grammarFileName = "TPanalizador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, "'si'", "'entonces'", "'sino'", "'verdadero'", 
                         "'falso'", "'imprimir'", "'salir'", "'('", "')'", 
                         "'{'", "'}'", "';'" ];
	static symbolicNames = [ null, "CADENA", "SI", "ENTONCES", "SINO", "VERDADERO", 
                          "FALSO", "IMPRIMIR", "SALIR", "LPAREN", "RPAREN", 
                          "LBRACE", "RBRACE", "SEMI", "WS" ];
	static ruleNames = [ "CADENA", "SI", "ENTONCES", "SINO", "VERDADERO", "FALSO", 
                      "IMPRIMIR", "SALIR", "LPAREN", "RPAREN", "LBRACE", 
                      "RBRACE", "SEMI", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

analizadorLexer.EOF = antlr4.Token.EOF;
analizadorLexer.CADENA = 1;
analizadorLexer.SI = 2;
analizadorLexer.ENTONCES = 3;
analizadorLexer.SINO = 4;
analizadorLexer.VERDADERO = 5;
analizadorLexer.FALSO = 6;
analizadorLexer.IMPRIMIR = 7;
analizadorLexer.SALIR = 8;
analizadorLexer.LPAREN = 9;
analizadorLexer.RPAREN = 10;
analizadorLexer.LBRACE = 11;
analizadorLexer.RBRACE = 12;
analizadorLexer.SEMI = 13;
analizadorLexer.WS = 14;



