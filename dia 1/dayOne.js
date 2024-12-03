
    const gifts1 = [3, 1, 2, 3, 4, 2, 5]
   
    const preparedGifts1 = prepareGifts(gifts1)
    console.log(preparedGifts1) 



function prepareGifts(gifts) {

    const tempList = [];
    
    if (gifts.length === 0) {
        console.log("no hay regalos en la lista :(")
      return tempList
    }
    
    gifts.forEach((value) => removeDuplicates(value))
    
    function removeDuplicates(value){
      if (tempList.includes(value)) {
        return tempList
      }else{

        return tempList.push(value)
      }
    }


    tempList.sort(function(a, b){return a - b}); 

    return tempList
  }


