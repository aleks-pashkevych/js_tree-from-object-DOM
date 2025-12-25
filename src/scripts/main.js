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

  const body = document.querySelector('body');

  body.appendChild(tree);
}

function createTree(element, data) {
  // WRITE YOUR CODE HERE

  if (Object.keys(data).length === 0) {
    return false;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    createTree(li, data[key]);
    ul.appendChild(li);
  }
  element.append(ul);
}

createTree(tree, food);
