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