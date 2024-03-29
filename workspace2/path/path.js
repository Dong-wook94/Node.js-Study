/**
 * 
 */

var path = require("path");

var basename1 = path.basename("c:\\abc\\abc.txt");
console.log("basename1 : ",basename1);

var basename2 = path.basename("c:/abc/abc.txt");
console.log("basename2 : ",basename2);

//절대경로로 path 입력후 파일이름만 얻어올때 basename 사용.

var basename3 = path.basename("abc.txt");
console.log("basename3 : ",basename3);

var dirname1 = path.dirname("c:\\abc\\abc.txt");
console.log("dirname1 :",dirname1);

var dirname2 = path.dirname("abc.txt");//상대경로
console.log("dirname2 :",dirname2);
//상대경로에서 .은 현재위치를 의미 현재폴더라서 .만뜸

var extname1 = path.extname("c:/abc/abc.txt");
console.log("extname1 :",extname1);

var extname2 = path.extname("abc.txt");
console.log("extname2 :",extname2);

var isAbsolute1 = path.isAbsolute("c:/abc/abc.txt");//모든 os 가능
var isAbsolute2 = path.isAbsolute("abc.txt");
var isAbsolute3 = path.isAbsolute("c:\\abc\\abc.txt");
console.log("isAbsolute1 : ",isAbsolute1);
console.log("isAbsolute2 : ",isAbsolute2);
console.log("isAbsolute3 : ",isAbsolute3);

var join = path.join("aaa","bbb","ccc.txt");
console.log("join:",join);

var nomalize = path.normalize("c:\\aaa\\..\\bbb\\ccc.txt");
console.log(nomalize);

