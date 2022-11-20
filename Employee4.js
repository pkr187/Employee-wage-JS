const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const RATE_PER_HR=20;
    const Max_Working_Day=20;

    let empWage=0;
   let totalEmpWage=0;
    function getWorkingHrs(randomInput)
    {
        let empHrs=0;
        switch(randomInput)
    {
        case IS_FULL_TIME:
        empHrs=8;
        return empHrs;

        case IS_PART_TIME:
            empHrs=4;
            return empHrs;

        default:
            empWage=0
            return empHrs;
        }
    }
    for(let day=1;day<=Max_Working_Day;day++)
    {
       let randomInput=Math.floor(Math.random()* 10)%3;
       //console.log("Randomvalue:"+ randomInput);
       empWage=getWorkingHrs(randomInput)*RATE_PER_HR;
       totalEmpWage=+empWage;
    }
    console.log(" Employee Wage:" + totalEmpWage);