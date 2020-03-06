/*To get overtime subtract totalhours - 40 to get difference 
Then multiply difference * 1.50 * hoursworked */

hoursWorked = () =>{
    let workedHours = document.getElementById("hoursworked")
    overtimeCalculation(workedHours);

}

overtimeCalculation = (number)=>{
    let weeklyRate = document.getElementById("week-select")
    if (number > 80 && weeklyRate =="bi-weekly"){
        overtimeHours = number - 80;
        return overtimeHours;
    }
    else if (number > 40  && weeklyRate=="weekly"){
        overtimeHours = number - 40;
        return overtimeHours;
    }
    else{
        overtimeHours = 0;
        return overtimeHours;
    }
}
baseSalary = (num) => {
    let salary  = document.getElementById("wage")
    newSalary = num * salary;
    return newSalary;
}