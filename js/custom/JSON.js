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
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
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
	  "inputsInline": false,
      "colour": 97,
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
	  "inputsInline": false,
      "colour": 97,
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