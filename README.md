-- TP Analizador -- 

Este proyecto implementa un analizador léxico y sintáctico en **Node.js** usando **ANTLR4**,
 basado en una gramática simple que reconoce instrucciones de control de 
 flujo como `si`, `sino`, `imprimir` y `salir`.

-Gramática

La gramática `TPanalizador.g4` define el siguiente lenguaje:

- Instrucciones de decisión condicional (`si`, `sino`) con bloques entre llaves
- Sentencias de salida (`imprimir("texto");`)
- Sentencias de finalización (`salir;`)
- Condiciones lógicas (`verdadero`, `falso`)


Requisitos

- Node.js (v14 o superior)
- ANTLR 4.13 o compatible

 Instalación

1. **Clonar el repositorio**
cd 51913/TPanalizador
-Ejecución del analizador:
Puedes ejecutar el analizador escribiendo lo siguiente en la terminal:
node index.js    (aparecera Ingresar Cadena al escribir node index.js)

