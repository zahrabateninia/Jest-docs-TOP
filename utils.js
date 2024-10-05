function sum(a,b){
    return a + b;
}



const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];


  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
  }
  

  const fetchData = () =>{
    return new Promise((resolve) =>{
      setTimeout(()=>{
          resolve('Mr Peanut Butter')
      },1000)
    })
  }
  
module.exports = {
    sum,
    shoppingList,
    compileAndroidCode,
    fetchData
}