function solve(input){
    const riderCount=Number(input.shift());
    const riders={};
    for(let i= 0; i<riderCount;i++){

        const riderLine=input.shift();
        const riderDetails=riderLine.split('|');
        const riderName=riderDetails[0];
        const fuel=Number(riderDetails[1]);
        const position=Number(riderDetails[2]);
        riders[riderName]={  fuel,position};

    }
    let commandLine=input.shift();
    while(commandLine !== 'Finish'){
        const commandLineArr=commandLine.split(' - ');
        const command=commandLineArr.shift();

        switch(command){
            case 'StopForFuel':
                const riderStopForFuel=commandLineArr.shift();
                const minimumFuel=Number(commandLineArr.shift());
                const changedPosition=Number(commandLineArr.shift());

                if (riders[riderStopForFuel].fuel<minimumFuel){

                    riders[riderStopForFuel].position=changedPosition;    
                    console.log(`${riderStopForFuel} stopped to refuel but lost his position, now he is ${changedPosition}.`);

                }else{
                    console.log(`${riderStopForFuel} does not need to stop for fuel!`);


                }


            break;

            case 'Overtaking':
                const riderOne = commandLineArr.shift();
                const riderTwo = commandLineArr.shift();
                if(riders[riderOne].position<riders[riderTwo].position){
                    const riderOneInitialPosition = riders[riderOne].position;
                    riders[riderOne].position = riders[riderTwo].position;
                    riders[riderTwo].position = riderOneInitialPosition;
                
                    console.log(`${riderOne} overtook ${riderTwo}!`);
                }
               

            break;

            case 'EngineFail':
                const riderEngineFail=commandLineArr.shift();
                let lapsLeft=commandLineArr.shift();
                console.log(`${riderEngineFail} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                delete  riders[riderEngineFail];


            break;
        }







        commandLine=input.shift();
    }
    for (const rider in riders) {
        console.log(rider);
        const pos=riders[rider].position;
        console.log(`  Final position: ${pos}`);
    }
    
}