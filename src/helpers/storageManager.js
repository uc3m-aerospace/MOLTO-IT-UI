import { encrypt, decrypt } from 'helpers';

const storage = window.localStorage;

const add = (key, value) => storage.setItem(encrypt(key), encrypt(value));

const get = key => decrypt(storage.getItem(encrypt(key)));

const remove = key => storage.removeItem(encrypt(key));

export default { add, get, remove };
