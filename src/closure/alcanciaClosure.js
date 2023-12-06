function alcancia (monedas) {
    let guardarMonedas = 0;
    guardarMonedas += monedas;

    console.log(`El dinero en la alcancia es de: $${guardarMonedas}`);

}

alcancia(9);
alcancia(12);

// With closures

function alcanciaMejorada () {
    let guardarMonedas = 0;
    
    function contarMonedas(monedas) {
        guardarMonedas += monedas;
        console.log(`El dinero guardado en la alcancia mejorada es de: $${guardarMonedas}`);
    }

    return contarMonedas;

}

const miAlcanciaMejorada = alcanciaMejorada();

miAlcanciaMejorada(9);
miAlcanciaMejorada(81);
miAlcanciaMejorada(729);

const alcanciaDeSarah = alcanciaMejorada();
alcanciaDeSarah(2);
alcanciaDeSarah(4);
alcanciaDeSarah(8);

miAlcanciaMejorada(6501);

