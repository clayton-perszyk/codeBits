// diff(obj1, obj2);
// {added: ["prop3", "prop4.c"]}
// deleted:["prop1", "prop4.a"],
// modified: ["prop2", "prop4.b"]

var obj1  = {
  prop1: 'prop1',
  prop2: 'prop2',
  prop4: {
    a: 'a',
    b: 'b'
  }
}

var obj2  = {
  prop2: 'prop2 modified',
  prop3: 'new prop',
  prop4: {
    b: 'v',
    c: 'c'
  }
}

var obj3  = {
  prop1: 'prop1',
  prop2: 'prop2',
  prop4: {
    a: 'a',
    b: {
      d: "e"
    }
  }
}

var obj4  = {
  prop2: 'prop2 modified',
  prop3: 'new prop',
  prop4: {
    q: "added",
    b: {
      d: "f",
      z: "new"
    },
    c: 'c'
  }
}


function buildProps(props) {
  return props.join(".");
}


function diff(obj1, obj2) {
  var output = {added: [], deleted: [], modified: []};
  var properties = [];

  function doDiff(obj1, obj2, props) {

    for (let prop in obj2) {
      if (obj2.hasOwnProperty(prop) && !obj1.hasOwnProperty(prop)) {
       if (props && props.length > 0) {
            prop = buildProps(props) + "." + prop;
          }
        output.added.push(prop);
      }
     }

    for (let prop in obj1) {
      if (typeof obj2[prop] === 'object' && obj2[prop] !== null) {
        properties.push(prop);
        doDiff(obj1[prop], obj2[prop], properties);
        properties.pop();
      }

      if (!obj2[prop]) {
        if (props && props.length > 0) {
            prop = buildProps(props) + "." + prop;
          }
        output.deleted.push(prop);
      }

      if (obj2.hasOwnProperty(prop)) {
        if (obj2[prop] !== obj1[prop]) {
          if (props && props.length > 0) {
            prop = buildProps(props) + "." + prop;
          }
          output.modified.push(prop);
        }
      }
    }
  }

  doDiff(obj1, obj2);
  console.log(output);
}


// diff(obj1 ,obj2);
diff(obj3 ,obj4);
