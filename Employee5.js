const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;
const NUM_OF_WORKING_DAYS=15;
const MAX_HRS_IN_MONTH=100;
let totalEmplHrs=0;
function getworkingHours(empcheck)
{
    switch(empcheck)
    {
    case IS_PART_TIME:
    return PART_TIME_HOURS;
    break;
    case IS_FULL_TIME:
        return IS_FULL_TIME
        break;
        default:
        return 0;
    }
}
let empHrs=0;
while(totalEmplHrs<=MAX_HRS_IN_MONTH && totalworkingDays<NUM_OF_WORKING_DAYS)
{
    totalworkingDays++;
    totalEmplHrs+=getworkingHours(empcheck);
}
let empWge=totalEmplHrs*WAGE_PER_HOURS;
console.log("uc5 = Total Days : "+totalworkingDays+"Emp Wage: "+empWge);