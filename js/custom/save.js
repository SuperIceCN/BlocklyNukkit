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

function downjs(){
	var content = document.getElementById("jspreview").innerText;
	var blob = new Blob([content]);
	var src = URL.createObjectURL(blob);
	var name = prompt("请输入您欲保存的插件文件名\n不需要以.js结尾", "");
	if (name != null) {
	    var name1 = name+".js"
		var link = document.createElement('a');
		//设置下载的文件名
		link.download = name1;
		link.style.display = 'none';
		//设置下载路径
		link.href = src;
		//触发点击
		document.body.appendChild(link);
		link.click();
		//移除节点
		document.body.removeChild(link);
		}
}