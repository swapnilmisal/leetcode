const scope1 = () => {
  do {
    var i = 0;
    i++;
  } while (i < 5);
  console.log(i);
};

const scope2 = () => {
  for (let i = 0; i < 5; i++);
  console.log(i);
};

const scope3 = () => {
  for (var i = 0; i < 5; i++);
  console.log(i);
};

const scope4 = () => {
  console.log(i);
  {
    var i = 100;
  }
};

const scope5 = () => {
  console.log(i);
  {
    let i = 100;
  }
};

const scope51 = () => {
  console.log("***********************");
  setTimeout(() => {
    console.log("=======================");
    console.log(100);
    console.log("=======================");
  }, 100);
  console.log("***********************");
};

const scope6 = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
};

const scope7 = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
};

const scope8 = () => {
  let k = 100;
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(k);
    }, 100);
  }
};

const scope9 = () => {
  let k = 100;
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(k);
    }, 100);
  }
  k = 100;
};

const scope10 = () => {
  do {
    let k = 100;
  } while (false);

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(k);
    }, 100);
  }
};

const scope11 = () => {
  do {
    var k = 100;
  } while (false);

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(k);
    }, 100);
  }
};

const scope12 = () => {
  do {
    var k = 100;
  } while (false);

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(k);
    }, 100);
  }
  k = 200;
};

const scope13 = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(
      (i) => {
        console.log(i);
      },
      100,
      200
    );
  }
};

const scope14 = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(
      (i) => {
        console.log(i);
      },
      100,
      i
    );
  }
};

const scope15 = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(
      (i) => {
        console.log(i);
      },
      100,
      i
    );
  }
};

const scope16 = () => {
  for (let i = 5; i > 0; i--) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};

// scope1();
// scope2();
// scope3();
// scope4();
// scope5();
// scope51();
// scope6();
// scope7();
// scope8();
// scope9();
// scope10();
// scope11();
// scope12();
// scope14();
// scope15();
