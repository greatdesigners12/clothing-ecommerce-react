// Generator function

// to call generator function
function* functionName(){
    return 10
}

// if i call functionName(), nothing happens
functionName()

// but if i call .next()

functionName.next() // it will return the value

// using yield
function* functionName(x){
    yield x;
    yield x + 1;
    return 10;
}
functionName(5) // nothing happen
functionName.next() // print x
functionName.next() // print x + 1
functionName.next() // print 10
