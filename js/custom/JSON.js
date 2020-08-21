//colour: 82
Blockly.Blocks['json_emptyJSON'] = {
  init: function() {
    this.jsonInit({
      "message0": JSON_line_5,
	  "output": "json",
      "colour": 78,
      "tooltip": JSON_line_8,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['json_emptyJSON'] = function(block) {
  //String or array length.
  var text='{"createby": "BlocklyNukkit"}';
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['json_set'] = {
  init: function() {
    this.jsonInit({
      "message0": JSON_line_21,
      "args0": [
		{
		  "type": "input_value",
		  "name": "JSON",
		  "check": "json"
		},
		{
		  "type": "input_value",
		  "name": "KEY",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "VALUE",
		  "check": ["String","Number","Boolean","Array","json"]
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 78,
      "tooltip": JSON_line_43,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['json_set'] = function(block) {
  //String or array length.
  var jsontmp = Blockly.JavaScript.valueToCode(block, 'JSON',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var keytmp = Blockly.JavaScript.valueToCode(block, 'KEY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var valuetmp = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=jsontmp+'['+keytmp+'] = '+valuetmp+";\n"
  return text;
};
Blockly.Blocks['json_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": JSON_line_62,
      "args0": [
		{
		  "type": "input_value",
		  "name": "JSON",
		  "check": "json"
		},
		{
		  "type": "input_value",
		  "name": "KEY",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 78,
      "tooltip": JSON_line_79,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['json_delete'] = function(block) {
  //String or array length.
  var jsontmp = Blockly.JavaScript.valueToCode(block, 'JSON',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var keytmp = Blockly.JavaScript.valueToCode(block, 'KEY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="delete "+jsontmp+"["+keytmp+"];\n"
  return text;
};
Blockly.Blocks['json_get'] = {
  init: function() {
    this.jsonInit({
      "message0": JSON_line_96,
	  "args0": [
	  		{
	  		  "type": "input_value",
	  		  "name": "JSON",
	  		  "check": "json"
	  		},
	  		{
	  		  "type": "input_value",
	  		  "name": "KEY",
	  		  "check": "String"
	  		}
	  ],
	  "output": ["String","Number","Boolean","Array","json"],
      "colour": 78,
      "tooltip": JSON_line_111,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['json_get'] = function(block) {
  //String or array length.
  var jsontmp = Blockly.JavaScript.valueToCode(block, 'JSON',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var keytmp = Blockly.JavaScript.valueToCode(block, 'KEY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=jsontmp+'['+keytmp+']';
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['json_get'] = {
  init: function() {
    this.jsonInit({
      "message0": JSON_line_128,
	  "args0": [
	  		{
	  		  "type": "input_value",
	  		  "name": "JSON",
	  		  "check": "json"
	  		},
	  		{
	  		  "type": "input_value",
	  		  "name": "KEY",
	  		  "check": "String"
	  		}
	  ],
	  "output": ["String","Number","Boolean","Array","json"],
      "colour": 78,
      "tooltip": JSON_line_143,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['json_get'] = function(block) {
  //String or array length.
  var jsontmp = Blockly.JavaScript.valueToCode(block, 'JSON',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var keytmp = Blockly.JavaScript.valueToCode(block, 'KEY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=jsontmp+'['+keytmp+']';
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['json_saveAsJSON'] = {
  init: function() {
    this.jsonInit({
      "message0": JSON_line_160,
      "args0": [
		{
		  "type": "input_value",
		  "name": "JSON",
		  "check": "json"
		},
		{
		  "type": "input_value",
		  "name": "PATH",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 78,
      "tooltip": JSON_line_177,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['json_saveAsJSON'] = function(block) {
  //String or array length.
  var jsontmp = Blockly.JavaScript.valueToCode(block, 'JSON',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var keytmp = Blockly.JavaScript.valueToCode(block, 'PATH',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="manager.writeFile("+keytmp+",manager.formatJSON(JSON.stringify("+jsontmp+")))"
  return text;
};
Blockly.Blocks['json_readFromJSON'] = {
  init: function() {
    this.jsonInit({
      "message0": JSON_line_194,
	  "args0": [
	  		{
	  		  "type": "input_value",
	  		  "name": "PATH",
	  		  "check": "String"
	  		}
	  ],
	  "output": "json",
      "colour": 78,
      "tooltip": JSON_line_204,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['json_readFromJSON'] = function(block) {
  //String or array length.
  var pathtmp = Blockly.JavaScript.valueToCode(block, 'PATH',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='JSON.parse(manager.readFile('+pathtmp+')=="FILE NOT FOUND"?"{}":manager.readFile('+pathtmp+'))';
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};

