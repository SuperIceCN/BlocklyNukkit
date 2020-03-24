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
  var text="blockitem.buildItemFromBlock("+blocktmp+")"
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
Blockly.Blocks['bi_getItemLore'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取物品 %1 的lore字符串',
      "args0": [
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		}
      ],
	  "output": "String",
      "colour": 47,
      "tooltip": "获取lore(getItemLore)",
      "helpUrl": "#"
    });
  }
};

Blockly.Blocks['bi_setItemLore'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置物品堆 %1 的lore字符串为 %2 ',
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
      "tooltip": "设置物品堆lore(bi_setItemLore)",
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
      "message0": '无序合成：原料(列表) %1 生成(物品) %2 ',
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
      "tooltip": "添加无序合成(addShapelessCraft)",
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
      "message0": '有序合成：形状 %1 合成结果 %2 追加结果 %3',
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
      "tooltip": "添加有序合成(addShapedCraft)",
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
      "tooltip": "形状(shapestr)",
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
      "tooltip": "形状(shapearray)",
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
      "message0": '向物品堆 %1 添加附魔 %2 等级 %3',
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
			  ["保护","0"],
			  ["火焰保护", "1"],
		      ["跌落保护", "2"],
		      ["爆炸保护", "3"], 
			  ["弹射物保护", "4"],
			  ["荆棘", "5"],
			  ["水下呼吸", "6"],
			  ["深海探索者", "7"],
			  ["水下挖掘", "8"],
			  ["锋利", "9"],
			  ["亡灵杀手", "10"],
			  ["节肢杀手", "11"],
			  ["击退", "12"],
			  ["火焰附加", "13"],
			  ["掠夺", "14"],
			  ["效率", "15"],
			  ["精准采集", "16"],
			  ["耐久", "17"],
			  ["时运", "18"],
			  ["力量", "19"],
			  ["冲击", "20"],
			  ["火矢", "21"],
			  ["无限", "22"],
			  ["海之眷顾", "23"],
			  ["饵钓", "24"],
			  ["冰霜行者", "25"],
			  ["经验修补", "26"],
			  ["绑定诅咒", "27"],
			  ["消失诅咒", "28"],
			  ["穿刺", "29"],
			  ["激流", "30"],
			  ["忠诚", "31"],
			  ["引雷", "32"]
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
      "tooltip": "添加附魔(addItemEnchant)",
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
      "message0": '比较物品是否相同 %1 于 %2 检测数据值 %3 检测nbt %4',
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
      "tooltip": "物品是否一样(isSame)",
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
  var text= "blockitem.isSame("+atmp+","+btmp+","+damagetmp+","+nbttmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bi_addFurnaceCraft'] = {
  init: function() {
    this.jsonInit({
      "message0": '冶炼合成：原料(物品) %1 生成(物品) %2 ',
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
      "tooltip": "添加冶炼合成(addFurnaceCraft)",
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