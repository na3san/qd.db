const path = require('path');
const { get, set, push, pull, deleteKey, getAll, clearAll } = require('./operations.js');

function QuantumDB(filename) {
  if (!filename.endsWith('.json')) throw new Error('File must be a JSON file.');
  const filePath = path.resolve(filename);
  
  return { get: (key) => get(filePath, key),
           set: (key, value) => set(filePath, key, value),
           push: (key, value) => push(filePath, key, value),
           pull: (key, value) => pull(filePath, key, value),
           delete: (key) => deleteKey(filePath, key),
           getAll: () => getAll(filePath),
           clearAll: () => clearAll(filePath) };
}

module.exports = { QuantumDB };
