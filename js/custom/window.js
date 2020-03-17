//colour:240
Blockly.Blocks['window_getSimpleWindowBuilder'] = {
  init: function() {
    this.jsonInit({
      "message0": '构造一个标题为 %1 内容为 %2 的简单窗口管理器',
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
      "tooltip": "构造简单窗口管理器(getSimpleWindowBuilder)",
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
      "message0": '向简单窗口 %1 添加文本为 %2 图片路径为 %3 的按钮',
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
      "tooltip": "添加按钮(buildButton)",
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
      "message0": '使用 %1 给玩家 %2 发送窗口并回调 %3 函数',
      "args0": [
		{
		  "type": "input_value",
		  "name": "BUILDER",
		  "check": ["SimpleWindowBuilder","ModalWindowBuilder"]
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
      "tooltip": "展示窗口(showToPlayer)",
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
      "message0": '构造一个标题为 %1 内容为 %2 的对话框管理器',
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
      "tooltip": "构造对话框管理器(getModalWindowBuilder)",
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
      "message0": '设置对话框 %1 第一个按钮文本 %2 第二个按钮文本 %3 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "BUILDER",
		  "check": "SimpleWindowBuilder"
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
