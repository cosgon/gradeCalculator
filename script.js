const average = [];

const averageCalcPrint = () => {
  const averageSpan = document.getElementById("average");

  const averageCalc =
    average.reduce((sum, a) => sum + Number(a), 0) / average.length;
  averageSpan.innerHTML = averageCalc.toFixed(2);
};

const homeWorkCalc = (arr) => {
  const averageSpan = document.getElementById("homework-average");
  const averageCalc = arr.reduce((sum, a) => sum + Number(a), 0) / arr.length;
  averageSpan.innerHTML = averageCalc.toFixed(2);
  if (average[0]) {
    average[0] = averageCalc;
  } else {
    average.push(averageCalc);
  }
  averageCalcPrint();
};

const speaking = document.getElementById("speaking");
speaking.addEventListener("change", (ev) => {
  if (average[1]) {
    average[1] = Number(ev.target.value);
  } else {
    average.push(Number(ev.target.value));
  }
  averageCalcPrint();
});

const listening = document.getElementById("listening");
listening.addEventListener("change", (ev) => {
  if (average[2]) {
    average[2] = Number(ev.target.value);
  } else {
    average.push(Number(ev.target.value));
  }
  averageCalcPrint();
});

const participation = document.getElementById("participation");
participation.addEventListener("change", (ev) => {
  if (average[3]) {
    average[3] = Number(ev.target.value);
  } else {
    average.push(Number(ev.target.value));
  }
  averageCalcPrint();
});

const cr = document.getElementById("cr");
cr.addEventListener("change", (ev) => {
  if (average[4]) {
    average[4] = Number(ev.target.value);
  } else {
    average.push(Number(ev.target.value));
  }
  averageCalcPrint();
});

const homeworkCalcListeners = () => {
  const notes = [];

  const hw1 = document.getElementById("homework-1");
  hw1.addEventListener("change", (ev) => {
    if (notes[0]) {
      notes[0] = ev.target.value;
    } else {
      notes.push(ev.target.value);
    }
    homeWorkCalc(notes);
  });

  const hw2 = document.getElementById("homework-2");
  hw2.addEventListener("change", (ev) => {
    if (notes[1]) {
      notes[1] = ev.target.value;
    } else {
      notes.push(ev.target.value);
    }
    homeWorkCalc(notes);
  });

  const hw3 = document.getElementById("homework-3");
  hw3.addEventListener("change", (ev) => {
    if (notes[2]) {
      notes[2] = ev.target.value;
    } else {
      notes.push(ev.target.value);
    }
    homeWorkCalc(notes);
  });

  const hw4 = document.getElementById("homework-4");
  hw4.addEventListener("change", (ev) => {
    if (notes[3]) {
      notes[3] = ev.target.value;
    } else {
      notes.push(ev.target.value);
    }
    homeWorkCalc(notes);
  });

  const hw5 = document.getElementById("homework-5");
  hw5.addEventListener("change", (ev) => {
    if (notes[4]) {
      notes[4] = ev.target.value;
    } else {
      notes.push(ev.target.value);
    }
    homeWorkCalc(notes);
  });

  const hw6 = document.getElementById("homework-6");
  hw6.addEventListener("change", (ev) => {
    if (notes[5]) {
      notes[5] = ev.target.value;
    } else {
      notes.push(ev.target.value);
    }
    homeWorkCalc(notes);
  });

  const hw7 = document.getElementById("homework-7");
  hw7.addEventListener("change", (ev) => {
    if (notes[6]) {
      notes[6] = ev.target.value;
    } else {
      notes.push(ev.target.value);
    }
    homeWorkCalc(notes);
  });

  const hw8 = document.getElementById("homework-8");
  hw8.addEventListener("change", (ev) => {
    if (notes[7]) {
      notes[7] = ev.target.value;
    } else {
      notes.push(ev.target.value);
    }
    homeWorkCalc(notes);
  });

  const hw9 = document.getElementById("homework-9");
  hw9.addEventListener("change", (ev) => {
    if (notes[8]) {
      notes[8] = ev.target.value;
    } else {
      notes.push(ev.target.value);
    }
    homeWorkCalc(notes);
  });
};

homeworkCalcListeners();
