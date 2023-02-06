        // Задание 1.

        let num1 = parseInt(prompt('Введите целое число')); 
        if (num1 <= 1) {
            alert('Это нам подходит!');
        } else {
            alert('Введите число поменьше ..');
        }
        let num2 = parseInt(prompt('Введите целое число'));
        if (num2 >= 3) {
            alert('Это нам подходит!');
        } else {
            alert('Введите число побольше ..');
        }

        // Задание 2.

        // let test = true;                              
        // console.log((test === true) ? '+++' : '---');

        // Задание 3.

        /*let day = parseInt(prompt('Выберите любой день месяца')); */ 

        // let day = Math.ceil(Math.random() * 31); 
        // if (day <= 10) {
        //     alert(`${day} - это первая декада месяца.`)
        // } else if(day >= 11 && day <= 20){
        //     alert(`${day} - это вторая декада месяца.`)
        // } else{
        //     alert(`${day} - это третья декада месяца.`)
        // }

        // Задание 4.

        // let intNum = parseInt(prompt('Введите целое положительное число')); 
        // let units = intNum % 10;
        // let tens = Math.trunc(intNum/10) % 10;
        // let hundreds = Math.trunc(intNum/100) % 10;
        // console.log(`В числе ${intNum}: ${hundreds} сотен, ${tens} десятков, ${units} единиц.`);
