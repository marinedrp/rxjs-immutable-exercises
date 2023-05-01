import { List, Map } from 'immutable';

const fruits = List(['Apple', 'Banana', 'Orange']);

const fruitColors = Map<string, string>({
  apple: 'red',
  banana: 'yellow',
  orange: 'orange',
});

const updatedFruits = fruits.push('Grape');

const updatedFruitColors = fruitColors.set('apple', 'green');

console.log('Original Fruits: ', fruits.toJS());
console.log('Updated Fruits:', updatedFruits.toJS());
console.log('Original Fruit Colors:', fruitColors.toJS());
console.log('Updated Fruit Colors:', updatedFruitColors.toJS());
