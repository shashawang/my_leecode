/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = [], rawArr = s.split(''),compare={'(':')', '{': '}', '[': ']'}
  while (rawArr.length) {
    // console.log('rawArr: ', rawArr);
    // console.log('arr: ', arr);
    if (arr.length && compare[rawArr[rawArr.length-1]] == arr[arr.length-1]) {
      rawArr.pop()
      arr.pop()
    } else {
      arr.push(rawArr.pop())
    }
  }
  return arr.length ? false : true
};
console.log(isValid('({[{}]})'))
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end