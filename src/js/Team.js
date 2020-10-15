import Person from './Person';

export default class Team {
  * [Symbol.iterator]() {
    console.log(this);
    yield new Person('Лучник', 'Bowman', 20, 10);
    yield new Person('Маг', 'Magician', 50, 40);
    yield new Person('Демон', 'Demon', 35, 15);
  }
}
