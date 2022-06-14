describe("Test Suite Dummy Description", () => {
  test('Case 1 Dummy', () => {
    const resultOfSomething = 1 + 2
    expect(resultOfSomething).toBe(3);
  });

  test('For Each', () => {
    
    let arreglo = [12, 12, [34, 23], 'letty']
    expect(arreglo[5]).toBe(undefined);
  });

  test('Map', () => {
    
    let numeros = [1, 3, 6, 3, 4, 2, 5, 10]
    const Ncuadrados = numeros.map((element => element*element))

    expect(Ncuadrados[2]).toBe(36);
  });
  test('Filter', () => {
    
    let numeros = [1, 3, 6, 3, 4, 2, 5, 10]
    const numPares = numeros.filter((element) => element%2==0)

    expect(numPares.length).toBe(4);
  });

  test('Reduce', () => {
    
    let nombre = ['pepe', 'pancho', 'juana', 'maria']
    const nombresJuntos = nombre.reduce((acc, element) => `${acc} ${element}`)
    
    expect(nombresJuntos).toBe('pepe pancho juana maria')
  });
})