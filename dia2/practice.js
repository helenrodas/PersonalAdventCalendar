
createFrame(['midu', 'madeval', 'educalvolpz'])

function createFrame(names) {
    let arrayNames= [];
    let charCounterArray = [];

    names.forEach((name) => charCounterArray.push(name.length))

    let maximo = Math.max.apply(null, charCounterArray);

    let topFrame = '*'.repeat(maximo + 4)

    let middleFrame;
    names.forEach((name) => joinName(name))
    
    function joinName(name){
        
        middleFrame = '* ' + name + ' '.repeat(maximo - name.length) + ' *'
        arrayNames.push(middleFrame)
    }

    let result = topFrame + '\n' + arrayNames.join('\n') + '\n' + topFrame
   
    return result
  }