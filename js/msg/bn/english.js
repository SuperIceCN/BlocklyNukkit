//toolbox translate_provider
//This function is used to translate the xml text of toolbox bar on the left
//the first argument is a string that comes from the xml dom of toolbox bar
//the return value will be used as the final show for users
//if you want to translate the text on toolbox or edit a custom toolbox, edit the function
function translateToolBox(xml){
	xml = xml.replace("核心","Core Functions")
	xml = xml.replace("逻辑","Logic")
	xml = xml.replace("循环","Loops")
	xml = xml.replace("数学","Math")
	xml = xml.replace("字符串","Strings")
	xml = xml.replace("列表","Lists")
	xml = xml.replace("动态","Dynamic")
	xml = xml.replace("变量","Variable")
	xml = xml.replace("函数","Function")
	xml = xml.replace("插件","Plugin")
	xml = xml.replace("BN插件","BNPlugin")
	xml = xml.replace("玩家","Player")
	xml = xml.replace("事件","Event")
	xml = xml.replace("位置","Position")
	xml = xml.replace("创世","World Creation")
	xml = xml.replace("窗口","Window")
	xml = xml.replace("方块物品","Block")
	xml = xml.replace("物品栏","Inventory")
	xml = xml.replace("生物","Entity")
	xml = xml.replace("粒子","Particle")
	xml = xml.replace("粒子id,颜色码,形状码请去bn文档查看","For particle ID, color code, shape code, please go to BN document to view (Put a link)")
	xml = xml.replace("拓展","Additional")
	xml = xml.replace("实用工具","Utilities")
	xml = xml.replace("请注意,此模块处于测试中","This module is undergoing testing.")
	xml = xml.replace("我们不保证这些块一定正常工作","We cannot guarantee that these blocks will work.")
	xml = xml.replace("如有问题,请随时联系我们","Feel free to contact us regarding bugs")
	xml = xml.replace("数据库功能目前不稳定,慎用","The database function is unstable. Use with caution.")
	xml = xml.replace("设置自定义服务器网站placeholder","Construire un site internet personnalisé placeholder")
	xml = xml.replace("这些是一bn联合第三方API提供的服务","These are the services provided by a BlocklyNukkit joint Third-Party API.")
	xml = xml.replace("GET的数据将追加在url?后,POST类型会放在body里面","The GET data will be appended to the url, and the POST type will be placed in the body.")
	xml = xml.replace("添加自定义JavaScript脚本到代码里。","Add custom JavaScript to the code.")
	xml = xml.replace("注意，这里声明的变量不会显示在BN编辑器的变量选项卡中。","The variables declared here will not be displayed in the Variables tab of the BlocklyNukkit editor.")
	xml = xml.replace("另外，这里不能直接声明中文变量。否则会出错。","The declared variable must be in English.")
	xml = xml.replace("起床战争","Bedwars")
	xml = xml.replace("红石音乐","Redstone Music")
	xml = xml.replace("功能测试中,可能不稳定","This function is undergoing testing and may be unstable.")
	return xml;
}
//translateHTMLtoken
//when a html element with Chinese is shown, this function will be called
//the first argument is the Chinese string in the element
//the return value will be used as the text which will be shown on the page
//if you want to translate the text on the html page, edit the function
function translateHTMLtoken(str){
	str = str.replace("BlocklyNukkit.jar最新版是","The latest version of BlocklyNukkit.jar is ")
	str = str.replace("更新","")
	str = str.replace("下载插件","Download the plugin")
	str = str.replace("下载前置","Download the attached plugin")
	str = str.replace("保存脚本","Save the project as *.js")
	str = str.replace("云端同步","Cloud Sync")
	str = str.replace("新建工程","Build a Project")
	str = str.replace("导入工程","Import a Project")
	str = str.replace("导出工程","Export a Project")
	str = str.replace("打开教程","Open Tutorial")
	str = str.replace("仓库主页","Github of BN")
	str = str.replace("JS编辑器","JavaScript Editor")
	str = str.replace("在线编译","Online Compiler")
	str = str.replace("官方论坛","Official Forum")
	str = str.replace("更换背景","Change Background")
	str = str.replace("工程切换","Change Project")
	str = str.replace("管理插件","Manage Plugins")
	str = str.replace("功能待定","Function To Be Determined")
	str = str.replace("关闭","Close")
	str = str.replace("功能","Functions")
	str = str.replace("更换BlocklyNukkit编辑器背景","Change the background of the BlocklyNukkit Editor")
	str = str.replace("请在下方输入完整的图片网址","Please enter the image URL below.")
	str = str.replace("如：http://www.xxx.com/xx.jpg 或 https://www.xxx.com/xxx.png","For example：http://www.xxx.com/xx.jpg or https://www.xxx.com/xxx.png")
	str = str.replace("注意，保存后将自动刷新界面，请提前保存自己的工程，以免工程丢失。","Attention, the interface will be refreshed automatically after saving. Please save your project in advance to avoid losing work.")
	str = str.replace("请在此输入完整的图片网址","Please enter the image url.")
	str = str.replace("更换!","Replace!")
	str = str.replace("还原白色背景","Restore the white background")
	str = str.replace("关闭","Close")
	str = str.replace("点击下方按钮在多个工程间切换","Click the button below to switch between multiple projects")
	str = str.replace("只要不清除浏览器缓存，各个工程是可以独立保存的。","As long as the browser cache is not cleared, each project can be saved independently.")
	str = str.replace("到工程一","To project 1")
	str = str.replace("到工程二","To project 2")
	str = str.replace("到工程三","To project 3")
	str = str.replace("到工程四","To project 4")
	str = str.replace("到工程五","To project 5")
	str = str.replace("到工程六","To project 6")
	str = str.replace("到工程七","To project 7")
	str = str.replace("到工程八","To project 8")
	str = str.replace("关闭","Close")
	str = str.replace("新建工程","Please enter the plugin link")
	str = str.replace("添加","Add")
	str = str.replace("请输入插件链接","Build a project")
	str = str.replace("是否决定新建工程？新建工程将会清空当前项目！","Are you sure you want to build a new project? The current project will be cleared!")
	str = str.replace("是否决定Build a Project？Please enter the plugin link将会清空当前项目！","Are you sure you want to build a new project? The current project will be cleared!")
	str = str.replace("不不不✖","No✖")
	str = str.replace("我决定了✔","Yes✔")
	str = str.replace("导入工程","Import a project")
	str = str.replace("导入本地工程(*.bn)","Import a local project (*.bn)")
	str = str.replace("确认导入","Confirm")
	str = str.replace("关闭","Close")
	str = str.replace("保存脚本","Save the project as *.js")
	str = str.replace("保存JavaScript脚本到本地","Save the JavaScript file to local device")
	str = str.replace("在输入框输入欲保存的文件名，不需要输入.js文件后缀。","Enter the name of the file you want to save in the input box.")
	str = str.replace("请输入您的文件名:","Enter the name of your file:")
	str = str.replace("保存!","Save!")
	str = str.replace("关闭","Close")
	str = str.replace("云端同步","Cloud sync")
	str = str.replace("同步JavaScript脚本到云端","Sync the JavaScript code to the BN Cloud.")
	str = str.replace("在输入框输入欲同步的文件名，不需要输入.js文件后缀。","Enter the file name to be synced in the input box.")
	str = str.replace("请输入您的文件名:","Please enter your file name:")
	str = str.replace("同步!","Sync!")
	str = str.replace("关闭","Close")
	str = str.replace("同步成功","Sync succeeded")
	str = str.replace("您的文件名为：","Your file name is:")
	str = str.replace("关闭","Close")
	str = str.replace("导出工程","Export a project")
	str = str.replace("导出BlocklyNukkit(*.bn)工程到本地以便下次编辑","Export BlocklyNukkit(*.bn) project to local for editing later.")
	str = str.replace("在输入框输入欲导出的文件名，不需要输入文件后缀。","Enter the name of the project to be exported.")
	str = str.replace("请输入您的文件名:","Please enter your file name:")
	str = str.replace("导出!","Export!")
	str = str.replace("关闭","Close")
	str = str.replace("导出成功","Export succeeded")
	str = str.replace("您的工程文件名为：","Your project file name is:")
	str = str.replace("关闭","Close")
	//这里开始的不确定是不是该放在这个函数里
	str = str.replace("请输入文件名，不需要文件后缀。例如输入'myjs","Enter the file name. Ex:'myPlugin'")
	str = str.replace("您的变量中含有与基对象重名的变量","Your variable contains a variable with the same name as the base object.")
	str = str.replace("这会使得解释器崩溃,请您及时修改!","This could break the BlocklyNukkit interpreter, please change it to something else.")
	str = str.replace("输入背景图片链接:","Enter the background image link:")
	return str;
}
//blockanditem.js
//generated by python reMoudle
var blockanditem_line_5 = "build a block with id %1 data %2 "
var blockanditem_line_20 = "build a new block(buildBlock)"
var blockanditem_line_37 = "build an itemstack with id %1 data %2 amount %3 "
var blockanditem_line_57 = "build an itemstack(buildItem)"
var blockanditem_line_76 = "Build itemstack from block %1"
var blockanditem_line_86 = "Build itemstack from block(buildItemFromBlock)"
var blockanditem_line_101 = "get block %1 's id"
var blockanditem_line_111 = "get block's id(getId)"
var blockanditem_line_126 = "get block %1 's data"
var blockanditem_line_136 = "get block's damagedata(getDamage)"
var blockanditem_line_151 = "set itemstack %1 's %2 to %3 "
var blockanditem_line_162 = "amount"
var blockanditem_line_163 = "data"
var blockanditem_line_164 = "name"
var blockanditem_line_177 = "Set itemstack's properties(bi_setItem)"
var blockanditem_line_195 = "get itemstacl %1 's %2 "
var blockanditem_line_207 = "amount"
var blockanditem_line_208 = "data"
var blockanditem_line_209 = "name"
var blockanditem_line_215="get item information (BI_ getItemInfo)"
var blockanditem_line_231 = "get %2 of block %1"
var blockanditem_line_242="world"
var blockanditem_line_251="get block information (BI_ getBlockInfo)"
var blockanditem_line_267 = "get lore string for item %1"
var blockanditem_line_277="get lore (getitemlore)"
var blockanditem_line_286 = "set lore string of article stack %1 to %2"
var blockanditem_line_303 = "set the item stack lore (BI_setItemLore)"
var blockanditem_line_327 = "unordered synthesis=raw material (list) %1 generated (item) %2"
var blockanditem_line_343="addshapelesscraft"
var blockanditem_line_360 = "ordered synthesis:shape %1 composite result %2 append result %3"
var blockanditem_line_381 = "add shapedcraft"
var blockanditem_line_421 = "shape (shapestr)"
var blockanditem_line_460 = "shape array"
var blockanditem_line_479 = "add enchantment %2 level %3 to item heap %1"
var blockanditem_line_490="protection"
var blockanditem_line_491="flame protection"
var blockanditem_line_492="fall protection"
var blockanditem_line_493="explosion protection"
var blockanditem_line_494="ejection protection"
var blockanditem_line_495="thorn"
var blockanditem_line_496="underwater breathing"
var blockanditem_line_497="deep sea Explorer"
var blockanditem_line_498="underwater excavation"
var blockanditem_line_499 = "sharp"
var blockanditem_line_500="undead killer"
var blockanditem_line_501="arthropod killer"
var blockanditem_line_502="repulse"
var blockanditem_line_503 = "flame addition"
var blockanditem_line_504="plunder"
var blockanditem_line_505= "efficiency"
var blockanditem_line_506="accurate acquisition"
var blockanditem_line_507 = "durable"
var blockanditem_line_508="fortune"
var blockanditem_line_509="power"
var blockanditem_line_510 = "Impact"
var blockanditem_line_511="fire arrow"
var blockanditem_line_512 = "infinite"
var blockanditem_line_513="the favor of the sea"
var blockanditem_line_514="baiting"
var blockanditem_line_515="frost Walker"
var blockanditem_line_516="experience repair"
var blockanditem_line_517="bind curse"
var blockanditem_line_518="Curse of disappearance"
var blockanditem_line_519="puncture"
var blockanditem_line_520="torrent"
var blockanditem_line_521="loyalty"
var blockanditem_line_522="lightning"
var blockanditem_line_535 = "add item enchant"
var blockanditem_line_553 = "compare whether the items are the same %1 detected the data value %3 on %2, detected NBT %4"
var blockanditem_line_578="is the item the same?"
var blockanditem_line_599 = "smelting synthesis=raw material (item) %1 generated (item) %2"
var blockanditem_line_615="addfurnacecraft"
var blockanditem_line_632 = "BN synthesis=type (string) %1 description (string) %2 raw material (item list) %3 generation (item list) %4 time (integer/quarter) %5 success rate (0~1) %6"
var blockanditem_line_668="addbncraft"
var blockanditem_line_693 = "open BN synthesis of type %1 to player %2"
var blockanditem_line_709 = "open bncraft for player"
var blockanditem_line_726 = "set item stack %1 to create item bar"
var blockanditem_line_738="set item stack lore (addtocreativebar)"
//entity.js
//generated by python reMoudle
var entity_line_5 = "get %1 drops items stack"
var entity_line_15 = "get Drop Item Stack(getDropItemStack)"
var entity_line_30 = "removeEntity %1 "
var entity_line_42 = "removeEntity(removeEntity)"
var entity_line_57 = "set Entity %1 /s name %2 "
var entity_line_74 = "set Entity Name(setEntityName)"
var entity_line_91 = "set entity %1 name tag always visable %2 "
var entity_line_108 = "set Entity Name Tag Always Visable(setEntityNameTagAlwaysVisable)"
var entity_line_125 = "set entity %1 /s %2 health %3 "
var entity_line_136 = "existing"
var entity_line_137 = "biggest"
var entity_line_150 = "set Entity Health(setEntityHealth)"
var entity_line_168 = "get entity %1 /s health %2 "
var entity_line_179 = "existing health"
var entity_line_180 = "biggest health"
var entity_line_186 = "get Entity Health(getEntityHealth)"
var entity_line_202 = "clear entity %1 /s effect"
var entity_line_214 = "clear Entity Effect(clearEntityEffect)"
var entity_line_229 = "add entity %1 effect %2 等级 %3 持续 %4 刻"
var entity_line_240 = "speed"
var entity_line_241 = "slowness"
var entity_line_242 = "haste"
var entity_line_243 = "mining fatigue"
var entity_line_244 = "strength"
var entity_line_245 = "instant health"
var entity_line_246 = "instant damage"
var entity_line_247 = "jump boost"
var entity_line_248 = "nausea"
var entity_line_249 = "regeneration"
var entity_line_250 = "Resistance"
var entity_line_251 = "Fire Resistance"
var entity_line_252 = "Water Breathing"
var entity_line_253 = "Invisibility"
var entity_line_254 = "Blindness"
var entity_line_255 = "Night Vision"
var entity_line_256 = "Hunger"
var entity_line_257 = "Weakness"
var entity_line_258 = "Poison"
var entity_line_259 = "Wither"
var entity_line_260 = "Health Boost"
var entity_line_261 = "Absorption"
var entity_line_262 = "Saturation"
var entity_line_263 = "Levitation"
var entity_line_264 = "Fatal Poison"
var entity_line_265 = "Conduit Power"
var entity_line_266 = "Slow Falling"
var entity_line_284 = "add Entity Effect(addEntityEffect)"
var entity_line_304 = "get entity %1 id"
var entity_line_314 = "get Entity ID(getEntityID)"
var entity_line_329 = "get entity %1 level"
var entity_line_339 = "get Entity Level(getEntityLevel)"
var entity_line_354 = "get entity %1 /s name"
var entity_line_364 = "get Entity Name(getEntityName)"
var entity_line_379 = "get entity %1 /s position"
var entity_line_389 = "get Entity Position(getEntityPosition)"
var entity_line_404 = "set entity %1 /s positon is %2 "
var entity_line_421 = "set Entity Position(setEntityPosition)"
var entity_line_438 = "build text is %1 position is %2 /s floating text and %3 moment callback function for %4 /s function(entity)"
var entity_line_464 = "build Floating Text(buildFloatingText)"
var entity_line_485 = "start floating text entity %1 display"
var entity_line_497 = "start Display Floating Text(startDisplayFloatingText)"
var entity_line_512 = "BN default floating text callback function"
var entity_line_515 = "BN default floating text callback function"
//event.js
//generated by python reMoudle
var event_line_5 = "set Cancelled %1"
var event_line_16 = "set Cancelled(setCancelled)"
var event_line_31 = "get player in event %1"
var event_line_41 = "get player in event(getPlayer)"
var event_line_56 = "get join message in event %1"
var event_line_66 = "get join message in event(getJoinMessage)"
var event_line_81 = "set event %1 /s join message is %2"
var event_line_97 = "setJoinMessage(setJoinMessage)"
var event_line_114 = "get message in event %1"
var event_line_124 = "get message in event(getMessage)"
var event_line_138 = "set event %1 /s message is %2 "
var event_line_154 = "set message(setMessage)"
var event_line_171 = "get event %1 death player"
var event_line_181 = "get death player in event(getEntity)"
var event_line_196 = "get event %1 death message"
var event_line_206 = "get Death Message(getDeathMessage)"
var event_line_220 = "set Keep Experience %1"
var event_line_231 = "set Keep Experience(setKeepExperience)"
var event_line_246 = "set Keep Inventory %1"
var event_line_257 = "set Keep Inventory(setKeepInventory)"
var event_line_272 = "set event %1 /s death message is %2 "
var event_line_288 = "set Death Message(setDeathMessage)"
var event_line_305 = "get event %1 the name of the button that was clicked in the simple window"
var event_line_315 = "get Event Response Text(getEventResponseText)"
var event_line_329 = "get event %1 the name of the button in which the dialog box was clicked"
var event_line_339 = "get Event Response Modal(getEventResponseModal)"
var event_line_353 = "get event %1 return value of %2 element %3 mode of mid-to-high-level window"
var event_line_369 = "Input box"
var event_line_370 = "Switch"
var event_line_371 = "Select box"
var event_line_377 = "get Event Custom Var(getEventCustomVar)"
var event_line_394 = "get block in event %1"
var event_line_404 = "get Block(getBlock)"
var event_line_419 = "get item in event %1"
var event_line_429 = "get Item(getItem)"
var event_line_444 = "get operating slots in event %1"
var event_line_469 = "get the virtual item bar for event %1"
var event_line_494 = "get redstone music radio from event %1"
var event_line_504 = "get Song Player(getSongPlayer)"
var event_line_519 = "get the initiating damage entity of event %1"
var event_line_529 = "get Damager(getDamager)"
var event_line_544 = "get the damage value of event %1"
var event_line_554 = "get Damage(getDamage)"
var event_line_569 = "get event %1 /s damage fightback distance"
var event_line_579 = "get Knock Back(getKnockBack)"
//inventory.js
//generated by python reMoudle
var inventory_line_5 = "construct virtual %1 item bar, item list %2 title %3 "
var inventory_line_11 = "large box"
var inventory_line_12 = "smal box"
var inventory_line_28 = "add Inv(addInv)"
var inventory_line_46 = "show virtual item bar %2 to player %1"
var inventory_line_63 = "show Fake Inv(showFakeInv)"
var inventory_line_80 = "set item bar %1 all items to items in list %2"
var inventory_line_97 = "edit Inv(editInv)"
var inventory_line_114 = "set item bar %1 %2 slot items as %3 "
var inventory_line_136 = "edit Inv By Slot(editInvBySlot)"
var inventory_line_155 = "whether item bar %1 contains item %2 "
var inventory_line_170 = "contains Item In Inv(containsItemInInv)"
var inventory_line_187 = "add item %2 to item bar %1 "
var inventory_line_204 = "add Item To Inv(addItemToInv)"
var inventory_line_221 = "Remove items %2 from item bar %1"
var inventory_line_238 = "remove Item From Inv(removeItemFromInv)"
var inventory_line_255 = "list of all items in item bar %1"
var inventory_line_265 = "get Items In Inv(getItemsInInv)"
//myblocks.js
//generated by python reMoudle
var myblocks_line_5 = "nukkit server instance"
var myblocks_line_8 = "return a server instance of nukkit"
var myblocks_line_19 = "nukkit console instance"
var myblocks_line_22 = "return to the console instance of nukkit"
var myblocks_line_33 = "nukkit console command sender"
var myblocks_line_36 = "return nukkit's console command sender"
var myblocks_line_47 = "use %1 to output console information %2"
var myblocks_line_64 = "output console information"
var myblocks_line_81 = "use %1 to output console warning %2"
var myblocks_line_98 = "output console warning"
var myblocks_line_115 = "list of online players"
var myblocks_line_118 = "return to online player list"
var myblocks_line_129 = "blocklynukkit Plugins Manager"
var myblocks_line_132 = "return blocklynukkit plugins manager"
var myblocks_line_143 = "registration command: use %1 command name %2 to describe %3 callback function name (sender, args) %4 "
var myblocks_line_169 = "Register a command"
var myblocks_line_190 = "delay editing call: use %1 callback function name (tick) %2 delay (engraved) %3 "
var myblocks_line_211 = "delaycall a function"
var myblocks_line_230 = "background loop: use the %1 callback function name (tick) %2 and execute every %3 tick "
var myblocks_line_251 = "loop inge calls a function"
var myblocks_line_270 = "yml: use %1 file name %2 directory name %3"
var myblocks_line_290 = "gets the yml profile, the directory is named the subdirectory name under the plugins folder, and automatically creates a directory with the same name if it does not exist."
var myblocks_line_310 = "yml: set key %2 for %1 to %3 "
var myblocks_line_331 = "set the key value of yml"
var myblocks_line_350 = "yml: value %2 for %1 get Key "
var myblocks_line_365 = "get yml's key value"
var myblocks_line_383 = "yml: get the names of all keys for %1"
var myblocks_line_393 = "get the name of all keys yml"
var myblocks_line_409 = "yml: save %1 "
var myblocks_line_420 = "save yml file"
var myblocks_line_435 = "get the name of %1"
var myblocks_line_445 = "get name(getname)"
var myblocks_line_460 = "let %1 dispatch command %2"
var myblocks_line_477 = "dispatch Command(dispatchCommand)"
var myblocks_line_494 = "get function by name %1"
var myblocks_line_504 = "get function by name"
var myblocks_line_519 = "temporary storage: key %1 value %2"
var myblocks_line_536 = "put Easy(putEasy)"
var myblocks_line_553 = "temporary storage：get key %1 /s value( %2 )"
var myblocks_line_564 = "string"
var myblocks_line_565 = "number"
var myblocks_line_566 = "boolean"
var myblocks_line_567 = "position"
var myblocks_line_568 = "player"
var myblocks_line_569 = "item(heap)"
var myblocks_line_570 = "block"
var myblocks_line_576 = "get Easy String(getEasyString)"
var myblocks_line_592 = "on position %1 to position %2 contains air %3 of each block callback function name (block) %4 "
var myblocks_line_618 = "area block callback"
var myblocks_line_639 = "position %1 for each adjacent block of the same kind callback function name (Position) %2 "
var myblocks_line_655 = "adjacent block callback"
var myblocks_line_672 = "map public event %1 1 to private event %2"
var myblocks_line_689 = "mapping private events"
//notemusic.js
//generated by python reMoudle
var notemusic_line_5 = "parse and get file %1 redstone songs"
var notemusic_line_15 = "get Song From File(getSongFromFile)"
var notemusic_line_30 = "get Redstone Song %1 %2 "
var notemusic_line_41 = "title"
var notemusic_line_42 = "describe"
var notemusic_line_43 = "author"
var notemusic_line_44 = "length"
var notemusic_line_50 = "get Song Info(getSongInfo)"
var notemusic_line_66 = "build radio, song %1 loop play %2, no one automatically destroys %3"
var notemusic_line_87 = "build Radio(buildRadio)"
var notemusic_line_106 = "player %1 %2 to radio%3 "
var notemusic_line_117 = "add"
var notemusic_line_118 = "remove"
var notemusic_line_131 = "make Player To Radio(makePlayerToRadio)"
var notemusic_line_149 = "get the listen player in radio %1"
var notemusic_line_159 = "get Player In Radio(getPlayerInRadio)"
var notemusic_line_174 = "set radio %1 playback status to %2 "
var notemusic_line_191 = "set Radio Status(setRadioStatus)"
var notemusic_line_208 = "get songs in radio %!"
var notemusic_line_218 = "get Song In Radio(getSongInRadio)"
//player.js
//generated by python reMoudle
var player_line_4 = "get players based on name %1"
var player_line_14 = "get Player(getPlayer)"
var player_line_29 = "player %1 has been in the service before"
var player_line_39 = "played Before(playedBefore)"
var player_line_54 = "get players based on uuid %1"
var player_line_64 = "get Player(getPlayer)"
var player_line_79 = "send a message %2 to %1"
var player_line_95 = "send Message(sendMessage)"
var player_line_112 = "send string %2 to player %1 as an item bar prompt"
var player_line_128 = "send message to player(sendMessage)"
var player_line_145 = "Send the string %2 to player %1 as a dynamic bar."
var player_line_161 = "send message to player(sendActionBar)"
var player_line_178 = "Send the string %2 to player %1 as the subtitle."
var player_line_194 = "send message to player(setSubtitle)"
var player_line_211 = "Send the string %2 as the title to player %1."
var player_line_227 = "send message to player(sendTitle)"
var player_line_253 = "clear the title of player %1."
var player_line_264 = "clear Title(clearTitle)"
var player_line_279 = "Get helth from player %1."
var player_line_289 = "get Health(getHealth)"
var player_line_304 = "Set player %1 's helth is %2."
var player_line_321 = "set Health(setHealth)"
var player_line_338 = "Set player %1 's max health is %2."
var player_line_355 = "set Max Health(setMaxHealth)"
var player_line_372 = "get position from player %1"
var player_line_382 = "get position(getPosition)"
var player_line_396 = "teleport player %1 to %2"
var player_line_413 = "teleport(teleport)"
var player_line_430 = "Set player %1 skin to skin with the name %2."
var player_line_464 = "Set player %1 skin to skin with the name %2 and show it to %3 player."
var player_line_504 = "get money from player %1"
var player_line_514 = "get Money(getMoney)"
var player_line_528 = " %1 Player %2 for Money %3 "
var player_line_534 = "add"
var player_line_535 = "decrease"
var player_line_536 = "setting"
var player_line_572 = "Get item in player %1 hand."
var player_line_582 = "get Item In Hand(getItemInHand)"
var player_line_596 = "Set player %1 on the hand of the item to %2 "
var player_line_613 = "set Item In Hand(setItemInHand)"
var player_line_630 = "get player %1 is op"
var player_line_640 = "Player Is OP(PlayerIsOP)"
var player_line_654 = "Add item %2 to player %1 "
var player_line_671 = "add Item To Player(addItemToPlayer)"
var player_line_688 = "Remove items %2 from player %1 backpack"
var player_line_705 = "remove Item To Player(removeItemToPlayer)"
var player_line_722 = "Gets player %1 backpack whether you have %2 "
var player_line_737 = "has Item To Player(hasItemToPlayer)"
var player_line_753 = "Gets the item bar for player %1 "
var player_line_763 = "get Player Inv(getPlayerInv)"
var player_line_778 = "Set player %1 item bar to %2 "
var player_line_795 = "set Player Inv(setPlayerInv)"
var player_line_812 = "Kicked player %1 send reason %2 "
var player_line_829 = "kick Player(kickPlayer)"
//pos.js
//generated by python reMoudle
var pos_line_4 = "get level by name %1 "
var pos_line_14 = "get Level By Name(getLevelByName)"
var pos_line_29 = "Build Location level: %1 x: %2 y: %3 z: %4 "
var pos_line_54 = "Position.fromObject(Position.fromObject)"
var pos_line_75 = "Gets x of the %1 position."
var pos_line_85 = "get X(getX)"
var pos_line_100 = "Gets y of the %1 position."
var pos_line_110 = "get Y(getY)"
var pos_line_125 = "Gets z of the %1 position."
var pos_line_135 = "get Z(getZ)"
var pos_line_150 = "Get the level of %1 position."
var pos_line_160 = "get Level(getLevel)"
var pos_line_175 = "Set position %1 to the level of %2 "
var pos_line_192 = "set Level(setLevel)"
var pos_line_209 = "Set position %1 x %2 y %3 z %4 "
var pos_line_236 = "set Components(setComponents)"
var pos_line_257 = "Get the rebirth point of level %1."
var pos_line_267 = "get Safe Spawn(getSafeSpawn)"
var pos_line_282 = "Set the rebirth point of level %1 to position %2."
var pos_line_299 = "set Spawn Location(setSpawnLocation)"
var pos_line_316 = "Play sound %2 at position %1 "
var pos_line_333 = "make Sound(makeSound)"
var pos_line_350 = "In position %1 generates an experience ball that contains the %2 point experience value."
var pos_line_367 = "make ExpBall(makeExpBall)"
var pos_line_384 = "Creates the same drop as %2 at position %1 "
var pos_line_401 = "make Drop Item(makeDropItem)"
var pos_line_418 = "Gets the block for position %1 "
var pos_line_428 = "getBlock(getBlock)"
var pos_line_443 = "GetaTh's list of creatures in the level where location %1 is located"
var pos_line_453 = "getLevelEntities(getLevelEntities)"
var pos_line_468 = "Gets a list of players in the level where location %1 is located"
var pos_line_478 = "getLevelPlayers(getLevelPlayers)"
var pos_line_493 = "Get location %1 if the level is sunny."
var pos_line_503 = "getIsSunny(getIsSunny)"
var pos_line_518 = "Gets location %1 in the level whether daytime."
var pos_line_528 = "isDay(isDay)"
var pos_line_543 = "Set position %1 Weather to %2 "
var pos_line_554 = "sunny"
var pos_line_555 = "rainy"
var pos_line_556 = "Thunderstorm."
var pos_line_564 = "setLevelWeather(setLevelWeather)"
var pos_line_580 = "Set position %1 square to %2 whether to drop particle %3 "
var pos_line_602 = "setBlock(setBlock)"
var pos_line_621 = "Gets the item bar for the position %1 container block"
var pos_line_631 = "getBlockInv(getBlockInv)"
var pos_line_646 = "Set position %1 square container item bar to %2 "
var pos_line_663 = "setBlockInv(setBlockInv)"
var pos_line_680 = "Force the load of the level with the name %1."
var pos_line_692 = "loadLevel(loadLevel)"
var pos_line_707 = "Generate seeds %1 Level Name %2 Category %3 of the level."
var pos_line_723 = "Infinite level"
var pos_line_724 = "Super flat"
var pos_line_725 = "Void level"
var pos_line_726 = "Nether level"
var pos_line_734 = "genLevel(genLevel)"
var pos_line_752 = "Gets the name of the %1 level"
var pos_line_762 = "getLevelName(getLevelName)"
var pos_line_777 = "Get a list of drops in the level where %1 location sits"
var pos_line_787 = "getDropItems(getDropItems)"
var pos_line_802 = "Get a list of creatures in the %1 level"
var pos_line_812 = "getEntities(getEntities)"
var pos_line_827 = "Get a list of the levels of the server."
var pos_line_830 = "getServerLevels(getServerLevels)"
var pos_line_843 = "Gets a creature with an id of %2 in the %1 level"
var pos_line_858 = "getEntityByLevelAndID(getEntityByLevelAndID)"
var pos_line_875 = "Gets a list of floating level entities in the %1 level."
var pos_line_885 = "getLevelFloatingText(getLevelFloatingText)"
//utils.js
//generated by python reMoudle
var utils_line_5 = "Gets the position of player %1 "
var utils_line_15 = "buildPositionfromPlayer(buildPositionfromPlayer)"
var utils_line_30 = "Gets the position of block %1 "
var utils_line_40 = "buildPositionfromBlock(buildPositionfromBlock)"
var utils_line_55 = "Gets the position of bio %1 "
var utils_line_65 = "buildPositionfromEntity(buildPositionfromEntity)"
var utils_line_80 = "Connect database url: %1 username %2 password %3 table name %4 "
var utils_line_107 = "databaseOpen(databaseOpen)"
var utils_line_128 = "Update database sql statement: %1 parameter list %2 "
var utils_line_145 = "databaseUpdate(databaseUpdate)"
var utils_line_162 = "Query database sql statement: %1 column: %2 parameter list: %3 "
var utils_line_183 = "databaseQuery(databaseQuery)"
var utils_line_202 = "Custom web page placeholder: Name %1 replaces %2 "
var utils_line_219 = "setHTMLPlaceholder(setHTMLPlaceholder)"
var utils_line_236 = "Check whether player %1 is a bear child (based on BlackBE Cloud Black) and return the query results"
var utils_line_246 = "Check if the player is a bear child(Based on BlackBE Cloud Black.)"
var utils_line_261 = "Gets the geographic location of player %1 (IP-based reverse reconnaissance.)"
var utils_line_271 = "Gets the geographic location of player %1 (IP-based reverse reconnaissance.)"
var utils_line_286 = "Send an HTTP request of type %2 containing data %3 to %1 and get the return value"
var utils_line_309 = "Send an HTTP request and get the return value"
//window.js
//generated by python reMoudle
var window_line_5 = "Construct a simple window manager with the title %1 and the content %2 "
var window_line_20 = "getSimpleWindowBuilder(getSimpleWindowBuilder)"
var window_line_36 = "Adds a button with text %2 and image path %3 to simple window %1 "
var window_line_57 = "buildButton(buildButton)"
var window_line_76 = "Use %1 to send the window to player %2 and call back the %3 function"
var window_line_97 = "showToPlayer(showToPlayer)"
var window_line_116 = "Construct a dialog manager with a title of %1 and content of %2 "
var window_line_131 = "getModalWindowBuilder(getModalWindowBuilder)"
var window_line_147 = "Setup dialog %1 First button text %2 second button text %3 "
var window_line_187 = "Construct an advanced window manager with the title %1 "
var window_line_197 = "getCustomWindowBuilder(getCustomWindowBuilder)"
var window_line_211 = "Adds a text element with %2 content to the advanced window %1 "
var window_line_227 = "buildLabel(buildLabel)"
var window_line_244 = "Adds an input box element with %2 prompt %3 to the advanced window %1 "
var window_line_265 = "Add input box element(buildInput)"
var window_line_284 = "Adds a switch element with the title %2 to the advanced window %1 "
var window_line_300 = "buildToggle(buildToggle)"
var window_line_317 = "Adds a selection box element with the title %2 option %3 to the advanced window %1 "
var window_line_338 = "buildDropdown(buildDropdown)"
var window_line_357 = "Send a scoreboard text update for title %1 content %2 to all players"
var window_line_373 = "updateAllScoreBoard(updateAllScoreBoard)"
var window_line_389 = "Sends a scoreboard text update for title %2 content %3 to player %1 "
var window_line_410 = "updateOneScoreBoard(updateOneScoreBoard)"
var window_line_428 = "BN button image %1 "
var window_line_434 = "Microsoft logo"
var window_line_435 = "The hook"
var window_line_436 = "cross"
var window_line_437 = ". . ."
var window_line_438 = "Red warning exclamation point"
var window_line_439 = "Yellow pentacle"
var window_line_440 = "gear"
var window_line_441 = "Steve"
var window_line_442 = "The envelope"
var window_line_443 = "alex"
var window_line_444 = "OP crown"
var window_line_450 = "BN button picture"
//blockanditem.js update at 2020/5/6 
//generated by python reMoudle
var blockanditem_line_753 = "Gets the NBT string for item heap %1 "
var blockanditem_line_764 = "Gets an NBT string"
var blockanditem_line_779 = "Inject NBT string %2 into item heap %1 "
var blockanditem_line_796 = "Injection of NBT"
//entity.js update at 2020/5/6 
//generated by python reMoudle
var entity_line_528 = "Treat player %1 as an entity"
var entity_line_538 = "Treat the player as an entity"
var entity_line_553 = "Gets the list of potion effects for entity %1"
var entity_line_563 = "Obtain a physical pharmacodynamic list"
var entity_line_578 = "Gets %2 of the potion's effect %1 "
var entity_line_589 = "level"
var entity_line_591 = "For the rest of"
var entity_line_597 = "Gets the potion effect properties"
//particle.js update at 2020/5/6 
//generated by python reMoudle
var particle_line_5 = "At position %1 draw a horizontal circle with a radius of %2 with particles with ID %3 placed every %4 lattices"
var particle_line_32 = "Draw a particle circle"
var particle_line_53 = "Draw a line from position %1 to %2 with particles with ID %3 placed every %4 lattices"
var particle_line_80 = "Draw a particle line"
var particle_line_101 = "Draw fireworks at position %1 color code %2 flicker %3 leaves track %4 shape code %5 flight time (seconds) %6 "
var particle_line_138 = "Drawing particle fireworks"
var particle_line_163 = "Draws the broken particle of square %2 at position %1 "
var particle_line_180 = "Draw block breaking"
var particle_line_197 = "Draws a custom particle factory for McFunction file %3 at position %1 rotation %2 "
var particle_line_219 = "Draw custom particles in particle factory (no need for particle factory preposition, files stored in function folder)"
//pos.js update at 2020/5/6 
//generated by python reMoudle
var pos_line_727 = "Mirror horizon"
var pos_line_901 = "Lode number %1 lode size %2 Lode height %3 Lode height %4 "
var pos_line_927 = "Set the vein"
var pos_line_948 = "Mirror domain generator：Sea level %1 Baseline height %2 whether ore generator %3 is enabled Coal formation parameter %4 Iron ore formation parameter %5 redstone formation parameter %6 Lapis formation parameter %7 gold ore formation parameter %8 diamond formation parameter %9 underground soil formation parameter %10 underground gravel formation parameter %11 Granite formation parameter %12 diorite formation parameter %13 Andesite formation parameter %14 cave formation parameter %15 biome activation %16 ocean formation %17 "
var pos_line_1040 = "setSkyLandGenerator(setSkyLandGenerator)"
//window.js update at 2020/5/6 
//generated by python reMoudle
var window_line_464 = "Adds an input box element with a title of %2 prompt of %3 default text %4 to the advanced window %1 "
var window_line_490 = "buildInput(buildInput)"
//event.js update at 2020/5/17 
//generated by python reMoudle
var event_line_454 = "getAction.getSlot(getAction.getSlot)"
var event_line_479 = "getAction.getInventory(getAction.getInventory)"
var event_line_594 = "Gets the entity in event %1 "
var event_line_604 = "Get event entities"
//JSON.js update at 2020/5/17 
//generated by python reMoudle
var JSON_line_5 = "Empty json object"
var JSON_line_8 = "Empty json object"
var JSON_line_21 = "Set %2 to %3 for %1 "
var JSON_line_43 = "Set the key value for JSON"
var JSON_line_62 = "Delete the key %2 of %1 and its corresponding value"
var JSON_line_79 = "Deletes the specified key for JSON"
var JSON_line_96 = "Gets the value of the JSON object %1 key %2 "
var JSON_line_111 = "Gets the value of the key"
var JSON_line_128 = "Gets the value of the JSON object %1 key %2 "
var JSON_line_143 = "Gets the value of the key"
var JSON_line_160 = "Save the JSON object %1 to path %2 (with.JSON ending)"
var JSON_line_177 = "save the json"
var JSON_line_194 = "Read the JSON object from path %1 "
var JSON_line_204 = "Get the JSON object from the file"
//myblocks.js update at 2020/6/23 
//generated by python reMoudle
var myblocks_line_706 = "Custom javascript code"
var myblocks_line_725 = "Create a permission node named %1 described as %2 given to %3 by default"
var myblocks_line_741 = "The administrator"
var myblocks_line_742 = "The console"
var myblocks_line_743 = "All the players"
var myblocks_line_750 = "Create a permission node"
var myblocks_line_768 = "Delete the permission node named %1 "
var myblocks_line_779 = "Deletes a permission node"
//player.js update at 2020/6/23 
//generated by python reMoudle
var player_line_447 = "manager.buildskin(manager.buildskin)"
var player_line_485 = "manager.buildskinfor(manager.buildskinfor)"
var player_line_846 = "Gets the game mode ID of player %1 "
var player_line_856 = "Get the game mode ID(getPlayerGameMode)"
var player_line_870 = "Check if player %1 has %2 permissions"
var player_line_885 = "Check if the player has permission"
//window.js update at 2020/6/23 
//generated by python reMoudle
var window_line_511 = "Give player %1 a BOSS blood bar with %2 health %3 "
var window_line_532 = "Give the player a boss blood bar"
var window_line_550 = "Clear player %1 's BOSS blood bar"
var window_line_561 = "Clear the player's BOSS blood bar"
var window_line_575 = "Gets player %1 's BOSS blood bar text"
var window_line_585 = "Gets the player's BOSS blood bar"
var window_line_599 = "Gets %1 % of the player's BOSS health bar"
var window_line_609 = "Gets the percentage of the player's BOSS character health"
//pos.js update at 2020/7/4 
//generated by python reMoudle
var pos_line_728 = "Sea world"
//window.js update at 2020/7/19 
//generated by python reMoudle
var window_line_623 = "Set player %1 's score item to %2 "
var window_line_639 = "Sets the credits to the player's name"
//blockanditem.js update at 2020/7/4 
//generated by python reMoudle
var blockanditem_line_813 = "Gets the list of enchanted objects for item %1 "
var blockanditem_line_824 = "Gets the item enchantment list"
var blockanditem_line_839 = "Gets the ID of the enchantment object %1"
var blockanditem_line_850 = "Gets the enchant ID"
var blockanditem_line_865 = "Gets the level of enchanted object %1 "
var blockanditem_line_876 = "Gets enchantment levels"
//window.js update at 2020/7/22 
//generated by python reMoudle
var event_line_371_2 = "Digital slider"
var event_line_371_3 = "String slider"
//window.js update at 2020/7/4 
//generated by python reMoudle
var window_line_655 = "Adds a slider element with a title of %2 min %3 Max %4 to advanced window %1 "
var window_line_681 = "buildSlider(buildSlider)"
var window_line_702 = "Adds a text slider element with a title of %2 and a content of %3 to the advanced window %1 "
var window_line_723 = "buildStepSlider(buildStepSlider)"
//player.js update at 2020/7/4 
//generated by python reMoudle
var player_line_902 = "Teleport player %1 across dimensions to %2 "
var player_line_919 = "loadScreenTP(loadScreenTP)"
//entity.js update at 2020/7/4 
//generated by python reMoudle
var entity_line_613 = "Gets the network ID of the entity %1 "
var entity_line_623 = "Gets the network ID of the entity"
var entity_line_638 = "Display item stack %2 in location %1 "
var entity_line_655 = "showFloatingItem(showFloatingItem)"
var entity_line_672 = "Undisplay location %1 item stack %2 "
var entity_line_689 = "removeFloatingItem(removeFloatingItem)"
//player.js update at 2020/7/4 
//generated by python reMoudle
var player_line_936 = "Set player %1 experience to %2 "
var player_line_953 = "Set player experience"
var player_line_970 = "Set player %1 experience to %2 "
var player_line_987 = "Set player experience levels"
var player_line_1004 = "Set player %1 hunger to %2 "
var player_line_1021 = "Set player hunger"
var player_line_1038 = "Gets %1 of the player's experience"
var player_line_1048 = "Gain player experience"
var player_line_1062 = "Gets %1 of the player's experience level"
var player_line_1072 = "Gain player experience levels"
var player_line_1086 = "Gets player %1 's hunger value"
var player_line_1096 = "Gets the player hunger value"