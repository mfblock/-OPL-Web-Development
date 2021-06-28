for (let i = 0; i <= 20; i++) {
    console.log(`Is ${i} even of oneven?`);
    const result = (i % 2  == 0) ? "even" : "oneven";
    console.log( i + " is " + result );
  }