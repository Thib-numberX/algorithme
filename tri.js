const sortedStudents = ([
    { name: "Mathieu", grades: [13, 5, 14, 10, 4] },
    { name: "Théodore", grades: [18, 12, 17, 13, 11, 9] },
    { name: "Léa", grades: [3, 15, 13, 18, 8, 10] },
    { name: "Cécile", grades: [7, 16, 10, 16, 15, 20] },
])

function student() {
    return (
        sortedStudents.map((el) => {
            return el.grades.reduce((acc, cur) => acc + cur) / el.grades.length
        })
    );
}

const moyenne = student();

// console.log(moyenne);

function objMoy() {
    return (
        moyenne.map((m) => {
            // console.log(m);
            const newObj = { moyenne: m };
            // console.log(newObj);
            return newObj
        })
    )
};

const formatMoy = objMoy()
// console.log(formatMoy);

function add() {
    let i = 0;
    return (
        sortedStudents.map((el) => {
            // console.log(m);
            const newObj = { name: el.name, grades: el.grades, moyenne: formatMoy[i].moyenne };
            i = i + 1;
            return newObj
        })
    )
};

const newArray = add();

// console.log(newArray);

function sort() {
    return (
        newArray.sort((a, b) => (a.moyenne - b.moyenne))
    )
};

console.log(sort());

