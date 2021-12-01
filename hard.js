//Problem 1
let lang; //'ru' or 'en'
//lang = 'en'

//if case
const days = {
    "понедельник": "monday", 
    "вторник" : "tuesday",
    "среда": "wednesday", 
    "четверг": "thursday", 
    "пятница": "friday", 
    "суббота": "saturday", 
    "воскресенье": "sunday"
}

if (lang == 'ru')   {
    console.log(Object.keys(days));   
} else{
    console.log(Object.values(days));  
}


//switch case
switch(true){
    case lang == 'ru':
        const  weekDays = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
        console.log(weekDays);
        break
    default:
        const weekDaysEn = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        console.log(weekDaysEn);    
}


//array
const array = {
    'ru': ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
    'en': ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
}
console.log(array[lang]);


//Problem 2
let namePerson
//namePerson = 'fgfgg'
namePerson === 'Артем' ? console.log('director') : namePerson === 'Александр' ? console.log('teacher') : console.log('student'); 