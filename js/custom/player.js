Blockly.Blocks['player_getbyname'] = {
  init: function() {
    this.jsonInit({
      "message0": player_line_4,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "String"
		}
      ],
	  "output": "Player",
      "colour": 180,
      "tooltip": player_line_14,
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
      "message0": player_line_29,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Boolean",
      "colour": 180,
      "tooltip": player_line_39,
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
      "message0": player_line_54,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "String"
		}
      ],
	  "output": "Player",
      "colour": 180,
      "tooltip": player_line_64,
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
      "message0": player_line_79,
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
      "tooltip": player_line_95,
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
      "message0": player_line_112,
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
      "tooltip": player_line_128,
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
      "message0": player_line_145,
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
      "tooltip": player_line_161,
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
      "message0": player_line_178,
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
      "tooltip": player_line_194,
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
      "message0": player_line_211,
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
      "tooltip": player_line_227,
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
      "message0": player_line_253,
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
      "tooltip": player_line_264,
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
      "message0": player_line_279,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Number",
      "colour": 180,
      "tooltip": player_line_289,
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
      "message0": player_line_304,
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
      "tooltip": player_line_321,
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
      "message0": player_line_338,
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
      "tooltip": player_line_355,
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
      "message0": player_line_372,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Position",
      "colour": 180,
      "tooltip": player_line_382,
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
      "message0": player_line_396,
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
      "tooltip": player_line_413,
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
      "message0": player_line_430,
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
      "message0": player_line_464,
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
      "message0": player_line_504,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Number",
      "colour": 180,
      "tooltip": player_line_514,
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
      "message0": player_line_528,
      "args0": [
		 {
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  [player_line_534, "add"],
		      [player_line_535, "reduce"],
		      [player_line_536, "set"]
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
      "message0": player_line_572,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Item",
      "colour": 180,
      "tooltip": player_line_582,
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
      "message0": player_line_596,
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
      "tooltip": player_line_613,
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
Blockly.Blocks['player_PlayerIsOP'] = {
  init: function() {
    this.jsonInit({
      "message0": player_line_630,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Boolean",
      "colour": 180,
      "tooltip": player_line_640,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_PlayerIsOP'] = function(block) {
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="manager.PlayerIsOP("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['player_addItemToPlayer'] = {
  init: function() {
    this.jsonInit({
      "message0": player_line_654,
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
      "tooltip": player_line_671,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_addItemToPlayer'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.addItemToPlayer("+playertmp+","+itemtmp+");\n"
  return text;
};
Blockly.Blocks['player_removeItemToPlayer'] = {
  init: function() {
    this.jsonInit({
      "message0": player_line_688,
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
      "tooltip": player_line_705,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_removeItemToPlayer'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.removeItemToPlayer("+playertmp+","+itemtmp+");\n"
  return text;
};
Blockly.Blocks['player_hasItemToPlayer'] = {
  init: function() {
    this.jsonInit({
      "message0": player_line_722,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		},
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		}
      ],
	  "output": "Boolean",
      "colour": 180,
      "tooltip": player_line_737,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_hasItemToPlayer'] = function(block) {
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var itemtmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.hasItemToPlayer("+valtmp+","+itemtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['player_getPlayerInv'] = {
  init: function() {
    this.jsonInit({
      "message0": player_line_753,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Inventory",
      "colour": 180,
      "tooltip": player_line_763,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_getPlayerInv'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.getPlayerInv("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['player_setPlayerInv'] = {
  init: function() {
    this.jsonInit({
      "message0": player_line_778,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
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
      "colour": 180,
      "tooltip": player_line_795,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_setPlayerInv'] = function(block) {
  //String or array length.
  var invtmp = Blockly.JavaScript.valueToCode(block, 'INV',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.setPlayerInv("+postmp+","+invtmp+");\n"
  return text;
};
Blockly.Blocks['player_kickPlayer'] = {
  init: function() {
    this.jsonInit({
      "message0": player_line_812,
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
	  "inputsInline": true,
      "colour": 180,
      "tooltip": player_line_829,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_kickPlayer'] = function(block) {
  //String or array length.
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var mes = Blockly.JavaScript.valueToCode(block, 'MESSAGE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="manager.kickPlayer("+playertmp+","+mes+");\n"
  return text;
};
