export const objectLength = obj => {
    let index = 0;
    for(let i in obj){
        if(obj.hasOwnProperty(i)) {
            index += 1;
        }
    }
    return index;
}