# Revisiting Objects

## Required Tasks

- Write an object with field name.

```javascript
  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }

  console.log(obj.name)

  obj.name = 'Hovhannes, Sona';

  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]
```

[Solution](get_set.js)