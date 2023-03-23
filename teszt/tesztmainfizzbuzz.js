QUnit.module(`fizbuz`, function(){
QUnit.test(`two numberslétezik-e a fizbuz?`,function(assert){
    assert.ok(fizbuz, "Létezik-e a fizbuz?");
    
});
QUnit.test(`Függvény létezik-e?`,function(assert){
    assert.ok(typeof fizbuz=="function", "Függvény-e a fizzbuzz?");
    
});
QUnit.test(`fizbuz(0)`,function(assert){
    assert.equal(fizbuz(0),"");
    
});

QUnit.test(`fizbuzErtek()`,function(assert){
    const nemOszthatoLista = [1,2,4,7,8,11,13,14];
    for (let index = 0; index < nemOszthatoLista.length; index++) {
        assert.equal(fizbuzErtek(nemOszthatoLista[index]), nemOszthatoLista[index]);
        
    }
    
});

QUnit.test(`fizbuzErtek()`,function(assert){
    const nemOszthatoLista = [3,6,9,12];
    for (let index = 0; index < nemOszthatoLista.length; index++) {
        assert.equal(fizbuzErtek(nemOszthatoLista[index]), "fizz");
        
    }
    
});
QUnit.test(`fizbuzErtek()`,function(assert){
    const nemOszthatoLista = [5,10];
    for (let index = 0; index < nemOszthatoLista.length; index++) {
        assert.equal(fizbuzErtek(nemOszthatoLista[index]), "buzz");
        
    }
    
});
QUnit.test(`fizbuzErtek(15)`,function(assert){
    assert.equal(fizbuzErtek(15),"fizz-buzz");
    
});
QUnit.test(`fizbuz(15)`,function(assert){
    assert.equal(fizbuz(15),"1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizz-buzz");
    
});
});