const fs = require('fs');
 
// path dari output text 
const writableStream = fs.createWriteStream('./filesystem/output.txt');
 
// isi text
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!');