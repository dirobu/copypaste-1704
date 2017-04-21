var copypaste = {
	'string' : function(marker, model, str){
		if(arguments.length < 3 || arguments.length > 3){console.warn('copypaste.string(marker,model,str);');}
		else{
			if(marker === null || marker === ''){marker = ' ';}
			var arra = str.split(marker);
			var data = '';
			for(f = 0; f < arra.length; f++){
				if(model.includes('|%|')){arra[f] = model.split('|%|').join(arra[f]);}
				else{arra[f] = arra[f];}
				data+= arra[f];
			}
			return data;
		}
	},
	'array': function(model, arra){
		if(arguments.length < 2 || arguments.length > 2){console.warn('copypaste.array(model,str);');}
		else{
			var data = '';
			for(f = 0; f < arra.length; f++){
				if(model.includes('|%|')){arra[f] = model.split('|%|').join(arra[f]);}
				else{arra[f] = arra[f];}
				data+= arra[f];
			}
			return data;
		}
	},
	'object': function(model,obj){
		if(arguments.length < 2 || arguments.length > 2){console.warn('copypaste.object(model,str);');}
		else{
			var data = '';
			var keys1 = [];
			for(var k1 in obj){keys1.push(k1);}
			for(f1 = 0; f1 < keys1.length; f1++){
				var row = obj[keys1[f1]];
				var keys2 = [];
				for(var k2 in row){keys2.push(k2);}
				var temp = model;
				for(f2 = 0; f2 < keys2.length; f2++){
					if(temp.includes('|%'+keys2[f2]+'|')){
						temp = temp.split('|%'+keys2[f2]+'|').join(obj[keys1[f1]][keys2[f2]]);
					}	    
				}
				data+= temp;
			}
			return data;
		}
	},
	'objectOnly': function(key,only,model,obj){
		if(arguments.length < 4 || arguments.length > 4){console.warn('copypaste.object(key,only,model,str);');}
    	else{
			var data = '';
			var keys1 = [];
			for(var k1 in obj){keys1.push(k1);}
			for(f1 = 0; f1 < keys1.length; f1++){
				var row = obj[keys1[f1]];
				var keys2 = [];
				for(var k2 in row){keys2.push(k2);}
				var temp = model;
				for(f2 = 0; f2 < keys2.length; f2++){
					if(temp.includes('|%'+keys2[f2]+'|')){
						temp = temp.split('|%'+keys2[f2]+'|').join(obj[keys1[f1]][keys2[f2]]);
					}
				}
				if(obj[keys1[f1]][key] == only){
					data+= temp;
				}
    		}
				return data;
		}
	},
	'objectUniqueKey': function(key, model, obj){
		if(arguments.length < 3 || arguments.length > 3){console.warn('copypaste.objectUniqueKey(key,model,str);');}
		else{
			var data = '';
			var keys1 = [];
			var keys2 = [];
			for(var k1 in obj){keys1.push(k1);}
			for(f1 = 0; f1 < keys1.length; f1++){
				var row = obj[keys1[f1]];
				for(var k2 in row){
				  if(k2 == key){keys2.push(row[k2]);console.log(row[k2]+'|'+k2);}
				}
			}
			var tempkeys = [];
			for(f2 = 0; f2 < keys2.length; f2++){
				if(tempkeys.indexOf(keys2[f2])){tempkeys.push(keys2[f2]);}
			}
			for(f3 = 0; f3 < tempkeys.length; f3++){
				var temp = model;
				while(temp.includes('|%|')){
					temp = temp.split('|%|').join(tempkeys[f3]);
				}
				data+= temp;
			}
			return data;
		}
	},
	'info': function(){console.log('\n\nFunction: copypaste\nDate: 2017-04-01\nBy: dirobu \n\n');}
}
