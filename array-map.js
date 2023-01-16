function basicTest() {
   let foo = [1, 2, 3, 4];
   console.log(foo);
   foo.map(function(i, b) {
      console.log(b);
      foo[b] = i + 1;
   });
   console.log(foo);
}

module.exports = {basicTest};

