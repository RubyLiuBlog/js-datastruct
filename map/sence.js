/**
 * 349. 数组交集
 */
/**
 * 96.86%，13.79%
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const map = new Map()
  nums1.forEach(v => {
    map.set(v,true)
  })
  const result = []
  nums2.forEach(v => {
    if(map.get(v)){
      result.push(v)
      map.delete(v)
    }
  })
  return result
};
/**
 * 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
链接：https://leetcode-cn.com/problems/valid-parentheses
 */
var isValid = function(str) {
  if (str.length % 2 === 1 ){
    return false
  }
  let tmpArr = []
  let map = new Map()
  map.set('(', ')')
  map.set('{', '}')
  map.set('[', ']')
  for(let i in str){
    let c = str[i]
    if(map.has(c)){
      tmpArr.push(c)
    }
    else {
      const t = tmpArr[tmpArr.length-1]
      if(map.get(t) === c)
      {
        tmpArr.pop()
      }
      else {
        return false
      }
    }
  }
  return tmpArr.length === 0
};
/**
 * leet code 1. 两数之和
 */
var twoSum = function(nums, target) {
  let l = nums.length
  let result = []
  for(let i = 0; i < l ; i++){
    for(let j = 0; j < l ; j++){
      if(i === j){
        continue
      }
      if(target === (nums[i]+nums[j])){
        return [i,j]
      }
    }
  }
};
// 96%,5.66%
var twoSum2 = function(nums, target) {
  const map = new Map()
  for(let i = 0; i < nums.length ; i++){
    const n = nums[i]
    const n2 = target-n
    if(map.has(n2)){
      return [map.get(n2),i]
    }else{
      map.set(n,i)
    }
  }
};
/**
 * leetcode 3.无重复最长字串
 * 输入: "pwwkew"
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
* 输入: "abcabcbb"
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
 * 双指针维护一个滑动窗口，用来剪切字串。
 */

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0
  let res = 0
  const map = new Map()
  for(let right = 0; right < s.length; right+=1){
    if(map.has(s[right]) && map.get(s[right]) >= left)    {
      left = map.get(s[right]) + 1
    } 
    res = Math.max(res,right - left+1)
    map.set(s[right],right)
  }
  return res
};

/**
 * 76.最小覆盖子串
 * https://leetcode-cn.com/problems/minimum-window-substring/
 给你一个字符串 S、一个字符串 T 。请你设计一种算法，可以在 O(n) 的时间复杂度内，从字符串 S 里面找出：包含 T 所有字符的最小子串。
 输入：S = "ADOBECODEBANC", T = "ABC"
输出："BANC"
思路： 双指针维护滑动窗口，
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  // 左指针，右指针，需要的字符串的字符和对应个数map
  let l = 0
  let r = 0
  const need = new Map()
  // 遍历 t 放入map
  for(let c of t){
    // 如果已经存在就+1 否则赋值为1
    need.set(c ,need.has(c) ? need.get(c) + 1 : 1)
  }
  // 创建needType 表示map中还剩多少不为1 的字符
  let needType = need.size
  // 遍历 字符串 
  while(r < s.length){
    const c1 = s[r]
    if(need.has(c1)){
      need.set(c1, need.get(c1) - 1)
      if(need.get(c1) === 0) needType -= 1
      
    }
    while(needType === 0){
      if(!res || res.length > s.substring(l,r+1).length) {
        res = s.substring(l,r+1)
      }
      const c2 = s[l]
      if(need.has(c2)){
        need.set(c2,need.get(c2) + 1)
        if(need.get(c2) === 1) needType += 1
      }
      l += 1
    }
    r += 1
  }
  return res
};