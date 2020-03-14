
function savecode(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

document.onkeydown = function(){
	var oEvent = window.event;
	if (oEvent.keyCode == 83 && oEvent.altKey) {
		    var content = document.getElementById("jspreview").innerText;
			var name = prompt("请输入您欲保存的文件名\n不需要以.js结尾", "");
			if (name != null) {
			    var name1 = name+".js"
				savecode(name1, content);
			}
			
	}
}