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
Blockly.Blocks['event_window_simple_getEventResponseText'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取事件 %1 中简单窗口被点击的按钮名称',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "String",
      "colour": 10,
      "tooltip": "获取事件中简单窗口被点击的按钮名称(getEventResponseText)",
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
      "message0": '获取事件 %1 中对话框被点击的按钮名称',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "String",
      "colour": 10,
      "tooltip": "获取事件中对话框被点击的按钮名称(getEventResponseModal)",
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
      "message0": '获取事件 %1 中高级窗口第 %2 个元素 %3 模式的返回值',
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
			  ["输入框", "input"],
		      ["开关", "toggle"],
		      ["选择框", "dropdown"]
		    ]
		}
      ],
	  "output": "String",
      "colour": 10,
      "tooltip": "获取事件中高级窗口元素值(getEventCustomVar)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['event_window_custom_getEventCustomVar'] = function(block) {
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var idtmp = Blockly.JavaScript.valueToCode(block, 'ID',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var modetmp = Blockly.JavaScript.valueToCode(block, 'MODE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="window.getEventCustomVar("+valtmp+","+idtmp+","+modetmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['event_getblock'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取事件 %1 的方块',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Blocks",
      "colour": 10,
      "tooltip": "获取事件的方块(getBlock)",
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
      "message0": '获取事件 %1 的物品',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Event"
		}
      ],
	  "output": "Item",
      "colour": 10,
      "tooltip": "获取事件的物品(getItem)",
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