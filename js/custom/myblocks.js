
Blockly.Blocks['nkserver'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_5,
      "output": "NukkitServer",
      "colour": 20,
      "tooltip": myblocks_line_8,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nkserver'] = function(block) {
  return ['server', Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['nklogger'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_19,
      "output": "NukkitLogger",
      "colour": 20,
      "tooltip": myblocks_line_22,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nklogger'] = function(block) {
  return ['logger', Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['nkgetConsoleSender'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_33,
      "output": "Sender",
      "colour": 20,
      "tooltip": myblocks_line_36,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nkgetConsoleSender'] = function(block) {
  return ['server.getConsoleSender()', Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['nklogger_info'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_47,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "NukkitLogger"
        },
		{
		  "type": "input_value",
		  "name": "OUT",
		  "check": "String"
		}
      ],
	  "inputsInline": true,
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 20,
      "tooltip": myblocks_line_64,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nklogger_info'] = function(block) {
  //String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'OUT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=argument0+".info("+argument1+");\n"
  return text;
};
Blockly.Blocks['nklogger_warning'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_81,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "NukkitLogger"
        },
		{
		  "type": "input_value",
		  "name": "OUT",
		  "check": "String"
		}
      ],
	  "inputsInline": true,
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 20,
      "tooltip": myblocks_line_98,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nklogger_warning'] = function(block) {
  //String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'OUT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=argument0+".warning("+argument1+");\n"
  return text;
};
Blockly.Blocks['onlineplayers'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_115,
      "output": "Array",
      "colour": 260,
      "tooltip": myblocks_line_118,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['onlineplayers'] = function(block) {
  return ['Java.type("cn.nukkit.Server").getInstance().getOnlinePlayers().values().toArray()', Blockly.JavaScript.ORDER_MEMBER];
};//Java.type("java.util.Arrays").asList(
Blockly.Blocks['bnmanager'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_129,
      "output": "BNManager",
      "colour": 65,
      "tooltip": myblocks_line_132,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bnmanager'] = function(block) {
  return ['manager', Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bn_register_command'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_143,
      "args0": [
		{
		  "type": "input_value",
		  "name": "MANAGER",
		  "check": "BNManager"
		},
        {
          "type": "input_value",
          "name": "CMD",
          "check": "String"
        },
		{
		  "type": "input_value",
		  "name": "DESCRIPTION",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "CALLBACK",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 65,
      "tooltip": myblocks_line_169,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_register_command'] = function(block) {
  //String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'CMD',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'DESCRIPTION',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument2 = Blockly.JavaScript.valueToCode(block, 'CALLBACK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var managertmp = Blockly.JavaScript.valueToCode(block, 'MANAGER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=managertmp+".createCommand("+argument0+","+argument1+","+argument2+");\n"
  return text;
};
Blockly.Blocks['bn_register_delay'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_190,
      "args0": [
		{
		  "type": "input_value",
		  "name": "MANAGER",
		  "check": "BNManager"
		},
        {
          "type": "input_value",
          "name": "CALLBACK",
          "check": "String"
        },
		{
		  "type": "input_value",
		  "name": "DELAY",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 65,
      "tooltip": myblocks_line_211,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_register_delay'] = function(block) {
  //String or array length.
  var argument1 = Blockly.JavaScript.valueToCode(block, 'DELAY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument2 = Blockly.JavaScript.valueToCode(block, 'CALLBACK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var managertmp = Blockly.JavaScript.valueToCode(block, 'MANAGER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=managertmp+".createTask("+argument2+","+argument1+");\n"
  return text;
};
Blockly.Blocks['bn_register_repeat20'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_230,
      "args0": [
		{
		  "type": "input_value",
		  "name": "MANAGER",
		  "check": "BNManager"
		},
        {
          "type": "input_value",
          "name": "CALLBACK",
          "check": "String"
        },
		{
		  "type": "input_value",
		  "name": "DELAY",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 65,
      "tooltip": myblocks_line_251,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_register_repeat20'] = function(block) {
  //String or array length.
  var argument2 = Blockly.JavaScript.valueToCode(block, 'CALLBACK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var managertmp = Blockly.JavaScript.valueToCode(block, 'MANAGER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var delaytmp = Blockly.JavaScript.valueToCode(block, 'DELAY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=managertmp+".createLoopTask("+argument2+","+delaytmp+");\n"
  return text;
};
Blockly.Blocks['bn_config'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_270,
      "args0": [
		{
		  "type": "input_value",
		  "name": "MANAGER",
		  "check": "BNManager"
		},
        {
          "type": "input_value",
          "name": "FILENAME",
          "check": "String"
        },
		{
		  "type": "input_value",
		  "name": "FOLDER",
		  "check": "String"
		}
      ],
	  "output": "Config",
      "colour": 65,
      "tooltip": myblocks_line_290,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_config'] = function(block) {
  //String or array length.
  var argument1 = Blockly.JavaScript.valueToCode(block, 'FILENAME',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  argument1=argument1+"+'.yml'"
  var argument2 = Blockly.JavaScript.valueToCode(block, 'FOLDER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var managertmp = Blockly.JavaScript.valueToCode(block, 'MANAGER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=managertmp+'.createConfig('+managertmp+'.getFile('+argument2+', '+argument1+'), 2)'
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bn_set_config'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_310,
      "args0": [
		{
		  "type": "input_value",
		  "name": "FILE",
		  "check": "Config"
		},
        {
          "type": "input_value",
          "name": "KEY",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": null
        }
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 65,
      "tooltip": myblocks_line_331,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_set_config'] = function(block) {
  //String or array length.
  var argument2 = Blockly.JavaScript.valueToCode(block, 'KEY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument3 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var filetmp = Blockly.JavaScript.valueToCode(block, 'FILE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=filetmp+".set("+argument2+","+argument3+");\n"
  return text;
};
Blockly.Blocks['bn_get_config'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_350,
      "args0": [
		{
		  "type": "input_value",
		  "name": "FILE",
		  "check": "Config"
		},
        {
          "type": "input_value",
          "name": "KEY",
          "check": "String"
        }
      ],
	  "output": null,
      "colour": 65,
      "tooltip": myblocks_line_365,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_get_config'] = function(block) {
  //String or array length.
  var argument2 = Blockly.JavaScript.valueToCode(block, 'KEY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var filetmp = Blockly.JavaScript.valueToCode(block, 'FILE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=filetmp+".get("+argument2+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks['bn_getKeys_config'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_383,
      "args0": [
		{
		  "type": "input_value",
		  "name": "FILE",
		  "check": "Config"
		}
      ],
	  "output": "Array",
      "colour": 65,
      "tooltip": myblocks_line_393,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_getKeys_config'] = function(block) {
  //String or array length.
  var filetmp = Blockly.JavaScript.valueToCode(block, 'FILE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  //var text='Java.type("java.util.Arrays").asList('+filetmp+".getKeys())"
  var text='manager.getAllKeyInConfig('+filetmp+')'
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['bn_save_config'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_409,
      "args0": [
		{
		  "type": "input_value",
		  "name": "FILE",
		  "check": "Config"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 65,
      "tooltip": myblocks_line_420,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_save_config'] = function(block) {
  //String or array length.
  var filetmp = Blockly.JavaScript.valueToCode(block, 'FILE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=filetmp+".save();\n"
  return text;
};
Blockly.Blocks['nk_getname'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_435,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": null
		}
      ],
	  "output": "String",
      "colour": 20,
      "tooltip": myblocks_line_445,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nk_getname'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getName()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
}
Blockly.Blocks['nkdispatchcommand'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_460,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": ["Player","Sender"]
        },
		{
		  "type": "input_value",
		  "name": "CMD",
		  "check": "String"
		}
      ],
	  "inputsInline": true,
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 20,
      "tooltip": myblocks_line_477,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nkdispatchcommand'] = function(block) {
  //String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'CMD',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='server.dispatchCommand('+argument0+","+argument1+");\n"
  return text;
};
Blockly.Blocks['bn_getfunction'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_494,
      "args0": [
		{
		  "type": "input_value",
		  "name": "FILE",
		  "check": "String"
		}
      ],
	  "output": "String",
      "colour": 65,
      "tooltip": myblocks_line_504,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_getfunction'] = function(block) {
  //String or array length.
  var filetmp = Blockly.JavaScript.valueToCode(block, 'FILE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=qp(filetmp,1);
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['nkputEasy'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_519,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
        },
		{
		  "type": "input_value",
		  "name": "CMD",
		  "check": ["String","Number", "Boolean", "Position", "Player", "Item" ,"Blocks"]
		}
      ],
	  "inputsInline": true,
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 20,
      "tooltip": myblocks_line_536,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nkputEasy'] = function(block) {
  //String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'CMD',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='manager.putEasy('+argument0+","+argument1+");\n"
  return text;
};
Blockly.Blocks['nkgetEasy'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_553,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "String"
		},
		{
		    "type": "field_dropdown",
		    "name": "TYPE",
		    "options": [
			  [myblocks_line_564,"String"],
			  [myblocks_line_565, "Number"],
		      [myblocks_line_566, "Boolean"],
		      [myblocks_line_567, "Position"],
			  [myblocks_line_568, "Player"],
			  [myblocks_line_569, "Item"],
			  [myblocks_line_570, "Block"]
		    ]
		}
      ],
	  "output": ["String","Number", "Boolean", "Position", "Player", "Item" ,"Blocks"],
      "colour": 20,
      "tooltip": myblocks_line_576,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nkgetEasy'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var typetmp=block.getFieldValue("TYPE");
  var text="manager.getEasy"+typetmp+"("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
}
Blockly.Blocks['bn_forEachBlockInArea'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_592,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS1",
		  "check": "Position"
		},
        {
          "type": "input_value",
          "name": "POS2",
          "check": "Position"
        },
		{
		  "type": "input_value",
		  "name": "ISAIR",
		  "check": "Boolean"
		},
		{
		  "type": "input_value",
		  "name": "CALLBACK",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 65,
      "tooltip": myblocks_line_618,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_forEachBlockInArea'] = function(block) {
  //String or array length.
  var pos1 = Blockly.JavaScript.valueToCode(block, 'POS1',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var pos2 = Blockly.JavaScript.valueToCode(block, 'POS2',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var isair = Blockly.JavaScript.valueToCode(block, 'ISAIR',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var callback = Blockly.JavaScript.valueToCode(block, 'CALLBACK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="algorithm.forEachBlockInArea("+pos1+","+pos2+","+isair+","+callback+");\n"
  return text;
};
Blockly.Blocks['bn_forLinkedBlock'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_639,
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS1",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "CALLBACK",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 65,
      "tooltip": myblocks_line_655,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['bn_forLinkedBlock'] = function(block) {
  //String or array length.
  var pos1 = Blockly.JavaScript.valueToCode(block, 'POS1',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var callback = Blockly.JavaScript.valueToCode(block, 'CALLBACK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="algorithm.forLinkedBlock("+pos1+","+callback+");\n"
  return text;
};
Blockly.Blocks['nkevent_privatecall'] = {
  init: function() {
    this.jsonInit({
      "message0": myblocks_line_672,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
        },
		{
		  "type": "input_value",
		  "name": "OUT",
		  "check": "String"
		}
      ],
	  "inputsInline": true,
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 20,
      "tooltip": myblocks_line_689,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['nkevent_privatecall'] = function(block) {
  //String or array length.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'OUT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="manager.setPrivateCall("+argument0+","+argument1+");\n"
  return text;
};
