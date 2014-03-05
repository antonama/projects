var gen = require('randexp');

var $array1 = [];
var $array2 = [];

var _new;

var genArrayBeg = new Date();

//generating arrays for check
for (var i=0; i<1000000; i++) {
	_new = new gen(/[A-C_]{1,10}/).gen();
	$array1.push('csh_da_filter!' + _new); //'csh_da_filter!' + 
	$array2.push('Csh!' + _new); //'Csh!' + 
}
$array2 = shuffle($array2);

var endGenArray = (new Date()) - genArrayBeg;
console.log("Arrays generating: " + endGenArray);

var regexp = /!.+$/;
var counter1 = 0;

var found1, found2;


//checking regular expressions version
var beginRegExp = new Date();

for (var i=0; i<$array1.length; i++) {
	found1 = regexp.exec($array1[i])[0];
	found2 = regexp.exec($array2[i])[0];
	if (found1 === found2) {
		counter1++;
	}
};

var endRegExp = (new Date()) - beginRegExp;

console.log('RegExp: ' + endRegExp);

var counter2 = 0;

var beginSubstr = new Date();

for (var i=0; i<$array1.length; i++) {
	if ($array1[i].substring(13) === $array2[i].substring(3)) {
		counter2++;
	}
};

var endSubstr = (new Date()) - beginSubstr;
console.log('Substring: ' + endSubstr);

var counter3 = 0;

var beginSplit = new Date();

for (var i=0; i<$array1.length; i++) {
	if ($array1[i].split('!')[1] === $array2[i].split('1')[1]) {
		counter3++;
	}
};

var endSplit = (new Date()) - beginSplit;
console.log('Splitting string: ' + endSubstr);

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};