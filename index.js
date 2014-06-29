var Class = function(option){
   function cons(){
    if(option.hasOwnProperty('initialize')){
	option['initialize'].apply(this,arguments);
    }
    else{
       cons = function(){};
    }  
    for(var key in option){
	if(key !== 'initialize'){
	   cons.prototype[key] = option[key];	   
	}	
     }
  }
  
  return cons;
}

module.exports = Class;
