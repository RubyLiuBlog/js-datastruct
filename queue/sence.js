/**
 * 场景
 */
/**
 * 933. 最近的请求次数
 * 请你实现 RecentCounter 类：
 * RecentCounter() 初始化计数器，请求数为 0 。
 * int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
 * 保证每次对 ping 的调用都使用比之前更大的 t 值。
 */
var RecentCounter = function() {
  this.q = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.q.push(t)
  while(this.q[0] < t-3000){
    this.q.shift()
  }
  return this.q.length
};
