console.log("Cajero electronico");

// OBJETIVO: Simular el trabajo de un cajero electrónico usando lo aprendido en
// Javascript.
// El aplicativo debe cumplir con los siguientes requerimientos técnicos:
// 1. Escribir una lista de usuarios con los siguientes datos: nombre, número
// de documento, contraseña y tipo de usuario. El tipo de usuario será: 1:
// administrador, 2: cliente. Guardarla en un array de objetos.

users = [
  {
    name: "Samuel",
    id: 1036265385,
    password: 123456,
    userType: 1
  },
  {
    name: "Daniel",
    id: 17448260,
    password: 123456,
    userType: 2
  },
  {
    name: "Maria",
    id: 18860983,
    password: 123456,
    userType: 2
  },
  {
    name: "Ignacio",
    id: 91417929,
    password: 123456,
    userType: 1
  }

]
// 2. Realizar un programa que al inicio solicite ingresar documento y
// contraseña, si el usuario no existe debe indicar que no existe y volver a
// preguntar usuario y contraseña, si el usuario es administrador, debe
// permitir cargar el cajero de la siguiente manera:

const registerForm = document.getElementById('registerForm');
const countCash = [];
const countCash1 = [];
let totalCashier = 0;
let  total5 = 0;
let  total10 = 0;
let  total20 = 0;
let  total50 = 0;
let  total100 = 0;
let restar = 0;
let cantidadRetirada = 0;

function calculoBillete(variable, denominacion, cantidadRetirada) {
  let cash = countCash.filter(element => element.billete == denominacion )
  cash.forEach(element => {
    console.log(`El total en billetes de ${denominacion} es ${variable += parseInt(element.billete)  * (parseInt(element.cantidad) - cantidadRetirada)}`);
  });
}


registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event)
  const userId = document.getElementById('userId');
  const userPassword = document.getElementById('userPassword');
  console.log(userId.value);
  console.log(userPassword.value);

  const registeredUser =  users.find(element => element.id == userId.value && element.password == userPassword.value )

      console.log(registeredUser)
      if(!registeredUser) {
        alert("Usuario o datos incorrectos por favor repetir formulario")
        location.reload();
      } else {
        alert(`Bienvenido ${registeredUser.name}`)
        registerForm.reset();
        if (registeredUser.userType == 1) {
          const cashSelect = document.getElementById('cashSelect');
          cashSelect.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log(event)
            const cash = document.querySelector('.cash');
            const cashQuantity = document.getElementById('cashQuantity');
            const denominacionBillete = cash.value
            const cantidadTotalBillete = cashQuantity.value
            console.log(denominacionBillete);
            console.log(cantidadTotalBillete);
            countCash.push({billete: denominacionBillete, cantidad: cantidadTotalBillete });
            console.log(countCash)
            cashSelect.reset();


           countCash.forEach(element => {
             console.log(`El total en cajero es ${totalCashier += parseInt(element.billete) * parseInt(element.cantidad)}`);
             console.log(`El total de billetes de  ${ parseInt(element.billete)} es ${parseInt(element.cantidad)}`);
            });


            calculoBillete(total5, "5000", restar);
            calculoBillete(total10, "10000", restar);
            calculoBillete(total20, "20000", restar);
            calculoBillete(total50, "50000", restar);
            calculoBillete(total100, "100000", restar);

            // console.log(`El total en cajero es ${totalCashier}`)

          });


        } else {
          console.log(`saldo del cajero ${totalCashier}`)
          if (totalCashier == 0) {
            alert("Cajero en mantenimiento, vuelva pronto")
          } else {
            alert("Bienvenido cuanto dinero desea retirar?")
            const withdrawalDone = document.getElementById('withdrawal');
            withdrawalDone.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log(event)
            const amountToWithdrawl = document.getElementById('amountToWithdrawl');
            let money = amountToWithdrawl.value
            console.log(parseInt(money));
            // cashSelect.reset();

            if (money % 5000 == 0) {
              // console.log("entro")
                if (money < totalCashier && (totalCashier - money) > 0) {
                  console.log(Math.floor(money))
                  console.log(totalCashier -= money)
                  console.log(totalCashier)

                  function calculoBilleteATomar(denominacion) {
                      let result = parseInt(money) / parseInt(denominacion)
                      if (result >= 1) {
                        cantidadBilletesRedondeado = Math.floor(result)
                        // console.log(cantidadBilletesRedondeado)
                        console.log((cantidadBilletesRedondeado * parseInt(denominacion)))
                        restante = cantidadBilletesRedondeado * parseInt(denominacion)
                        // console.log(money - x)
                        money -= restante
                        // console.log(money)
                      };
                    };


                  calculoBilleteATomar("100000");
                  calculoBilleteATomar("50000");
                  calculoBilleteATomar("20000");
                  calculoBilleteATomar("10000");
                  calculoBilleteATomar("5000");

                  calculoBillete(total100, "100000", cantidadBilletesRedondeado);
                  calculoBillete(total50, "50000", cantidadBilletesRedondeado);
                  calculoBillete(total20, "20000", cantidadBilletesRedondeado);
                  calculoBillete(total10, "10000", cantidadBilletesRedondeado);
                  calculoBillete(total5, "5000", cantidadBilletesRedondeado);

                  console.log(totalCashier)


                } else {
                  alert("Por favor ingrese una cantidad menor")

                }

            } else {
              alert("no es posible entregar la cantidad selecciona, por favor ingresa otro valor")

            }


          });

        }
      }
    }
});




// 4. Almacenar esta información en un array de objetos.
// 5. Una vez tenga la información, debe mostrar en consola la suma por cada
// denominación y el total general.
// 6. Una vez el cajero esté cargado, debe volver a solicitar usuario y
// contraseña, si es administrador, se repite el mismo proceso, sumar a la
// cantidad actual, si es cliente debe proseguir de la siguiente manera:
// 7. Si el cajero no tiene dinero cargado, debe aparecer un mensaje en
// consola: “Cajero en mantenimiento, vuelva pronto.” Y reiniciar desde el
// inicio.
// 8. Si el cajero ya tiene dinero cargado, debe preguntar la cantidad deseada
// a retirar. Una vez obtenida la información, debe indicar cuánto dinero
// puede entregar basado en la cantidad disponible y los tipos de billetes.
// Luego debe mostrar en consola cuántos billetes de cada denominación
// entregó. Priorizando siempre las denominaciones más altas para valores
// altos y redondeando a la cifra más cercana menor a la solicitada.
// 9. Posteriormente, debe aparecer en consola, el dinero restante en el cajero,
// por cada denominación.
// FIN.
// NOTA: Debes hacer que el cajero se vuelva a ejecutar, haciendo que vuelva a
// preguntar usuario y contraseña múltiples veces, cargar dinero si es
// administrador, o retirar dinero si es cliente
