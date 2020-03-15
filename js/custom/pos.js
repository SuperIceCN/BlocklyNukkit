Blockly.Blocks['pos_getlevelbyname'] = {
  init: function() {
    this.jsonInit({
      "message0": '根据名称 %1 获取世界',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "String"
		}
      ],
	  "output": "Level",
      "colour": 133,
      "tooltip": "获取世界(getLevelByName)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getlevelbyname'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="server.getLevelByName("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_formobject'] = {
  init: function() {
    this.jsonInit({
      "message0": '构建位置 世界: %1 x: %2 y: %3 z: %4 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		},
		{
		  "type": "input_value",
		  "name": "X",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "Y",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "Z",
		  "check": "Number"
		}
      ],
	  "output": "Position",
      "colour": 133,
      "tooltip": "构建位置(Position.fromObject)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_formobject'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var xtmp = Blockly.JavaScript.valueToCode(block, 'X',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ytmp = Blockly.JavaScript.valueToCode(block, 'Y',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ztmp = Blockly.JavaScript.valueToCode(block, 'Z',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='Java.type("cn.nukkit.level.Position").fromObject(manager.buildvec3('+xtmp+','+ytmp+','+ztmp+'),'+leveltmp+')'
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getx'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 位置的x',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Number",
      "colour": 133,
      "tooltip": "获取位置的x(getX)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getx'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getX()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_gety'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 位置的y',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Number",
      "colour": 133,
      "tooltip": "获取位置的y(getY)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_gety'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getY()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getz'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 位置的z',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Number",
      "colour": 133,
      "tooltip": "获取位置的z(getZ)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getz'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getZ()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getlevel'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 位置的世界',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Level",
      "colour": 133,
      "tooltip": "获取位置的世界(getLevel)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getlevel'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getLevel()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_setlevel'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置位置 %1 的世界为 %2',
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "LEVEL",
		  "check": "Level"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 180,
      "tooltip": "设置世界(setLevel)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setlevel'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'LEVEL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=postmp+".setLevel("+leveltmp+");\n"
  return text;
};