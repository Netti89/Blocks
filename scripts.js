for (let i=1; i<20; i++) {
    if (i%2===0){
    document.write(i+'<br/>') }
    }
 
    let printValues = (array) => {
        for (let i = 0; i < array.length; i++) {
          document.write(array[i] +'<br/>');
        }
};

let TheArray=[1,2,3,4,5];

printValues(TheArray);

TheArray.forEach((number) =>
{document.write(number);})