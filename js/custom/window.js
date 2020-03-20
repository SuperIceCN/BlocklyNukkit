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
	  "output": "ModalWindowBuilder",
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
      "message0": '构造一个标题为 %1 的高级窗口管理器',
      "args0": [
		{
		  "type": "input_value",
		  "name": "TITLE",
		  "check": "String"
		}
      ],
	  "output": "CustomWindowBuilder",
      "colour": 240,
      "tooltip": "构造高级窗口管理器(getCustomWindowBuilder)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['window_getModalWindowBuilder'] = function(block) {
  var titletmp = Blockly.JavaScript.valueToCode(block, 'TITLE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='window.getCustomWindowBuilder('+titletmp+')';
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['window_buildLabel'] = {
  init: function() {
    this.jsonInit({
      "message0": '向高级窗口 %1 添加内容为 %2 的文本元素',
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
      "tooltip": "添加文本元素(buildLabel)",
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
      "message0": '向高级窗口 %1 添加标题为 %2 提示语为 %3 的输入框元素',
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
      "tooltip": "添加输入框元素(buildInput)",
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
      "message0": '向高级窗口 %1 添加标题为 %2 的开关元素',
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
      "tooltip": "添加开关元素(buildToggle)",
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
      "message0": '向高级窗口 %1 添加标题为 %2 选择项为 %3 的选择框元素',
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
      "tooltip": "添加选择框元素(buildDropdown)",
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
      "message0": '向全部玩家发送标题 %1 内容 %2 的计分板文本更新',
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
      "tooltip": "全体计分板更新(updateAllScoreBoard)",
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
      "message0": '向玩家 %1 发送标题 %2 内容 %3 的计分板文本更新',
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
      "tooltip": "单独计分板更新(updateOneScoreBoard)",
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