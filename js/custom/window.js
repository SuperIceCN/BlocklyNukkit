//colour:240
Blockly.Blocks['window_getSimpleWindowBuilder'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_5,
      "args0": [
		{
		  "type": "input_value",
		  "name": "TITLE",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "CONTEXT",
		  "check": "String"
		}
      ],
	  "output": "SimpleWindowBuilder",
      "colour": 240,
      "tooltip": window_line_20,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_getSimpleWindowBuilder'] = function(block) {
  var titletmp = Blockly.JavaScript.valueToCode(block, 'TITLE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var contexttmp = Blockly.JavaScript.valueToCode(block, 'CONTEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='window.getSimpleWindowBuilder('+titletmp+','+contexttmp+')';
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['window_buildButton'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_36,
      "args0": [
		{
		  "type": "input_value",
		  "name": "BUILDER",
		  "check": "SimpleWindowBuilder"
		},
		{
		  "type": "input_value",
		  "name": "TEXT",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "URL",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 240,
      "tooltip": window_line_57,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_buildButton'] = function(block) {
  //String or array length.
  var buildertmp = Blockly.JavaScript.valueToCode(block, 'BUILDER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var texttmp = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var urltmp = Blockly.JavaScript.valueToCode(block, 'URL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=buildertmp+".buildButton("+texttmp+","+urltmp+");\n"
  return text;
};
Blockly.Blocks['window_showToPlayer'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_76,
      "args0": [
		{
		  "type": "input_value",
		  "name": "BUILDER",
		  "check": ["SimpleWindowBuilder","ModalWindowBuilder","CustomWindowBuilder"]
		},
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "CALLBACK",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 240,
      "tooltip": window_line_97,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_showToPlayer'] = function(block) {
  //String or array length.
  var buildertmp = Blockly.JavaScript.valueToCode(block, 'BUILDER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var callbacktmp = Blockly.JavaScript.valueToCode(block, 'CALLBACK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=buildertmp+".showToPlayer("+playertmp+","+callbacktmp+");\n"
  return text;
};
Blockly.Blocks['window_getModalWindowBuilder'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_116,
      "args0": [
		{
		  "type": "input_value",
		  "name": "TITLE",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "CONTEXT",
		  "check": "String"
		}
      ],
	  "output": "ModalWindowBuilder",
      "colour": 240,
      "tooltip": window_line_131,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_getModalWindowBuilder'] = function(block) {
  var titletmp = Blockly.JavaScript.valueToCode(block, 'TITLE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var contexttmp = Blockly.JavaScript.valueToCode(block, 'CONTEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='window.getModalWindowBuilder('+titletmp+','+contexttmp+')';
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['window_setModalButtons'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_147,
      "args0": [
		{
		  "type": "input_value",
		  "name": "BUILDER",
		  "check": "ModalWindowBuilder"
		},
		{
		  "type": "input_value",
		  "name": "TEXT1",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "TEXT2",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 240,
      "tooltip": "设置按钮(setButton1&setButton2)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_setModalButtons'] = function(block) {
  //String or array length.
  var buildertmp = Blockly.JavaScript.valueToCode(block, 'BUILDER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text1tmp = Blockly.JavaScript.valueToCode(block, 'TEXT1',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text2tmp = Blockly.JavaScript.valueToCode(block, 'TEXT2',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=buildertmp+".setButton1("+text1tmp+");\n"+buildertmp+".setButton2("+text2tmp+");\n"
  return text;
};
Blockly.Blocks['window_getCustomWindowBuilder'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_187,
      "args0": [
		{
		  "type": "input_value",
		  "name": "TITLE",
		  "check": "String"
		}
      ],
	  "output": "CustomWindowBuilder",
      "colour": 240,
      "tooltip": window_line_197,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_getCustomWindowBuilder'] = function(block) {
  var titletmp = Blockly.JavaScript.valueToCode(block, 'TITLE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='window.getCustomWindowBuilder('+titletmp+')';
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['window_buildLabel'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_211,
      "args0": [
		{
		  "type": "input_value",
		  "name": "BUILDER",
		  "check": "CustomWindowBuilder"
		},
		{
		  "type": "input_value",
		  "name": "TEXT",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 240,
      "tooltip": window_line_227,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_buildLabel'] = function(block) {
  //String or array length.
  var buildertmp = Blockly.JavaScript.valueToCode(block, 'BUILDER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var texttmp = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=buildertmp+".buildLabel("+texttmp+");\n"
  return text;
};
Blockly.Blocks['window_buildInput'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_244,
      "args0": [
		{
		  "type": "input_value",
		  "name": "BUILDER",
		  "check": "CustomWindowBuilder"
		},
		{
		  "type": "input_value",
		  "name": "TEXT",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "PLACEHOLDER",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 240,
      "tooltip": window_line_265,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_buildInput'] = function(block) {
  //String or array length.
  var buildertmp = Blockly.JavaScript.valueToCode(block, 'BUILDER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var texttmp = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var placeholder = Blockly.JavaScript.valueToCode(block, 'PLACEHOLDER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=buildertmp+".buildInput("+texttmp+","+placeholder+");\n"
  return text;
};
Blockly.Blocks['window_buildToggle'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_284,
      "args0": [
		{
		  "type": "input_value",
		  "name": "BUILDER",
		  "check": "CustomWindowBuilder"
		},
		{
		  "type": "input_value",
		  "name": "TEXT",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 240,
      "tooltip": window_line_300,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_buildToggle'] = function(block) {
  //String or array length.
  var buildertmp = Blockly.JavaScript.valueToCode(block, 'BUILDER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var texttmp = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=buildertmp+".buildToggle("+texttmp+");\n"
  return text;
};
Blockly.Blocks['window_buildDropdown'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_317,
      "args0": [
		{
		  "type": "input_value",
		  "name": "BUILDER",
		  "check": "CustomWindowBuilder"
		},
		{
		  "type": "input_value",
		  "name": "TEXT",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "INNER",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 240,
      "tooltip": window_line_338,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_buildDropdown'] = function(block) {
  //String or array length.
  var buildertmp = Blockly.JavaScript.valueToCode(block, 'BUILDER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var texttmp = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var innertmp = Blockly.JavaScript.valueToCode(block, 'INNER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=buildertmp+".buildDropdown("+texttmp+","+innertmp+");\n"
  return text;
};
Blockly.Blocks['window_updateAllScoreBoard'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_357,
      "args0": [
		{
		  "type": "input_value",
		  "name": "TITLE",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "CONTEXT",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 240,
      "tooltip": window_line_373,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_updateAllScoreBoard'] = function(block) {
  var titletmp = Blockly.JavaScript.valueToCode(block, 'TITLE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var contexttmp = Blockly.JavaScript.valueToCode(block, 'CONTEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='window.updateAllScoreBoard('+titletmp+','+contexttmp+');\n';
  return text;
};
Blockly.Blocks['window_updateOneScoreBoard'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_389,
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "TITLE",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "CONTEXT",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 240,
      "tooltip": window_line_410,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_updateOneScoreBoard'] = function(block) {
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var titletmp = Blockly.JavaScript.valueToCode(block, 'TITLE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var contexttmp = Blockly.JavaScript.valueToCode(block, 'CONTEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='window.updateOneScoreBoard('+titletmp+','+contexttmp+','+playertmp+');\n';
  return text;
};
Blockly.Blocks['window_STDbuttons'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_428,
      "args0": [
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  [window_line_434, "textures\\ui\\code_makecode_default.png"],
			  [window_line_435, "textures\\ui\\confirm.png"],
			  [window_line_436, "textures\\ui\\crossout.png"],
			  [window_line_437, "textures\\ui\\elipses.png"],
			  [window_line_438, "textures\\ui\\ErrorGlyph.png"],
			  [window_line_439, "textures\\ui\\filledStar.png"],
			  [window_line_440, "textures\\ui\\icon_setting.png"],
			  [window_line_441, "textures\\ui\\icon_steve.png"],
			  [window_line_442, "textures\\ui\\invite_base.png"],
			  [window_line_443, "textures\\ui\\icon_alex.png"],
			  [window_line_444, "textures\\ui\\permissions_op_crown.png"]
		    ]
		}
      ],
	  "output": "String",
      "colour": 240,
      "tooltip": window_line_450,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_STDbuttons'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP");
  var text="'"+optmp+"'";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['window_buildInput2'] = {
  init: function() {
    this.jsonInit({
      "message0": window_line_464,
      "args0": [
		{
		  "type": "input_value",
		  "name": "BUILDER",
		  "check": "CustomWindowBuilder"
		},
		{
		  "type": "input_value",
		  "name": "TEXT",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "PLACEHOLDER",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "DEFAULT",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 240,
      "tooltip": window_line_490,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_buildInput2'] = function(block) {
  //String or array length.
  var buildertmp = Blockly.JavaScript.valueToCode(block, 'BUILDER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var texttmp = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var placeholder = Blockly.JavaScript.valueToCode(block, 'PLACEHOLDER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var defaultholder = Blockly.JavaScript.valueToCode(block, 'DEFAULT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=buildertmp+".buildInput("+texttmp+","+placeholder+","+defaultholder+");\n"
  return text;
};
