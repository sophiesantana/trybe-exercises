let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var somaNumbers = 0;

for (index = 0; index < numbers.length; index += 1) {
    somaNumbers = somaNumbers + numbers[index]
}

var media = somaNumbers / numbers.length;

if (media > 20) {
    console.log('valor maior que 20');
} else if (media <= 20) {
    console.log('valor menor ou igual a 20')
}