Blockly.Blocks['player_getbyname'] = {
  init: function() {
    this.jsonInit({
      "message0": '根据名称 %1 获取玩家',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "String"
		}
      ],
	  "output": "Player",
      "colour": 180,
      "tooltip": "获取玩家(getPlayer)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_getbyname'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="server.getPlayer("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['player_playedbefore'] = {
  init: function() {
    this.jsonInit({
      "message0": '玩家 %1 以前是否进服过',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Boolean",
      "colour": 180,
      "tooltip": "玩家以前是否进服过(playedBefore)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_playedbefore'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".playedBefore()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['player_getbyuuid'] = {
  init: function() {
    this.jsonInit({
      "message0": '根据uuid %1 获取玩家',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "String"
		}
      ],
	  "output": "Player",
      "colour": 180,
      "tooltip": "获取玩家(getPlayer)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_getbyuuid'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='server.getPlayer(Java.type("java.util.UUID").fromString('+valtmp+"))"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['player_sendMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": '向 %1 发送消息 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "MESSAGE",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 180,
      "tooltip": "向玩家发送消息(sendMessage)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_sendMessage'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var mes = Blockly.JavaScript.valueToCode(block, 'MESSAGE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=playertmp+".sendMessage("+mes+");\n"
  return text;
};
Blockly.Blocks['player_sendPopup'] = {
  init: function() {
    this.jsonInit({
      "message0": '向玩家 %1 发送字符串 %2 作为物品栏提示',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "MESSAGE",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 180,
      "tooltip": "向玩家发送消息(sendMessage)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_sendPopup'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var mes = Blockly.JavaScript.valueToCode(block, 'MESSAGE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=playertmp+".sendPopup("+mes+");\n"
  return text;
};
Blockly.Blocks['player_sendActionBar'] = {
  init: function() {
    this.jsonInit({
      "message0": '向玩家 %1 发送字符串 %2 作为动态提示条',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "MESSAGE",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 180,
      "tooltip": "向玩家发送消息(sendActionBar)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_sendActionBar'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var mes = Blockly.JavaScript.valueToCode(block, 'MESSAGE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=playertmp+".sendActionBar("+mes+");\n"
  return text;
};
Blockly.Blocks['player_setSubtitle'] = {
  init: function() {
    this.jsonInit({
      "message0": '向玩家 %1 发送字符串 %2 作为副标题',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "MESSAGE",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 180,
      "tooltip": "向玩家发送消息(setSubtitle)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_setSubtitle'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var mes = Blockly.JavaScript.valueToCode(block, 'MESSAGE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=playertmp+".setSubtitle("+mes+");\n"
  return text;
};
Blockly.Blocks['player_sendTitle'] = {
  init: function() {
    this.jsonInit({
      "message0": '向玩家 %1 发送字符串 %2 作为标题',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "MESSAGE",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 180,
      "tooltip": "向玩家发送消息(sendTitle)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_sendTitle'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var mes = Blockly.JavaScript.valueToCode(block, 'MESSAGE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=playertmp+".sendTitle("+mes+");\n"
  return text;
};
Blockly.JavaScript['player_setSubtitle'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var mes = Blockly.JavaScript.valueToCode(block, 'MESSAGE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=playertmp+".setSubtitle("+mes+");\n"
  return text;
};
Blockly.Blocks['player_clearTitle'] = {
  init: function() {
    this.jsonInit({
      "message0": '清空玩家 %1 的标题',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 180,
      "tooltip": "清空玩家的标题(clearTitle)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_clearTitle'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=playertmp+".clearTitle();\n"
  return text;
};
Blockly.Blocks['player_gethealth'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取玩家 %1 的血量',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Number",
      "colour": 180,
      "tooltip": "获取玩家血量(getHealth)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_gethealth'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getHealth()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['player_sethealth'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置玩家 %1 的血量为 %2',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "HEALTH",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 180,
      "tooltip": "设置玩家血量(setHealth)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_sethealth'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var healthtmp = Blockly.JavaScript.valueToCode(block, 'HEALTH',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=playertmp+".setHealth("+healthtmp+");\n"
  return text;
};
Blockly.Blocks['player_setmaxhealth'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置玩家 %1 的血量上限为 %2',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "HEALTH",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 180,
      "tooltip": "设置玩家血量上限(setMaxHealth)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_setmaxhealth'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var healthtmp = Blockly.JavaScript.valueToCode(block, 'HEALTH',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=playertmp+".setMaxHealth("+healthtmp+");\n"
  return text;
};
Blockly.Blocks['player_getposition'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取玩家 %1 的位置',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Position",
      "colour": 180,
      "tooltip": "获取玩家的位置(getPosition)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_getposition'] = function(block) {
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getPosition()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['player_teleport'] = {
  init: function() {
    this.jsonInit({
      "message0": '传送玩家 %1 到 %2',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
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
      "colour": 180,
      "tooltip": "传送玩家(teleport)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_teleport'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=playertmp+".teleport("+postmp+");\n"
  return text;
};
Blockly.Blocks['player_buildskin'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置玩家 %1 的皮肤为名称是 %2 的皮肤',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "SKINNAME",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 180,
      "tooltip": "更改皮肤(manager.buildskin)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_buildskin'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var skintmp = Blockly.JavaScript.valueToCode(block, 'SKINNAME',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="manager.buildskin("+playertmp+","+skintmp+");\n"
  return text;
};
Blockly.Blocks['player_buildskinfor'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置玩家 %1 的皮肤为名称是 %2 的皮肤并展示给 %3 玩家',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "SKINNAME",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "TO",
		  "check": "Player"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 180,
      "tooltip": "更改皮肤(manager.buildskinfor)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_buildskinfor'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var skintmp = Blockly.JavaScript.valueToCode(block, 'SKINNAME',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var playerto = Blockly.JavaScript.valueToCode(block, 'TO',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="manager.buildskinfor("+playertmp+","+skintmp+","+playerto+");\n"
  return text;
};
Blockly.Blocks['player_getmoney'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取玩家 %1 的金钱',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Number",
      "colour": 180,
      "tooltip": "获取玩家的金钱(getMoney)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_getmoney'] = function(block) {
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="manager.getMoney("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['player_opmoney'] = {
  init: function() {
    this.jsonInit({
      "message0": ' %1 玩家 %2 的金钱 %3 ',
      "args0": [
		 {
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  ["增加", "add"],
		      ["减少", "reduce"],
		      ["设置", "set"]
		    ]
		},
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "MONEY",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 180,
      "tooltip": "操作金钱(manager.?Money)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_opmoney'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP")
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var moneytmp = Blockly.JavaScript.valueToCode(block, 'MONEY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="manager."+optmp+"Money("+playertmp+","+moneytmp+");\n"
  return text;
};
Blockly.Blocks['player_getItemInHand'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取玩家 %1 手上的物品',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Item",
      "colour": 180,
      "tooltip": "获取玩家手上的物品(getItemInHand)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_getItemInHand'] = function(block) {
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getItemInHand("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['player_setItemInHand'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置玩家 %1 手上的物品为 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
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
      "colour": 180,
      "tooltip": "更改手上物品(setItemInHand)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_setItemInHand'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.setItemInHand("+playertmp+","+itemtmp+");\n"
  return text;
};
