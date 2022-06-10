function extend(sup, base) {
    console.log(4444444);
    var descriptor = Object.getOwnPropertyDescriptor(
        base.prototype, "constructor"
    );
    console.log('descriptor: ', JSON.stringify(descriptor.value));
    base.prototype = Object.create(sup.prototype);
    console.log('sup.prototype: ', sup.prototype);
    console.log('base.prototype: ', base.prototype);
    var handler = {
      construct: function(target, args) {
        var obj = Object.create(base.prototype);
        console.log('obj1111 ', obj);
        console.log('target, obj, args: ', target, JSON.stringify(target), obj, args);
        this.apply(target, obj, args);
        console.log('obj2222 ', obj);
        return obj;
      },
      apply: function(target, that, args) {
        console.log('target, that, args: ', JSON.stringify(target), that, args);
        sup.apply(that, args);
        console.log('sup.apply(that, args): ', JSON.stringify(sup), sup.apply(that, args));
        base.apply(that, args);
        console.log('base.apply(that, args);: ', JSON.stringify(base), base.apply(that, args));
      }
    };
    // var proxy = new Proxy(base, handler);
    // var proxy = base;
    console.log('proxy: ', JSON.stringify(proxy));
    descriptor.value = proxy;
    Object.defineProperty(base.prototype, "constructor", descriptor);
    console.log('base: ', JSON.stringify(base), base.value);
    return proxy;
  }
  console.log(1111111);
  var Person = function (name) {
    console.log(4.5555555555);
    this.name = name
  };
  Person.prototype.name = 'aaa'
  console.log(2222222);
  var Boy = extend(Person, function (name, age) {
    console.log(5555555555);
    this.age = age;
  });
  
  console.log(333333);
  Boy.prototype.sex = "M";
  console.log('Boy: ', Boy);
  
  console.log(6666666666);
  var Peter = new Boy("Peter", 13);
  console.log(Peter.sex);  // "M"
  console.log(Peter.name); // "Peter"
  console.log(Peter.age);  // 13
//   var Peter = new Boy("aa");
//   console.log(Peter.name); // "Peter"
//   console.log(Peter.age);  // 13