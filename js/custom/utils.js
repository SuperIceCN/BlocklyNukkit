//colour:97
Blockly.Blocks['utils_buildPositionfromPlayer'] = {
  init: function() {
    this.jsonInit({
      "message0": utils_line_5,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Position",
      "colour": 97,
      "tooltip": utils_line_15,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['utils_buildPositionfromPlayer'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="algorithm.buildPositionfromPlayer("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['utils_buildPositionfromBlock'] = {
  init: function() {
    this.jsonInit({
      "message0": utils_line_30,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Blocks"
		}
      ],
	  "output": "Position",
      "colour": 97,
      "tooltip": utils_line_40,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['utils_buildPositionfromBlock'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="algorithm.buildPositionfromBlock("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['utils_buildPositionfromEntity'] = {
  init: function() {
    this.jsonInit({
      "message0": utils_line_55,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Blocks"
		}
      ],
	  "output": "Position",
      "colour": 97,
      "tooltip": utils_line_65,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['utils_buildPositionfromEntity'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="algorithm.buildPositionfromEntity("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['utils_database_databaseOpen'] = {
  init: function() {
    this.jsonInit({
      "message0": utils_line_80,
      "args0": [
		{
		  "type": "input_value",
		  "name": "URL",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "USERNAME",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "PASSWORD",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "TABLE",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": false,
      "colour": 97,
      "tooltip": utils_line_107,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['utils_database_databaseOpen'] = function(block) {
  //String or array length.
  var urltmp = Blockly.JavaScript.valueToCode(block, 'URL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var usernametmp = Blockly.JavaScript.valueToCode(block, 'USERNAME',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var passwordtmp = Blockly.JavaScript.valueToCode(block, 'PASSWORD',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var tabletmp = Blockly.JavaScript.valueToCode(block, 'TABLE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="database.databaseOpen("+urltmp+","+usernametmp+","+passwordtmp+","+tabletmp+");\n"
  return text;
};
Blockly.Blocks['utils_database_databaseUpdate'] = {
  init: function() {
    this.jsonInit({
      "message0": utils_line_128,
      "args0": [
		{
		  "type": "input_value",
		  "name": "STT",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "OBJS",
		  "check": "Array"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": false,
      "colour": 97,
      "tooltip": utils_line_145,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['utils_database_databaseUpdate'] = function(block) {
  //String or array length.
  var stttmp = Blockly.JavaScript.valueToCode(block, 'STT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var objstmp = Blockly.JavaScript.valueToCode(block, 'OBJS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="database.databaseUpdate("+stttmp+",Java.to("+objstmp+",'java.lang.Object[]'));\n"
  return text;
};
Blockly.Blocks['utils_database_databaseQuery'] = { 
  init: function() {
    this.jsonInit({
      "message0": utils_line_162,
      "args0": [
		{
		  "type": "input_value",
		  "name": "STT",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "COL",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "OBJS",
		  "check": "Array"
		}
      ],
	  "output": "Array",
      "colour": 97,
	  "inputsInline": false,
      "tooltip": utils_line_183,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['utils_database_databaseQuery'] = function(block) {
  //String or array length.
  var stttmp = Blockly.JavaScript.valueToCode(block, 'STT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var coltmp = Blockly.JavaScript.valueToCode(block, 'COL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var objstmp = Blockly.JavaScript.valueToCode(block, 'OBJS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="database.databaseQuery("+valtmp+","+coltmp+",Java.to("+objstmp+",'java.lang.Object[]'))";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['utils_setHTMLPlaceholder'] = {
  init: function() {
    this.jsonInit({
      "message0": utils_line_202,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
        },
		{
		  "type": "input_value",
		  "name": "CMD",
		  "check": "String"
		}
      ],
	  "inputsInline": true,
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 97,
      "tooltip": utils_line_219,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['utils_setHTMLPlaceholder'] = function(block) {
  //String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'CMD',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='manager.setHTMLPlaceholder('+argument0+","+argument1+");\n"
  return text;
};
Blockly.Blocks['utils_checkIsBear'] = {
  init: function() {
    this.jsonInit({
      "message0": utils_line_236,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "String",
      "colour": 97,
      "tooltip": utils_line_246,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['utils_checkIsBear'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="manager.checkIsBear("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['utils_getPlayerArea'] = {
  init: function() {
    this.jsonInit({
      "message0": utils_line_261,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "String",
      "colour": 97,
      "tooltip": utils_line_271,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['utils_getPlayerArea'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="manager.getPlayerArea("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['utils_httpRequest'] = {
  init: function() {
    this.jsonInit({
      "message0": utils_line_286,
      "args0": [
		{
		  "type": "input_value",
		  "name": "URL",
		  "check": "String"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  ["GET", "GET"],
		      ["POST", "POST"]
		    ]
		},
		{
		  "type": "input_value",
		  "name": "DATA",
		  "check": "String"
		}
      ],
	  "output": "String",
      "colour": 97,
      "tooltip": utils_line_309,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['utils_httpRequest'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP");
  var urltmp = Blockly.JavaScript.valueToCode(block, 'URL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var datatmp = Blockly.JavaScript.valueToCode(block, 'DATA',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="manager.httpRequest(\""+optmp+"\","+urltmp+","+datatmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
