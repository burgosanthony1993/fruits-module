function choice (items){
    const randomIndex = Math.floor(Math.random() * items.length); // Random Index is called here from a fruit
    return items[randomIndex]; // The function returns a random item using the random index
}

function remove (items, item){
    const index = items.indexOf(item);
    if (index > -1 ){
        items.splice(index, 1);
    }
    return items;
}

export {choice, remove};