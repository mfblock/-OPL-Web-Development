function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
  }

  for (let x = 60; x <= 100; x++) {
      console.log('For scoring ' + x + ' points, you get an ' + assignGrade(x));
  }
