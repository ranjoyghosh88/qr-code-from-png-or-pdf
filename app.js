//Importing jimp module
var Jimp = require("jimp");
// Importing filesystem module
var fs = require('fs')
// Importing qrcode-reader module
var QrCode = require('qrcode-reader');
const { PNG } = require('pngjs');
const jsQR = require('jsqr');

var Jimp = require("jimp");
var buffer = fs.readFileSync('./frame (2).png');
const png = PNG.sync.read(buffer);
//console.log('png==>',png,'<===');
const code = jsQR(Uint8ClampedArray.from(png.data), png.width, png.height);
//console.log('code==>',code);
const qrCodeText = code?.data;
if (!qrCodeText)
  throw new Error('QR Code Text could not be extracted from PNG image');
console.log('QR Code Text FROM PNG:==> ', qrCodeText);