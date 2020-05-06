//colour:248
Blockly.Blocks['entity_getDropItemStack'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_5,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Entity"
		}
      ],
	  "output": "Item",
      "colour": 248,
      "tooltip": entity_line_15,
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
      "message0": entity_line_30,
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
      "tooltip": entity_line_42,
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
      "message0": entity_line_57,
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
      "tooltip": entity_line_74,
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
      "message0": entity_line_91,
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
      "tooltip": entity_line_108,
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
      "message0": entity_line_125,
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
			  [entity_line_136,""],
			  [entity_line_137, "Max"]
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
      "tooltip": entity_line_150,
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
      "message0": entity_line_168,
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
			  [entity_line_179,""],
			  [entity_line_180, "Max"]
		    ]
		}
      ],
	  "output": "Number",
      "colour": 248,
      "tooltip": entity_line_186,
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
Blockly.Blocks['entity_clearEntityEffect'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_202,
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
      "tooltip": entity_line_214,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_clearEntityEffect'] = function(block) {
  //String or array length.
  var entitytmp = Blockly.JavaScript.valueToCode(block, 'ENTITY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.clearEntityEffect("+entitytmp+");\n"
  return text;
};
Blockly.Blocks['entity_addEntityEffect'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_229,
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
			  [entity_line_240,"1"],
			  [entity_line_241,"2"],
			  [entity_line_242,"3"],
			  [entity_line_243,"4"],
			  [entity_line_244,"5"],
			  [entity_line_245,"6"],
			  [entity_line_246,"7"],
			  [entity_line_247,"8"],
			  [entity_line_248,"9"],
			  [entity_line_249,"10"],
			  [entity_line_250,"11"],
			  [entity_line_251,"12"],
			  [entity_line_252,"13"],
			  [entity_line_253,"14"],
			  [entity_line_254,"15"],
			  [entity_line_255,"16"],
			  [entity_line_256,"17"],
			  [entity_line_257,"18"],
			  [entity_line_258,"19"],
			  [entity_line_259,"20"],
			  [entity_line_260,"21"],
			  [entity_line_261,"22"],
			  [entity_line_262,"23"],
			  [entity_line_263,"24"],
			  [entity_line_264,"25"],
			  [entity_line_265,"26"],
			  [entity_line_266,"27"]
		    ]
		},
		{
		  "type": "input_value",
		  "name": "LEVEL",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "TICK",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 248,
      "tooltip": entity_line_284,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_addEntityEffect'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP");
  var entitytmp = Blockly.JavaScript.valueToCode(block, 'ENTITY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'LEVEL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ticktmp = Blockly.JavaScript.valueToCode(block, 'TICK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.addEntityEffect("+entitytmp+","+optmp+","+leveltmp+","+ticktmp+");\n"
  return text;
};
Blockly.Blocks['entity_getEntityID'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_304,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Entity"
		}
      ],
	  "output": "String",
      "colour": 248,
      "tooltip": entity_line_314,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_getEntityID'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEntityID("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_getEntityLevel'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_329,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Entity"
		}
      ],
	  "output": "Level",
      "colour": 248,
      "tooltip": entity_line_339,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_getEntityLevel'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEntityLevel("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_getEntityName'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_354,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Entity"
		}
      ],
	  "output": "String",
      "colour": 248,
      "tooltip": entity_line_364,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_getEntityName'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEntityName("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_getEntityPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_379,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Entity"
		}
      ],
	  "output": "Position",
      "colour": 248,
      "tooltip": entity_line_389,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_getEntityPosition'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEntityPosition("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_setEntityPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_404,
      "args0": [
		{
		  "type": "input_value",
		  "name": "ENTITY",
		  "check": "Entity"
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
      "colour": 248,
      "tooltip": entity_line_421,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_setEntityPosition'] = function(block) {
  //String or array length.
  var entitytmp = Blockly.JavaScript.valueToCode(block, 'ENTITY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.setEntityPosition("+entitytmp+","+postmp+");\n"
  return text;
};
Blockly.Blocks['entity_buildFloatingText'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_438,
      "args0": [
		{
		  "type": "input_value",
		  "name": "TEXT",
		  "check": "String"
		},
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "TICK",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "CALL",
		  "check": "String"
		}
      ],
	  "output": "Entity",
      "colour": 248,
	  "inputsInline": false,
      "tooltip": entity_line_464,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_buildFloatingText'] = function(block) {
  //String or array length.
  var texttmp = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ticktmp = Blockly.JavaScript.valueToCode(block, 'TICK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var calltmp = Blockly.JavaScript.valueToCode(block, 'CALL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.buildFloatingText("+texttmp+","+postmp+","+ticktmp+","+calltmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_startDisplayFloatingText'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_485,
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
      "tooltip": entity_line_497,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_startDisplayFloatingText'] = function(block) {
  //String or array length.
  var entitytmp = Blockly.JavaScript.valueToCode(block, 'ENTITY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.startDisplayFloatingText("+entitytmp+");\n"
  return text;
};
Blockly.Blocks['entity_BNdeafultFloatingTextCallBack'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_512,
	  "output": "String",
      "colour": 248,
      "tooltip": entity_line_515,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_BNdeafultFloatingTextCallBack'] = function(block) {
  //String or array length.
  var text="FloatingTextUpdate";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_playertoentity'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_528,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Player"
		}
      ],
	  "output": "Entity",
      "colour": 248,
      "tooltip": entity_line_538,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_playertoentity'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp;
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_getEntityEffect'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_553,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Entity"
		}
      ],
	  "output": "Array",
      "colour": 248,
      "tooltip": entity_line_563,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_getEntityEffect'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEntityEffect("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['entity_getEffectINFO'] = {
  init: function() {
    this.jsonInit({
      "message0": entity_line_578,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Effect"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  [entity_line_589,"Level"],
			  ["ID", "ID"],
			  [entity_line_591,"Time"]
		    ]
		},
      ],
	  "output": "Number",
      "colour": 248,
      "tooltip": entity_line_597,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['entity_getEffectINFO'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP");
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEffect"+optmp+"("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
