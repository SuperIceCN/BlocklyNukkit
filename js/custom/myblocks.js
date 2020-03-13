
Blockly.Blocks['nkserver'] = {
  init: function() {
    this.jsonInit({
      "message0": 'nk服务器实例',
      "output": "NukkitServer",
      "colour": 20,
      "tooltip": "返回nukkit的服务器实例",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nkserver'] = function(block) {
  return ['server', Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['nklogger'] = {
  init: function() {
    this.jsonInit({
      "message0": 'nk控制台实例',
      "output": "NukkitLogger",
      "colour": 20,
      "tooltip": "返回nukkit的控制台实例",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nklogger'] = function(block) {
  return ['logger', Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['nklogger_info'] = {
  init: function() {
    this.jsonInit({
      "message0": '使用 %1 输出控制台信息 %2',
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "NukkitLogger"
        },
		{
		  "type": "input_value",
		  "name": "OUT",
		  "check": "String"
		}
      ],
	  "inputsInline": true,
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 20,
      "tooltip": "输出控制台信息",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nklogger_info'] = function(block) {
  //String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'OUT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=argument0+".info("+argument1+");"
  return text;
};
Blockly.Blocks['nklogger_warning'] = {
  init: function() {
    this.jsonInit({
      "message0": '使用 %1 输出控制台警告 %2',
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "NukkitLogger"
        },
		{
		  "type": "input_value",
		  "name": "OUT",
		  "check": "String"
		}
      ],
	  "inputsInline": true,
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 20,
      "tooltip": "输出控制台警告",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nklogger_warning'] = function(block) {
  //String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'OUT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=argument0+".warning("+argument1+");"
  return text;
};
Blockly.Blocks['onlineplayers'] = {
  init: function() {
    this.jsonInit({
      "message0": '在线的玩家列表',
      "output": "Array",
      "colour": 260,
      "tooltip": "返回在线的玩家列表",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['onlineplayers'] = function(block) {
  return ['players', Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bnmanager'] = {
  init: function() {
    this.jsonInit({
      "message0": 'BN插件管理器',
      "output": "BNManager",
      "colour": 65,
      "tooltip": "返回BN插件管理器",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bnmanager'] = function(block) {
  return ['manager', Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bn_register_command'] = {
  init: function() {
    this.jsonInit({
      "message0": '注册命令:使用 %1 命令名 %2 描述 %3 回调函数名(sender,args) %4 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "MANAGER",
		  "check": "BNManager"
		},
        {
          "type": "input_value",
          "name": "CMD",
          "check": "String"
        },
		{
		  "type": "input_value",
		  "name": "DESCRIPTION",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "CALLBACK",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 65,
      "tooltip": "注册一个命令",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_register_command'] = function(block) {
  //String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'CMD',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'DESCRIPTION',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument2 = Blockly.JavaScript.valueToCode(block, 'CALLBACK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var managertmp = Blockly.JavaScript.valueToCode(block, 'MANAGER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=managertmp+".createCommand("+argument0+","+argument1+","+argument2+");\n"
  return text;
};
Blockly.Blocks['bn_register_delay'] = {
  init: function() {
    this.jsonInit({
      "message0": '延迟调用:使用 %1 回调函数名(tick) %2 延迟(刻) %3 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "MANAGER",
		  "check": "BNManager"
		},
        {
          "type": "input_value",
          "name": "CALLBACK",
          "check": "String"
        },
		{
		  "type": "input_value",
		  "name": "DELAY",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 65,
      "tooltip": "延时调用一个函数",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_register_delay'] = function(block) {
  //String or array length.
  var argument1 = Blockly.JavaScript.valueToCode(block, 'DELAY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument2 = Blockly.JavaScript.valueToCode(block, 'CALLBACK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var managertmp = Blockly.JavaScript.valueToCode(block, 'MANAGER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=managertmp+".createTask("+argument2+","+argument1+");\n"
  return text;
};
Blockly.Blocks['bn_register_repeat20'] = {
  init: function() {
    this.jsonInit({
      "message0": '后台循环:使用 %1 回调函数名(tick) %2 并每20秒执行一次 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "MANAGER",
		  "check": "BNManager"
		},
        {
          "type": "input_value",
          "name": "CALLBACK",
          "check": "String"
        }
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 65,
      "tooltip": "每20秒循环调用一个函数",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_register_repeat20'] = function(block) {
  //String or array length.
  var argument2 = Blockly.JavaScript.valueToCode(block, 'CALLBACK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var managertmp = Blockly.JavaScript.valueToCode(block, 'MANAGER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=managertmp+".createLoopTask("+argument2+",40);\n"
  return text;
};