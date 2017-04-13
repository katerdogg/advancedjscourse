let a = {}
a.foo = 'hello this is my variable'
a.myfunc = function(callback) {
  callback(this.foo)
}

let b {}
b.foor - 'this is the variable from b'
b.myCallback = function(returnString) {
  console.log('here b.foo', this.foo)
  console.log(returnString)
}

const c = Object.assign(a, b, {bar: 'bar'}, {foo: 'brand new foo'})
console.log(c.foo)

// const x = {
//   foo: 'value',
//   bar: 'bae',
//   [mykey]: 'value'
// }

function test (a, b, c) {
  console.log(a + b + c)
}

test(1, 2, 3)

const newTest = test.bind(undefined, [2, 2])
newTest(3)
