//colour:10
Blockly.Blocks['event_setCancelled'] = {
  init: function() {
    this.jsonInit({
      "message0": '取消事件 %1',
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
      "tooltip": "取消事件(setCancelled)",
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
      "message0": '获取事件 %1 的玩家',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Player",
      "colour": 10,
      "tooltip": "获取事件的玩家(getPlayer)",
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
      "message0": '获取事件 %1 的进服消息',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "String",
      "colour": 10,
      "tooltip": "获取事件的进服消息(getJoinMessage)",
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
      "message0": '设置事件 %1 的进服消息为 %2 ',
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
      "tooltip": "设置进服消息(setJoinMessage)",
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
      "message0": '获取事件 %1 的聊天消息',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "String",
      "colour": 10,
      "tooltip": "获取事件的聊天消息(getMessage)",
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
      "message0": '设置事件 %1 的聊天消息为 %2 ',
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
      "tooltip": "设置聊天消息(setMessage)",
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
      "message0": '获取事件 %1 中的死亡的玩家',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Player",
      "colour": 10,
      "tooltip": "获取事件中死亡的玩家(getEntity)",
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
      "message0": '获取事件 %1 的死亡消息',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "String",
      "colour": 10,
      "tooltip": "获取事件的死亡消息(getDeathMessage)",
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
      "message0": '死亡不掉落经验 %1',
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
      "tooltip": "死亡不掉落经验(setKeepExperience)",
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
      "message0": '死亡不掉落物品 %1',
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
      "tooltip": "死亡不掉落物品(setKeepInventory)",
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
      "message0": '设置事件 %1 的死亡消息为 %2 ',
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
      "tooltip": "设置死亡消息(setDeathMessage)",
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