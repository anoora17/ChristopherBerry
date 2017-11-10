

function convert (num){
	let rnum = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
	let  romanNumber= '';

	for (let i in  rnum) {

		//console.log(rnum[i])

		while (num >=rnum[i] ){
					romanNumber += i;
					num-= rnum[i]
		}
	}
	return romanNumber;	
}

console.log(convert(234))