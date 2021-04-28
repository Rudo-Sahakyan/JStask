alert( null || 2 || undefined );//2

alert( alert(1) || 2 || alert(3) );//1,2

alert( 1 && null && 2 );//null

alert( alert(1) && alert(2) );//1 undefined

alert( null || 2 && 3 || 4 );//3

if(age >= 14 && age <= 90)

if(!(age >= 14 && age <= 90))
if(age < 14 || age > 90)

if (-1 || 0) alert( 'first' );//?
if (-1 && 0) alert( 'second' );//?
if (null || -1 && 1) alert( 'third' );//?



5 > 4 //true
"apple" > "pineapple"//false
"2" > "12"//true
undefined == null//true
undefined === null//false
null == "\n0\n"//false
null === +"\n0\n"//false


let name = "Ilya";
alert( `hello ${1}` ); //hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya