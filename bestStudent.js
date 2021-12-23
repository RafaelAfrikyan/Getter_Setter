
  
  function getBestStudent (obj){
    let check = 0;
    let averageScore = 0;
    let result;
  for (let key in obj) {

 averageScore = obj[key].reduce((acc, el) => {
      return (acc+el) 
        })

    if(averageScore > check){
      check = averageScore;
      result = key;
    }
  }
  
    return result;
  }

  let obj = {
    John: [100, 90, 80],
    Bob: [100, 100, 100]
  }

  console.log(getBestStudent(obj))