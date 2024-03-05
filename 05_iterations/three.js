const arr=[1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const hello='hello World!'
for (const char of hello) {
    //console.log(`Chars are ${char}`);
}

const map=new Map()
map.set('IN','India')
map.set('USA','United states of America')
map.set('DE','Germany')
map.set('IN','india')

//console.log(map);

for (const [key,value] of map) {
    //console.log(key, ':-',value);  //maps are itertable
}

const myObject={
    game1:'NFS',
    game2:'GTA'
}

// for (const [key,value] of myObject) {   //objects are not iteretable
//     console.log(key,':-',value);
// }

