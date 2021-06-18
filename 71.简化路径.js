/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  // 找到斜杠中间的路径；顺序添加数据；无数据、一个'.'不管；两个'..'取数据（已经没有数据的话就直接加）；其他情况加数据
  let pathArr = path.split('/'), endArr = []
  pathArr.forEach(pathItem => {
    if (pathItem.length && pathItem != '.') {
      if (pathItem == '..' && endArr.length) {
        endArr.pop()
      }
      if (pathItem != '..') {
        endArr.push(pathItem)
      }
    }
  })
  return '/' + endArr.join('/')
};

// console.log(simplifyPath('/a/../../b/../c//.//'))
// console.log(simplifyPath('/a//b////c/d//././/..'))

// 输入："/a/../../b/../c//.//"
// 输出："/c"

// 输入："/a//b////c/d//././/.."
// 输出："/a/b/c"
// @lc code=end

