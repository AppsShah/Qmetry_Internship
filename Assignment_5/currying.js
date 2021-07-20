//currying is an advance topic in js. a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled
//eg:-
function vol(length,height,width)
{
    return length*height*width
}
console.log(vol(5,10,15))
function volh(length)
{
    return function vol2(height)
    {
        return function vol3(width)
        {
            return length*height*width;
        }
    }
}
console.log(volh(5)(10)(15))
//eg 2:-

function curry(f) {
    return function(a) {
      return function(b) {
        return f+a+b;
      };
    };
  }
  const sum=curry(10);
  console.log(sum(5)(15))