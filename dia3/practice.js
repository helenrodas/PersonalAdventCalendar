const inventary = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]
organizeInventory(inventary)

function organizeInventory(inventory) {
    let newListToys={};
    inventory.forEach((objGift) => classifyGift(objGift))
    
    function classifyGift(objGift){
        let toy = {};
        let tempCategory = objGift.category;
        let tempName = objGift.name;
        let tempQuantity = objGift.quantity;

        if(tempCategory in newListToys){
            if(newListToys[tempCategory].hasOwnProperty(tempName)){
                const descriptor1 = Object.getOwnPropertyDescriptor(newListToys[tempCategory], tempName);
                console.log(descriptor1.value);
                tempQuantity = tempQuantity + descriptor1.value;
                newListToys[tempCategory][tempName] += tempQuantity
            }
            newListToys[tempCategory][tempName] = tempQuantity
            return
        }

        newListToys[tempCategory] = {[tempName]: tempQuantity};

    }
    return newListToys
}