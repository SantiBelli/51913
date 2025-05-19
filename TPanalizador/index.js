import TPanalizadorLexer from "./generated/TPanalizadorLexer.js";
import TPanalizadorParser from "./generated/TPanalizadorParser.js"; 
import CustomTPanalizadorVisitor from "./CustomTPanalizadorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;
    const args = process.argv.slice(2);
    if (args.length > 0) {
        try {
            input = fs.readFileSync(args[0], 'utf8');
        } catch (err) {
            console.error("No se pudo leer archivo:", err.message);
            process.exit(1);
        }
    } else {
        input = await leerCadena();
    }
    procesarEntrada(input);
}

function procesarEntrada(input) {
    const inputStream = CharStreams.fromString(input);
    const lexer = new TPanalizadorLexer(inputStream);
    
    lexer.removeErrorListeners();
    lexer.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            console.error(`Error léxico en línea ${line}, columna ${column}: ${msg}`);
        }
    });

    const tokens = lexer.getAllTokens();

    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");
    for (let token of tokens) {
        const tokenType = TPanalizadorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------"); 

    // Para poder usar los tokens otra vez, recargamos lexer y parser
    const inputStream2 = CharStreams.fromString(input);
    const lexer2 = new TPanalizadorLexer(inputStream2);
    lexer2.removeErrorListeners();
    lexer2.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            console.error(`Error léxico en línea ${line}, columna ${column}: ${msg}`);
        }
    });

    const tokenStream = new CommonTokenStream(lexer2);
    const parser = new TPanalizadorParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            console.error(`Error sintáctico en línea ${line}, columna ${column}: ${msg}`);
        }
    });

    const tree = parser.programa();

    if (parser._syntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        const visitor = new CustomTPanalizadorVisitor();
        function imprimirArbol(ctx, nivel = 0) {
    const indent = '  '.repeat(nivel);
    console.log(`${indent}${ctx.parser.ruleNames[ctx.ruleIndex] || ctx.getText()}`);
    for (let i = 0; i < ctx.getChildCount(); i++) {
        const hijo = ctx.getChild(i);
        if (hijo.ruleIndex !== undefined) {
            imprimirArbol(hijo, nivel + 1);
        } else {
            console.log(`${indent}  ${hijo.getText()}`);
        }
    }
}

// Luego
imprimirArbol(tree);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();