//colour:10
Blockly.Blocks['event_setCancelled'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_5,
      "args0": [
		{
		  "type": "input_value",
		  "name": "EVENT",
		  "check": "Event"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 10,
      "tooltip": event_line_16,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_setCancelled'] = function(block) {
  //String or array length.
  var eventtmp = Blockly.JavaScript.valueToCode(block, 'EVENT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=eventtmp+".setCancelled();\n"
  return text;
};
Blockly.Blocks['event_getplayer'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_31,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Player",
      "colour": 10,
      "tooltip": event_line_41,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getplayer'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getPlayer()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_getjoinmessage'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_56,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "String",
      "colour": 10,
      "tooltip": event_line_66,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getjoinmessage'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getJoinMessage()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_setJoinMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_81,
      "args0": [
		{
		  "type": "input_value",
		  "name": "EVENT",
		  "check": "Event"
		},
		{
		  "type": "input_value",
		  "name": "MESSAGE",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 10,
      "tooltip": event_line_97,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_setJoinMessage'] = function(block) {
  //String or array length.
  var eventtmp = Blockly.JavaScript.valueToCode(block, 'EVENT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var mes = Blockly.JavaScript.valueToCode(block, 'MESSAGE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=eventtmp+".setJoinMessage("+mes+");\n"
  return text;
};
Blockly.Blocks['event_getchatmessage'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_114,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "String",
      "colour": 10,
      "tooltip": event_line_124,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getchatmessage'] = function(block) {
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getMessage()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_setchatmessage'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_138,
      "args0": [
		{
		  "type": "input_value",
		  "name": "EVENT",
		  "check": "Event"
		},
		{
		  "type": "input_value",
		  "name": "MESSAGE",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 10,
      "tooltip": event_line_154,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_setchatmessage'] = function(block) {
  //String or array length.
  var eventtmp = Blockly.JavaScript.valueToCode(block, 'EVENT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var mes = Blockly.JavaScript.valueToCode(block, 'MESSAGE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=eventtmp+".setMessage("+mes+");\n"
  return text;
};
Blockly.Blocks['event_getentity'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_171,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Player",
      "colour": 10,
      "tooltip": event_line_181,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getentity'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getEntity()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_getdeathmessage'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_196,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "String",
      "colour": 10,
      "tooltip": event_line_206,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getdeathmessage'] = function(block) {
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getDeathMessage()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_setkeepexperience'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_220,
      "args0": [
		{
		  "type": "input_value",
		  "name": "EVENT",
		  "check": "Event"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 10,
      "tooltip": event_line_231,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_setkeepexperience'] = function(block) {
  //String or array length.
  var eventtmp = Blockly.JavaScript.valueToCode(block, 'EVENT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=eventtmp+".setKeepExperience(true);\n"
  return text;
};
Blockly.Blocks['event_setkeepinventory'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_246,
      "args0": [
		{
		  "type": "input_value",
		  "name": "EVENT",
		  "check": "Event"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 10,
      "tooltip": event_line_257,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_setkeepinventory'] = function(block) {
  //String or array length.
  var eventtmp = Blockly.JavaScript.valueToCode(block, 'EVENT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=eventtmp+".setKeepInventory(true);\n"
  return text;
};
Blockly.Blocks['event_setdeathmessage'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_272,
      "args0": [
		{
		  "type": "input_value",
		  "name": "EVENT",
		  "check": "Event"
		},
		{
		  "type": "input_value",
		  "name": "MESSAGE",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
      "colour": 10,
      "tooltip": event_line_288,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_setdeathmessage'] = function(block) {
  //String or array length.
  var eventtmp = Blockly.JavaScript.valueToCode(block, 'EVENT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var mes = Blockly.JavaScript.valueToCode(block, 'MESSAGE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=eventtmp+".setDeathMessage("+mes+");\n"
  return text;
};
Blockly.Blocks['event_window_simple_getEventResponseText'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_305,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "String",
      "colour": 10,
      "tooltip": event_line_315,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_window_simple_getEventResponseText'] = function(block) {
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="window.getEventResponseText("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_window_modal_getEventResponseModal'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_329,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "String",
      "colour": 10,
      "tooltip": event_line_339,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_window_modal_getEventResponseModal'] = function(block) {
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="window.getEventResponseModal("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_window_custom_getEventCustomVar'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_353,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		},
		{
		  "type": "input_value",
		  "name": "ID",
		  "check": "Number"
		},
		{
		    "type": "field_dropdown",
		    "name": "MODE",
		    "options": [
			  [event_line_369, "input"],
		      [event_line_370, "toggle"],
		      [event_line_371, "dropdown"]
		    ]
		}
      ],
	  "output": "String",
      "colour": 10,
      "tooltip": event_line_377,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_window_custom_getEventCustomVar'] = function(block) {
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var idtmp = Blockly.JavaScript.valueToCode(block, 'ID',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var modetmp = block.getFieldValue("MODE");
  var text="window.getEventCustomVar("+valtmp+","+idtmp+",\""+modetmp+"\")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_getblock'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_394,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Blocks",
      "colour": 10,
      "tooltip": event_line_404,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getblock'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getBlock()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_getitem'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_419,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Item",
      "colour": 10,
      "tooltip": event_line_429,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getitem'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getItem()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_getSlot'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_444,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Number",
      "colour": 10,
      "tooltip": "获取事件的槽位(getAction.getSlot)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getSlot'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getAction().getSlot()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_getInventory'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_469,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Inventory",
      "colour": 10,
      "tooltip": "获取事件的槽位(getAction.getInventory)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getInventory'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getInventory()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_getradio'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_494,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Radio",
      "colour": 10,
      "tooltip": event_line_504,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getradio'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getSongPlayer()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_getDamager'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_519,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Entity",
      "colour": 10,
      "tooltip": event_line_529,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getDamager'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getDamager()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_getDamage'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_544,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Number",
      "colour": 10,
      "tooltip": event_line_554,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getDamage'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getDamage()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_getKnockBack'] = {
  init: function() {
    this.jsonInit({
      "message0": event_line_569,
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Number",
      "colour": 10,
      "tooltip": event_line_579,
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_getKnockBack'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getKnockBack()";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
