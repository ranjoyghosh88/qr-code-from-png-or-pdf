//Importing jimp module
var Jimp = require("jimp");
// Importing filesystem module
var fs = require('fs')
// Importing qrcode-reader module
var QrCode = require('qrcode-reader');
const { PNG } = require('pngjs');
const jsQR = require('jsqr');
const exec = require('child_process').exec;
const open = require('open');

var Jimp = require("jimp");
var buffer = fs.readFileSync('./frame (3).png');
const png = PNG.sync.read(buffer);
//console.log('png==>',png,'<===');
const code = jsQR(Uint8ClampedArray.from(png.data), png.width, png.height);
//console.log('code==>',code);
const qrCodeText = code?.data;
if (!qrCodeText)
  throw new Error('QR Code Text could not be extracted from PNG image');
console.log('QR Code Text FROM PNG:==> ', qrCodeText.split('<<>>'), '<<>>' ,qrCodeText.split('<<>>')[0], '<<==>>', qrCodeText.split('<<>>')[1]);
open(qrCodeText.split('<<>>')[0], {app: {name: 'google chrome', arguments: ['--incognito']}});
open(qrCodeText.split('<<>>')[1], {app: {name: 'google chrome', arguments: ['--incognito']}});
