const students = ([
    { name: "Mathieu", grades: [13, 5, 14, 10, 4] },
    { name: "Théodore", grades: [18, 12, 17, 13, 11, 9] },
    { name: "Léa", grades: [3, 15, 13, 18, 8, 10] },
    { name: "Cécile", grades: [7, 16, 10, 16, 15, 20] },
])

// objectif : trier les étudiants selon leur moyenne.

// 1 calculer la moyenne des étudiants

function moy(){
    return (
        students.map((el) => {
            return el.grades.reduce((acc, cur) => acc + cur) / el.grades.length
        })
    )
}

const moyennes = moy();

// console.log(moyenne);

// 2 créer un objet avec les moyennes

function objMoy(){
    return(
        moyennes.map((moyenne) =>{
            const newObj = {mean : moyenne};
            return newObj;
        })
    );
}

const formatMoy = objMoy();

// console.log(formatMoy);

// 3 inserer les moyennes dans le tableau initial

function add(){
    let i = 0;
    return (
        students.map((student) =>{
            const newObj = {name : student.name , grades : student.grades , mean : formatMoy[i].mean};
            // i = i + 1;
            i += 1;
            return newObj;
        })
    )
}

const newArray = add()

// console.log(newArray);

// 4 trier les élèves

function sort(){
    return (
        newArray.sort((a, b) => (a.mean - b.mean))
    )
}

const sortedArray = sort();

console.log(sortedArray);