//Problem 1
let lang; //'ru' or 'en'
lang = 'en';

const days = {
    'ru': ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
    'en': ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
}


//if case

if (lang === 'ru')   {
    console.log(days['ru']);   
} else{
    console.log(days['en']);  
}


//switch case
switch (lang) {
    case 'ru':
        console.log(days['ru']);
        break;
    default:
        console.log(days['en']);    
}


//array
console.log(days[lang]);


//Problem 2
let namePerson
//namePerson = 'fgfgg';
namePerson === 'Артем' ? console.log('director') : namePerson === 'Александр' ? console.log('teacher') : console.log('student'); 