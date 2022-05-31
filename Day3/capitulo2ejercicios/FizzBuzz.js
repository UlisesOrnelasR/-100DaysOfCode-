for (let num = 0; num <= 100; num++){
    // console.log(num)
    if (num % 3 == 0 && num % 5 == 0) {
        console.log('FIZZBUZZ')
    }else if(num % 3 == 0) {
        console.log('Fizz')
    }else if(num % 5 == 0) {
        console.log('buzz')
    } else {
        console.log(num)
    }
}