import aesjs from 'aes-js';
const key = [21, 43, 25, 24, 32, 29, 14, 20, 29, 30, 12, 32, 52, 11, 4, 17];

export const getCookie = name => {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [k, v] = el.split('=');
    cookie[k.trim()] = v;
  });
  if (cookie[encrypt(name)]) {
    let cookieValue = cookie[encrypt(name)];
    return decrypt(cookieValue);
  } else {
    return null;
  }
};

export const delete_cookie = name =>
  (document.cookie = `${encrypt(
    name
  )}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`);

export const setCookie = (name, value, maxAgeSeconds) => {
  document.cookie = `${encrypt(name)}=${encrypt(
    value
  )}; max-age=${maxAgeSeconds}`;
};

export const encrypt = value => {
  let encodedValue = encodeURI(value);
  let valueAsBytes = aesjs.utils.utf8.toBytes(encodedValue);
  let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  let encryptedValueBytes = aesCtr.encrypt(valueAsBytes);
  let encryptedValueHex = aesjs.utils.hex.fromBytes(encryptedValueBytes);
  return encryptedValueHex;
};

export const decrypt = encryptedValue => {
  let encryptedValueBytes = aesjs.utils.hex.toBytes(encryptedValue);
  let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  let decryptedValueBytes = aesCtr.decrypt(encryptedValueBytes);
  return aesjs.utils.utf8.fromBytes(decryptedValueBytes);
};
