function sum(n) {
    // 回傳 1+2+3+4+...+n 的結果
    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += i;
    }
    return result;
  }
  
  console.log(sum(1)); // 1
  console.log(sum(2)); // 3
  console.log(sum(3)); // 6
  console.log(sum(10)); // 55