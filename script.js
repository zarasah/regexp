'use strict'
/**          Lesson 18
 *  Student ------------ Zara Sahakyan
 *  Date ---------------- 27.04.2022
 **/

/**
 *            Task 1
 *        Find the time
 * 
 * The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00. 
 * Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456.
 * 
 */

const str = ' Breakfast at 09:00 in the room 123:456.';
const regexp = /\b\d\d:\d\d\b/;
const result = str.match(regexp);
console.log(result[0]);  //  09:00

/**
 *            Task 2
 *        Java[^script]
 * 
 * We have a regexp /Java[^script]/.
 * Does it match anything in the string Java? In the string JavaScript?
 * 
 */

const str1 = 'Java';
const str2 = 'JavaScript';
const regexp1 = /Java[^script]/;

console.log(str1.match(regexp1));  //  null
console.log(str2.match(regexp1));  //  [JavaS]

/**
 *            Task 3
 *    Find the time as hh:mm or hh-mm
 */

const string = 'Breakfast at 09:00. Dinner at 21-30';
const regexp2 = /\b\d\d[-:]\d\d\b/g;

console.log(string.match(regexp2));  //  [09:00, 21-30]

/**
 *            Task 4
 *    How to find an ellipsis "..." ?
 * 
 * Create a regexp to find ellipsis: 3 (or more?) dots in a row.
 * 
 */

const string1 =  'Hello!... How goes?..... Bye ..';
const regexp3 = /\.{3,}/g;
console.log(string1.match(regexp3));  //  ['...', '.....']

/**
 *            Task 5
 *      Regexp for HTML colors
 * 
 * Create a regexp to search HTML-colors written as #ABCDEF: 
 * first # and then 6 hexadecimal characters.
 * 
 */

const colorList = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
const regexp4 = /#[\da-f]{6}\b/gi;

console.log(colorList.match(regexp4));  //  ['#121212', '#AA00ef']

/**
 *            Task 6
 *      A match for /d+? d+?/
 * 
 */

console.log('123 456'.match(/\d+? \d+?/g));  //  ['123 4']

/**
 *            Task 7
 *      Find HTML comments
 * 
 * Find all HTML comments in the text:
 * 
 */

let str3 = `... <!-- My -- comment
test --> ..  <!----> .. <!--mmm>
`;

let reg = /<!--.*?-->/gs;

console.log(str3.match(reg));  //  '<!-- My -- comment \n test -->', '<!---->'

/**
 *            Task 8
 *        Find HTML tags
 * 
 * Create a regular expression to find all (opening and closing) 
 * HTML tags with their attributes.
 * 
 */

 let regexpT = /<[^<>]+>/g;
 let strTag = '<> <a href="/"> <input type="radio" checked> <b>';
 
 console.log( strTag.match(regexpT) ); // ['<a href="/">', '<input type="radio" checked>', '<b>']

/**
 *            Task 9
 *        Check MAC-address
 * 
 * MAC-address of a network interface consists of 6 two-digit hex 
 * numbers separated by a colon. 
 * For instance: '01:32:54:67:89:AB'. 
 * Write a regexp that checks whether a string is MAC-address.
 * 
 */

 let regexpAddress = /^([\dA-Fa-f]{2}:){5}[dA-Fa-f]{2}$/;

 console.log( regexpAddress.test('01:32:54:67:89:AB') ); // true
 
 console.log( regexpAddress.test('0132546789AB') ); // false (no colons)
 
 console.log( regexpAddress.test('01:32:54:67:89') ); // false (5 numbers, must be 6)
 
 console.log( regexpAddress.test('01:32:54:67:89:ZZ') ) // false (ZZ at the end)

/**
 *            Task 10
 *   Find color in the format #abc or #abcdef
 * 
 * Write a RegExp that matches colors in the format #abc or #abcdef. 
 * That is: # followed by 3 or 6 hexadecimal digits.
 * 
 */

 let regexpC = /#([a-f0-9]{3}\b|[a-f0-9]{6}\b)/gi;

 let strColor = "color: #3f3; background-color: #AA00ef; and: #abcd";
 
 console.log( strColor.match(regexpC) ); // #3f3 #AA00ef

/**
 *            Task 11
 *         Find all numbers
 * 
 * Write a regexp that looks for all decimal numbers including integer ones, 
 * with the floating point and negative ones.
 * 
 */

 let regexpNum = /-?\d+(\.\d+)?/g;

 let strNum = "-1.5 0 2 -123.4.";
 
 console.log( strNum.match(regexpNum) ); // [ '-1.5', '0', '2', '-123.4' ]

/**
 *            Task 12
 *         Find all numbers
 * 
 * Write a regexp that looks for all decimal numbers including integer ones, 
 * with the floating point and negative ones.
 * 
 */

function parse(expression) {
    const regexp = /(-?\d+(\.\d+)?)|[-+/*]/g;
    let result = expression.match(regexp);

    return result;
}

let exp1 = '7 + 70';
let exp2 = '1.2 *  5.1';
let exp3 = '  11 -  4';
let exp4 = ' -20 / -5';
let exp5 = '  -3  -  7';

let [firstNum, operator, secondNum] = parse(exp1);

console.log(exp1);
console.log(`The first number is ${firstNum} 
The operator is ${operator} 
The second number is ${secondNum}`);

[firstNum, operator, secondNum] = parse(exp2);

console.log(exp2);
console.log(`The first number is ${firstNum} 
The operator is ${operator} 
The second number is ${secondNum}`);

[firstNum, operator, secondNum] = parse(exp3);

console.log(exp3);
console.log(`The first number is ${firstNum} 
The operator is ${operator} 
The second number is ${secondNum}`);

[firstNum, operator, secondNum] = parse(exp4);

console.log(exp4);
console.log(`The first number is ${firstNum} 
The operator is ${operator} 
The second number is ${secondNum}`);

[firstNum, operator, secondNum] = parse(exp5);

console.log(exp5);
console.log(`The first number is ${firstNum} 
The operator is ${operator} 
The second number is ${secondNum}`);

/**
 *            Task 13
 *      Find programming languages
 * 
 * There are many programming languages, for instance Java, JavaScript, PHP, C, C++. 
 * Create a regexp that finds them in the string Java JavaScript PHP C++ C
 * 
 */

const languages = 'Java JavaScript PHP C++ C';
const regLang = /[a-z\+]+/gi;
const regLang1 = /Java(Script)?|C(\+\+)?|PHP/g;

console.log(languages.match(regLang));  //  ['Java', 'JavaScript', 'PHP', 'C++', 'C']
console.log(languages.match(regLang1));  //  ['Java', 'JavaScript', 'PHP', 'C++', 'C']

/**
 *            Task 14
 *       Find bbtag pairs
 * 
 * A 'bb-tag' looks like [tag]...[/tag], where tag is one of: b, url or quote.
 * 
 */

 let regexpTag = /\[(b|url|quote)\].*\[\/\1\]/g  //  /\[(b|url|quote)\].+?\[\\.+\]/gs;

 let strTags = "..[url][b]http://ya.ru[/b][/url]..";
 console.log( strTags.match(regexpTag) ); // [url][b]http://ya.ru[/b][/url]

/**
 *            Task 15
 *       Find quoted strings
 * 
 * Create a regexp to find strings in double quotes "...".
 * 
 */

let newStr = ' .. "test me" .. "Say \\"Hello\\"!" .. "\\\\ \\"" .. ';
let regexp5 = /"(\\.|[^"\\])*"/g;

console.log(newStr.match(regexp5));  //  ['"test me"', '"Say \\"Hello\\"!"', '"\\\\ \\""']

/**
 *            Task 16
 *       Find the full tag
 * 
 * Write a regexp to find the tag <style...>. It should match the full tag: 
 * it may have no attributes <style> or have several of them <style type="..." id="...">.
 * 
 */

 let re = /<style\b[^<>]*>/g;

 console.log( '<style> <styler> <style test="...">'.match(re) ); // <style>, <style test="...">

/**
 *            Task 17
 *      Find non-negative integers
 * 
 * There's a string of integer numbers. 
 * Create a regexp that looks for only non-negative ones (zero is allowed).
 * 
 */ 

 let re1 = /\b(?<!-)\d+/g;
 
 console.log( "0 12 -5 123 -18".match(re1) ); // 0, 12, 123


/**
 *            Task 18
 *        Insert After Head
 * 
 * We have a string with an HTML Document. 
 * Write a regular expression that inserts <h1>Hello</h1> immediately after <body> tag. 
 * The tag may have attributes.
 * 
 */ 

 let re2 = /<body.*?>/;

 let strH = `
 <html>
   <body style="height: 200px">
   ...
   </body>
 </html>
 `;
 
 strH = strH.replace(re2, `$& <h1>Hello</h1>`);

 console.log(strH);  //  <html>  <body style="height: 200px"><h1>Hello</h1> ... </body> </html>