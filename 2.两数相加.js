/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */


var addTwoNumbers = function(l1, l2) {
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.addNode = addNode
  }
  function addNode(num) {
    if (!this.head) {
      let node = new ListNode(num)
      this.head = node
    } else {
      // let node = new ListNode(num)
      // node.next = this.he
      // this.head = node
      this.head = new ListNode(num, this.head)
    }
  }
  // 获取链表每个值组成字符串，再转成数字，相加，返回结果的链表表示
  let curL1 = l1, strL1 = String(curL1.val), curL2 = l2, strL2 = String(curL2.val)
  while (curL1) {
    curL1 = curL1.next
    strL1+=String(curL1 ? curL1.val : '')
  }
  while (curL2) {
    curL2 = curL2.next
    strL2+=String(curL2 ? curL2.val : '')
  }
  let sum = String(+strL1 + +strL2).split(''), result, i = sum.length - 1
  // while(i >= 0) {
  for(let i = sum.length - 1; i >= 0 ; i--) {
    console.log('+sum[i]: ', +sum[i]);
    // if (i == 0) {
      //   return new ListNode(+sum[i])
      // } else {
      //   result = new ListNode(+sum[i], +sum[i-1])
      // }
      let result = new ListNode(+sum[i])
      result.next = new ListNode(+sum[i-1])
    }
    console.log('result: ', result);
  return result

};
// l1 = [2,4,3], l2 = [5,6,4]
// addTwoNumbers(l1, l2)






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
//       console.log('curL1: ', curL1);
//       while (curL1) {
//         // console.log('curL1.next: ', curL1.next);
//         curL1 = curL1.next
//         l1Size++
//       }
//       while (curL2) {
//         curL2 = curL2.next
//         l2Size++
//       }
//       console.log('l1Size : l2Size: ', l1Size, l2Size);
//       let larger = l1Size > l2Size ? l1Size : l2Size
//       // console.log('larger: ', larger);
//       // console.log('resultList: ', resultList);
//       while (i < larger+1) {
//         let l1data = l1[l1Size-i] ? l1[l1Size-i].val : 0,
//             l2data = l2[l2Size-i] ? l2[l2Size-i].val : 0;
//         tempResult = toTen ? l1data + l2data + 1 : l1data + l2data
//         console.log('tempResult: ', tempResult);
//         if (tempResult > 9) {
//           result = tempResult - 10
//           toTen = true
//         } else {
//           result = tempResult
//           toTen = false
//         }
//         resultList.addNode(result)
//         i++
//       }
//       return resultList
// };

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
  this.a = 'a'
}
let node1 = new ListNode(2);
let node2 = new ListNode(4);
let node3 = new ListNode(3);
node1.next = node2
node2.next = node3
l1= node1
let node4 = new ListNode(5);
let node5 = new ListNode(6);
let node6 = new ListNode(4);
node4.next = node5
node5.next = node6
l2= node4
addTwoNumbers(l1, l2)
// console.log('result', addTwoNumbers(l1, l2));
// @lc code=end

