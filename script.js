"use strict";

class First {
  hello() {
    console.log("Привет, я метод родителя!");
  }
}

class Second extends First {
  hello() {
    const resultFirst = new First();
    resultFirst.hello();
    console.log("А я - наследуемый объект!");
  }
}

const result = new Second();
result.hello();
