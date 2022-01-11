function receivesAFunction(callback){
    return callback();
}
receivesAFunction(function () {return "Hi"});
function returnsANamedFunction()
{
    return function doIt() {
        console.log(`NIKE`);
      };
}
function returnsAnAnonymousFunction()
{
    return function () {
        console.log(`Adidas`);
      };
}