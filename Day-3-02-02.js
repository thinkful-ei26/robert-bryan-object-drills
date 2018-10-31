// Enroll in summer school
// Take up to 10 minutes to write a function called enrollInSummerSchool that takes a single argument, students. students is an array of objects, with each object 
// representing a student — for example, {name: 'Tim', status: 'Current student', course: 'Biology'}.

// enrollInSummerSchool should return an array of objects. For each object from the original array, it should return the original name and course,
//  but should update the status to In Summer school. So, given this input:

//  [
//     {
//       name: 'Tim',
//       status: 'Current student',
//       course: 'Biology'
//     },
//     {
//       name: 'Sue',
//       status: 'Withdrawn',
//       course: 'Mathematics'
//     }
//   ];

// [
//     {
//       name: 'Tim',
//       status: 'In Summer school',
//       course: 'Biology'
//     },
//     {
//       name: 'Sue',
//       status: 'In Summer school',
//       course: 'Mathematics'
//     },
//   ];

const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
  
  function enrollInSummerSchool(students) {
    return students.map(x => {
        return {
        name: x.name,
        status: 'In Summer School',
        course: x.course,
    }});
  }
  
  /* From here down, you are not expected to understand.... for now :)
    Nothing to see here!
  
  */
  
  // tests
  
  function testIt() {
    var testData = [
      {
        name: 'Burt',
        status: 'Playing hooky',
        course: 'Biology',
      },
      {
        name: 'Melanie',
        status: 'Sick',
        course: 'Mathematics',
      },
      {
        name: 'Leonard',
        status: 'AWOL',
        course: 'Computer science',
      },
    ];
  
    var results = enrollInSummerSchool(testData);
  
    if (!(results && results instanceof Array)) {
      console.error('FAILURE: `enrollSummerSchool` must return an array');
      return;
    }
    var result = testData.every(function(student) {
      var match = results.find(function(_student) {
        return (
          _student.name === student.name &&
          _student.course === student.course &&
          _student.status.toLowerCase() === 'in summer school'
        );
      });
      return match !== undefined;
    });
    if (!result) {
      console.error(
        'FAILURE: `enrollSummerSchool` should return ' +
          'original key/value pairs for each student, and ' +
          'update `status` to "In Summer school": ' +
          JSON.stringify(results)
      );
    } else {
      console.info('SUCCESS: `enrollSummerSchool` is working');
    }
  }
  
  testIt();
  