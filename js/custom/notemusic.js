//colour:168
Blockly.Blocks['notemusic_getSongFromFile'] = {
  init: function() {
    this.jsonInit({
      "message0": notemusic_line_5,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "String"
		}
      ],
	  "output": "Song",
      "colour": 168,
      "tooltip": notemusic_line_15,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_getSongFromFile'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic.getSongFromFile("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['notemusic_getSongInfo'] = {
  init: function() {
    this.jsonInit({
      "message0": notemusic_line_30,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Song"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  [notemusic_line_41, "Title"],
			  [notemusic_line_42, "Description"],
			  [notemusic_line_43, "Author"],
			  [notemusic_line_44, "Length"]
		    ]
		}
      ],
	  "output": ["String","Number"],
      "colour": 168,
      "tooltip": notemusic_line_50,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_getSongInfo'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP");
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic.getSong"+optmp+"("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['notemusic_buildRadio'] = {
  init: function() {
    this.jsonInit({
      "message0": notemusic_line_66,
      "args0": [
		{
		  "type": "input_value",
		  "name": "SONG",
		  "check": "Song"
		},
		{
		  "type": "input_value",
		  "name": "LOOP",
		  "check": "Boolean"
		},
		{
		  "type": "input_value",
		  "name": "AUTO",
		  "check": "Boolean"
		}
      ],
	  "output": "Radio",
      "colour": 168,
	  "inputsInline": false,
      "tooltip": notemusic_line_87,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_buildRadio'] = function(block) {
  //String or array length.
  var songtmp = Blockly.JavaScript.valueToCode(block, 'SONG',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var looptmp = Blockly.JavaScript.valueToCode(block, 'LOOP',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var autotmp = Blockly.JavaScript.valueToCode(block, 'AUTO',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic.buildRadio("+songtmp+","+looptmp+","+autotmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['notemusic_makePlayerToRadio'] = {
  init: function() {
    this.jsonInit({
      "message0": notemusic_line_106,
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  [notemusic_line_117, "add"],
			  [notemusic_line_118, "remove"]
		    ]
		},
		{
		  "type": "input_value",
		  "name": "RADIO",
		  "check": "Radio"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 168,
      "tooltip": notemusic_line_131,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_makePlayerToRadio'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP");
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var radiotmp = Blockly.JavaScript.valueToCode(block, 'RADIO',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic."+optmp+"PlayerToRadio("+radiotmp+","+playertmp+");\n"
  return text;
};
Blockly.Blocks['notemusic_getPlayerInRadio'] = {
  init: function() {
    this.jsonInit({
      "message0": notemusic_line_149,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Radio"
		}
      ],
	  "output": "Array",
      "colour": 168,
      "tooltip": notemusic_line_159,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_getPlayerInRadio'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic.getPlayerInRadio("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['notemusic_setRadioStatus'] = {
  init: function() {
    this.jsonInit({
      "message0": notemusic_line_174,
      "args0": [
		{
		  "type": "input_value",
		  "name": "RADIO",
		  "check": "Radio"
		},
		{
		  "type": "input_value",
		  "name": "STATUS",
		  "check": "Boolean"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 168,
      "tooltip": notemusic_line_191,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_setRadioStatus'] = function(block) {
  //String or array length.
  var statustmp = Blockly.JavaScript.valueToCode(block, 'STATUS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var radiotmp = Blockly.JavaScript.valueToCode(block, 'RADIO',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic.setRadioStatus("+radiotmp+","+statustmp+");\n"
  return text;
};
Blockly.Blocks['notemusic_getSongInRadio'] = {
  init: function() {
    this.jsonInit({
      "message0": notemusic_line_208,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Radio"
		}
      ],
	  "output": "Song",
      "colour": 168,
      "tooltip": notemusic_line_218,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_getSongInRadio'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic.getSongInRadio("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
