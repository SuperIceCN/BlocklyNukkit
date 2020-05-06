Blockly.Blocks['pos_getlevelbyname'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_4,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "String"
		}
      ],
	  "output": "Level",
      "colour": 133,
      "tooltip": pos_line_14,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getlevelbyname'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="server.getLevelByName("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_formobject'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_29,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		},
		{
		  "type": "input_value",
		  "name": "X",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "Y",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "Z",
		  "check": "Number"
		}
      ],
	  "output": "Position",
      "colour": 133,
      "tooltip": pos_line_54,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_formobject'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var xtmp = Blockly.JavaScript.valueToCode(block, 'X',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ytmp = Blockly.JavaScript.valueToCode(block, 'Y',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ztmp = Blockly.JavaScript.valueToCode(block, 'Z',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='Java.type("cn.nukkit.level.Position").fromObject(manager.buildvec3('+xtmp+','+ytmp+','+ztmp+'),'+leveltmp+')'
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getx'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_75,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Number",
      "colour": 133,
      "tooltip": pos_line_85,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getx'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getX()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_gety'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_100,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Number",
      "colour": 133,
      "tooltip": pos_line_110,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_gety'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getY()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getz'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_125,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Number",
      "colour": 133,
      "tooltip": pos_line_135,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getz'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getZ()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getlevel'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_150,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Level",
      "colour": 133,
      "tooltip": pos_line_160,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getlevel'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getLevel()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_setlevel'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_175,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "LEVEL",
		  "check": "Level"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": pos_line_192,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setlevel'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'LEVEL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=postmp+".setLevel("+leveltmp+");\n"
  return text;
};
Blockly.Blocks['pos_setxyz'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_209,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "X",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "Y",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "Z",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": pos_line_236,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setxyz'] = function(block) {
  //String or array length.
  var xtmp = Blockly.JavaScript.valueToCode(block, 'X',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ytmp = Blockly.JavaScript.valueToCode(block, 'Y',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ztmp = Blockly.JavaScript.valueToCode(block, 'Z',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=postmp+".setComponents("+xtmp+","+ytmp+","+ztmp+");\n"
  return text;
};
Blockly.Blocks['pos_getsafespawn'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_257,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		}
      ],
	  "output": "Position",
      "colour": 133,
      "tooltip": pos_line_267,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getsafespawn'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getSafeSpawn()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_setspawnlocation'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_282,
      "args0": [
		  {
		  "type": "input_value",
		  "name": "LEVEL",
		  "check": "Level"
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
      "colour": 133,
      "tooltip": pos_line_299,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setspawnlocation'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'LEVEL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=leveltmp+".setSpawnLocation(manager.buildvec3("+postmp+".getX(),"+postmp+".getY(),"+postmp+".getZ()));\n"
  return text;
};
Blockly.Blocks['pos_makeSound'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_316,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "MUSIC",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": pos_line_333,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_makeSound'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'MUSIC',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.makeSound("+postmp+","+leveltmp+");\n"
  return text;
};
Blockly.Blocks['pos_makeExpBall'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_350,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "POINT",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": pos_line_367,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_makeExpBall'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'POINT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.makeExpBall("+postmp+","+leveltmp+");\n"
  return text;
};
Blockly.Blocks['pos_makeDropItem'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_384,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
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
      "colour": 133,
      "tooltip": pos_line_401,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_makeDropItem'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.makeDropItem("+postmp+","+leveltmp+");\n"
  return text;
};
Blockly.Blocks['pos_getBlock'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_418,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Blocks",
      "colour": 133,
      "tooltip": pos_line_428,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getBlock'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getBlock("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getLevelEntities'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_443,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Array",
      "colour": 133,
      "tooltip": pos_line_453,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getLevelEntities'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getLevelEntities("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getLevelPlayers'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_468,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Array",
      "colour": 133,
      "tooltip": pos_line_478,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getLevelPlayers'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getLevelPlayers("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getIsSunny'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_493,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Boolean",
      "colour": 133,
      "tooltip": pos_line_503,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getIsSunny'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getIsSunny("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_isDay'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_518,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Boolean",
      "colour": 133,
      "tooltip": pos_line_528,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_isDay'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.isDay("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_setLevelWeather'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_543,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		    "type": "field_dropdown",
		    "name": "WEATHER",
		    "options": [
			  [pos_line_554, "clear"],
		      [pos_line_555, "rain"],
		      [pos_line_556, "thunder"]
		    ]
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": pos_line_564,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setLevelWeather'] = function(block) {
  //String or array length.
  var weathertmp = block.getFieldValue("WEATHER");
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.setLevelWeather("+postmp+",'"+weathertmp+"');\n"
  return text;
};
Blockly.Blocks['pos_setBlock'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_580,
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
		},
		{
		  "type": "input_value",
		  "name": "PAR",
		  "check": "Boolean"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": pos_line_602,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setBlock'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'BLOCK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var partmp = Blockly.JavaScript.valueToCode(block, 'PAR',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.setBlock("+postmp+","+leveltmp+","+partmp+");\n"
  return text;
};
Blockly.Blocks['pos_getBlockInv'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_621,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Inventory",
      "colour": 133,
      "tooltip": pos_line_631,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getBlockInv'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.getBlockInv("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_setBlockInv'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_646,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
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
      "colour": 133,
      "tooltip": pos_line_663,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setBlockInv'] = function(block) {
  //String or array length.
  var invtmp = Blockly.JavaScript.valueToCode(block, 'INV',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.setBlockInv("+postmp+","+invtmp+");\n"
  return text;
};
Blockly.Blocks['pos_loadlevel'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_680,
      "args0": [
		{
		  "type": "input_value",
		  "name": "LEVEL",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": pos_line_692,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_loadlevel'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'LEVEL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="world.loadLevel("+leveltmp+");\n"
  return text;
};
Blockly.Blocks['pos_genLevel'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_707,
      "args0": [
		{
		  "type": "input_value",
		  "name": "SEED",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "LEVEL",
		  "check": "String"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  [pos_line_723,"NORMAL"],
			  [pos_line_724, "FLAT"],
		      [pos_line_725, "VOID"],
		      [pos_line_726, "NETHER"],
			  [pos_line_727, "SKYLAND"]
		    ]
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": pos_line_734,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_genLevel'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'LEVEL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var seedtmp = Blockly.JavaScript.valueToCode(block, 'SEED',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var optmp = block.getFieldValue("OP");
  var text="world.genLevel("+leveltmp+","+seedtmp+",\""+optmp+"\");\n"
  return text;
};
Blockly.Blocks['pos_getlevelname'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_752,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		}
      ],
	  "output": "String",
      "colour": 133,
      "tooltip": pos_line_762,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getlevelname'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getLevelName("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getDropItems'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_777,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Array",
      "colour": 133,
      "tooltip": pos_line_787,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getDropItems'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getDropItems("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getEntities'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_802,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		}
      ],
	  "output": "Array",
      "colour": 133,
      "tooltip": pos_line_812,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getEntities'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getEntities("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getServerLevels'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_827,
	  "output": "Array",
      "colour": 133,
      "tooltip": pos_line_830,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getServerLevels'] = function(block) {
  //String or array length.
  var text="blockitem.getServerLevels()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getEntityByLevelAndID'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_843,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		},
		{
		  "type": "input_value",
		  "name": "ID",
		  "check": "String"
		}
      ],
	  "output": "Entity",
      "colour": 133,
      "tooltip": pos_line_858,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getEntityByLevelAndID'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var idtmp = Blockly.JavaScript.valueToCode(block, 'ID',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEntityByLevelAndID("+valtmp+","+idtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getLevelFloatingText'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_875,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		}
      ],
	  "output": "Array",
      "colour": 133,
      "tooltip": pos_line_885,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getLevelFloatingText'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getLevelFloatingText("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_4num'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_901,
      "args0": [
		{
		  "type": "input_value",
		  "name": "NUM1",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "NUM2",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "NUM3",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "NUM4",
		  "check": "Number"
		}
      ],
	  "output": "Args",
      "colour": 133,
	  "inputsInline": true,
      "tooltip": pos_line_927,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_4num'] = function(block) {
  //String or array length.
  var num1tmp = Blockly.JavaScript.valueToCode(block, 'NUM1',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var num2tmp = Blockly.JavaScript.valueToCode(block, 'NUM2',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var num3tmp = Blockly.JavaScript.valueToCode(block, 'NUM3',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var num4tmp = Blockly.JavaScript.valueToCode(block, 'NUM4',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=num1tmp+","+num2tmp+","+num3tmp+","+num4tmp;
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_setSkyLandGenerator'] = {
  init: function() {
    this.jsonInit({
      "message0": pos_line_948,
      "args0": [
		{
		  "type": "input_value",
		  "name": "SEAHEIGHT",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "MOVEY",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "ENABLEORE",
		  "check": "Boolean"
		},
		{
		  "type": "input_value",
		  "name": "COAL",
		  "check": "Args"
		},
		{
		  "type": "input_value",
		  "name": "IRON",
		  "check": "Args"
		},
		{
		  "type": "input_value",
		  "name": "REDSTONE",
		  "check": "Args"
		},
		{
		  "type": "input_value",
		  "name": "LAPIS",
		  "check": "Args"
		},
		{
		  "type": "input_value",
		  "name": "GOLD",
		  "check": "Args"
		},
		{
		  "type": "input_value",
		  "name": "DIAMOND",
		  "check": "Args"
		},
		{
		  "type": "input_value",
		  "name": "DIRT",
		  "check": "Args"
		},
		{
		  "type": "input_value",
		  "name": "GRAVEL",
		  "check": "Args"
		},
		{
		  "type": "input_value",
		  "name": "GRANITE",
		  "check": "Args"
		},
		{
		  "type": "input_value",
		  "name": "DIORITE",
		  "check": "Args"
		},
		{
		  "type": "input_value",
		  "name": "ANDESITE",
		  "check": "Args"
		},
		{
		  "type": "input_value",
		  "name": "ENABLECAVE",
		  "check": "Boolean"
		},
		{
		  "type": "input_value",
		  "name": "ENABLEBIOME",
		  "check": "Boolean"
		},
		{
		  "type": "input_value",
		  "name": "ENABLEOCEAN",
		  "check": "Boolean"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": false,
      "colour": 133,
      "tooltip": pos_line_1040,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setSkyLandGenerator'] = function(block) {
  //String or array length.
  var seaheight = Blockly.JavaScript.valueToCode(block, 'SEAHEIHGHT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var movey = Blockly.JavaScript.valueToCode(block, 'MOVEY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var enableore = Blockly.JavaScript.valueToCode(block, 'ENABLEORE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var coal = Blockly.JavaScript.valueToCode(block, 'COAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var iron = Blockly.JavaScript.valueToCode(block, 'IRON',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var redstone = Blockly.JavaScript.valueToCode(block, 'REDSTONE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var lapis = Blockly.JavaScript.valueToCode(block, 'LAPIS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var gold = Blockly.JavaScript.valueToCode(block, 'GOLD',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var diamond = Blockly.JavaScript.valueToCode(block, 'DIAMOND',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var dirt = Blockly.JavaScript.valueToCode(block, 'DIRT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var gravel = Blockly.JavaScript.valueToCode(block, 'GRAVEL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var granite = Blockly.JavaScript.valueToCode(block, 'GRANITE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var diorite = Blockly.JavaScript.valueToCode(block, 'DIORITE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var andesite = Blockly.JavaScript.valueToCode(block, 'ANDESITE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var enablecave = Blockly.JavaScript.valueToCode(block, 'ENABLECAVE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var enablebiome = Blockly.JavaScript.valueToCode(block, 'ENABLEBIOME',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var enableocean = Blockly.JavaScript.valueToCode(block, 'ENABLEOCEAN',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="world.setSkyLandGenerator("+seaheight+","+enableore+","+coal+","+iron+","+redstone+","+lapis+","+gold+","+diamond+","+dirt+","+gravel+","+granite+","+diorite+","+andesite+","+enablecave+","+enablebiome+","+enableocean+");\n"
  return text;
};
