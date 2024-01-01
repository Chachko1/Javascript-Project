function solve(input){
    let numberOFBaristas=Number(input.shift());

    const baristObj={};

    for (let index = 0; index < numberOFBaristas; index++) {
        const baristaAr=input.shift();
        baristaAr=baristaAr.split(' ');

        const baristaName=baristaAr.shift();
        const baristaShift=baristaAr.shift();
        let baristaTypeDrinks=baristaAr.shift();
        baristaTypeDrinks=baristaTypeDrinks.split(',');
        baristObj[baristaName]=baristaShift,baristaTypeDrinks;

    }

    let command=input.shift;
    while (command!=='Closed'){
        console.log(command);



        command=input.shift;
    }
    

}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    )