var observe=new MutationObserver(function (mutations,observe) {
	let info = mutations;
	info.forEach(value => {
		if(value.target.getAttribute("style") == "padding-left: 0px; border-left: 8px solid rgb(221, 221, 221);"){//blocklyTreeRow
			value.target.classList.remove('blocklyTreeSelected');
		}
	})
	observe.takeRecords();
});
observe.observe(document.querySelectorAll("div[class='blocklyToolboxDiv blocklyNonSelectable']")[0],{ attributes: true, attributeFilter: ['class'], subtree: true});