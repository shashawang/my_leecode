/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//       // 遍历每个元素转换成数值，相加，把结果转换为链表；从后至前把两个链表的值相加，记录进位，遍历每组元素，获得最终值
//       function ListNode(val, next) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//         this.addNode = addNode
//       }
//       function addNode(result) {
//         if (!this.head) {
//           let node = new ListNode(result)
//           this.head = node
//         } else {
//           this.head = new ListNode(result, this.head)
//         }
//       }
//       let i = 1, toTen = false, result = 0, tempResult = 0, resultList = new ListNode(), l1Size = 1, l2Size = 1, curL1 = l1.next, curL2 = l2.next
//       // console.log('curL1: ', curL1);
//       while (curL1) {
//         // console.log('curL1.next: ', curL1.next);
//         curL1 = curL1.next
//         l1Size++
//       }
//       while (curL2) {
//         curL2 = curL2.next
//         l2Size++
//       }
//       // console.log('l1Size : l2Size: ', l1Size, l2Size);
//       let larger = l1Size > l2Size ? l1Size : l2Size
//       // console.log('larger: ', larger);
//       // console.log('resultList: ', resultList);
//       while (i < larger+1) {
//         let l1data = l1[l1Size-i] ? l1[l1Size-i].val : 0,
//             l2data = l2[l2Size-i] ? l2[l2Size-i].val : 0;
//         tempResult = toTen ? l1data + l2data + 1 : l1data + l2data
//         if (tempResult > 9) {
//           result = tempResult - 10
//           toTen = true
//         } else {
//           result = tempResult
//           toTen = false
//         }
//         // console.log('result: ', result);
//         resultList.addNode(result)
//         i++
//       }
//       return resultList
// };
var addTwoNumbers = function(l1, l2) {
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.addNode = addNode
  }
  function addNode(result) {
    if (!this.head) {
      let node = new ListNode(result)
      this.head = node
    } else {
      this.head = new ListNode(result, this.head)
    }
  }
  // 传入的是数组的话，直接获取值相加，返回结果的链表表示
  let result = +l1.join('') + +l2.join(''), resultArr = result.split('')
  resultArr.forEach((item, index) => {
    
  })

};
// l1 = [2,4,3], l2 = [5,6,4]
// addTwoNumbers(l1, l2)
// console.log('addTwoNumbers', addTwoNumbers(l1, l2));

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
  this.a = 'a'
}
let node1 = new ListNode(1);
let node2 = new ListNode(2)
node1.next = node2
// console.log('node1: ', node1, node1.next);
// @lc code=end

