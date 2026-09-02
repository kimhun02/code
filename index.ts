function foo(x:Function):void{
console.log("Foo")
  x()
}
foo(() => {})