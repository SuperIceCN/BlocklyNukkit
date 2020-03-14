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
	  "output": "Boolen",
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