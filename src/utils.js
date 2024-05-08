const fs = require('fs').promises;

async function initFile(filePath) {
  try {
    await fs.access(filePath);
  } catch (error) {
    await fs.writeFile(filePath, '{}');
  }
}

async function readData(filePath) {
  try {
    await initFile(filePath);
    const fileData = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    throw new Error('Error reading file.');
  }
}

async function writeData(filePath, data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    throw new Error('Error writing file.');
  }
}

async function ensureKeyValidity(key) {
    if (!key || typeof key !== 'string' || key.trim() === '') {
        throw new Error('Key cannot be empty.');
    }
}

module.exports = { readData, writeData, ensureKeyValidity };