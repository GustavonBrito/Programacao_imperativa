/* Exercicio 1 */


function podeSubir(alturaPessoa,acompanhada){
    if (alturaPessoa > 1.40 && alturaPessoa < 2.00){
    return true
}else if (alturaPessoa < 1.40 && acompanhada){
    return true
}else {
    return false
}
}
podeSubir()

/* ----------------------------------- */

/* Exercicio 2 */

function podeSubir(alturaPessoa,acompanhada){
    if (alturaPessoa > 1.40 && alturaPessoa < 2.00){
    console.log("Acesso autorizado")
}else if (alturaPessoa < 1.40 && acompanhada){
    console.log("Acesso autorizado com acompanhante")
}else {
    console.log("Acesso negado")
}
}

podeSubir()

/* ------------------------------------ */







/* criar função */
/* com dois parametros */
