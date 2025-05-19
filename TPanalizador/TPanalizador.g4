grammar TPanalizador;

// Reglas del parser
programa
    : instruccion+ ;

instruccion
    : decision ;

decision
    : SI condicion ENTONCES LBRACE sentencia+ RBRACE (SINO LBRACE sentencia+ RBRACE)? ;

sentencia
    : salida+ terminar ;

salida
    : IMPRIMIR LPAREN cadena RPAREN SEMI ;

terminar
    : SALIR SEMI ;

condicion
    : VERDADERO
    | FALSO ;

cadena
    : CADENA ;

// Reglas del lexer
CADENA
    : '"' (~[\u0022\r\n])* '"' ; // <--- Acepta texto con espacios, números y símbolos


// Palabras clave
SI        : 'si' ;
ENTONCES  : 'entonces' ;
SINO      : 'sino' ;
VERDADERO : 'verdadero' ;
FALSO     : 'falso' ;
IMPRIMIR  : 'imprimir' ;
SALIR     : 'salir' ;

// Símbolos
LPAREN : '(' ;
RPAREN : ')' ;
LBRACE : '{' ;
RBRACE : '}' ;
SEMI   : ';' ;

// Ignorar espacios en blanco
WS : [ \t\r\n]+ -> skip ;


