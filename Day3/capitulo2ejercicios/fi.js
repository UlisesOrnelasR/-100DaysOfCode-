for (num = 0; num <= 100; num += 1){
    // console.log(num)
    if (num % 3 == 0 && num % 5 == 0) {
        console.log('FIZZBUZZ')
    } else if (num % 3 == 0) {
        console.log('FIZZ')
    }else if (num % 5 == 0) {
        console.log('BUZZ')
    } else {
        console.log(num)
    }
}