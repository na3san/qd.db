# Installation

Use npm or yarn to install `qd.db` package :

```
npm install qd.db
```
```
yarn add qd.db
```

# Initialization

## Javascript Example

```js
const { QuantumDB } = require('qd.db');
const db = new QuantumDB('database.json');//Specify a file to be the database
```

## Typescript Example

```ts
import { QuantumDB } from 'qd.db'
const db = new QuantumDB('database.json');//Specify a file to be the database
```

# Quick Start

**Considering that you used the previous code to initialize the database :**

```js
async function example() {
  // Adding a value
  await db.set('A', 'Apple');
  const value = await db.get('A');
  console.log(value);// Output < Apple >

  // Adding a value in an array
  await db.push('B', 'Banana');
  await db.push('B', 'Blueberry');
  const array = await db.get('B');
  console.log(array);// Output < ['Banana', 'Blueberry'] >

  // Removing a value from an array
  await db.pull('B', 'Banana');
  const nextArray = await db.get('B');
  console.log(nextArray);// Output < ['Blueberry'] >

  // Deleting a value
  await db.delete('A');

  // Getting all data
  const data = await db.getAll();
  console.log(data);// Output < [ { key: 'B', value: ['Blueberry'] } ] >

  // Clearing all data
  await db.clearAll();
}

example();
```

# Api Reference

- **set('key', 'value')** : Sets a value for a specified key.
- **push('key', 'value')** : Pushs a value in an array for a specified key.
- **pull('key', 'value')** : Pulls a value from an array for a specified key.
- **get('key')** : Returns a value using the key.
- **delete('key')** : Deletes an item using the key.
- **getAll()** : Returns all database data.
- **clearAll()** : Clears all database data.

# Our Community

To inquire about the package and get help with every part of it, you can visit [our server](https://discord.gg/qVyPy42uHg) on Discord.