//colour:168
Blockly.Blocks['notemusic_getSongFromFile'] = {
  init: function() {
    this.jsonInit({
      "message0": '解析并获取文件 %1 的红石歌曲',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "String"
		}
      ],
	  "output": "Song",
      "colour": 168,
      "tooltip": "解析并获取文件的红石歌曲(getSongFromFile)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_getSongFromFile'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic.getSongFromFile("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['notemusic_getSongInfo'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取红石歌曲 %1 的 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Song"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  ["标题", "Title"],
			  ["描述", "Description"],
			  ["作者", "Author"],
			  ["长度", "Length"]
		    ]
		}
      ],
	  "output": ["String","Number"],
      "colour": 168,
      "tooltip": "获取红石歌曲信息(getSongInfo)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_getSongInfo'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP");
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic.getSong"+optmp+"("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['notemusic_buildRadio'] = {
  init: function() {
    this.jsonInit({
      "message0": '构建音乐电台,歌曲 %1 循环播放 %2 ,无人自动摧毁 %3 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "SONG",
		  "check": "Song"
		},
		{
		  "type": "input_value",
		  "name": "LOOP",
		  "check": "Boolean"
		},
		{
		  "type": "input_value",
		  "name": "AUTO",
		  "check": "Boolean"
		}
      ],
	  "output": "Radio",
      "colour": 168,
	  "inputsInline": false,
      "tooltip": "构建音乐电台(buildRadio)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_buildRadio'] = function(block) {
  //String or array length.
  var songtmp = Blockly.JavaScript.valueToCode(block, 'SONG',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var looptmp = Blockly.JavaScript.valueToCode(block, 'LOOP',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var autotmp = Blockly.JavaScript.valueToCode(block, 'AUTO',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic.buildRadio("+songtmp+","+looptmp+","+autotmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['notemusic_makePlayerToRadio'] = {
  init: function() {
    this.jsonInit({
      "message0": '将玩家 %1  %2 到红石音乐电台 %3 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "PLAYER",
		  "check": "Player"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  ["添加", "add"],
			  ["移除", "remove"]
		    ]
		},
		{
		  "type": "input_value",
		  "name": "RADIO",
		  "check": "Radio"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 168,
      "tooltip": "将玩家到红石音乐电台(makePlayerToRadio)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_makePlayerToRadio'] = function(block) {
  //String or array length.
  var optmp = block.getFieldValue("OP");
  var playertmp = Blockly.JavaScript.valueToCode(block, 'PLAYER',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var radiotmp = Blockly.JavaScript.valueToCode(block, 'RADIO',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic."+optmp+"PlayerToRadio("+radiotmp+","+playertmp+");\n"
  return text;
};
Blockly.Blocks['notemusic_getPlayerInRadio'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取红石电台 %1 的聆听中玩家',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Radio"
		}
      ],
	  "output": "Array",
      "colour": 168,
      "tooltip": "获取红石电台的聆听中玩家(getPlayerInRadio)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_getPlayerInRadio'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic.getPlayerInRadio("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['notemusic_setRadioStatus'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置红石电台 %1 播放状态为 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "RADIO",
		  "check": "Radio"
		},
		{
		  "type": "input_value",
		  "name": "STATUS",
		  "check": "Boolean"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 168,
      "tooltip": "设置红石电台播放状态(setRadioStatus)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_setRadioStatus'] = function(block) {
  //String or array length.
  var statustmp = Blockly.JavaScript.valueToCode(block, 'STATUS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var radiotmp = Blockly.JavaScript.valueToCode(block, 'RADIO',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic.setRadioStatus("+radiotmp+","+statustmp+");\n"
  return text;
};
Blockly.Blocks['notemusic_getSongInRadio'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取红石电台 %1 的播放歌曲',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Radio"
		}
      ],
	  "output": "Song",
      "colour": 168,
      "tooltip": "获取红石电台的播放歌曲(getSongInRadio)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['notemusic_getSongInRadio'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="notemusic.getSongInRadio("+valtmp+")";
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};