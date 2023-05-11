function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
  if ('marks' in this === true) {
    this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function() {
  if ('marks' in this === false || this.marks.length === 0) {
    return 0;
  }

  let average = this.marks.reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1) {
      return acc / arr.length;
    }
    return acc;
  }, 0);
  return average;
}

// // **** Среднее арифметическое хотел вычислит примерно таким способом, почти получилось но что-то не так. Подскажите пожалуйста как вычислить по проще.***
// // let average = this.marks.reduce((acc, item, index, arr) => average + item / arr.length, 0);
// //   return average;
// // }

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}