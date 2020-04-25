//colour:290
Blockly.Blocks['inv_addInv'] = {
  init: function() {
    this.jsonInit({
      "message0": inventory_line_5,
      "args0": [
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  [inventory_line_11, "true"],
		      [inventory_line_12, "false"]
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
      "tooltip": inventory_line_28,
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
  var text="inventory.addInv("+optmp+",Java.to("+itemstmp+",'cn.nukkit.item.Item[]'),"+titletmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['inv_showFakeInv'] = {
  init: function() {
    this.jsonInit({
      "message0": inventory_line_46,
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
      "tooltip": inventory_line_63,
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
      "message0": inventory_line_80,
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
      "tooltip": inventory_line_97,
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
  var text="inventory.editInv("+invtmp+",Java.to("+itemstmp+",'cn.nukkit.item.Item[]'));\n"
  return text;
};
Blockly.Blocks['inv_editInvBySlot'] = {
  init: function() {
    this.jsonInit({
      "message0": inventory_line_114,
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
      "tooltip": inventory_line_136,
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
      "message0": inventory_line_155,
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
      "tooltip": inventory_line_170,
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
      "message0": inventory_line_187,
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
      "tooltip": inventory_line_204,
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
      "message0": inventory_line_221,
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
      "tooltip": inventory_line_238,
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
      "message0": inventory_line_255,
      "args0": [
		{
		  "type": "input_value",
		  "name": "INV",
		  "check": "Inventory"
		}
      ],
	  "output": "Array",
      "colour": 290,
      "tooltip": inventory_line_265,
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
