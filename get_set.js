const obj = {
    name: [],
    get name() {
      return obj.name
    },
    set name(value) {
     value = value.split(' ');
     for(i = 0; i < value.length; i++){
       obj.name.push([value[i], value[i].length])
     }
    }
  }

  console.log(obj.name)

  obj.name = 'Hovhannes, Sona';

  console.log(obj.name)