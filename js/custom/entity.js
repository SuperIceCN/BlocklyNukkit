//colour:248
Blockly.Blocks['entity_getDropItemStack'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 掉落物的物品堆',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Entity"
		}
      ],
	  "output": "Item",
      "colour": 248,
      "tooltip": "获取掉落物的物品堆(getDropItemStack)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_getDropItemStack'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getDropItemStack("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_removeEntity'] = {
  init: function() {
    this.jsonInit({
      "message0": '移除生物 %1 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ENTITY",
		  "check": "Entity"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 248,
      "tooltip": "移除生物(removeEntity)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_removeEntity'] = function(block) {
  //String or array length.
  var entitytmp = Blockly.JavaScript.valueToCode(block, 'ENTITY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.removeEntity("+entitytmp+");\n"
  return text;
};
Blockly.Blocks['entity_setEntityName'] = {
  init: function() {
    this.jsonInit({
      "message0": '修改生物 %1 名称为 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ENTITY",
		  "check": "Entity"
		},
		{
		  "type": "input_value",
		  "name": "NAME",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 248,
      "tooltip": "修改名称(setEntityName)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_setEntityName'] = function(block) {
  //String or array length.
  var entitytmp = Blockly.JavaScript.valueToCode(block, 'ENTITY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var nametmp = Blockly.JavaScript.valueToCode(block, 'NAME',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.setEntityName("+entitytmp+","+nametmp+");\n"
  return text;
};
Blockly.Blocks['entity_setEntityNameTagAlwaysVisable'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置生物 %1 名称高亮状态 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ENTITY",
		  "check": "Entity"
		},
		{
		  "type": "input_value",
		  "name": "IS",
		  "check": "Boolean"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 248,
      "tooltip": "设置高亮(setEntityNameTagAlwaysVisable)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_setEntityNameTagAlwaysVisable'] = function(block) {
  //String or array length.
  var entitytmp = Blockly.JavaScript.valueToCode(block, 'ENTITY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var istmp = Blockly.JavaScript.valueToCode(block, 'IS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.setEntityNameTagAlwaysVisable("+entitytmp+","+istmp+");\n"
  return text;
};
Blockly.Blocks['entity_setEntityHealth'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置生物 %1 的 %2 血量 %3 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ENTITY",
		  "check": "Entity"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  ["现有",""],
			  ["最大", "Max"]
		    ]
		},
		{
		  "type": "input_value",
		  "name": "BLOOD",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 248,
      "tooltip": "设置血量(setEntityHealth)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_setEntityHealth'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP");
  var entitytmp = Blockly.JavaScript.valueToCode(block, 'ENTITY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var bloodtmp = Blockly.JavaScript.valueToCode(block, 'BLOOD',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.setEntity"+optmp+"Health("+entitytmp+","+bloodtmp+");\n"
  return text;
};
Blockly.Blocks['entity_getEntityHealth'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 的 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Entity"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  ["现有血量",""],
			  ["最大血量", "Max"]
		    ]
		}
      ],
	  "output": "Number",
      "colour": 248,
      "tooltip": "获取生物血量(getEntityHealth)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_getEntityHealth'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP");
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEntity"+optmp+"Health("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_clearEntityEffect'] = {
  init: function() {
    this.jsonInit({
      "message0": '移除生物 %1 的所有药水状态',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ENTITY",
		  "check": "Entity"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 248,
      "tooltip": "移除生物的所有药水状态(clearEntityEffect)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_clearEntityEffect'] = function(block) {
  //String or array length.
  var entitytmp = Blockly.JavaScript.valueToCode(block, 'ENTITY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.clearEntityEffect("+entitytmp+");\n"
  return text;
};
Blockly.Blocks['entity_addEntityEffect'] = {
  init: function() {
    this.jsonInit({
      "message0": '给生物 %1 添加药水效果 %2 等级 %3 持续 %4 刻',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ENTITY",
		  "check": "Entity"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  ["速度","1"],
			  ["缓慢","2"],
			  ["挖掘急迫","3"],
			  ["挖掘疲劳","4"],
			  ["力量","5"],
			  ["瞬间治疗","6"],
			  ["瞬间伤害","7"],
			  ["跳跃提升","8"],
			  ["反胃","9"],
			  ["生命恢复","10"],
			  ["抗性提升","11"],
			  ["防火","12"],
			  ["水下呼吸","13"],
			  ["隐形","14"],
			  ["失明","15"],
			  ["夜视","16"],
			  ["饥饿","17"],
			  ["虚弱","18"],
			  ["中毒","19"],
			  ["凋零","20"],
			  ["生命提升","21"],
			  ["伤害吸收","22"],
			  ["饱和","23"],
			  ["漂浮","24"],
			  ["中毒(一直到死)","25"],
			  ["潮涌能量","26"],
			  ["缓降","27"]
		    ]
		},
		{
		  "type": "input_value",
		  "name": "LEVEL",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "TICK",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 248,
      "tooltip": "给生物添加药水效果(addEntityEffect)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_addEntityEffect'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP");
  var entitytmp = Blockly.JavaScript.valueToCode(block, 'ENTITY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'LEVEL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ticktmp = Blockly.JavaScript.valueToCode(block, 'TICK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.addEntityEffect("+entitytmp+","+optmp+","+leveltmp+","+ticktmp+");\n"
  return text;
};
Blockly.Blocks['entity_getEntityID'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 的实体标识id',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Entity"
		}
      ],
	  "output": "String",
      "colour": 248,
      "tooltip": "获取生物实体标识id(getEntityID)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_getEntityID'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEntityID("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_getEntityLevel'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取实体 %1 所在的世界',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Entity"
		}
      ],
	  "output": "Level",
      "colour": 248,
      "tooltip": "获取实体所在世界(getEntityLevel)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_getEntityLevel'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEntityLevel("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_getEntityName'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取实体 %1 的名字',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Entity"
		}
      ],
	  "output": "String",
      "colour": 248,
      "tooltip": "获取实体名字(getEntityName)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_getEntityName'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEntityName("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_getEntityPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取实体 %1 的位置',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Entity"
		}
      ],
	  "output": "Position",
      "colour": 248,
      "tooltip": "获取实体位置(getEntityPosition)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_getEntityPosition'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEntityPosition("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_setEntityPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置实体 %1 的位置为 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ENTITY",
		  "check": "Entity"
		},
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 248,
      "tooltip": "设置实体的位置(setEntityPosition)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_setEntityPosition'] = function(block) {
  //String or array length.
  var entitytmp = Blockly.JavaScript.valueToCode(block, 'ENTITY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.setEntityPosition("+entitytmp+","+postmp+");\n"
  return text;
};
Blockly.Blocks['entity_buildFloatingText'] = {
  init: function() {
    this.jsonInit({
      "message0": '构建文字为 %1 位置为 %2 的浮空字实体并每 %3 刻回调函数名为 %4 的函数(entity)',
      "args0": [
		{
		  "type": "input_value",
		  "name": "TEXT",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "TICK",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "CALL",
		  "check": "String"
		}
      ],
	  "output": "Entity",
      "colour": 248,
	  "inputsInline": false,
      "tooltip": "构建浮空字实体(buildFloatingText)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_buildFloatingText'] = function(block) {
  //String or array length.
  var texttmp = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ticktmp = Blockly.JavaScript.valueToCode(block, 'TICK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var calltmp = Blockly.JavaScript.valueToCode(block, 'CALL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.buildFloatingText("+texttmp+","+postmp+","+ticktmp+","+calltmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_startDisplayFloatingText'] = {
  init: function() {
    this.jsonInit({
      "message0": '启动浮空字实体 %1 显示',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ENTITY",
		  "check": "Entity"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 248,
      "tooltip": "启动浮空字(startDisplayFloatingText)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_startDisplayFloatingText'] = function(block) {
  //String or array length.
  var entitytmp = Blockly.JavaScript.valueToCode(block, 'ENTITY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.startDisplayFloatingText("+entitytmp+");\n"
  return text;
};
Blockly.Blocks['entity_BNdeafultFloatingTextCallBack'] = {
  init: function() {
    this.jsonInit({
      "message0": 'BN默认浮空字回调函数',
	  "output": "String",
      "colour": 248,
      "tooltip": "BN默认浮空字回调函数",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_BNdeafultFloatingTextCallBack'] = function(block) {
  //String or array length.
  var text="FloatingTextUpdate";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};