# BlocklyNukkit JavaScript开发文档  
## 基对象

### 指代基对象

指代基对象是指用来直接获取java对象的基对象，并不会内置在解释器里面，由解释器从nukkit动态获取

|对象名|解释|
|------|---|
|server|服务器对象<Server-J>|
|plugin|blocklynukkit自身<Plugin-J>|
|logger|控制台输出器实例<PluginLogger-J>|

### 功能基对象

功能基对象是指用来实现一定功能的基对象，在所有的服务器上这些基对象都是相同的，被内置在解释器里，封装了很多常用功能

|对象名|解释|
|------|---|
|manager|BN插件管理器|
|blockitem|方块与物品管理器对象|
|algorithm|算法管理器对象|
|inventory|物品栏管理器对象|
|world|世界&维度管理器对象|
|entity|实体管理器对象|
|database|数据库管理器对象|
|notemusic|红石音乐管理器对象|
|window|窗口管理器对象|
|particle|粒子管理器对象|
|Java|js对java进行操作的管理器对象|  

## 基对象成员函数

> 注:   
> \<E\> 指泛型，可以被替换为Number,String,Boolean,Position,Player,Block,Item  
> \<E+\> 指完全泛型，所有类型都可以  
> 带有-J的类型指Java对象，可以在js中直接使用java对象的成员函数  
> 带有-C的类型指Java类，可以直接new一个java对象在js中使用，也可以世界使用static的java类成员函数  
> Array<*>代表一个都是\*类型的元素组成的数组,由于js与java的互操作问题,传参需要把js数组转换为java对象,比如向函数传入Array<Item-J>类型的参数需要使用Java.to(array,\'cn.nukkit.item.Item[]\')转换后才能传入,具体用法参见图形编辑器自动生成的代码  

### manager基对象

|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|getFile|String dir,String filename|File-J|获取bn目录下dir文件夹的filename文件(可为不存在文件)|
|time|int second|String|将秒数转为时:分:秒字符串|
|createConfig|File-J file,int type|Config-J|在虚拟文件file处构建种类type(yaml==2)的配置文件|
|createCommand|String name,String des,String call|void|创建名称为name,描述为des的命令，回调函数的函数名为call|
|createTask|String functionName, int delay|TaskHandler-J|延迟dalay刻调用函数名functionName的函数(不会阻塞)|
|createLoopTask|String functionName, int delay|TaskHandler-J|每dalay刻重复调用函数名functionNmae的函数|
|getTaskId|TaskHandler-J handler|int|获取handler的任务id|
|cancelTask|int id|void|取消任务ID为id的任务|
|getPlugin|String name|Plugin-J|获取注册名称为name的插件对象|
|plugin|void|Plugin-J|获取plugin基对象(有点多余)|
|buildskin|Player-J player,String skin|void|将玩家的皮肤设置为BlocklyNukkit/skin文件夹下的同名皮肤(自动识别4D)|
|buildskinfor|Player-J player,String skin,Player to|void|同上，但只展示给to玩家|
|getMoney|Player-J player|double|获取玩家player金钱(EconomyAPI)|
|reduceMoney|Player-J player,double money|void|给玩家减去money金钱(可减为负数)|
|addMoney|Player-J player,double money|void|给玩家加上money金钱|
|setMoney|Player-J player,double money|void|设置玩家的金钱为money|
|getAllKeyInConfig|Config-J config|Array|获取config配置文件的所有键|
|putEasy|String string,\<E\> val|void|存入临时存储->键string,值为泛型val|
|getEasy\<E\>|String string|\<E\>|获取临时存储->键string|
|setPrivateCall|String event,String callname|void|将event事件回调在本插件映射到callname函数|
|PlayerIsOP|Player-J player|boolean|获取player是否是op|
|kickPlayer|Player-J player,String reason|void|踢出玩家player并发送踢出原因reason|
|setHTMLPlaceholder|String key,String value|void|设置速建官网功能的自定义placeholder|
|getPlayerArea|Player-J player|String|获取玩家的地理位置字符串|
|checkIsBear|Player-J player|String|使用BlackBE云黑检查玩家是否为熊孩子|
|buildvec3|double x,double y,double z|Vector3-J|从xyz构建三维向量|
|httpRequest|String method,String url,String data|String|发送method(GET/POST)类型的http请求并获取返回值|
|callFunciton|String fun,\<E+\> args...|void|调用函数名为fun的函数(直接写函数名调用所有插件中同名的函数,可以在开头加入xxx.js::函数名这样指定调用xxx.js下面的函数),注入参数为args,args参数不限类型,不限数量(0-1024),但是需要保证和被调用的函数参数一致|

### algorithm基对象

|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|buildPositionfromPlayer|Player-J p|Position-J|获取玩家p的位置|
|buildPositionfromBlock|Block-J b|Position-J|获取方块b的位置|
|buildPositionfromEntity|Entity-J e|Position-J|获取实体e的位置|
|forEachBlockInArea|Position-J a, Position-J b,boolean isair,String callback|void|为位置a到位置b的每一个isair包括空气的方块回调函数名callback函数(注入参数一个:Block-J b,当前方块)|
|forLinkedBlock|Position-J a,String callback|void|对于位置a相邻的所有同种方块的位置调用函数名callback函数(注入参数一个:Position-J p,当前位置)|

### blockitem基对象

|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|makeSound|Position-J pos,String s|void|在位置pos播放s对应的声音(跟原版命令一样)|
|makeExpBall|Position-J pos,int exp|void|在位置pos生成包含exp点经验值的经验球|
|makeDropItem|Position-J pos,Item-J i|void|在位置pos生成与i相同的物品堆|
|getBlock|Position-J pos|Block-J|获取位置pos的方块|
|getLevelEntities|Position-J pos|Array|获取位置所在世界的实体列表|
|getLevelPlayers|Position-J pos|Array|获取位置所在世界的玩家列表|
|getIsSunny|Position-J pos|boolean|获取位置所在世界是否为晴天|
|setLevelWeather|Position-J p,String m|void|设置p所在世界天气为m("clear","thunder","rain")|
|isDay|Position-J pos|boolean|获取pos所在世界是否为白天|
|setBlock|Position-J p,Block-J b,boolean par|void|设置p处方块为b,par指定是否生成破坏粒子|
|getItemInHand|Player-J p|Item-J|获取玩家p手中的物品堆|
|setItemInHand|Player-J p,Item-J i|void|设置玩家p手上的物品为i|
|addItemToPlayer|Player-J p,Item-J i|void|向玩家p背包添加物品i|
|hasItemToPlayer|Player-J p,Item-J i|boolean|检查玩家p是否有物品i|
|removeItemToPlayer|Player-J p,Item-J i|void|移除玩家p背包里的物品i|
|getDropItems|Position-J pos|Array|获取pos所在世界的掉落物实体数组|
|getLevelName|Level-J l|String|获取世界l的的名称|
|buildBlock|int id,int data|Block-J|构建ID为id，数据值data的方块|
|buildItem|int id,int data,int count|Item-J|构建ID为id，数据值为data，数量为count的物品堆|
|buildItemFromBlock|Block-J block|Item-J|将方块转为物品|
|getItemLore|Item-J item|String|获取物品item的lore(多行lore用";"连接)|
|addToCreativeBar|Item-J item|void|把物品堆添加到创造物品栏|
|setItemLore|Item-J item,String str|void|设置物品item的lore为str(多行lore用";"连接)|
|addShapelessCraft|Array<Item-J> i,Item-J o|void|添加无序合成,原料列表i,产物o|
|addFurnaceCraft|Item-J i,Item-J o|void|添加熔炉配方,原料i,产物o|
|addShapedCraft|Array<String> shape,Item-J output,Array<Item-J> append|void|添加有序合成(详见图形编辑器)|
|addItemEnchant|Item-J item,int i,int l|void|给item添加ID为i,等级为l的附魔(可去wiki查找id)|
|isSame|Item i1,Item i2,boolean d,boolean n|boolean|检测i1和i2是否相同(d是否毕竟数据值,n是否比较nbt,数量不会比较)|
|addBNCraft|String t,String d,Arryat<Item-J> i,Array<Item-J> o,int de,double p|void|添加一个种类为t,描述为d,原材料为i,产物为o,合成用时de,成功率p(0-1)的bn高级合成|
|openBNCraftForPlayer|String type, Player-J player|void|给玩家打开种类的type的合成高级合成ui|
|PositionMove|Position pos,double x,double y,double z|void|让pos偏移xyz|
|getNBTString|Item-J item|String|获取物品堆item的nbt字符串|
|putinNBTString|Item-J item,String nbt|void|向item注入NBT字符串nbt|

### database基对象
|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|databaseOpen|String url,String username,String password,String table|void|打开与sql服务器的连接|
|databaseUpdate|String stt, Array<E+> objs|void|使用sql语句stt,语句参数为objs更新数据库|
|databaseQuery|String stt,String col,Array<E+> objs|Array|使用sql语句stt,参数objs,查询第col列数据|

### entity基对象
|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|getDropItemStack|EntityItem-J/Entity-J e|Item-J|获取掉落物实体e的物品堆|
|removeEntity|Entity-J e|void|移除生物e|
|setEntityName|Entity-J e,String name|void|设置e的名称为name|
|setEntityNameTagAlwaysVisable|Entity-J e,boolean b|void|设置e的名称是否一直高亮|
|setEntityHealth|Entity-J e,float h|void|设置e的血量为h|
|setEntityMaxHealth|Entity-J e,float h|void|设置e的血量上限为h|
|getEntityHealth|Entity-J e|float|获取e的血量|
|getEntityMaxHealth|Entity-J e|float|获取e的血量上限|
|clearEntityEffect|Entity-J entity|void|清空entity的所有药水效果|
|addEntityEffect|Entity-J entity,int id,int level,int tick|void|给entity添加药水ID为id等级为level，持续时间为tick的药水效果|
|addEntityEffect|Entity-J entity,int id,int level,int tick,int r,int g,int b|void|同上，不同是还会显示rgb颜色的药水气泡，解释器自动根据参数数量判断函数|
|getEntityID|Entity-J entity|String|获取entity的实体标志id|
|getEntityByLevelAndID|Level-J level,String id|Entity-J|获取世界level中标志为id的实体，没有则返回空(null)|
|getEntityLevel|Entity-J entity|Level-J|获取entity所在的世界|
|getEntityName|Entity-J entity|String|获取entity的名字|
|getEntityPosition|Entity-J entity|Position-J|获取实体位置|
|setEntityPosition|Entity-J entity,Position-J pos|void|设置实体位置|
|buildFloatingText|String text,Position-J pos,int tick,String callback|Entity-J|构建文字为text位置为pos的浮空字实体,并每tick刻回调一次callback函数,注入参数entity(浮空字实体)|
|startDisplayFloatingText|Entity-J entity|void|启动浮空字实体的显示(entity必须是构建的浮空字实体！)|
|getLevelFloatingText|Level-J level|Array<Entity>|获取世界level的所有浮空字实体列表|
|getEntityEffect|Entity-J entity|Array<Effect>|获取实体entity的全部药水效果列表|
|getEffectLevel|Effect-J effect|int|获取effect药水效果的等级|
|getEffectID|Effect-J effect|int|获取effect的药水id(前往mcwiki查看id表)|
|getEffectTime|Effect-J effect|int|获取effect药水效果剩余持续的时间|

### inventory基对象
|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|addInv|boolean d, Array<Item-J> i,String n|Inventory-J|构建虚拟标题n的物品栏,d控制是否大箱子,i是物品栏的物品列表|
|getItemsInInv|Inventory-J inv|Array|获取inv的所有物品|
|showFakeInv|Player-J player,Inventory-J inv|void|向玩家player展示物品栏inv|
|editInv|Inventory-J inv, Array<Item> item|Inventory-J|设置物品栏inv的物品为item|
|editInvBySlot|Inventory-J inv, int slot, Array<Item> item|Inventory-J|设置物品栏inv第slot个槽位的物品为item|
|addItemToInv|Inventory-J inv, Item-J item|Inventory-J|向inv添加物品item|
|removeItemFromInv|Inventory-J inv, Item-J item|Inventory-J|从inv移除物品item|
|containsItemInInv|Inventory-J inv, Item-J item|boolean|检测inv里是否有足够的item|
|getBlockInv|Position-J pos|Inventory-J|获取pos位置的方块的物品栏(箱子等)|
|setBlockInv|Position-J pos,Inventory-J inv|void|设置pos位置的方块的物品栏为inv|
|getPlayerInv|Player-J p|Inventory-J|获取玩家p的物品栏|
|setPlayerInv|Player-J p,Inventory-J inv|void|设置玩家p的物品栏为inv|

### world基对象
|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|genLevel|String name,int seed,String gen|void|生成名称name种子seed,种类为gen(FLAT,NETHER,VOID,NORMAL)的世界|
|loadLevel|String s|void|强制加载名称为s的世界|
|getServerLevels|void|Array<Level-J>|获取服务器的所有世界|
|setSkyLandGenerator|int seaHeight,int movey,boolean enableOre,int coalcount,int coalsize,int coalmin,int coalmax,int ironcount,int ironsize,int ironmin,int ironmax,int redstonecount,int redstonesize,int redstonemin,int redstonemax,int lapiscount,int lapissize,int lapismin,int lapismax,int goldcount,int goldsize,int goldmin,int goldmax,int diamondcount,int diamondsize,int diamondmin,int diamondmax,int dirtcount,int dirtsize,int dirtmin,int dirtmax,int gravelcount,int gravelsize,int gravelmin,int gravelmax,int granitecount,int granitesize,int granitemin,int granitemax,int dioritecount,int dioritesize,int dioritemin,int dioritemax,int andesitecount,int andesitesize,int andesitemin,int andesitemax,boolean enableCave,boolean enableBiome,boolean enableOcean|void|设置镜像天域的生成器参数|

### notemusic基对象
|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|getSongFromFile|String name|Song-J|从notemusic文件夹的name文件解析红石音乐|
|getSongTitle|Song-J song|String|获取歌曲的标题|
|getSongDescription|Song-J song|String|获取歌曲的描述|
|getSongAuthor|Song-J song|String|获取歌曲的作者|
|getSongLength|Song-J song|String|获取歌曲长度|
|buildRadio|Song-J song,boolean isloop,boolean isautodestroy|RadioSongPlayer-J|构建一个红石音乐电台,song播放歌曲,isloop是否循环,isautodestroy是否无人听自动摧毁|
|addPlayerToRadio|RadioSongPlayer-J radio, Player-J player|void|向radio添加player|
|removePlayerToRadio|RadioSongPlayer-J radio, Player-J player|void|从radio移除player|
|getPlayerInRadio|RadioSongPlayer-J radio|Array|void|获取radio的所有听众|
|getSongInRadio|RadioSongPlayer-J radio|Song-J|获取radio播放的歌曲|
|setRadioStatus|RadioSongPlayer radio,boolean isplaying|void|设置radio的播放状态|

### window基对象
|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|updateAllScoreBoard|String title,String text|void|给所有玩家更新计分板信息,多行用\';\'连接|
|updateOneScoreBoard|String title,String text,Player p|void|给玩家p更新计分板信息,多行用\';\'连接|
|getSimpleWindowBuilder|String title,String context|Simple-J|构建标题title,内容文字为context(非按钮)的简单窗口管理器|
|getModalWindowBuilder|String title,String context|Modal-J|构建标题title,内容文字为context的对话框窗口管理器|
|getCustomWindowBuilder|String title|Custom-J|构建标题title的高级窗口管理器|
|getEventResponseText|Event-J e|String|获取e中简单窗口点击的按钮文本|
|getEventResponseModal|Event-J e|String|获取e中对话框点击的按钮文本|
|getEventCustomVar|Event-J e,int id,String mode|String|获取e中高级窗口ID为id的mode(input,toggle,dropdown)元素的值|

### particle基对象
|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|drawCircle|Position-J pos,double radius,int pid,double sep|void|在pos处以radius为半径水平用粒子ID为pid的粒子以每隔sep格放置一个的距离绘制圆|
|drawLine|Position-J pos1,Position-J pos2,double sep,int pid|void|从pos1到pos2(必须同世界)每隔sep格放置一个粒子ID为pid的粒子来绘制直线|
|drawFireWork|Position-J pos,int colornum,boolean flick,boolean trail,int shape,int second|void|在pos处生成一个飞行时间为second的烟花,colornum指定颜色,flick指定是否闪烁,trail指定是否留有轨迹,shape指定形状,详见本节附表|
|drawBlockBreak|Position-J pos, Block-J block|void|在pos处绘制block对应的方块被破坏的粒子|
|drawParticleFactoryMcFunction|String fun,Position-J pos,double turn|void|在pos处释放名为fun(无后缀)的mcfunction文件存储的粒子工厂自定义粒子,释放时旋转角度为turn度|

附表:粒子id表(有些粒子我没见过，所以描述很神奇，大家帮忙贡献更好的描述，谢谢)  

|粒子描述|id|
|-|-|
|气泡|1|
|暴击粒子|3|
|方块强制场|4|
|烟雾|5|
|爆炸|6|
|蒸发|7|
|火焰|8|
|熔岩|9|
|浓烟|10|
|红石|11|
|扬尘|12|
|雪球|14|
|巨大爆炸|15|
|生物火焰|17|
|爱心|18|
|传送门|21|
|水花飞溅|23|
|水尾迹|25|
|滴水|26|
|滴状熔岩|27|
|滴水蜂蜜|28|
|落尘|29|
|生物药水粒子|30|
|音符和灰尘|33|
|粘液|34|
|雨溅|35|
|村民愤怒|36|
|村民快乐|37|
|附魔台|38|
|跟踪发射器|39|
|音符|40|
|巫术|41|
|胡萝卜|42|
|末地烛|44|
|上升龙息|45|
|分裂|46|
|不死图腾|47|
|食物|48|
|焰火起动器|49|
|焰火火花|50|
|焰火覆盖|51|
|气球气体|52|
|彩色火焰|53|
|火花|54|
|导管|55|
|气泡柱向上|56|
|气泡柱向下|57|
|大爆炸|61|
|墨水|62|
|落尘|63|
|篝火烟雾|64|
|下落的龙息|66|
|龙息|67|

附表:烟花颜色码表  

|颜色|colornum码|
|-|-|
|黑色|0|
|红色|1|
|绿色|2|
|棕色|3|
|靛蓝色|4|
|紫色|5|
|天青色|6|
|浅灰色|7|
|深灰色|8|
|粉色|9|
|柠檬色|10|
|黄色|11|
|浅蓝色|12|
|洋红色|13|
|橙色|14|
|白色|15|

附表：烟花形状  

|形状|shape码|
|-|-|
|小球型|0|
|大球型|1|
|星形|2|
|苦力怕型|3|
|爆裂型|4|

### Java基对象
这是一个特殊的基对象,用于直接操作java类和对象,所以你可以参照[java文档](https://docs.oracle.com/javase/8/docs/api/)和[nukkit文档](https://ci.nukkitx.com/job/NukkitX/job/Nukkit/job/master/javadoc/overview-summary.html)操作  
js可以这样无缝连接java,这为bn的js开服提供了强大的类库支持  
更多js与java交互示例,详见CSDN的[一篇教程](https://blog.csdn.net/ASDQWE09876/article/details/96871968?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1)  

|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|from|<E+> val|<E+> var|将java对象val转为合适的js数据var,如将java数组转为js数组|
|to|<E+> var,String package|<E+> val|将js变量var转为package包名对应的java类对象(包名后加[]可转为java数组)|
|type|String package|<E+>-C|获取package对应包名的java类(不是对象是类)|
|extend|<E+>-C class,[可选<E+> object]|<E+>|继承java类并构造js对象(跟modPE差不多的)|
|super|<E+> obj|<E+>|获取obj的父类对象|

## 事件回调函数

事件回调函数是解释器内置的自动调用的函数,只要你的函数名跟列表里面的相同就会自动调用  
由于所有插件的变量都是相通的,函数也是变量的一种,所以我们建议使用manager.setPrivateCall(eventname,customname)来把下表的事件映射到自己的一个函数上避免冲突  

|介绍|代码|
|-|-|
|玩家聊天|PlayerChatEvent|
|玩家进入|PlayerJoinEvent|
|方块破坏|BlockBreakEvent|
|方块放置|BlockPlaceEvent|
|玩家FormUI操作|PlayerFormRespondedEvent|
|玩家使用指令|PlayerCommandPreprocessEvent|
|物品转移(漏斗)|InventoryTransactionEvent|
|玩家交互(右键、点地)|PlayerInteractEvent|
|玩家移动|PlayerMoveEvent|
|生物生成|EntitySpawnEvent|
|生物被清除|EntityDespawnEvent|
|生物受到伤害|EntityDamageEvent|
|玩家死亡|PlayerDeathEvent|
|生物死亡(包括玩家)|EntityDeathEvent|
|生物瞬移|EntityTeleportEvent|
|掉落物消失|ItemDespawnEvent|
|掉落物生成|ItemSpawnEvent|
|投掷物击中|ProjectileHitEvent|
|投掷物发出|ProjectileLaunchEvent|
|生物切换世界|EntityLevelChangeEvent|
|生物切换物品栏|EntityInventoryChangeEvent|
|实体爆炸|EntityExplosionPrimeEvent|
|方块起火|BlockBurnEvent|
|方块生长|BlockGrowEvent|
|告示牌文字更改|SignChangeEvent|
|篝火抛出物品|ItemFrameDropItemEvent|
|树叶自然消失|LeavesDecayEvent|
|红石更新|RedstoneUpdateEvent|
|合成物品|CraftItemEvent|
|物品栏打开|InventoryOpenEvent|
|熔炉燃烧|FurnaceBurnEvent|
|smelt|FurnaceSmeltEvent|
|捡起箭|InventoryPickupArrowEvent|
|捡起物品|InventoryPickupItemEvent|
|添加药水效果|PotionApplyEvent|
|玩家进行传送|PlayerTeleportEvent|
|实体被实体攻击事件|EntityDamageByEntityEvent|
|实体被玩家攻击事件|EntityDamageByPlayerEvent|
|玩家下床|PlayerBedEnterEvent|
|玩家上床|PlayerBedLeaveEvent|
|右键点方块|RightClickBlockEvent|
|左键点方块|LeftClickBlockEvent|
|右键点空气|ClickOnAirEvent|
|物理触碰(压力板、按钮)|PhysicalTouchEvent|
|方块自然生成(下雪等)|BlockFormEvent|
|液体流动|LiquidFlowEvent|
|岩浆遇水生成圆石、石头|StoneSpawnEvent|
|虚拟物品栏操作事件|FakeSlotChangeEvent|
|红石音乐电台被摧毁|SongDestroyingEvent|
|红石音乐电台歌曲播放结束|SongEndEvent|
|红石音乐电台暂停|SongStoppedEvent|
|玩家退出事件|PlayerQuitEvent|
|物品合成事件|CraftItemEvent|

## 常用java类/对象的成员函数
注:这部分由于不属于bn类库范畴,所以不会加说明,应该看参数和函数名能看懂,不懂的看图形编辑器生成的代码或者直接qq联系开发组或者issue,谢谢  
注:这部分的java对象不加-J了,因为太多  
注:xxx[]代表xxx类型的数组,需要使用Java基对象的方法转换  
注:bn解释器会自动执行部分类型转换,比如js的数字转为java的整形int,浮点型float,双精度型double,Player转为CommandSender等等,如果不能自动转会报错  
注:标注static的函数是直接从类调用而不是对象,未标注static是从对象调用的  
注:类/对象 继承自某包意味着这个类/对象能够使用被继承的包里面可以用的方法/函数  

> 温馨提示:  
> 下面的只是冰山一角!  
> 更多的用法请去[nukkit官方文档](https://ci.nukkitx.com/job/NukkitX/job/Nukkit/job/master/javadoc/index.html?overview-summary.html)查看  

### windowbuilder三件套
1.Custom
- void setTitle(String title)
- void showToPlayer(Player-J p, String callback)
- void buildLabel(String text)
- void buildInput(String title,String placeholder)
- void buildInput(String title,String placeholder,String defaulttext)
- void buildToggle(String title)
- void buildDropdown(String title,String inner)

2.Modal-J
- void setTitle(String title)
- void setContext(String context)
- void setButton1(String text)
- void setButton2(String text)
- void showToPlayer(Player-J p, String callback)

3.Simple-J
- void setTitle(String title)
- void setContext(String context)
- void buildButton(String text,String img)
- void showToPlayer(Player-J p,String callback)

### logger常用招式
- void info(String s)
- void warning(String s)

### server常用招式
#### cn.nukkit.Server
|返回值类型|函数名|
|-|-|
|void|addOp(String name)|
|void|addPlayer(String identifier, Player player)|
|void|addRecipe(Recipe recipe)|
|void|addWhitelist(String name)|
|void|batchPackets(Player[] players, DataPacket[] packets)|
|void|batchPackets(Player[] players, DataPacket[] packets, boolean forceSync)|
|int|broadcast(String message, String permissions)|
|int|broadcastMessage(String message)|
|static void|broadcastPacket(Collection<Player> players, DataPacket packet)|
|static void|broadcastPacket(Player[] players, DataPacket packet)|
|void|broadcastPacketsCallback(byte[] data, List<String> identifiers)|
|void|disablePlugins()|
|boolean|dispatchCommand(CommandSender sender, String commandLine)|
|void|doAutoSave()|
|void|forceShutdown()|
|String|getApiVersion()|
|boolean|getAutoSave()|
|ConsoleCommandSender|getConsoleSender()|
|String|getDataPath()|
|int|getDefaultGamemode()|
|Level|getDefaultLevel()|
|int|getDifficulty()|
|static int|getDifficultyFromString(String str)|
|String|getFilePath()|
|boolean|getForceGamemode()|
|int|getGamemode()|
|static int|getGamemodeFromString(String str)|
|static String|getGamemodeString(int mode)|
|static String|getGamemodeString(int mode, boolean direct)|
|boolean|getGenerateStructures()|
|static Server|getInstance()|
|Level|getLevel(int levelId)|
|Level|getLevelByName(String name)|
|Map<Integer,Level>|getLevels()|
|int|getMaxPlayers()|
|String|getMotd()|
|String|getName()|
|BanList|getNameBans()|
|Map<UUID,Player>|getOnlinePlayers()|
|Player|getPlayer(String name)|
|PluginManager|getPluginManager()|
|String|getPluginPath()|
|int|getPort()|
|ServerScheduler|getScheduler()|
|UUID|getServerUniqueId()|
|ServiceManager|getServiceManager()|
|int|getSpawnRadius()|
|String|getSubMotd()|
|int|getTick()|
|float|getTicksPerSecond()|
|float|getTicksPerSecondAverage()|
|float|getTickUsage()|
|float|getTickUsageAverage()|
|String|getVersion()|
|int|getViewDistance()|
|Config|getWhitelist()|
|boolean|hasWhitelist()|
|boolean|isLevelGenerated(String name)|
|boolean|isLevelLoaded(String name)|
|boolean|isNetherAllowed()|
|boolean|isOp(String name)|
|boolean|isWhitelisted(String name)|
|boolean|loadLevel(String name)|
|void|reload()|
|void|reloadWhitelist()|
|void|removeOnlinePlayer(Player player)|
|void|removeOp(String name)|
|void|removeWhitelist(String name)|
|void|sendRecipeList(Player player)|
|void|setAutoSave(boolean autoSave)|
|void|setDefaultLevel(Level defaultLevel)|
|void|setMaxPlayers(int maxPlayers)|
|boolean|shouldSavePlayerData()|
|void|shutdown()|
|void|start()|
|void|tickProcessor()|
|void|titleTick()|
|boolean|unloadLevel(Level level)|

### Player常用函数
#### cn.nukkit.Player
- 继承自 cn.nukkit.math.Vector3  
- 继承自 cn.nukkit.level.Position  
- 继承自 cn.nukkit.level.Location  
- 继承自 cn.nukkit.entity.Entity  
- 继承自 cn.nukkit.entity.EntityLiving  
- 继承自 cn.nukkit.entity.EntityCreature  
- 继承自 cn.nukkit.entity.EntityHumanType  
- 继承自 cn.nukkit.entity.EntityHuman  

|返回值类型|函数名|
|-|-|
|void|addExperience(int add)|
|void|addMovement(double x, double y, double z, double yaw, double pitch, double headYaw)|
|int|addWindow(Inventory inventory)|
|int|addWindow(Inventory inventory, Integer forceId)|
|boolean|attack(EntityDamageEvent source)|
|boolean|batchDataPacket(DataPacket packet)|
|boolean|canCollideWith(Entity entity)|
|boolean|canInteract(Vector3 pos, double maxDistance)|
|boolean|canSee(Player player)|
|boolean|chat(String message) //Sends a chat message as this player.|
|void|clearTitle()|
|void|close(String message)|
|void|close(String message, String reason)//The same as kick.|
|boolean|dataPacket(DataPacket packet)|
|int|dataPacket(DataPacket packet, boolean needACK)|
|boolean|directDataPacket(DataPacket packet)|
|int|directDataPacket(DataPacket packet, boolean needACK)|
|boolean|dropItem(Item item)//Drops an item on the ground in front of the player.|
|String|getAddress()|
|AdventureSettings|getAdventureSettings()|
|boolean|getAllowFlight()|
|PlayerCursorInventory|getCursorInventory()|
|String|getDisplayName()|
|Item[]|getDrops()|
|EntityInteractable|getEntityPlayerLookingAt(int maxDistance)//Returns the Entity the player is looking at currently|
|int|getExperience()|
|int|getExperienceLevel()|
|Long|getFirstPlayed()//Returns the time this player first played in this server.|
|PlayerFood|getFoodData()|
|int|getGamemode()|
|int|getInAirTicks()|
|Entity|getKiller()|
|int|getLastChorusFruitTeleport()|
|int|getLastEnderPearlThrowingTick()|
|Long|getLastPlayed()//Returns the time this player last joined in this server.|
|String|getName()|
|Position|getNextPosition()|
|int|getPing()|
|int|getPort()|
|Server|getServer()|
|Position|getSpawn()|
|PlayerUIInventory|getUIInventory()|
|int|getViewDistance()|
|BlockEnderChest|getViewingEnderChest()|
|Inventory|getWindowById(int id)|
|int|getWindowId(Inventory inventory)|
|void|handleDataPacket(DataPacket packet)|
|boolean|hasAutoJump()|
|boolean|hasPermission(Permission permission)|
|boolean|hasPermission(String name)|
|boolean|hasPlayedBefore()|
|void|hidePlayer(Player player)|
|protected void|initEntity()|
|boolean|isAdventure()|
|boolean|isBanned()|
|boolean|isBreakingBlock()|
|boolean|isCreative()|
|boolean|isFoodEnabled()|
|boolean|isOnline()|
|boolean|isOp()|
|boolean|isPermissionSet(Permission permission)|
|boolean|isPermissionSet(String name)|
|boolean|isSleeping()|
|boolean|isSpectator()|
|boolean|isSurvival()|
|boolean|isUsingItem()//Returns whether the player is currently using an item (right-click and hold).|
|boolean|isWhitelisted()|
|boolean|kick()|
|boolean|kick(String reason)|
|void|kill()|
|void|teleport(Position pos)|
|void|removeAllWindows()|
|void|resetFallDistance()|
|void|resetInAirTicks()|
|void|resetTitleSettings()//Resets both title animation times and subtitle for the next shown title|
|void|save()|
|void|sendActionBar(String title)|
|void|sendActionBar(String title, int fadein, int duration, int fadeout)|
|void|sendChat(String message)|
|void|sendChat(String source, String message)|
|void|sendExperience()|
|void|sendExperience(int exp)|
|void|sendExperienceLevel()|
|void|sendExperienceLevel(int level)|
|void|sendMessage(String message)|
|void|sendMessage(TextContainer message)|
|void|sendPopup(String message)|
|void|sendPopup(String message, String subtitle)|
|void|sendPosition(Vector3 pos)|
|void|sendPosition(Vector3 pos, double yaw)|
|void|sendPosition(Vector3 pos, double yaw, double pitch)|
|void|sendTip(String message)|
|void|sendTitle(String title)|
|void|sendTitle(String title, String subtitle)|
|void|sendTitle(String title, String subtitle, int fadeIn, int stay, int fadeOut)|
|void|setAllowFlight(boolean value)|
|void|setAllowInteract(boolean value)|
|void|setAllowInteract(boolean value, boolean containers)|
|void|setAutoJump(boolean value)|
|void|setBanned(boolean value)//Sets this player to be banned or to be pardoned.|
|void|setCheckMovement(boolean checkMovement)|
|void|setDisplayName(String displayName)|
|void|setEnableClientCommand(boolean enable)|
|void|setExperience(int exp)|
|void|setExperience(int exp, int level)|
|void|setFoodEnabled(boolean foodEnabled)|
|boolean|setGamemode(int gamemode)|
|boolean|setGamemode(int gamemode, boolean clientSide)|
|boolean|setGamemode(int gamemode, boolean clientSide, AdventureSettings newSettings)|
|void|setHealth(float health)|
|void|setMaxHealth(int maxHealth)|
|void|setMovementSpeed(float speed)|
|void|setMovementSpeed(float speed, boolean send)|
|void|setOp(boolean value)//Sets this object to be an operator or not to be.|
|void|setSpawn(Vector3 pos)|
|void|setSubtitle(String subtitle)|
|void|setTitleAnimationTimes(int fadein, int duration, int fadeout)|
|void|setViewDistance(int distance)|
|void|setViewingEnderChest(BlockEnderChest chest)|
|void|setWhitelisted(boolean value//Adds this player to the white list, or removes it from the whitelist.|
|int|showFormWindow(FormWindow window)|
|int|showFormWindow(FormWindow window, int id)//Be Warped by BlocklyNukkit,use window base object instead|
|void|showPlayer(Player player)|
|boolean|sleepOn(Vector3 pos)|
|void|spawnTo(Player player)|
|void|startAction()|
|void|startFishing(Item fishingRod)|
|void|stopAction()|
|void|stopFishing(boolean click)|
|void|stopSleep()|
|boolean|switchLevel(Level level)|
|void|transfer(InetSocketAddress address)|
|void|unloadChunk(int x, int z)|
|void|unloadChunk(int x, int z, Level level)|

### Event常用函数
#### cn.nukkit.event.Event
|返回值类型|函数名|
|-|-|
|String|getEventName()|
|boolean|isCancelled()|
|void|setCancelled()|
|Player|getPlayer()|
|String|getJoinMessage()|
|void|setJoinMessage(String mes)|
|String|getMessage()//Chat Message|
|void|setMessage(String mes)|
|Entity|getEntity()|
|String|getDeathMessage()|
|void|setKeepExperience(boolean s)|
|void|setKeepInventory(boolean s)|
|void|setDeathMessage(String mes)|
|Block|getBlock()|
|Item|getItem()|
|int|getAction().getSlot()//get the slot that player use in the event about inventory|
|Inventory|getInventory()|
|SongPlayer|getSongPlayer()|
|Entity|getDamager()|
|float|getDamage()|
|float|getKnockBack()|

### Vector3常用方法
#### cn.nukkit.math.Vector3
|返回值类型|函数名|
|-|-|
|Vector3|add(double x, double y, double z)|
|Vector3|add(Vector3 x)|
|Vector3|ceil()//turn vector xyz into integer|
|double|distance(Vector3 pos)//return distance between the object Vector3 and pos|
|int|getChunkX()|
|int|getChunkZ()|
|int|getFloorX()|
|int|getFloorY()|
|int|getFloorZ()|
|double|getX()|
|double|getY()|
|double|getZ()|

### Position常用方法
#### cn.nukkit.level.Position
- 继承自 cn.nukkit.math.Vector3

|返回值类型|函数名|
|-|-|
|static Position|fromObject(Vector3 pos)//if it no level,the default level will be used|
|static Position|fromObject(Vector3 pos, Level level)|
|FullChunk|getChunk()|
|Level|getLevel()|
|Block|getLevelBlock()|
|Location|getLocation()|
|Position|setComponents(double x, double y, double z)|
|Position|setLevel(Level level)|

### Item常用方法
#### cn.nukkit.item.Item
|返回值类型|函数名|
|-|-|
|boolean|canBeActivated()|
|boolean|canBePlaced()|
|Item|clearCustomBlockData()|
|Item|clearCustomName()|
|Item|clearNamedTag()|
|Item|clone()|
|int|getAttackDamage()|
|Block|getBlock()|
|byte[]|getCompoundTag()|
|int|getCount()|
|CompoundTag|getCustomBlockData()|
|String|getCustomName()|
|int|getDamage()|
|int|getDestroySpeed(Block block, Player player)|
|int|getEnchantAbility()|
|Enchantment|getEnchantment(int id)|
|Enchantment[]|getEnchantments()|
|int|getFuelTime()|
|int|getId()|
|String[]|getLore()|
|int|getMaxDurability()|
|int|getMaxStackSize()|
|String|getName()|
|CompoundTag|getNamedTag()|
|int|getTier()|
|boolean|hasCustomBlockData()|
|boolean|hasCustomName()|
|boolean|hasEnchantments()|
|boolean|isArmor()|
|boolean|isAxe()|
|boolean|isBoots()|
|boolean|isChestplate()|
|boolean|isHelmet()|
|boolean|isHoe()|
|boolean|isLeggings()|
|boolean|isNull()|
|boolean|isPickaxe()|
|boolean|isShears()|
|boolean|isShovel()|
|boolean|isSword()|
|boolean|isTool()|
|boolean|isUnbreakable()|
|Item|setCompoundTag(CompoundTag tag)|
|void|setCount(int count)|
|Item|setCustomBlockData(CompoundTag compoundTag)|
|Item|setCustomName(String name)|
|void|setDamage(int meta)|
|Item|setLore(String[] lines)|
|Item|setNamedTag(CompoundTag tag)|

### Block常用方法
#### cn.nukkit.block.Block
- 继承自 cn.nukkit.level.Position
- 继承自 cn.nukkit.math.Vector3

|返回值类型		|函数名																										|
|-				|-																											|
|boolean		|canBeActivated()																							|
|boolean		|canBeBrokenWith(Item item)																					|
|boolean		|canBeClimbed()																								|
|boolean		|canBeFlowedInto()																							|
|boolean		|canBePlaced()																								|
|boolean		|canBePushed()																								|
|boolean		|canBeReplaced()																							|
|boolean		|canHarvestWithHand()																						|
|boolean		|canPassThrough()																							|
|boolean		|canSilkTouch()																								|
|Block			|clone()																									|
|Block			|down()																										|
|Block			|down(int step)																								|
|Block			|east()																										|
|Block			|east(int step)																								|
|static boolean	|equals(Block b1, Block b2)																					|
|static boolean	|equals(Block b1, Block b2, boolean checkDamage)															|
|static Block	|get(int id)																								|
|static Block	|get(int id, int data)																						|
|static Block	|get(int id, Integer meta)																					|
|static Block	|get(int id, Integer meta, Position pos)																	|
|static Block	|get(int fullId, Level level, int x, int y, int z)															|
|double			|getBreakTime(Item item, Player player)																		|
|int			|getBurnAbility()																							|
|BlockColor		|getColor()																									|
|int			|getComparatorInputOverride()																				|
|int			|getDamage()																								|
|int			|getDropExp()																								|
|Item[]			|getDrops(Item item)																						|
|int			|getFullId()																								|
|double			|getHardness()																								|
|abstract int	|getId()																									|
|int			|getLightLevel()																							|
|int			|getStrongPower(BlockFace side)																				|
|int			|getToolType()																								|
|int			|getWeakPower(BlockFace face)																				|
|boolean		|hasComparatorInputOverride()																				|
|boolean		|hasEntityCollision()																						|
|boolean		|isBreakable(Item item)																						|
|boolean		|isNormalBlock()																							|
|boolean		|isPowerSource()																							|
|boolean		|isSolid()																									|
|boolean		|isTransparent()																							|
|Block			|north()																									|
|Block			|north(int step)																							|
|boolean		|place(Item item, Block block, Block target, BlockFace face, double fx, double fy, double fz, Player player)|
|void			|setDamage(int meta)																						|
|void			|setDamage(Integer meta)																					|
|Block			|south()																									|
|Block			|south(int step)																							|
|int			|tickRate()																									|
|Item			|toItem()																									|
|String			|toString()																									|
|Block			|up()																										|
|Block			|up(int step)																								|
|Block			|west()																										|
|Block			|west(int step)																								|
