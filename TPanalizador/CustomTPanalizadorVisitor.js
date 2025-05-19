import TPanalizadorVisitor from './generated/TPanalizadorVisitor.js';

class CustomTPanalizadorVisitor extends TPanalizadorVisitor {
    constructor() {
        super();
        this.finalizado = false;
    }

    // Visita la raíz: programa → instrucción+
    visitPrograma(ctx) {
        for (let instruccion of ctx.instruccion()) {
            if (this.finalizado) break;
            this.visit(instruccion);
        }
        return null;
    }

    // instruccion → decision
    visitInstruccion(ctx) {
        return this.visit(ctx.decision());
    }

    // decision → si condicion entonces { sentencia } [sino { sentencia }]
    visitDecision(ctx) {
        const condicion = this.visit(ctx.condicion());
        if (condicion) {
            const sentencias = ctx.sentencia();
            for (let sentencia of sentencias) {
                if (this.finalizado) break;
                this.visit(sentencia);
            }
        } else if (ctx.SINO()) {
            if (ctx.SINO()) {
    const sinoBloque = ctx.sino() ? ctx.sino().sentencia() : [];  // El bloque sino
    this.visit(sinoBloque);
}
            for (let sentencia of sinoBloque) {
                if (this.finalizado) break;
                this.visit(sentencia);
            }
        }
        return null;
    }

    // sentencia → salida+ terminar
    visitSentencia(ctx) {
        for (let salida of ctx.salida()) {
            if (this.finalizado) break;
            this.visit(salida);
        }
        this.visit(ctx.terminar());
        return null;
    }

    // salida → imprimir ( cadena ) ;
    visitSalida(ctx) {
        const texto = ctx.cadena().getText();
        // Eliminar las comillas (") al principio y final
        const limpio = texto.substring(1, texto.length - 1);
        console.log(`[Salida] ${limpio}`);
        return null;
    }

    // terminar → salir ;
    visitTerminar(ctx) {
        console.log("[Fin del programa]");
        this.finalizado = true;
        return null;
    }

    // condicion → verdadero | falso
    visitCondicion(ctx) {
        return ctx.VERDADERO() !== null;
    }
}

export default CustomTPanalizadorVisitor;
