const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const RATE_PER_HR=20;
    
    let empHrs=0;
    let empWage=0;
    let randomInput=Math.floor(Math.random()* 10)%3;

    console.log("Randomvalue:"+ randomInput)
    switch(randomInput)
    {
        case IS_FULL_TIME:
        empHrs=8;
        break

        case IS_PART_TIME:
            empHrs=4;
            break

        default:
            empWage=0
            break
    }
    empWage=empHrs*RATE_PER_HR;
    console.log("Employee Wage:"+ empWage)