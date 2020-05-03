//colour:0
Blockly.Blocks['par_drawCircle'] = {
  init: function() {
    this.jsonInit({
      "message0": "在位置 %1 以 %2 为半径用ID为 %3 的粒子以每隔 %4 格放置一个绘制水平圆",
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
      "tooltip": "绘制粒子圆",
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
      "message0": "从位置 %1 到 %2 用ID为 %3 的粒子以每隔 %4 格放置一个绘制直线",
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
      "tooltip": "绘制粒子直线",
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
      "message0": "绘制烟花于位置 %1 颜色码为 %2 是否闪烁 %3 是否留有轨迹 %4 形状码 %5 飞行时间(秒) %6 ",
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
      "tooltip": "绘制粒子烟花",
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
      "message0": "在位置 %1 绘制方块 %2 破碎的粒子",
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
      "tooltip": "绘制方块破碎",
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
      "message0": "在位置 %1 旋转角 %2 绘制mcfunction文件 %3 的粒子工厂自定义粒子 ",
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
      "tooltip": "绘制粒子工厂自定义粒子(无需粒子工厂前置，文件存在function文件夹下)",
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