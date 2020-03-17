//保存文件程序
function savecode(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
//监控按键
document.onkeydown = function(){
	var oEvent = window.event;
	if (oEvent.keyCode == 83 && oEvent.altKey) {
		    var content = document.getElementById("jspreview").innerText;
			var name = prompt("请输入您欲保存的插件文件名\n不需要以.js结尾", "");
			if (name != null) {
			    var name1 = name+".js"
				savecode(name1, content);
			}
			
	}
}
							//PC保存文件
							function pcsave(){
								var f = $("#save").val()+".js";
								var c = document.getElementById("jspreview").innerText;
								savecode(f, c);
							}