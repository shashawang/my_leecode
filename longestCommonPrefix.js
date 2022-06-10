
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs && strs.length > 1) {
		let firstStr = strs[0], commonLetter = '', i = 0
		for(i; i < firstStr.length && strs.every(item => item.includes(commonLetter)); i++) {
			commonLetter = firstStr.slice(0, i+1)
		}
		// 0, '', 
		// 'f', 1
		// 'fl', 2
		// 'flo', 3
		// console.log('i: ', i);
		return firstStr.slice(0, i-1)
	} else if (strs && strs.length == 1) {
		return strs[0]
	} else {
		return ''
	}
};
// 
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["a"]));
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

// 通过次数386,971提交次数995,444

// 链接：https://leetcode-cn.com/problems/longest-common-prefix

