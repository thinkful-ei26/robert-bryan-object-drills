function createMyObject() {
    return {
        foo: 'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello:  function() {
            return 'hello';
    },
    };
}

createMyObject();
console.log(createMyObject.toString());