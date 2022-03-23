let num
let unit1;
let unit2;

function unit1Add(firstUnit) {
    unit1 = firstUnit;
}

function unit2Add(SecondUnit) {
    unit2 = SecondUnit;
}

function changeUnit() {
    num = document.getElementById('input').value;
    console.log(num);
    if(unit1 === 'cm') {
        if(unit2 === 'm') {
            num *= 0.01;
        } else if(unit2 === 'inch') {
            num /= 2.54;
        } else if(unit2 === 'yard') {
            num /=91.44;
        }
    } else if(unit1 === 'm') {
        if(unit2 === 'cm') {
            num *= 100;
        } else if(unit2 === 'inch') {
            num *= 39.37;
        } else if(unit2 === 'yard') {
            num *= 1.094;
        }
    } else if(unit1 === 'inch') {
        if(unit2 === 'cm') {
            num *= 2.54;
        } else if(unit2 === 'm') {
            num /= 39.37;
        } else if(unit2 === 'yard') {
            num /= 36;
        }
    } else if(unit1 === 'yard') {
        if(unit2 === 'cm') {
            num *= 91.44;
        } else if(unit2 === 'm') {
            num /= 1.094;
        } else if(unit2 === 'inch') {
            num *= 36;
        }
    }
    console.log(num);

    document.getElementById('result').innerText = num +' ' + unit2;
}