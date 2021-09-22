export const throttle = (func, wait = 500, execFirstCall) => {
  let timeout = null
  let args
  let firstCallTimestamp


  function throttled(...arg) {
    if (!firstCallTimestamp) firstCallTimestamp = new Date().getTime()
    if (!execFirstCall || !args) {
      args = arg
    }
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    // 以Promise的形式返回函数执行结果
    return new Promise(async(res, rej) => {
      if (new Date().getTime() - firstCallTimestamp >= wait) {
        try {
          console.log(11111)
          const result = await func.apply(this, args)
          res(result)
        } catch (e) {
          rej(e)
        } finally {
          cancel()
        }
      } else {
        timeout = setTimeout(async () => {
          try {
            console.log(2222)
            const result = await func.apply(this, args)
            res(result)
          } catch (e) {
            rej(e)
          } finally {
            cancel()
          }
        }, firstCallTimestamp + wait - new Date().getTime())
      }
    })
  }
  // 允许取消
  function cancel() {
    clearTimeout(timeout)
    args = null
    timeout = null
    firstCallTimestamp = null
  }
  // 允许立即执行
  function flush() {
    cancel()
    return func.apply(this, args)
  }
  throttled.cancel = cancel
  throttled.flush = flush
  return throttled
}
