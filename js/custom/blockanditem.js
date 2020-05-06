//colour:47
Blockly.Blocks['bi_buildBlock'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_5,
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
      "tooltip": blockanditem_line_20,
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
      "message0": blockanditem_line_37,
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
      "tooltip": blockanditem_line_57,
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
      "message0": blockanditem_line_76,
      "args0": [
		{
		  "type": "input_value",
		  "name": "BLOCK",
		  "check": "Blocks"
		}
      ],
	  "output": "Item",
      "colour": 47,
      "tooltip": blockanditem_line_86,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_buildItemFromBlock'] = function(block) {
  //String or array length.
  var blocktmp = Blockly.JavaScript.valueToCode(block, 'BLOCK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.buildItemFromBlock("+blocktmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_block_getId'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_101,
      "args0": [
		{
		  "type": "input_value",
		  "name": "BLOCK",
		  "check": "Blocks"
		}
      ],
	  "output": "Number",
      "colour": 47,
      "tooltip": blockanditem_line_111,
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
Blockly.Blocks['bi_block_getDamage'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_126,
      "args0": [
		{
		  "type": "input_value",
		  "name": "BLOCK",
		  "check": "Blocks"
		}
      ],
	  "output": "Number",
      "colour": 47,
      "tooltip": blockanditem_line_136,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_block_getDamage'] = function(block) {
  //String or array length.
  var blocktmp = Blockly.JavaScript.valueToCode(block, 'BLOCK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=blocktmp+".getDamage()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_setItem'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_151,
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
			  [blockanditem_line_162, "Count"],
		      [blockanditem_line_163, "Damage"],
		      [blockanditem_line_164, "CustomName"]
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
      "tooltip": blockanditem_line_177,
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
      "message0": blockanditem_line_195,
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
			  [blockanditem_line_207, "Count"],
		      [blockanditem_line_208, "Damage"],
		      [blockanditem_line_209, "CustomName"]
		    ]
		}
      ],
	  "output": ["Number","String"],
      "colour": 47,
      "tooltip": blockanditem_line_215,
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
      "message0": blockanditem_line_231,
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
			  [blockanditem_line_242,"level"],
			  ["x", "x"],
		      ["y", "y"],
		      ["z", "z"]
		    ]
		}
      ],
	  "output": ["Number","Level"],
      "colour": 47,
      "tooltip": blockanditem_line_251,
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
Blockly.Blocks['bi_getItemLore'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_267,
      "args0": [
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		}
      ],
	  "output": "String",
      "colour": 47,
      "tooltip": blockanditem_line_277,
      "helpUrl": "#"
    });
  }
};

Blockly.Blocks['bi_setItemLore'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_286,
      "args0": [
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		},
		{
		  "type": "input_value",
		  "name": "VALUE",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 47,
      "tooltip": blockanditem_line_303,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_setItemLore'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var valuetmp = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.setItemLore("+itemtmp+","+valuetmp+");\n"
  return text;
};
Blockly.JavaScript['bi_getItemLore'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getItemLore("+itemtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_addShapelessCraft'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_327,
      "args0": [
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Array"
		},
		{
		  "type": "input_value",
		  "name": "VALUE",
		  "check": "Item"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 47,
      "tooltip": blockanditem_line_343,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_addShapelessCraft'] = function(block) {
  //String or array length.
  var itemstmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var valuetmp = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.addShapelessCraft(Java.to("+itemstmp+",'cn.nukkit.item.Item[]'),"+valuetmp+");\n"
  return text;
};
Blockly.Blocks['bi_addShapedCraft'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_360,
      "args0": [
	    {
	      "type": "input_value",
	      "name": "SHAPE",
	      "check": "Array"
	    },
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		},
		{
		  "type": "input_value",
		  "name": "APPEND",
		  "check": "Array"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 47,
      "tooltip": blockanditem_line_381,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_addShapedCraft'] = function(block) {
  //String or array length.
  var shapetmp = Blockly.JavaScript.valueToCode(block, 'SHAPE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var appendtmp = Blockly.JavaScript.valueToCode(block, 'APPEND',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.addShapedCraft(Java.to("+shapetmp+",'java.lang.String[]'),"+itemtmp+",Java.to("+appendtmp+",'cn.nukkit.item.Item[]'));\n"
  return text;
};
Blockly.Blocks['bi_shapestr'] = {
  init: function() {
    this.jsonInit({
      "message0": ' %1  %2  %3',
      "args0": [
	    {
	      "type": "input_value",
	      "name": "A",
	      "check": "String"
	    },
		{
		  "type": "input_value",
		  "name": "B",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "C",
		  "check": "String"
		}
      ],
	  "output": "String",
      "colour": 47,
	  "inputsInline": true,
      "tooltip": blockanditem_line_421,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_shapestr'] = function(block) {
  //String or array length.
  var atmp = Blockly.JavaScript.valueToCode(block, 'A',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\' \'';
  var btmp = Blockly.JavaScript.valueToCode(block, 'B',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\' \'';
  var ctmp = Blockly.JavaScript.valueToCode(block, 'C',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\' \'';
  var text= atmp+"+"+btmp+"+"+ctmp
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_shapearray'] = {
  init: function() {
    this.jsonInit({
      "message0": ' %1  %2  %3',
      "args0": [
	    {
	      "type": "input_value",
	      "name": "A",
	      "check": "String"
	    },
		{
		  "type": "input_value",
		  "name": "B",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "C",
		  "check": "String"
		}
      ],
	  "output": "Array",
      "colour": 47,
      "tooltip": blockanditem_line_460,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_shapearray'] = function(block) {
  //String or array length.
  var atmp = Blockly.JavaScript.valueToCode(block, 'A',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var btmp = Blockly.JavaScript.valueToCode(block, 'B',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ctmp = Blockly.JavaScript.valueToCode(block, 'C',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text= "["+atmp+","+btmp+","+ctmp+"]"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_addItemEnchant'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_479,
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
			  [blockanditem_line_490,"0"],
			  [blockanditem_line_491, "1"],
		      [blockanditem_line_492, "2"],
		      [blockanditem_line_493, "3"], 
			  [blockanditem_line_494, "4"],
			  [blockanditem_line_495, "5"],
			  [blockanditem_line_496, "6"],
			  [blockanditem_line_497, "7"],
			  [blockanditem_line_498, "8"],
			  [blockanditem_line_499, "9"],
			  [blockanditem_line_500, "10"],
			  [blockanditem_line_501, "11"],
			  [blockanditem_line_502, "12"],
			  [blockanditem_line_503, "13"],
			  [blockanditem_line_504, "14"],
			  [blockanditem_line_505, "15"],
			  [blockanditem_line_506, "16"],
			  [blockanditem_line_507, "17"],
			  [blockanditem_line_508, "18"],
			  [blockanditem_line_509, "19"],
			  [blockanditem_line_510, "20"],
			  [blockanditem_line_511, "21"],
			  [blockanditem_line_512, "22"],
			  [blockanditem_line_513, "23"],
			  [blockanditem_line_514, "24"],
			  [blockanditem_line_515, "25"],
			  [blockanditem_line_516, "26"],
			  [blockanditem_line_517, "27"],
			  [blockanditem_line_518, "28"],
			  [blockanditem_line_519, "29"],
			  [blockanditem_line_520, "30"],
			  [blockanditem_line_521, "31"],
			  [blockanditem_line_522, "32"]
		    ]
		},
		{
		  "type": "input_value",
		  "name": "VALUE",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 47,
      "tooltip": blockanditem_line_535,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_addItemEnchant'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var valuetmp = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var optmp = block.getFieldValue("OP");
  var text="blockitem.addItemEnchant("+itemtmp+","+optmp+","+valuetmp+");\n"
  return text;
  }
Blockly.Blocks['bi_isSame'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_553,
      "args0": [
	    {
	      "type": "input_value",
	      "name": "A",
	      "check": "Item"
	    },
		{
		  "type": "input_value",
		  "name": "B",
		  "check": "Item"
		},
		{
		  "type": "input_value",
		  "name": "DAMAGE",
		  "check": "Boolean"
		},
		{
		  "type": "input_value",
		  "name": "NBT",
		  "check": "Boolean"
		}
      ],
	  "output": "Boolean",
      "colour": 47,
      "tooltip": blockanditem_line_578,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_isSame'] = function(block) {
  //String or array length.
  var atmp = Blockly.JavaScript.valueToCode(block, 'A',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var btmp = Blockly.JavaScript.valueToCode(block, 'B',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var damagetmp = Blockly.JavaScript.valueToCode(block, 'DAMAGE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var nbttmp = Blockly.JavaScript.valueToCode(block, 'NBT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text= atmp+".equals("+btmp+","+damagetmp+","+nbttmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_addFurnaceCraft'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_599,
      "args0": [
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		},
		{
		  "type": "input_value",
		  "name": "VALUE",
		  "check": "Item"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 47,
      "tooltip": blockanditem_line_615,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_addFurnaceCraft'] = function(block) {
  //String or array length.
  var itemstmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var valuetmp = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.addFurnaceCraft("+itemstmp+","+valuetmp+");\n"
  return text;
};
Blockly.Blocks['bi_addBNCraft'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_632,
      "args0": [
		{
		  "type": "input_value",
		  "name": "TYPE",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "DESCRIPTION",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "INPUT",
		  "check": "Array"
		},
		{
		  "type": "input_value",
		  "name": "OUTPUT",
		  "check": "Array"
		},
		{
		  "type": "input_value",
		  "name": "DELAY",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "PERCENT",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 47,
      "tooltip": blockanditem_line_668,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_addBNCraft'] = function(block) {
  //String or array length.
  var typetmp = Blockly.JavaScript.valueToCode(block, 'TYPE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var descriptiontmp = Blockly.JavaScript.valueToCode(block, 'DESCRIPTION',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var inputtmp = Blockly.JavaScript.valueToCode(block, 'INPUT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var outputtmp = Blockly.JavaScript.valueToCode(block, 'OUTPUT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var delaytmp = Blockly.JavaScript.valueToCode(block, 'DELAY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var percenttmp = Blockly.JavaScript.valueToCode(block, 'PERCENT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.addBNCraft("+typetmp+","+descriptiontmp+",Java.to("+inputtmp+",'cn.nukkit.item.Item[]'),Java.to("+outputtmp+",'cn.nukkit.item.Item[]'),"+delaytmp+","+percenttmp+");\n"
  return text;
};
Blockly.Blocks['bi_BNCraftForPlayer'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_693,
      "args0": [
		{
		  "type": "input_value",
		  "name": "TYPE",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 47,
      "tooltip": blockanditem_line_709,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_BNCraftForPlayer'] = function(block) {
  //String or array length.
  var typetmp = Blockly.JavaScript.valueToCode(block, 'TYPE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.openBNCraftForPlayer("+typetmp+","+playertmp+");\n"
  return text;
};
Blockly.Blocks['bi_addToCreativeBar'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_726,
      "args0": [
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 47,
      "tooltip": blockanditem_line_738,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_addToCreativeBar'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.addToCreativeBar("+itemtmp+");\n"
  return text;
};
Blockly.Blocks['bi_getNBTString'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_753,
      "args0": [
	    {
	      "type": "input_value",
	      "name": "ITEM",
	      "check": "Item"
	    }
      ],
	  "output": "String",
      "colour": 47,
	  "inputsInline": true,
      "tooltip": blockanditem_line_764,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_getNBTString'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\' \'';
  var text= "blockitem.getNBTString("+itemtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_putinNBTString'] = {
  init: function() {
    this.jsonInit({
      "message0": blockanditem_line_779,
      "args0": [
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		},
		{
		  "type": "input_value",
		  "name": "NBT",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 47,
      "tooltip": blockanditem_line_796,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bi_putinNBTString'] = function(block) {
  //String or array length.
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var nbttmp = Blockly.JavaScript.valueToCode(block, 'NBT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.putinNBTString("+itemtmp+","+nbttmp+");\n"
  return text;
};

