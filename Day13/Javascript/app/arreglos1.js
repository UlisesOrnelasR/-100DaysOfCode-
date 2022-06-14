

let arreglo = [12, 12, [34, 23], 'letty']

// arreglo.forEach(function (element) {
//      console.log(element)
//  })

// arreglo.forEach((element) => console.log(element))

// Map

let numeros = [1, 3, 6, 3, 4, 2, 5, 10]
numeros.map(function (element) {
   // return console.log(element*element)
})

// filter
    // const MenoresDeCinco = numeros.filter(function (element) {
    //   if (element < 5) {
    //     return element
    //     }
    // })
    const MenoresDeCinco = numeros.filter((element) => element<5)
    // console.log(MenoresDeCinco)

    // Reduce
    let nombre = ['pepe', 'pancho', 'juana', 'maria']
const nombresJuntos = nombre.reduce(function(acc, element){
    return `${acc} ${element}`
});
    
console.log(nombresJuntos)

// sintaxis de expansion

let probando = [2,3,'perro']
 console.log(...probando) 