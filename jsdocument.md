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
|checkIsBear|Player-J player|boolean|使用BlackBE云黑检查玩家是否为熊孩子|
|buildvec3|double x,double y,double z|Vector3-J|从xyz构建三维向量|

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
|addShapedCraft|Array<String> shape,Item-J output,Array<Item-J> append|void|添加有序合成(详见图形编辑器)|
|addItemEnchant|Item-J item,int i,int l|void|给item添加ID为i,等级为l的附魔(可去wiki查找id)|
|isSame|Item i1,Item i2,boolean d,boolean n|boolean|检测i1和i2是否相同(d是否毕竟数据值,n是否比较nbt,数量不会比较)|
|addBNCraft|String t,String d,Arryat<Item-J> i,Array<Item-J> o,int de,double p|void|添加一个种类为t,描述为d,原材料为i,产物为o,合成用时de,成功率p(0-1)的bn高级合成|
|openBNCraftForPlayer|String type, Player-J player|void|给玩家打开种类的type的合成高级合成ui|

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

### notemusic基对象
|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|getSongFromFile|String name|Song-J|从notemusic文件夹的name文件解析红石音乐|
|getSongTitle|Song-J song|void|获取歌曲的标题|
|getSongDescription|Song-J song|void|获取歌曲的描述|
|getSongAuthor|Song-J song|void|获取歌曲的作者|
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
|


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