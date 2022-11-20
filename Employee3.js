const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const RATE_PER_HR=20;

    let randomInput=Math.floor(Math.random()* 10)%3;
    console.log("Randomvalue:"+ randomInput)
    let empWage=0;
   
    function getWorkingHrs()
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
    empWage=getWorkingHrs()*RATE_PER_HR;
    console.log("Employee Wage:"+ empWage)