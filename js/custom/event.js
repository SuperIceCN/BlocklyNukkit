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
	  "output": "Player",
      "colour": 10,
      "tooltip": "获取事件的进服消息(getJoinMessage)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['player_playedbefore'] = function(block) {
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
      "tooltip": "取消事件(setJoinMessage)",
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