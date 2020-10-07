//监听结构打开
var openCategory=new MutationObserver(function (mutations,openCategory) {
	let info = mutations;
	info.forEach(value => {
		if(value.target.getAttribute("style") == "padding-left: 0px; border-left: 8px solid rgb(221, 221, 221);"){//blocklyTreeRow
			value.target.classList.remove('blocklyTreeSelected');
		}
	})
	openCategory.takeRecords();
});
openCategory.observe(document.querySelectorAll("div[class='blocklyToolboxDiv blocklyNonSelectable']")[0],{ attributes: true, attributeFilter: ['class'], subtree: true});
//监听模块创建
var createModule=new MutationObserver(function (mutations,createModule) {
	let info = mutations;
	console.log(info);
	info.forEach(value => {
		if(value.addedNodes[0]==null){return;}
		if(value.addedNodes[0].childNodes[0]==null){return;}
		if(value.addedNodes[0].childNodes[0].childNodes[0]==null){return;}
		if(value.addedNodes[0].childNodes[0].classList.contains("blocklyTreeRow")){//blocklyTreeRow
			if(value.addedNodes[0].childNodes[0].childNodes[0].getAttribute("class")=='blocklyTreeIcon blocklyTreeIconNone'){
				value.addedNodes[0].childNodes[0].childNodes[0].style.backgroundImage = 'url("'+getIconURL(value.addedNodes[0].childNodes[0].outerText)+'")';
				value.addedNodes[0].childNodes[0].childNodes[0].style.backgroundSize = "contain";
			}
		}
	})
	createModule.takeRecords();
});
createModule.observe(document.querySelectorAll("div[class='blocklyToolboxDiv blocklyNonSelectable']")[0],{ childList: true, subtree: true });
//获取修饰图标
function getIconURL(From){
	switch (From) {
	    case "逻辑":
		case "循环":
		case "数学":
		case "字符串":
		case "列表":
		case "JSON":
		case "BN插件":
		case "Nukkit":
		case "玩家":
		case "事件":
		case "位置":
		case "创世":
		case "窗口":
		case "方块物品":
		case "物品栏":
		case "生物":
		case "粒子":
		case "函数":
		case "变量":
		case "实用工具":
		case "红石音乐":
	        return "./icons/"+From+".png"
	        break;
	    default: 
	        return "./icons/拓展.png";
	} 
}