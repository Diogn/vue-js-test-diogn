
function grade(point) {
    if (point > 90) {
        console.log('A');
    } else if( point >= 80 && point < 90) {
        console.log('B');
    } else if( point >= 70 && point < 80) {
        console.log('C');
    } else if( point >= 60 && point < 70) {
        console.log('D')
    } else {
        console.log('E')
    }

}

console.log(grade(34))