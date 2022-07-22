import React from 'react'
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");
export const Encrept = (name, key) => {
    const secret = "Hello123"
    let jsonObjectToString;
    let retrieveLocal;
    jsonObjectToString = JSON.stringify(key);
    // console.log(`Json object to String is ${jsonObjectToString}`);


    let encrypted = CryptoJS.AES.encrypt(jsonObjectToString, secret).toString();
    // console.log(encrypted);
    localStorage.setItem(name, encrypted);
    // var retrieveLocalDecrypt = CryptoJS.AES.decrypt(key, secret);
    // var originalText = retrieveLocalDecrypt.toString(CryptoJS.enc.Utf8).toString();
}
