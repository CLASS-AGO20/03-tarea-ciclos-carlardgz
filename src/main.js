export default class App {
  sumatoriaSerieUno(numero) {
    let suma = 1;
    for (let i = 2; i <= numero; i++) {
      suma = suma + 1 / i;
    }
    return suma;
  }

  sumatoriaSerieDos(numero) {
    let suma = 1;
    let i = 2;
    while (i <= numero) {
      if (i % 2 === 0) {
        suma = suma + 1 / i;
        i++;
      } else {
        suma = suma - 1 / i;
        i++;
      }
    }
    return suma;
  }

  esPrimo(numero) {
    let i = 1;
    let suma = 0;

    do {
      if (numero % i === 0) {
        suma++;
        i++;
      } else {
        i++;
      }
    } while (i <= numero);

    if (suma === 2) {
      return true;
    } else {
      return false;
    }
  }

  obtenerMultiplos(inicio, fin) {
    let multiplos = "";
    do {
      if (inicio % 3 === 0) {
        multiplos = multiplos + inicio;
        inicio++;
      } else {
        inicio++;
      }
    } while (inicio <= fin);

    return multiplos;
  }

  obtenerImpares(numero1, numero2) {
    let resultado = "";

    if (numero1 > numero2) {
      let t = numero1;
      numero1 = numero2;
      numero2 = t;
    }

    do {
      if (numero2 % 2 !== 0) {
        resultado = resultado + numero2 + ",";
        numero2--;
      } else {
        numero2--;
      }
    } while (numero2 >= numero1);

    return resultado;
  }
}

let app = new App();
console.log(app.sumatoriaSerieUno(7));
console.log(app.sumatoriaSerieDos(7));
console.log(app.esPrimo(9));
console.log(app.esPrimo(3));
console.log(app.obtenerMultiplos(10, 25));
console.log(app.obtenerImpares(5, 10));
console.log(app.obtenerImpares(10, 5));
