const IS_ABSENT=0;
let empCkeck=Math.floor(Math.random()*10)%2;
if(empCkeck==IS_ABSENT)
{
    console.log("Employee is absent");
    return
}else 
{
    console.log("Employee is present");
}