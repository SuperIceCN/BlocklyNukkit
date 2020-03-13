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
}