//colour:290
Blockly.Blocks['inv_addInv'] = {
  init: function() {
    this.jsonInit({
      "message0": '构造虚拟 %1 物品栏,物品列表 %2 标题 %3 ',
      "args0": [
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  ["大箱子", "true"],
		      ["小箱子", "false"]
		    ]
		},
		{
		  "type": "input_value",
		  "name": "ITEMS",
		  "check": "Array"
		},
		{
		  "type": "input_value",
		  "name": "TITLE",
		  "check": "String"
		}
      ],
	  "output": "Inventory",
      "colour": 290,
      "tooltip": "构造物品栏(addInv)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['inv_addInv'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP");
  var itemstmp = Blockly.JavaScript.valueToCode(block, 'ITEMS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var titletmp = Blockly.JavaScript.valueToCode(block, 'TITLE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.addInv("+optmp+","+itemstmp+","+titletmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['inv_showFakeInv'] = {
  init: function() {
    this.jsonInit({
      "message0": '给玩家 %1 展示虚拟物品栏 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "INV",
		  "check": "Inventory"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 290,
      "tooltip": "给玩家展示虚拟物品栏(showFakeInv)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['inv_showFakeInv'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var invtmp = Blockly.JavaScript.valueToCode(block, 'INV',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.showFakeInv("+playertmp+","+invtmp+");\n"
  return text;
};
Blockly.Blocks['inv_editInv'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置物品栏 %1 所有物品为列表 %2 中的物品',
      "args0": [
		{
		  "type": "input_value",
		  "name": "INV",
		  "check": "Inventory"
		},
		{
		  "type": "input_value",
		  "name": "ITEMS",
		  "check": "Array"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 290,
      "tooltip": "设置物品栏物品(editInv)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['inv_editInv'] = function(block) {
  //String or array length.
  var itemstmp = Blockly.JavaScript.valueToCode(block, 'ITEMS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var invtmp = Blockly.JavaScript.valueToCode(block, 'INV',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.editInv("+invtmp+","+itemstmp+");\n"
  return text;
};
Blockly.Blocks['inv_editInvBySlot'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置物品栏 %1 第 %2 个槽位的物品为 %3 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "INV",
		  "check": "Inventory"
		},
		{
		  "type": "input_value",
		  "name": "SLOT",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 290,
      "tooltip": "设置物品栏物品(editInvBySlot)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['inv_editInvBySlot'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var invtmp = Blockly.JavaScript.valueToCode(block, 'INV',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var slottmp = Blockly.JavaScript.valueToCode(block, 'SLOT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.editInvBySlot("+invtmp+","+slottmp+","+itemtmp+");\n"
  return text;
};
Blockly.Blocks['inv_containsItemInInv'] = {
  init: function() {
    this.jsonInit({
      "message0": '物品栏 %1 是否包含物品 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "INV",
		  "check": "Inventory"
		},
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		}
      ],
	  "output": "Boolean",
      "colour": 290,
      "tooltip": "检查物品(containsItemInInv)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['inv_containsItemInInv'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var invtmp = Blockly.JavaScript.valueToCode(block, 'INV',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.containsItemInInv("+invtmp+","+itemtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['inv_addItemToInv'] = {
  init: function() {
    this.jsonInit({
      "message0": '向物品栏 %1 添加物品 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "INV",
		  "check": "Inventory"
		},
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 290,
      "tooltip": "添加物品栏物品(addItemToInv)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['inv_addItemToInv'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var invtmp = Blockly.JavaScript.valueToCode(block, 'INV',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.addItemToInv("+invtmp+","+itemtmp+");\n"
  return text;
};
Blockly.Blocks['inv_removeItemFromInv'] = {
  init: function() {
    this.jsonInit({
      "message0": '从物品栏 %1 移除物品 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "INV",
		  "check": "Inventory"
		},
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 290,
      "tooltip": "移除物品栏物品(removeItemFromInv)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['inv_removeItemFromInv'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var invtmp = Blockly.JavaScript.valueToCode(block, 'INV',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.removeItemFromInv("+invtmp+","+itemtmp+");\n"
  return text;
};
Blockly.Blocks['inv_getItemsInInv'] = {
  init: function() {
    this.jsonInit({
      "message0": '物品栏 %1 的全部物品列表 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "INV",
		  "check": "Inventory"
		}
      ],
	  "output": "Array",
      "colour": 290,
      "tooltip": "物品列表(getItemsInInv)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['inv_getItemsInInv'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var invtmp = Blockly.JavaScript.valueToCode(block, 'INV',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.getItemsInInv("+invtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};