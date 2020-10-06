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
				value.addedNodes[0].childNodes[0].childNodes[0].style.backgroundImage = 'url("./icons/component.png")';
				value.addedNodes[0].childNodes[0].childNodes[0].style.backgroundSize = "100% 100%";
			}
		}
	})
	createModule.takeRecords();
});
createModule.observe(document.querySelectorAll("div[class='blocklyToolboxDiv blocklyNonSelectable']")[0],{ childList: true, subtree: true });
//获取修饰图标
function getIconText(From){
	return "#"
}