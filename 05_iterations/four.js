const myObject={
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
    }

    const programming=["cpp","JS","Java","Python"]

    for (const key in programming) {
       //console.log(programming[key]);
            
        }
    const map=new Map()
    map.set('IN','India')
    map.set('USA','United states of America')
    map.set('DE','Germany')
    map.set('IN','india')

    for (const key in map) { //map not itertable
      console.log(key);
            
 }
    