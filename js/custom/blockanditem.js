//colour:47
Blockly.Blocks['bi_buildBlock'] = {
  init: function() {
    this.jsonInit({
      "message0": '构建id %1 特殊值 %2 的方块',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ID",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "DATA",
		  "check": "Number"
		}
      ],
	  "output": "Blocks",
      "colour": 47,
      "tooltip": "构造方块(buildBlock)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_buildBlock'] = function(block) {
  //String or array length.
  var idtmp = Blockly.JavaScript.valueToCode(block, 'ID',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var datatmp = Blockly.JavaScript.valueToCode(block, 'DATA',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.buildBlock("+idtmp+","+datatmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_buildItem'] = {
  init: function() {
    this.jsonInit({
      "message0": '构建id %1 特殊值 %2 数量为 %3 的物品堆',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ID",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "DATA",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "COUNT",
		  "check": "Number"
		}
      ],
	  "output": "Item",
      "colour": 47,
      "tooltip": "构造物品堆(buildItem)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_buildItem'] = function(block) {
  //String or array length.
  var idtmp = Blockly.JavaScript.valueToCode(block, 'ID',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var datatmp = Blockly.JavaScript.valueToCode(block, 'DATA',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var counttmp = Blockly.JavaScript.valueToCode(block, 'COUNT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.buildItem("+idtmp+","+datatmp+","+counttmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_buildItemFromBlock'] = {
  init: function() {
    this.jsonInit({
      "message0": '从方块 %1 构建物品堆',
      "args0": [
		{
		  "type": "input_value",
		  "name": "BLOCK",
		  "check": "Blocks"
		}
      ],
	  "output": "Item",
      "colour": 47,
      "tooltip": "从方块构造物品(buildItemFromBlock)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_buildItemFromBlock'] = function(block) {
  //String or array length.
  var blocktmp = Blockly.JavaScript.valueToCode(block, 'BLOCK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.buildItemFromBlock("+block+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_block_getId'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取方块 %1 的id',
      "args0": [
		{
		  "type": "input_value",
		  "name": "BLOCK",
		  "check": "Blocks"
		}
      ],
	  "output": "Number",
      "colour": 47,
      "tooltip": "获取方块id(getId)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_block_getId'] = function(block) {
  //String or array length.
  var blocktmp = Blockly.JavaScript.valueToCode(block, 'BLOCK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=blocktmp+".getId()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_setItem'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置物品堆 %1 的 %2 为 %3 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  ["数量", "Count"],
		      ["数据值", "Damage"],
		      ["名称", "CustomName"]
		    ]
		},
		{
		  "type": "input_value",
		  "name": "VALUE",
		  "check": ["Number","String"]
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 47,
      "tooltip": "设置物品堆(bi_setItem)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_setItem'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var optmp = block.getFieldValue("OP");
  var valuetmp = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=itemtmp+".set"+optmp+"("+valuetmp+");\n"
  return text;
};
Blockly.Blocks['bi_getItemInfo'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取物品 %1 的 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  ["ID","Id"],
			  ["数量", "Count"],
		      ["数据值", "Damage"],
		      ["名称", "CustomName"]
		    ]
		}
      ],
	  "output": ["Number","String"],
      "colour": 47,
      "tooltip": "获取物品信息(bi_getItemInfo)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_getItemInfo'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var optmp = block.getFieldValue("OP");
  var text=itemtmp+".get"+optmp+"()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_getBlockInfo'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取方块 %1 的 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "BLOCK",
		  "check": "Blocks"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  ["世界","level"],
			  ["x", "x"],
		      ["y", "y"],
		      ["z", "z"]
		    ]
		}
      ],
	  "output": ["Number","Level"],
      "colour": 47,
      "tooltip": "获取方块信息(bi_getBlockInfo)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_getBlockInfo'] = function(block) {
  //String or array length.
  var blocktmp = Blockly.JavaScript.valueToCode(block, 'BLOCK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var optmp = block.getFieldValue("OP");
  var text=blocktmp+"."+optmp;
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};