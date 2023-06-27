let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

let testCase2 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 100,
    chemistry: 80,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 80,
    chemistry: 100,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 30,
    chemistry: 40,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 40,
    chemistry: 30,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

function compareStudents(a, b) {
  // Compare total marks
  const totalMarksA = a.biology + a.chemistry;
  const totalMarksB = b.biology + b.chemistry;
  if (totalMarksA > totalMarksB) {
    return -1;
  } else if (totalMarksA < totalMarksB) {
    return 1;
  }

  // Compare biology marks
  if (a.biology > b.biology) {
    return -1;
  } else if (a.biology < b.biology) {
    return 1;
  }

  // Compare date of birth (assumed format: DD-MM-YYYY)
  const aDate = new Date(a.dob.split("-").reverse().join("-"));
  const bDate = new Date(b.dob.split("-").reverse().join("-"));
  if (aDate < bDate) {
    return -1;
  } else if (aDate > bDate) {
    return 1;
  }

  return 0;
}

// Sort the test case arrays using the comparison function
testCase1.sort(compareStudents);
testCase2.sort(compareStudents);

// Print the sorted arrays
console.log(testCase1);
console.log(testCase2);

