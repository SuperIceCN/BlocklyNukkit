function registerNewCategory(root,category,color){
	var toolbox = root;
	var tooltext = toolbox.innerHTML;
	var toollines = tooltext.split("\n");
	for(let i=0;i<toollines.length;i++){
		let entry = toollines[i];
		if(entry.indexOf('<category name="拓展">')!=-1){
			entry+=('\n'+'<category name="'+category+'" colour='+color+'>\n</category>\n')
		}
		toollines[i] = entry;
	}
	var outHTML = toollines.join("\n");
	toolbox.innerHTML = outHTML;
}
function addBlockToCategory(root,category,blockname){
	var toolbox = root;
	var tooltext = toolbox.innerHTML;
	var toollines = tooltext.split("\n");
	for(let i=0;i<toollines.length;i++){
		let entry = toollines[i];
		if(entry.startsWith('<category name="'+category+'"')){
			entry+=('\n'+'<block type="'+blockname+'"></block>\n')
		}
		toollines[i] = entry;
	}
	var outHTML = toollines.join("\n");
	toolbox.innerHTML = outHTML;
}
function registerNewBlock(name,initjson,generatefunction){
	Blockly.Blocks[name] = {
	  init: function() {
	    this.jsonInit(initjson);
	  }
	};
	Blockly.JavaScript[name] = function(block) {
	  if(initjson["output"]==null||initjson["output"]==undefined){
		return generatefunction(block);
	  }else{
		var text=generatefunction(block);
		return [text, Blockly.JavaScript.ORDER_MEMBER]; 
	  }
	};
}
function getVariableFromBlock(block,varname){
	return Blockly.JavaScript.valueToCode(block, varname, Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
}