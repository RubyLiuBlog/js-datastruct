/**
 * 65. 有效数字
 * 验证给定的字符串是否可以解释为十进制数字。
 * 链接: https://leetcode-cn.com/problems/valid-number/
 */
/**
 * 符号 symbol 数字number 指数e 小数点 dot
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const graph = {
    0: {'symbol': 1,'number': 6,'dot': 2},
    1: {'number': 6,'dot': 2},
    2: {'number': 3},
    3: {'number':3,'e': 4},
    4: {'number': 5,'symbol': 7},
    5: {'number': 5},
    6: {'number': 6,'dot': 3,'e':4},
    7: {'number': 5}
  }

};
