"use strict";

{//DOM
  const gide1 = document.getElementById("gide1");
  const gide2 = document.getElementById("gide2");
  const gide3 = document.getElementById("gide3");
  const back = document.getElementById("back");
  const next = document.getElementById("next");
  const selectQuestion1 = document.getElementById("select-question1");
  const selectQuestion2 = document.getElementById("select-question2");
  const selectQuestion3 = document.getElementById("select-question3");
  const selectQuestion4 = document.getElementById("select-question4");
  const selectQuestion5 = document.getElementById("select-question5");
  const selectQuestion6 = document.getElementById("select-question6");
  const selectQuestion7 = document.getElementById("select-question7");
  const selectQuestion8 = document.getElementById("select-question8");
  const selectQuestion9 = document.getElementById("select-question9");
  const li = document.querySelectorAll("li");
  const top = document.getElementById("top");

  //トップ画面の機能
  function start() {
    //画面に映す部分
    gide1.classList.remove("display");
    gide2.classList.remove("display");
    gide3.classList.remove("display");
    back.classList.add("display");
    next.classList.add("display");
    selectQuestion1.classList.add("display");
    selectQuestion2.classList.add("display");
    selectQuestion3.classList.add("display");
    selectQuestion4.classList.add("display");
    selectQuestion5.classList.add("display");
    selectQuestion6.classList.add("display");
    selectQuestion7.classList.add("display");
    selectQuestion8.classList.add("display");
    selectQuestion9.classList.add("display");

    //初級編をクリックしたとき
    gide1.addEventListener("click", () => {
      firstQuiz();
    });

    //中級編をクリックしたとき
    gide2.addEventListener("click", () => {
      secondQuiz();
    });

    //上級編をクリックしたとき
    gide3.addEventListener("click", () => {
      thirdQuiz();
    });
  }
  start();

  //正解か不正解か確認する機能
  function checkAnswer(e) {
    if (e.classList.contains("correct-choice")) {
      e.classList.add("correct");
    } else {
      e.classList.add("wrong");
    }
  }

  //トップ画面に戻る機能
  function quizReset() {
    li.forEach(e => {
      e.classList.remove("correct");
      e.classList.remove("wrong");
    })
  }

  //初級編の一問目
  function firstQuiz() {
    //画面に映す部分
    gide1.classList.add("display");
    gide2.classList.add("display");
    gide3.classList.add("display");
    back.classList.remove("display");
    next.classList.remove("display");
    selectQuestion1.classList.remove("display");
    selectQuestion2.classList.add("display");
    selectQuestion3.classList.add("display");
    selectQuestion4.classList.add("display");
    selectQuestion5.classList.add("display");
    selectQuestion6.classList.add("display");
    selectQuestion7.classList.add("display");
    selectQuestion8.classList.add("display");
    selectQuestion9.classList.add("display");

    //答えを選んでクリックしたとき
    li.forEach(e => {
      e.addEventListener("click", () => {
        checkAnswer(e);
      });
    });

    //次の問題をクリックしたとき
    next.addEventListener("click", () => {
      nextQuiz();
    });
  }

  //初級編の二問目
  function secondQuiz() {
    //画面に映す部分
    gide1.classList.add("display");
    gide2.classList.add("display");
    gide3.classList.add("display");
    back.classList.remove("display");
    next.classList.remove("display");
    selectQuestion1.classList.add("display");
    selectQuestion2.classList.add("display");
    selectQuestion3.classList.add("display");
    selectQuestion4.classList.remove("display");
    selectQuestion5.classList.add("display");
    selectQuestion6.classList.add("display");
    selectQuestion7.classList.add("display");
    selectQuestion8.classList.add("display");
    selectQuestion9.classList.add("display");

    //答えを選んでクリックしたとき
    li.forEach(e => {
      e.addEventListener("click", () => {
        checkAnswer(e);
      });
    });

    //次の問題クリックしたとき
    next.addEventListener("click", () => {
      nextSecondQuiz();
    });
  }

  //初級編の三問目
  function thirdQuiz() {
    //画面に映す部分
    gide1.classList.add("display");
    gide2.classList.add("display");
    gide3.classList.add("display");
    back.classList.remove("display");
    next.classList.remove("display");
    selectQuestion1.classList.add("display");
    selectQuestion2.classList.add("display");
    selectQuestion3.classList.add("display");
    selectQuestion4.classList.add("display");
    selectQuestion5.classList.add("display");
    selectQuestion6.classList.add("display");
    selectQuestion7.classList.remove("display");
    selectQuestion8.classList.add("display");
    selectQuestion9.classList.add("display");

    //答えを選んでクリックしたとき
    li.forEach(e => {
      e.addEventListener("click", () => {
        checkAnswer(e);
      });
    });

    //次の問題をクリックしたときの機能
    next.addEventListener("click", () => {
      nextThirdQuiz();
    });
  }

  //中級編の一問目
  function nextQuiz() {
    //画面に映す部分
    selectQuestion1.classList.add("display");
    selectQuestion2.classList.remove("display");
    selectQuestion3.classList.add("display");
    selectQuestion4.classList.add("display");
    selectQuestion5.classList.add("display");
    selectQuestion6.classList.add("display");
    selectQuestion7.classList.add("display");
    selectQuestion8.classList.add("display");
    selectQuestion9.classList.add("display");

    //答えを選んでクリックしたとき
    li.forEach(e => {
      e.addEventListener("click", () => {
        checkAnswer(e);
      });
    });

    //前の問題をクリックしたときの機能
    back.addEventListener("click", () => {
      firstQuiz();
    });

    //次の問題をクリックしたときの機能
    next.addEventListener("click", () => {
      lastQuiz();
    });
  }

  //中級編の二問目
  function nextSecondQuiz() {
    //画面に映す部分
    selectQuestion1.classList.add("display");
    selectQuestion2.classList.add("display");
    selectQuestion3.classList.add("display");
    selectQuestion4.classList.add("display");
    selectQuestion5.classList.remove("display");
    selectQuestion6.classList.add("display");
    selectQuestion7.classList.add("display");
    selectQuestion8.classList.add("display");
    selectQuestion9.classList.add("display");

    //答えを選んでクリックしたとき
    li.forEach(e => {
      e.addEventListener("click", () => {
        checkAnswer(e);
      });
    });

    //前の問題をクリックしたときの機能
    back.addEventListener("click", () => {
      secondQuiz();
    });

    //次の問題をクリックしたときの機能
    next.addEventListener("click", () => {
      lastSecondQuiz();
    });
  }

  //中級編の三問目
  function nextThirdQuiz() {
    //画面に映す部分
    selectQuestion1.classList.add("display");
    selectQuestion2.classList.add("display");
    selectQuestion3.classList.add("display");
    selectQuestion4.classList.add("display");
    selectQuestion5.classList.add("display");
    selectQuestion6.classList.add("display");
    selectQuestion7.classList.add("display");
    selectQuestion8.classList.remove("display");
    selectQuestion9.classList.add("display");

    //答えを選んでクリックしたとき
    li.forEach(e => {
      e.addEventListener("click", () => {
        checkAnswer(e);
      });
    });

    //前の問題をクリックしたときの機能
    back.addEventListener("click", () => {
      thirdQuiz();
    });

    //次の問題をクリックしたときの機能
    next.addEventListener("click", () => {
      lastThirdQuiz();
    });
  }

  //上級編の一問目
  function lastQuiz() {
    //画面に映す部分
    selectQuestion1.classList.add("display");
    selectQuestion2.classList.add("display");
    selectQuestion3.classList.remove("display");
    selectQuestion4.classList.add("display");
    selectQuestion5.classList.add("display");
    selectQuestion6.classList.add("display");
    selectQuestion7.classList.add("display");
    selectQuestion8.classList.add("display");
    selectQuestion9.classList.add("display");

    //答えを選んでクリックしたとき
    li.forEach(e => {
      e.addEventListener("click", () => {
        checkAnswer(e);
      });
    });

    //前の問題をクリックしたときの機能
    back.addEventListener("click", () => {
      nextQuiz();
    });
  }

  //上級編の二問目
  function lastSecondQuiz() {
    //画面に映す部分
    selectQuestion1.classList.add("display");
    selectQuestion2.classList.add("display");
    selectQuestion3.classList.add("display");
    selectQuestion4.classList.add("display");
    selectQuestion5.classList.add("display");
    selectQuestion6.classList.remove("display");
    selectQuestion7.classList.add("display");
    selectQuestion8.classList.add("display");
    selectQuestion9.classList.add("display");

    //答えを選んでクリックしたとき
    li.forEach(e => {
      e.addEventListener("click", () => {
        checkAnswer(e);
      });
    });

    //前の問題をクリックしたときの機能
    back.addEventListener("click", () => {
      nextSecondQuiz();
    });
  }

  //上級編の三問目
  function lastThirdQuiz() {
    //画面に映す部分
    selectQuestion1.classList.add("display");
    selectQuestion2.classList.add("display");
    selectQuestion3.classList.add("display");
    selectQuestion4.classList.add("display");
    selectQuestion5.classList.add("display");
    selectQuestion6.classList.add("display");
    selectQuestion7.classList.add("display");
    selectQuestion8.classList.add("display");
    selectQuestion9.classList.remove("display");

    //答えを選んでクリックしたとき
    li.forEach(e => {
      e.addEventListener("click", () => {
        checkAnswer(e);
      });
    });

    //前の問題をクリックしたときの機能
    back.addEventListener("click", () => {
      nextThirdQuiz();
    });
  }

  //最初からをクリックしたときの機能
  top.addEventListener("click", () => {
    //画面に映す部分
    back.classList.add("display");
    next.classList.add("display");
    gide1.classList.remove("display");
    gide2.classList.remove("display");
    gide3.classList.remove("display");
    selectQuestion1.classList.add("display");
    selectQuestion2.classList.add("display");
    selectQuestion3.classList.add("display");
    selectQuestion4.classList.add("display");
    selectQuestion5.classList.add("display");
    selectQuestion6.classList.add("display");
    selectQuestion7.classList.add("display");
    selectQuestion8.classList.add("display");
    selectQuestion9.classList.add("display");

    quizReset();
  })

}