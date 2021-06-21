/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  // 找到运算符；计算前面两个值的结果；用结果替代这三个的值，递归数组剩余内容
  const operatorList = ['+', '-', '*', '/'];
  let result, operatorInx;
  var evalResult;
  operatorInx = tokens.findIndex(item => operatorList.includes(item))
  // console.log('operatorInx: ', operatorInx);
  if (operatorInx > 0) {
    let operator0 = +tokens[operatorInx-2], operator1 = +tokens[operatorInx-1], operator = tokens[operatorInx]
    operator == '+' ? result = operator0 + operator1 : operator == '-' ? result = operator0 - operator1 : operator == '*' ? result = operator0 * operator1 : result = parseInt(operator0 / operator1) //Math.floor取向小的正数，小于0时值就不是正数部分
    // console.log('result: ', result);
    tokens.splice(operatorInx-2, 3, result)
  }
  // console.log('tokens: ', tokens);
  if (tokens.length > 1) {
    evalRPN(tokens)
  } 
  while (tokens.length == 1) {
    // evalResult = Math.floor(tokens[0]) // 在这里用else return外面收不到
    evalResult = tokens[0] // 在这里用else return外面收不到
    break // 跳出循环，if...else递归无法跳出
  }
  return evalResult
};

tokens0 = ["2","1","+","3","*"]
tokens1 = ["4","13","5","/","+"]
tokens2 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// console.log(evalRPN(tokens0), evalRPN(tokens1), evalRPN(tokens2));
// let c = evalRPN(tokens2)
console.log('c', evalRPN(['18']));

// aa = function() {
//   let b
//   if (false) {
//     // return b[0]
//   } else {
//     b = [1,2,3]
//     return b[1]
//   }
// }
// console.log(aa(1))
// @lc code=end

