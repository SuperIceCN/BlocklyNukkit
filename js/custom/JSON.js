//colour: 82
Blockly.Blocks['json_emptyJSON'] = {
  init: function() {
    this.jsonInit({
      "message0": "空json对象",
	  "output": "json",
      "colour": 78,
      "tooltip": "空json对象",
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
      "message0": "设置 %1 的键 %2 为 %3 ",
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
      "tooltip": "设置json的键值",
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
  var text=jsontmp+'['+Key+'] = '+valuetmp+";\n"
  return text;
};
Blockly.Blocks['json_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "删除 %1 的键 %2 和其对应的值",
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
      "tooltip": "删除json的指定键",
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
      "message0": "获取json对象 %1 键 %2 的值",
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
      "tooltip": "获取键的值",
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
      "message0": "获取json对象 %1 键 %2 的值",
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
      "tooltip": "获取键的值",
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
      "message0": "将json对象 %1 保存到路径 %2 (需以.json结尾)",
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
      "tooltip": "保存json",
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
      "message0": "从路径 %1 读取json对象",
	  "args0": [
	  		{
	  		  "type": "input_value",
	  		  "name": "PATH",
	  		  "check": "String"
	  		}
	  ],
	  "output": "json",
      "colour": 78,
      "tooltip": "从文件获取json对象",
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
