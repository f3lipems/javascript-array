const school = [
    {
        name: 'Class 1',
        students: [
            { name: 'Artur', grade: 8.1 },
            { name: 'Maria', grade: 9.3 }
        ]
    },
    {
        name: 'Class 2',
        students: [
            { name: 'Joana', grade: 8.9 },
            { name: 'Matheus', grade: 7.3 }
        ]
    }
]

const getGrades = s => s.grade
const getClassGrades = c => c.students.map(getGrades)

const grades1 = school.flatMap(getClassGrades)

console.log(grades1)