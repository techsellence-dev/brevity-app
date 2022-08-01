import React from 'react'
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");
export const Decript = (key) => {
    const secret = "Hello123"

    var retrieveLocalDecrypt = CryptoJS.AES.decrypt(key, secret);
    var originalText = retrieveLocalDecrypt.toString(CryptoJS.enc.Utf8).toString();
    // console.log(originalText)
    return originalText;
}
