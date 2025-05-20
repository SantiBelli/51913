---TPanalizador---

GRAMATICA PEDIDA:
-<programa> ::= { <instrucción> }+
-<instrucción> ::= <decision>
-<decision> ::= 'si' <condición> 'entonces' '{' { <sentencia>} '}' ['sino' '{' { <sentencia>} '}']
-<sentencia> ::= { <salida> }+ | <terminar>
-<salida> ::= 'imprimir' '('<cadena> ')' ';'
-<terminar> ::= 'salir' ';'
-<condición> ::= 'verdadero' | 'falso'
-<cadena> ::= '"" {<carácter>} """"
-<carácter> ::= <letra> | <digito> | <simbolo>
-<letra> ::= 'a' | 'b' | ... | 'z' | 'A' | 'B' | ... | 'Z'
-<digito> ::= '0' | '1' | ... | '9' 
<simbolo> ::= '.' | ',' | '!' | '?' | ':' | ';'


COMO EJECUTAR:

-clonar archivo: git clone github.com/SantiBelli/51913.git
-en la Terminal para probar ejemplos:
node index.js (aparecerá Ingresar Cadena:)

EJEMPLO:
si verdadero entonces { imprimir("Hola mundo"); salir; }
debería aparecer:
Tabla de Tokens y Lexemas:
--------------------------------------------------
| Lexema         | Token                         |
--------------------------------------------------
| si             | SI                            |
| verdadero      | VERDADERO                     |
| entonces       | ENTONCES                      |
| {              | LBRACE                        |
| imprimir       | IMPRIMIR                      |
| (              | LPAREN                        |
| "Hola mundo"   | CADENA                        |
| )              | RPAREN                        |
| ;              | SEMI                          |
| salir          | SALIR                         |
| ;              | SEMI                          |
| }              | RBRACE                        |
--------------------------------------------------

Entrada válida.
Árbol de derivación: (programa (instruccion (decision si (condicion verdadero) entonces { (sentencia (salida imprimir ( (cadena "Hola mundo") ) ;) (terminar salir ;)) })))
programa
  instruccion
    decision
      si
      condicion
        verdadero
      entonces
      {
      sentencia
        salida
          imprimir
          (
          cadena
            "Hola mundo"
          )
          ;
        terminar
          salir
          ;
      }

