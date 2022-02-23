function receivesAFunction(cb){
    return cb();
}

function callBack(name){
    console.log(`HI ${name}.`)
}

receivesAFunction(callBack);

function returnsANamedFunction(){
    return function name(){
        console.log("Why?");
    }
}

function returnsAnAnonymousFunction (){
    return () => {console.log("Why?");}
}