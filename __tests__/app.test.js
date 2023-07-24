
const { sumar, restar } = require('../app');

describe('Validacion de la funciona sumar:', function(){
    test('Verificar que la funcion sumar exista', function(){
        //console.log("Iniciando Testing");
        expect(sumar).toBeDefined()
    })
    
    test('El resultado de sumar 10 + 10 debe ser 20', function(){
        expect(sumar(10, 10)).toBe(20)
    })
})

describe('Validacion de la funciona restar:', function(){
    test('Verificar que la funcion restar exista', function(){
        //console.log("Iniciando Testing");
        expect(restar).toBeDefined()
    })
    
    test('El resultado de restar 45 - 15 debe ser 30', function(){
        expect(restar(45, 15)).toBe(30)
    })
})