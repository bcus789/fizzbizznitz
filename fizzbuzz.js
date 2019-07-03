for (var i = 0; i < 100; i++){
    // if divisible by 3 = fizz
    // || divisible by 5 = buzz
    // || divisible by both = fizzbuzz
    // if divisible by neither = log number
      if (i % 3 ==0 && i % 5 == 0 ){
        console.log('fizzbuzz')
      } else if (i % 5 ==0) {
        console.log('buzz')
      } else if (i % 3 == 0){
        console.log('fizz')
      } else {
        console.log(i)
      }
    }
    