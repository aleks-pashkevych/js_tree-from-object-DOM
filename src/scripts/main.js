'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

let tree = document.querySelector('#tree');

if (tree === null) {
  tree = document.createElement('div');
  tree.setAttribute('id', 'tree');

  const body = document.querySelector('body');

  body.appendChild(tree);
}

const ul = document.createElement('ul');

function createTree(element, data) {
  // WRITE YOUR CODE HERE

  for (const key in data) {
    if (Object.keys(data[key])) {
      const li = document.createElement('li');

      li.textContent = key;
      ul.appendChild(li);

      if (typeof data[key] === 'object') {
        const newLi = document.createElement('li');

        createTree(newLi, data[key]);
      }
    }
    element.appendChild(ul);
  }
}

createTree(tree, food);
