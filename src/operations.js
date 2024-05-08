const { readData, writeData, ensureKeyValidity } = require('./utils');

async function get(filePath, key) {
    ensureKeyValidity(key);
    const data = await readData(filePath);
    return data[key];
}

async function set(filePath, key, value) {
    ensureKeyValidity(key);
    const data = await readData(filePath);
    data[key] = value;
    await writeData(filePath, data);
}

async function push(filePath, key, value) {
    ensureKeyValidity(key);
    const data = await readData(filePath);
    if (!Array.isArray(data[key])) data[key] = [];
    data[key].push(value);
    await writeData(filePath, data);
}

async function pull(filePath, key, value) {
    ensureKeyValidity(key);
    const data = await readData(filePath);
    if (!Array.isArray(data[key])) {
        throw new Error(`The value for the key '${key}' is not an array.`);
    }
    data[key] = data[key].filter(item => item !== value);
    await writeData(filePath, data);
}

async function deleteKey(filePath, key) {
    ensureKeyValidity(key);
    const data = await readData(filePath);
    delete data[key];
    await writeData(filePath, data);
}

async function getAll(filePath) {
    const data = await readData(filePath);
    return Object.entries(data).map(([key, value]) => ({ key, value }));
}

async function clearAll(filePath) {
    await writeData(filePath, {});
}

module.exports = { get, set, push, pull, deleteKey, getAll, clearAll };