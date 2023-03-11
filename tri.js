const sortedStudents = ([
    { name: "Joséphine", grades: [14, 2, 8, 11, 3] },
    { name: "Marcus", grades: [19, 17, 13, 15, 16, 14] },
    { name: "Mélusine", grades: [5, 11, 17, 17, 2, 12] },
    { name: "Sophie", grades: [16, 14, 10, 11, 18, 20] },
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

