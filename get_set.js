const obj = {
    _name: [],
    get name() {
      return obj._name
    },
    set name(value) {
     value = value.split(', ');
     for(i = 0; i < value.length; i++){
       obj._name.push([value[i], value[i].length])
     }
    }
  }

  obj.name = 'Hovhannes, Sona';

  console.log(obj._name)