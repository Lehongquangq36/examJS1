// var lesson8 = document.getElementById("lesson8");
// var lesson9 = document.getElementById("lesson9");

const chars = 'abcdefghijklmnopqrstuvwxyz';
const length = chars.length;
function generateScore() {
    const score = randomScore();
    let name = '';
    for (let i = 0; i < 5 + Math.round(Math.random() * 10); i++) {
        name += chars.charAt(Math.floor(Math.random() * length));
    }
    // console.log(name , score);
    return {
        name,
        score
    };
}
function randomScore() {
    return 5 + Math.round(Math.random() * 5)
}

var obj = {
        school : "PTIT",
        classes: "D16HTTT3",
        teacher: "VVT",
        term: 4,
        subject: "Web",
        results: [ generateScore() , generateScore() ]
}

// var txt = "{" + "<br>";

// var nestObjTxt = "";
// var displayObj = (obj) => {
//     Object.keys(obj).forEach( key => {
//         if( typeof (obj[key]) === 'object') {
//             txt += `${key}` + ": { " + "<br>";
//             displayObj(obj[key]);
//             txt += "}";
//         }else {
//             txt += `${key}` + " : " +  `${obj[key]}` + " , " + "<br>";
//         }
//     })
//     return txt;
// }

// lesson8.innerHTML = displayObj(obj) + "}";


//create object

var newObj = {...obj};
newObj.teacher = "A";
newObj.subject = "PTTKHT";

for( var i in newObj.results){
    newObj.results[i].score = randomScore();
}

// console.log(newObj)
// console.log(obj)
// obj = Object.assign(obj , newObj)
// console.log(obj)

var mergerObj = ( ...objects ) => {
    console.log(3, objects);
    return {...objects} 

};
console.log(1, obj, newObj)
obj = mergerObj(obj , newObj);
// lesson9.innerHTML = displayObj(obj);
console.log(2, obj);