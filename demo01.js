function takeLongTime() {
    return new Promise(resolve=>{
        setTimeout(()=>resolve('很长时间出现的值...'),5000)
    })
  }
  
  async function test(){
      const v = await takeLongTime();
      console.log(v);
  }
  test();