//colour:0
Blockly.Blocks['par_drawCircle'] = {
  init: function() {
    this.jsonInit({
      "message0": particle_line_5,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "RADIUS",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "PID",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "SEP",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 0,
	  "inputsInline": false,
      "tooltip": particle_line_32,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['par_drawCircle'] = function(block) {
  //String or array length.
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var radiustmp = Blockly.JavaScript.valueToCode(block, 'RADIUS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var pidtmp = Blockly.JavaScript.valueToCode(block, 'PID',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var septmp = Blockly.JavaScript.valueToCode(block, 'SEP',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="particle.drawCircle("+postmp+","+radiustmp+","+pidtmp+","+septmp+");\n"
  return text;
};
Blockly.Blocks['par_drawLine'] = {
  init: function() {
    this.jsonInit({
      "message0": particle_line_53,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS1",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "POS2",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "SEP",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "PID",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 0,
	  "inputsInline": false,
      "tooltip": particle_line_80,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['par_drawLine'] = function(block) {
  //String or array length.
  var pos1tmp = Blockly.JavaScript.valueToCode(block, 'POS1',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var pos2tmp = Blockly.JavaScript.valueToCode(block, 'POS2',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var pidtmp = Blockly.JavaScript.valueToCode(block, 'PID',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var septmp = Blockly.JavaScript.valueToCode(block, 'SEP',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="particle.drawLine("+pos1tmp+","+pos2tmp+","+septmp+","+pidtmp+");\n"
  return text;
};
Blockly.Blocks['par_drawFireWork'] = {
  init: function() {
    this.jsonInit({
      "message0": particle_line_101,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "COLORNUM",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "FLICK",
		  "check": "Boolean"
		},
		{
		  "type": "input_value",
		  "name": "RTAIL",
		  "check": "Boolean"
		},
		{
		  "type": "input_value",
		  "name": "SHAPE",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "SECOND",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 0,
	  "inputsInline": false,
      "tooltip": particle_line_138,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['par_drawFireWork'] = function(block) {
  //String or array length.
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var colornumtmp = Blockly.JavaScript.valueToCode(block, 'COLORNUM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var flicktmp = Blockly.JavaScript.valueToCode(block, 'FLICK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var trailtmp = Blockly.JavaScript.valueToCode(block, 'TRAIL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var shapetmp = Blockly.JavaScript.valueToCode(block, 'SHAPE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var secondtmp = Blockly.JavaScript.valueToCode(block, 'SECOND',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="particle.drawFireWork("+postmp+","+colornumtmp+","+flicktmp+","+trailtmp+","+shapetmp+","+secondtmp+");\n"
  return text;
};
Blockly.Blocks['par_drawBlockBreak'] = {
  init: function() {
    this.jsonInit({
      "message0": particle_line_163,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "BLOCK",
		  "check": "Blocks"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 0,
	  "inputsInline": true,
      "tooltip": particle_line_180,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['par_drawBlockBreak'] = function(block) {
  //String or array length.
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var blocktmp = Blockly.JavaScript.valueToCode(block, 'BLOCK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="particle.drawBlockBreak("+postmp+","+blocktmp+");\n"
  return text;
};
Blockly.Blocks['par_drawParticleFactoryMcFunction'] = {
  init: function() {
    this.jsonInit({
      "message0": particle_line_197,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "TURN",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "FUN",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 0,
	  "inputsInline": true,
      "tooltip": particle_line_219,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['par_drawParticleFactoryMcFunction'] = function(block) {
  //String or array length.
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var turntmp = Blockly.JavaScript.valueToCode(block, 'TURN',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var funtmp = Blockly.JavaScript.valueToCode(block, 'FUN',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="particle.drawParticleFactoryMcFunction("+funtmp+","+postmp+","+turntmp+");\n"
  return text;
};
