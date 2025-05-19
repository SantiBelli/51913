// Generated from c:/Users/santi/Desktop/PRUEBA ANALIZADOR/TPanalizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TPanalizadorListener from './TPanalizadorListener.js';
import TPanalizadorVisitor from './TPanalizadorVisitor.js';

const serializedATN = [4,1,14,65,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,1,2,1,2,1,2,
1,2,1,2,4,2,29,8,2,11,2,12,2,30,1,2,1,2,1,2,1,2,4,2,37,8,2,11,2,12,2,38,
1,2,1,2,3,2,43,8,2,1,3,4,3,46,8,3,11,3,12,3,47,1,3,1,3,1,4,1,4,1,4,1,4,1,
4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,5,
6,61,0,17,1,0,0,0,2,21,1,0,0,0,4,23,1,0,0,0,6,45,1,0,0,0,8,51,1,0,0,0,10,
57,1,0,0,0,12,60,1,0,0,0,14,62,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,
1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,21,22,3,4,2,0,22,3,1,0,
0,0,23,24,5,2,0,0,24,25,3,12,6,0,25,26,5,3,0,0,26,28,5,11,0,0,27,29,3,6,
3,0,28,27,1,0,0,0,29,30,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,32,1,0,0,
0,32,42,5,12,0,0,33,34,5,4,0,0,34,36,5,11,0,0,35,37,3,6,3,0,36,35,1,0,0,
0,37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,5,12,0,0,
41,43,1,0,0,0,42,33,1,0,0,0,42,43,1,0,0,0,43,5,1,0,0,0,44,46,3,8,4,0,45,
44,1,0,0,0,46,47,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,50,
3,10,5,0,50,7,1,0,0,0,51,52,5,7,0,0,52,53,5,9,0,0,53,54,3,14,7,0,54,55,5,
10,0,0,55,56,5,13,0,0,56,9,1,0,0,0,57,58,5,8,0,0,58,59,5,13,0,0,59,11,1,
0,0,0,60,61,7,0,0,0,61,13,1,0,0,0,62,63,5,1,0,0,63,15,1,0,0,0,5,19,30,38,
42,47];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TPanalizadorParser extends antlr4.Parser {

    static grammarFileName = "TPanalizador.g4";
    static literalNames = [ null, null, "'si'", "'entonces'", "'sino'", 
                            "'verdadero'", "'falso'", "'imprimir'", "'salir'", 
                            "'('", "')'", "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, "CADENA", "SI", "ENTONCES", "SINO", "VERDADERO", 
                             "FALSO", "IMPRIMIR", "SALIR", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "SEMI", "WS" ];
    static ruleNames = [ "programa", "instruccion", "decision", "sentencia", 
                         "salida", "terminar", "condicion", "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TPanalizadorParser.ruleNames;
        this.literalNames = TPanalizadorParser.literalNames;
        this.symbolicNames = TPanalizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TPanalizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.instruccion();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
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
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TPanalizadorParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.decision();
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
	}



	decision() {
	    let localctx = new DecisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TPanalizadorParser.RULE_decision);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(TPanalizadorParser.SI);
	        this.state = 24;
	        this.condicion();
	        this.state = 25;
	        this.match(TPanalizadorParser.ENTONCES);
	        this.state = 26;
	        this.match(TPanalizadorParser.LBRACE);
	        this.state = 28; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 27;
	            this.sentencia();
	            this.state = 30; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===7);
	        this.state = 32;
	        this.match(TPanalizadorParser.RBRACE);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 33;
	            this.match(TPanalizadorParser.SINO);
	            this.state = 34;
	            this.match(TPanalizadorParser.LBRACE);
	            this.state = 36; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 35;
	                this.sentencia();
	                this.state = 38; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===7);
	            this.state = 40;
	            this.match(TPanalizadorParser.RBRACE);
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
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TPanalizadorParser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 44;
	            this.salida();
	            this.state = 47; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===7);
	        this.state = 49;
	        this.terminar();
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
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TPanalizadorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(TPanalizadorParser.IMPRIMIR);
	        this.state = 52;
	        this.match(TPanalizadorParser.LPAREN);
	        this.state = 53;
	        this.cadena();
	        this.state = 54;
	        this.match(TPanalizadorParser.RPAREN);
	        this.state = 55;
	        this.match(TPanalizadorParser.SEMI);
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
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TPanalizadorParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(TPanalizadorParser.SALIR);
	        this.state = 58;
	        this.match(TPanalizadorParser.SEMI);
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
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TPanalizadorParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TPanalizadorParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(TPanalizadorParser.CADENA);
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
	}


}

TPanalizadorParser.EOF = antlr4.Token.EOF;
TPanalizadorParser.CADENA = 1;
TPanalizadorParser.SI = 2;
TPanalizadorParser.ENTONCES = 3;
TPanalizadorParser.SINO = 4;
TPanalizadorParser.VERDADERO = 5;
TPanalizadorParser.FALSO = 6;
TPanalizadorParser.IMPRIMIR = 7;
TPanalizadorParser.SALIR = 8;
TPanalizadorParser.LPAREN = 9;
TPanalizadorParser.RPAREN = 10;
TPanalizadorParser.LBRACE = 11;
TPanalizadorParser.RBRACE = 12;
TPanalizadorParser.SEMI = 13;
TPanalizadorParser.WS = 14;

TPanalizadorParser.RULE_programa = 0;
TPanalizadorParser.RULE_instruccion = 1;
TPanalizadorParser.RULE_decision = 2;
TPanalizadorParser.RULE_sentencia = 3;
TPanalizadorParser.RULE_salida = 4;
TPanalizadorParser.RULE_terminar = 5;
TPanalizadorParser.RULE_condicion = 6;
TPanalizadorParser.RULE_cadena = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TPanalizadorParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TPanalizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TPanalizadorParser.RULE_instruccion;
    }

	decision() {
	    return this.getTypedRuleContext(DecisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TPanalizadorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DecisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TPanalizadorParser.RULE_decision;
    }

	SI() {
	    return this.getToken(TPanalizadorParser.SI, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ENTONCES() {
	    return this.getToken(TPanalizadorParser.ENTONCES, 0);
	};

	LBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TPanalizadorParser.LBRACE);
	    } else {
	        return this.getToken(TPanalizadorParser.LBRACE, i);
	    }
	};


	RBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TPanalizadorParser.RBRACE);
	    } else {
	        return this.getToken(TPanalizadorParser.RBRACE, i);
	    }
	};


	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	SINO() {
	    return this.getToken(TPanalizadorParser.SINO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.enterDecision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.exitDecision(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TPanalizadorVisitor ) {
	        return visitor.visitDecision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TPanalizadorParser.RULE_sentencia;
    }

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TPanalizadorVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TPanalizadorParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(TPanalizadorParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(TPanalizadorParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(TPanalizadorParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(TPanalizadorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TPanalizadorVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TPanalizadorParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(TPanalizadorParser.SALIR, 0);
	};

	SEMI() {
	    return this.getToken(TPanalizadorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TPanalizadorVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TPanalizadorParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(TPanalizadorParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(TPanalizadorParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TPanalizadorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TPanalizadorParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(TPanalizadorParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TPanalizadorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TPanalizadorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TPanalizadorParser.ProgramaContext = ProgramaContext; 
TPanalizadorParser.InstruccionContext = InstruccionContext; 
TPanalizadorParser.DecisionContext = DecisionContext; 
TPanalizadorParser.SentenciaContext = SentenciaContext; 
TPanalizadorParser.SalidaContext = SalidaContext; 
TPanalizadorParser.TerminarContext = TerminarContext; 
TPanalizadorParser.CondicionContext = CondicionContext; 
TPanalizadorParser.CadenaContext = CadenaContext; 
