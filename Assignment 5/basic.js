// Создать объект Person несколькими способами,
// после создать объект AnotherPerson, чтобы в нём были
// доступны методы объекта Person. Добавить метод logInfo
// чтоб он был доступен всем объектам.

var Person = {
  sayHi: function () {
    console.log("hi");
  },
};
var personObj = Object.create({});
var personObj = Object.assign({}, {});

function PersonConstructor() {}
var personObj = new PersonConstructor();

var AnotherPerson = Object.assign({}, Person);

//console.log(Person.sayHi());

Object.prototype.logInfo = function () {
  console.log(this);
};

Person.logInfo();
AnotherPerson.logInfo();

// Создать класс SuperPerson c get и set для поля name и конструктором , сделать класс наследник от
// класса SuperPerson.

class SuperPerson {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }
}

class ChildClass extends SuperPerson {}
