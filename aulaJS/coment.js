// "" = Duplas, '' = Simples, `` = Template string

const classA = [
  {
    name: "Carol",
    grade: 1.8,
  },
  {
    name: "Erik",
    grade: 10,
  },
  {
    name: "Salamander",
    grade: 3.7,
  },
  {
    name: "Mais um student",
    grade: 10,
  },
];

const classB = [
  {
    name: "Regina",
    grade: 7.5,
  },
  {
    name: "Jorge",
    grade: 6.3,
  },
  {
    name: "Lúcio",
    grade: 8.2,
  },
  {
    name: "Caio",
    grade: 2,
  },
];

function caculateAverage(students) {
  let sum = 0;
  
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;
  }
  const average = sum / students.length;

  return average;
}

function sendMessage(average, turma) {
  if (average > 5) {
    console.log(` ${turma} average ${average}. Parabéns`);
  } else {
    console.log(`${turma} average ${average}. is not good`);
  }
}

function markAssFflunked(student) {
  student.flunked = false;
  
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendMessageflunked(student) {
  if (student.flunked) {
    console.log(`O student ${student.name} flunked`);
  }
}

function studentsflunked(students) {
  for (let student of students) {
    markAssFflunked(student);
    sendMessageflunked(student);
  }
}

const average1 = caculateAverage(classA);
const average2 = caculateAverage(classB);

sendMessage(average1, "Turma A");
sendMessage(average2, "Turma B");

studentsflunked(classA);
studentsflunked(classB);
