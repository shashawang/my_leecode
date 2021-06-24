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

var addTwoNumbers = function(l1, l2) {
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  // 获取链表每个值组成字符串，再转成数字，相加，返回结果的链表表示:第一次生成之后，每次传入新数据生成新节点
  let curL1 = l1, strL1 = String(curL1.val), curL2 = l2, strL2 = String(curL2.val)
  while (curL1) {
    curL1 = curL1.next
    strL1+=String(curL1 ? curL1.val : '')
  }
  while (curL2) {
    curL2 = curL2.next
    strL2+=String(curL2 ? curL2.val : '')
  }
  let sum = String(+strL1 + +strL2).split(''), result = {}, currentNode = {}
  // while(i >= 0) {
  for(let i = sum.length - 1; i >= 0 ; i--) {
    console.log('+sum[i]: ', +sum[i]);
    // result = new ListNode(+sum[i])
    currentNode.val = +sum[i]
    if (i > 0) {
      currentNode.next = new ListNode(+sum[i-1])
      if (!result.val && result.val != 0) {
        result = currentNode
        console.log('result:??? ', result);
      } else {
        currentNode = new ListNode(+sum[i-1])
      }
      console.log('result: ', result);
    } else {
      return result
    }
    // if (i == sum.length - 1) {
    
    // if (i == 0) {
    //   console.log('result: 11', result);
    //   return result
    // } else {
    //   result.next = new ListNode(+sum[i-1])
    //   console.log('result: ', result);
    // }

    // let result = new ListNode(+sum[i])
    // result.next = new ListNode(+sum[i-1])
    // if (i == 1) {
    //   console.log('result: 11', result);
    //   return result
    // }
  }
};
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
// addTwoNumbers(l1, l2)
console.log('result', addTwoNumbers(l1, l2));
// @lc code=end

