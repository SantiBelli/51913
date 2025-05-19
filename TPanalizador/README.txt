-- Analizador de TP --

Este proyecto implementa un analizador léxico y sintáctico en Node.js usando ANTLR4 , basado en
 una gramática simple que reconoce instrucciones de control de flujo como si,, sinoy imprimir.salir

-Gramática

La gramática TPanalizador.g4define el siguiente lenguaje:

Instrucciones de decisión condicional ( si, sino) con bloques entre llaves
Oraciones de salida ( imprimir("texto");)
Frases de finalización ( salir;)
Condiciones lógicas ( verdadero, falso)
Requisitos

Node.js (v14 o superior)
Compatible con ANTLR 4.13 o
-Instalación

Clonar el repositorio cd 51913/TPanalizador
-Ejecución del analizador: 
 Puedes ejecutar el analizador pasándole un archivo de entrada como argumento:
  node index.js ../ejemplo/