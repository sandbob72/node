module.exports.avgGrade = (g) => {
    var grade = ""
    if(g<=49){
        grade = "E";
    }
    else if(g>=50 && g<=54){
        grade = "D"
    }
    else if(g>=55 && g<=59){
        grade = "D+"
    }
    else if(g>=60 && g<=64){
        grade = "C"
    }
    else if(g>=65 && g<=69){
        grade = "C+"
    }
    else if(g>=70 && g<=74){
        grade = "B"
    }
    else if(g>=75 && g<=79){
        grade = "B+"
    }
    else if(g>=80){
        grade = "A"
    }

    console.log(grade)

    return grade

}