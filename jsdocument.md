# BlocklyNukkit 编程开发文档  
## 基对象  

### 指代基对象  

指代基对象是指用来直接获取java对象的基对象，并不会内置在解释器里面，由解释器从nukkit动态获取  


|对象名|解释|
|------|---|
|server|服务器对象<Server-J>|
|plugin|blocklynukkit自身<Plugin-J>|
|logger|控制台输出器实例<PluginLogger-J>|
|\_\_NAME\_\_|插件的名称，指代字符串<String>|


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
|gameapi|小游戏API对象|
|Java|js对java进行操作的管理器对象|  


### 内置函数  

#### **通用**  


|函数名|参数|返回值|解释|
|-|-|-|-|
|F|匿名函数或闭包|参数的函数名|用于把匿名函数或者闭包传入BNAPI中需要填写回调函数名的地方使用|


#### PHP模块一览  

- ApcModule
- ArrayModule
- Array2Module
- BcmathModule
- ClassesModule
- CoreModule
- CtypeModule
- ExifModule
- FunctionModule
- HashModule
- JavaModule
- MathModule
- MhashModule
- MiscModule
- NetworkModule
- OptionsModule
- OutputModule
- QuercusModule
- TokenModule
- UrlModule
- VariableModule
- CurlModule
- DateModule
- FileModule
- SocketModule
- StreamModule
- FilterModule
- GettextModule
- MbstringModule
- MysqliModule
- ImageModule
- JMSModule
- JsonModule
- McryptModule
- PDFModule
- PDOMoudle
- RegexpModule
- SessionModule
- SimpleXMLModule
- StringModule
- XmlModule
- XMLWriterModule
- ZipModule
- ZlibModule

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
|createCommand|String name,String des,String call,String per|void|同上，但是仅限有per权限的玩家可用|
|addCommandCompleter|String cmd,String id,String completer|void|创建命令补全器，将被发送给玩家用作命令提示和tab补全,cmd为要添加给的命令的名称，id为补全器标识符，随意只要不重复即可，completer是补全器内容|
|createTask|String functionName, int delay, \<E+\>... args|TaskHandler-J|延迟dalay刻调用函数名functionName的函数(不会阻塞),args是在调用函数时向函数传递的参数，可没有|
|createLoopTask|String functionName, int delay, \<E+\>... args|TaskHandler-J|每dalay刻重复调用函数名functionNmae的函数,args是在调用函数时向函数传递的参数，可没有|
|getTaskId|TaskHandler-J handler|int|获取handler的任务id|
|cancelTask|int id|void|取消任务ID为id的任务|
|getPlugin|String name|Plugin-J|获取注册名称为name的插件对象|
|plugin|void|Plugin-J|获取plugin基对象(有点多余)|
|buildskin|Player-J player,String skin|void|将玩家的皮肤设置为BlocklyNukkit/skin文件夹下的同名皮肤(自动识别4D)|
|buildskinfor|Player-J player,String skin,Player to|void|同上，但只展示给to玩家|
|getMoney|Player-J/String player|double|获取玩家player金钱(EconomyAPI)|
|reduceMoney|Player-J/String player,double money|void|给玩家减去money金钱(可减为负数)|
|addMoney|Player-J/String player,double money|void|给玩家加上money金钱|
|setMoney|Player-J/String player,double money|void|设置玩家的金钱为money|
|getAllKeyInConfig|Config-J config|Array|获取config配置文件的所有键|
|putEasy|String string,\<E\> val|void|存入临时存储->键string,值为泛型val|
|getEasy\<E\>|String string|\<E\>|获取临时存储->键string|
|setPrivateCall|String event,String callname|void|将event事件回调在本插件映射到callname函数|
|PlayerIsOP|Player-J player|boolean|获取player是否是op|
|getPlayerGameMode|Player-J player|int|获取玩家的游戏模式id(0-生存 1-创造 2-冒险 3-观察者)|
|kickPlayer|Player-J player,String reason|void|踢出玩家player并发送踢出原因reason|
|setHTMLPlaceholder|String key,String value|void|设置速建官网功能的自定义placeholder|
|getPlayerArea|Player-J player|String|获取玩家的地理位置字符串|
|checkIsBear|Player-J player|String|使用BlackBE云黑检查玩家是否为熊孩子|
|buildvec3|double x,double y,double z|Vector3-J|从xyz构建三维向量|
|httpRequest|String method,String url,String data|String|发送method(GET/POST)类型的http请求并获取返回值|
|callFunction|String fun,\<E+\> args...|<E>|调用函数名为fun的函数并获取返回值(直接写函数名调用所有插件中同名的函数,可以在开头加入xxx.js::函数名这样指定调用xxx.js下面的函数),注入参数为args,args参数不限类型,不限数量(0-1024),但是需要保证和被调用的函数参数一致|
|readFile|String path|String|以文本格式自适应编码读取path路径的文件返回字符串内容|
|writeFile|String path,String text|void|向path路径的文件(不存在自动创建)以utf8编码写入text|
|isFileSame|String p1,String p2|boolean|比较p1路径和p2路径的文件是否相同|
|JSONtoYAML|String json|String|将json字符串转为yaml字符串|
|YAMLtoJSON|String yaml|String|将yaml字符串转为json字符串|
|newCommand|String name, String des, Function fun|void|创建一个名称为name，描述为des，处理函数为fun的命令，fun是一个函数，有名函数的函数名(无需字符串)或一个匿名函数|
|newCommand|String name, String des, Function fun, String per|void|同上，但仅限有per权限的玩家使用|
|setTimeout|Function fun,int delay,<E+>... args|int|同浏览器上面的用法，但无法执行字符串，注册延时调用，返回任务id|
|clearTimeout|int id|void|取消任务ID为id的延时调用|
|setInterval|Function fun,int delay,<E+>... args|int|同浏览器上面的用法，但无法执行字符串，注册循环调用，返回任务id|
|clearInterval|int id|void|取消任务ID为id的循环调用|
|isWindows|void|boolean|获取当前运行环境是否是Windows系统|
|createPermission|String per,String description,String defaultper|void|创建一个权限，名称为per，描述为description，默认授予组为defaultper(OP/ALL/NONE 管理员/全体/控制台)|
|removePermission|String per|void|删除一个权限|
|checkPlayerPermission|String per,Player player|boolean|检查一个玩家是否有per权限|
|MD5Encryption|String str|String|将字符串进行md5加密|
|SHA1Encryption|String str|String|将字符串进行sha1加密|
|loadJar|String path|void|加载path路径的jar包作为依赖|
|bStats|String pluginName,String pluginVer,String authorName,int pluginid|void|使用bstats统计，参数请填写你在bstats的申请内容|
|getServerMotd|String host,int port,String callback|void|根据服务器IP和端口获取在线人数信息|
|getVariableFrom|String scriptName,String varName|\<E\>|获取scriptname插件varName变量的值|
|putVariableTo|String scriptName,String varName,<E> var|void|在scriptname插件中声明varName变量，值为var|
|getCPULoad|void|double|获取服务器的cpu负载|
|getCPUCores|void|int|获取服务器核心数量|
|getMemoryTotalSizeMB|void|double|获取服务器总内存|
|getMemoryUsedSizeMB|void|double|获取服务器已用内存|
|forceDisconnect|Player-J player|void|立即让服务器停止响应player的数据，玩家会以为自己网卡了|
|getEventFunctions|Event-J event|Array\<String\>|获取event事件可用的成员函数名称|
|qq.startBot|void|void|启动qq机器人进程|
|qq.stopBot|void|void|停止qq机器人进程|
|qq.reDirectBot|String ip|void|将机器人重定向到指定ip地址，并使用那台电脑的小栗子qq机器人框架。要求目标电脑开放8404-TCP端口，并且在小栗子的tcpapi插件中允许远程控制|
|qq.sendFriendMessage|String fromQQ,String toQQ,String message|void|发送好友信息,fromQQ是机器人账号,toQQ是目标账号,message是内容|
|qq.sendGroupMessage|String fromQQ,String toGroup,String message|void|发送群信息|
|qq.sendGroupPicMessage|String fromQQ,String toGroup,String picturePaths,String message|void|发送qq群图文消息，picturePaths用;分割多个本地图片路径，消息中使用图片只需用%picture数字%即可，数字指代第几个路径的图片，从0开始算起|
|qq.kickGroupMember|String fromQQ,String toGroup,String toQQ|void|踢了指定群员,fromQQ是机器人账号|
|qq.banSpeakGroupMember|String fromQQ,String toGroup,String toQQ,int second|void|禁言指定群员|
|getPlayerDeviceID|Player player|String|获取玩家的手机或电脑设备标识码|
|getPlayerDeviceModal|Player player|String|获取玩家的设备型号|
|getPlayerDeviceOS|Player player|int|获取玩家的操作系统id|
|setNukkitCodeVersion|String string|void|修改version命令显示的nk版本|
|nodejs.eval|String str,boolean isPath|void|使用nodejs运行str，运行nodejs代码是隔离在nodejs环境运行的，而非java环境，若isPath为true，则执行该路径的文件，否则将str作为nodejs代码执行，其中可以使用callFunction(String BNFunctionName,String args...)来调用bn插件的函数|
|nodejs.newDocker|String dockerName,String str,boolean isPath|void|开启一个常驻nodejs容器，dockerName是创建的nodejs容器的名字，容器一旦创建就会立即开始执行其中的代码，重启创建后执行完代码不会被销毁，而是可以继续通过callDockerFunction调用其中方法，如果需要在其他bn插件调用其中的nodejs函数，需要使用registerFunction(String 函数名,Function 函数)注册，其余同nodejs.eval函数|
|nodejs.callDockerFunction|String function,String... args|String|调用指定容器中的指定函数并向其传参，调用的函数必须先注册再使用，否则bn无法获取此函数内存地址进行调用，返回值将自动被转为字符串，如果被调函数无返回值则返回字符串"null"，function指定调用的函数，格式为 容器名::函数名（同其他地方的调用格式），若直接输入函数名，则将在所有未关闭容器中随机寻找一个有此名称函数的容器调用，若找不到，返回NO FUNCTION，args参数只接受字符串，数量不限，也可没有|
|newPlugin|String path|void|加载指定路径上的bn插件|
|newJSPlugin|String name,String code|void|根据javascript代码字符串创建一个新的bn插件|
|newPYPlugin|String name,String code|void|根据python代码字符串创建一个新的bn插件|
|newLUAPlugin|String name,String code|void|根据lua代码字符串创建一个新的bn插件|
|newPHPPlugin|String name,String code|void|根据php代码字符串创建一个新的bn插件|
|getOnlinePlayers|void|Array<Player>|void|获取所有的在线玩家构成的数组|
|getResource|String resName|String|获取资源内容，resName可以是一个链接，也可以是bn目录下的一个文件名|
|runCMD|String cmd|void|执行外部操作系统的命令行上的一条命令|
|isPathExists|String path|boolean|路径是否存在|
|getFolderFiles|String path|Array<String>|获取指定文件夹下的所有文件名|
|getFileSize|String path|int|获取指定文件的大小，以字节为单位|
|deleteFile|String path|void|删除指定路径，可以是文件或文件夹|
|doPathCreate|String path|void|创建一个文件夹|
|isPathReadable|String path|boolean|路径指向的文件或文件夹是否可读|
|isPathWritable|String path|boolean|路径指向的文件或文件夹是否可写|
|copyFile|String fromPath,String toPath|void|把fromPath的文件复制到toPath|
|interrupt|String info|void|强制中断当前函数运行并发出info作为原因提示，如果不在函数内部使用将直接中断整个插件运行|
|downloadFromURL|String url,String saveDir,String saveName|void|把url下载到saveDir文件夹中，以saveName作为文件名保存|
|runThread|String functionName,\<E+\> args|Thread|在新线程中执行名为functionName函数并同步返回这个线程|
|requireMinVersion|String minVersion,String failMessage|void|检查bn解释器版本，如果太低停止运行并发出failMessage|


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
|makeSound|Position-J pos,String s|void|在位置pos播放s对应的声音(跟原版命令类似,点击进入[声音列表](https://ci.opencollab.dev/job/NukkitX/job/Nukkit/job/master/javadoc/cn/nukkit/level/Sound.html))|
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
|getItemLore|Item-J item|String|获取物品item的lore(多行lore用";"连接,"\\"可转义)|
|addToCreativeBar|Item-J item|void|把物品堆添加到创造物品栏|
|setItemLore|Item-J item,String str|void|设置物品item的lore为str(多行lore用";"连接)|
|addShapelessCraft|Array<Item-J> i,Item-J o|void|添加无序合成,原料列表i,产物o|
|addFurnaceCraft|Item-J i,Item-J o|void|添加熔炉配方,原料i,产物o|
|addShapedCraft|Array<String> shape,Item-J output,Array<Item-J> append|void|添加有序合成(详见图形编辑器)|
|addItemEnchant|Item-J item,int i,int l|void|给item添加ID为i,等级为l的附魔(可去wiki查找id)|
|isSame|Item i1,Item i2,boolean d,boolean n|boolean|检测i1和i2是否相同(d是否毕竟数据值,n是否比较nbt,数量不会比较)|
|addBNCraft|String t,String d,Array<Item-J> i,Array<Item-J> o,int de,double p|void|添加一个种类为t,描述为d,原材料为i,产物为o,合成用时de,成功率p(0-1)的bn高级合成|
|openBNCraftForPlayer|String type, Player-J player|void|给玩家打开种类的type的合成高级合成ui|
|PositionMove|Position pos,double x,double y,double z|void|让pos偏移xyz|
|getNBTString|Item-J item|String|获取物品堆item的nbt字符串|
|putinNBTString|Item-J item,String nbt|void|向item注入NBT字符串nbt|
|getItemEnchant|Item-J item|Array<Enchantment-J>|获取item的附魔列表|
|getEnchantID|Enchantment-J enc|int|获取附魔对象enc的附魔id|
|getEnchantLevel|Enchantment-J enc|int|获取附魔对象enc的附魔等级|
|setItemColor|Item-J item,int r,int g,int b|void|设置物品item的自定义颜色|
|setItemUnbreakable|Item item,boolean unbreakable|void|设置物品item是否不可破坏|
|registerSolidBlock|int id,String name,double hardness,double resistance,int toolType,boolean isSilkTouchable,int dropMinExp,int dropMaxExp,int mineTier|void|注册固体方块，参数分别为方块id(只能覆写教育版方块)，方块名称，方块硬度，方块抗爆炸度，挖掘工具，是否受精准采集影响，最小掉落经验，最大掉落经验，挖掘等级，方块硬度越大挖掘时间越长，抗爆炸度越高越不容易被炸，挖掘工具0-无,1-剑,2-铲,3-镐,4-斧,5-剪刀，挖掘等级0-空手,1-木,2-金,3-石,4-铁,5-钻石|
|registerSimpleItem|int id,String name|void|注册简单的物品堆，只能覆写教育版物品|


### database基对象  

|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|databaseOpen|String url,String username,String password,String table|void|打开与sql服务器的连接|
|databaseUpdate|String stt, Array<E+> objs|void|使用sql语句stt,语句参数为objs更新数据库|
|databaseQuery|String stt,String col,Array<E+> objs|Array|使用sql语句stt,参数objs,查询第col列数据|
|localStorage.cacheAll|void|void|本地存储管理器：从本地读取数据并缓存，增加运行时获取数据速度|
|localStorage.cache|String key|String|本地存储管理器：从本地读取指定数据缓存并返回|
|localStorage.setItem|String key,String item|void|本地存储管理器：设置指定key对应的数据为item|
|localStorage.getItem|String key|String|本地存储管理器：获取指定key对应的数据|
|localStorage.removeItem|String key|String|本地存储管理器：移除指定key对应的数据|
|localStorage.getKeys|void|Array<String>|本地存储管理器：获取所有的key|
|localStorage.save|void|void|本地存储管理器：强制立即保存数据，本身bn会每3秒检查并保存一次数据|
|memoryStorage.setItem|String key,String item|void|内存共享存储管理器：设置指定key对应的数据为item|
|memoryStorage.getItem|String key|String|内存共享存储管理器：获取指定key对应的数据|
|memoryStorage.removeItem|String key|String|内存共享存储管理器：移除指定key对应的数据|
|memoryStorage.getKeys|void|Array<String>|内存共享存储管理器：获取所有的key|


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
|getNetworkID|Entity entity|int|获取实体的网络id，用于确认或者比较实体类型，网络id表wiki可查|
|getIDName|Entity entity|String|获取实体的字符串ID，如Pig,Sheep，用法同上|
|spawnEntity|String id,Position pos|Entity|在pos生成字符串id为id的生物并返回|
|buildNPC|Position-J pos,String name,String skinID|BNNPC-J|构建一个NPC，位置在于pos，名称为name，皮肤为skinID的皮肤|
|buildNPC|Position-J pos,String name,String skinID,int calltick,String callfunction|BNNPC-J|构建一个NPC，位置在于pos，名称为name，皮肤为skinID的皮肤，每隔calltick刻调用一次callfunction函数，注入参数bnnpc实体,当前tick|
|buildNPC|Position-J pos,String name,String skinID,int calltick,String callfunction,String attackfunction|BNNPC-J|同上，被打时调用attackfunction函数名的函数，转入参数bnnpc实体|
|皮肤skinID，即为./plugins/BlocklyNukkit/skin文件夹下面的皮肤文件名字|无后缀名，3D皮肤直接输入png文件名字，4D皮肤需要将json文件命名为与png文件相同的名字|详见BN专有对象方法文档中的BNNPC章节|
|showFloatingItem|Position-J pos,Item item|void|在pos处展示item浮空物品|
|removeFloatingItem|Position-J pos,Item item|void|取消在pos处item的浮空物品展示|
|isPlayer|Entity-J e|boolean|获取实体e是否为玩家|
|spawnFallingBlock|Position-J pos, Block-J block, boolean enableGravity,boolean canBePlaced|void|在pos生成实体掉落方块，材质为block，enableGravity是否开启重力，canBePlaced是否在地上自动从实体变成方块|
|setPlayerExp|Player-J player,int exp|void|设置玩家经验点|
|getPlayerExp|Player-J player|int|获取玩家经验点|
|setPlayerExpLevel|Player-J player,int lel|void|设置玩家经验等级|
|getPlayerExpLevel|Player-J player|int|获取玩家经验等级|
|setPlayerHunger|Player player,int hunger|void|设置玩家饥饿度|
|getPlayerHunger|Player-J player|int|获取玩家饥饿度|
|makeSoundToPlayer|Player player,String sound|void|给指定玩家播放sound字符串对应的声音|
|shootArrow|Position from,Position to|void|从from向to射击箭矢|
|shootArrow|Position from,Position to,boolean canPickUp|void|从from向to射击箭矢,canPickUp是否能被捡起|
|shootArrow|Position from,Position to,double multiply|void|从from向to射击箭矢,mutiply发射速度倍率,倍率越大,伤害越高|
|shootArrow|Position from,Position to,boolean canPickUp,double multiply|void|从from向to射击箭矢,canPickUp是否能被捡起,mutiply发射速度倍率|
|lookAt|Entity e,Position pos|void|让实体e看向pos处|


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
|getEntityHelmet|Entity-J entity|Item|获取npc或玩家实体的的头盔栏物品|
|getEntityChestplate|Entity-J entity|Item|获取npc或玩家实体的胸甲栏的物品|
|getEntityLeggings|Entity-J entity|Item|获取npc或玩家实体的护腿栏的物品|
|getEntityBoots|Entity-J entity|Item|获取npc或玩家实体的靴子栏的物品|
|getEntityItemInHand|Entity-J entity|Item|获取npc或玩家实体的手上的物品|
|getEntityItemInOffHand|Entity-J entity|Item|获取npc或玩家实体的副手上的物品|
|setEntityItemHelmet|Entity-J entity,Item-J item|void|设置npc或玩家实体的头盔栏上的物品|
|setEntityItemChestplate|Entity-J entity,Item-J item|void|设置npc或玩家实体的胸甲栏上的物品|
|setEntityItemLeggings|Entity-J entity,Item-J item|void|设置npc或玩家实体的护腿栏上的物品|
|setEntityItemBoots|Entity-J entity,Item-J item|void|设置npc或玩家实体的靴子栏上的物品|
|setEntityItemInHand|Entity-J entity,Item-J item|void|设置npc或玩家实体的手上的物品|
|setEntityItemInOffHand|Entity-J entity,Item-J item|void|设置npc或玩家实体的副手上的物品|
|getInventorySlot|Inventory-J inv,int slot|Item-J|获取物品栏inv第slot个槽位的物品对象|


### world基对象  

|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|genLevel|String name,int seed,String gen|void|生成名称name种子seed,种类为gen(FLAT,NETHER,VOID,NORMAL,OCEAN,SKYLAND)的世界|
|loadLevel|String s|void|强制加载名称为s的世界|
|getServerLevels|void|Array<Level-J>|获取服务器的所有世界|
|setSkyLandGenerator|int seaHeight,int movey,boolean enableOre,int coalcount,int coalsize,int coalmin,int coalmax,int ironcount,int ironsize,int ironmin,int ironmax,int redstonecount,int redstonesize,int redstonemin,int redstonemax,int lapiscount,int lapissize,int lapismin,int lapismax,int goldcount,int goldsize,int goldmin,int goldmax,int diamondcount,int diamondsize,int diamondmin,int diamondmax,int dirtcount,int dirtsize,int dirtmin,int dirtmax,int gravelcount,int gravelsize,int gravelmin,int gravelmax,int granitecount,int granitesize,int granitemin,int granitemax,int dioritecount,int dioritesize,int dioritemin,int dioritemax,int andesitecount,int andesitesize,int andesitemin,int andesitemax,boolean enableCave,boolean enableBiome,boolean enableOcean|void|设置镜像天域的生成器参数|
|setOceanGenerator|int seaHeight|void|设置海洋世界生成器海平面高度|
|loadScreenTP|Player-J player,Position-J pos|void|把玩家传送到pos位置，传送时显示维度切换动画|
|clearChunk|Position-J pos|void|清空pos所在的区块|
|regenerateChunk|Position pos|void|重新生成pos所在的区块|
|defineChunkRenderByName|String forLevel,String callback,int priority/void|void|forLevel是渲染器能够渲染的指定世界名称，callback是渲染器回调函数，priority是优先级，优先级越大先调用，不填默认为0|
|drawPic|Position pos1,Position pos2,String img,int faceData|void|从pos1到pos2绘制img路径上的图片，faceData指定物品展示框的朝向，pos1和pos2必须在同一垂直面上|


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
|buildHorn|Song song, Position pos, boolean isloop, boolean isautodestroy|HornSongPlayer|构建一个红石音乐喇叭,song播放歌曲,isloop是否循环,isautodestroy是否无人听自动摧毁|
|addPlayerToHorn|HornSongPlayer horn, Player player|void|让player能听到horn的声音|
|removePlayerToHorn|HornSongPlayer horn, Player player|void|让player不再听到horn的声音|
|getPlayerInHorn|HornSongPlayer-J horn|Array|void|获取horn的所有听众|
|getSongInHorn|HornSongPlayer-J horn|Song-J|获取horn播放的歌曲|
|setHornStatus|HornSongPlayer horn,boolean isplaying|void|设置horn的播放状态|


### window基对象  

|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|updateAllScoreBoard|String title,String text|void|给所有玩家更新计分板信息,多行用\';\'连接,"\\"可转义|
|updateOneScoreBoard|String title,String text,Player p|void|给玩家p更新计分板信息,多行用\';\'连接,"\\"可转义|
|getSimpleWindowBuilder|String title,String context|Simple-J|构建标题title,内容文字为context(非按钮)的简单窗口管理器|
|getModalWindowBuilder|String title,String context|Modal-J|构建标题title,内容文字为context的对话框窗口管理器|
|getCustomWindowBuilder|String title|Custom-J|构建标题title的高级窗口管理器|
|getEventResponseText|Event-J e|String|获取e中简单窗口点击的按钮文本|
|getEventResponseModal|Event-J e|String|获取e中对话框点击的按钮文本|
|getEventResponseIndex|Event-J e|int|获取e中简单窗口或对话框点击的按钮序号，从0开始|
|getEventCustomVar|Event-J e,int id,String mode|String|获取e中高级窗口ID为id的mode(input,toggle,dropdown,slider,stepslider)元素的值|
|setPlayerBossBar|Player-J player,String text,float len|Array\<int>|设置玩家的boss血条文字和剩余血量百分比len(0-100),text参数中使用;来添加多个bossbar|
|removePlayerBossBar|Player-J player|void|移除玩家所有的boss血条|
|removePlayerBossBar|Player-J player,int id|void|移除玩家指定id的boss血条|
|getLengthOfPlayerBossBar|Player-J player|double|获取玩家最上方的boss血条剩余血量百分比|
|getLengthOfPlayerBossBar|Player-J player,int id|double|获取玩家指定id的boss血条剩余血量百分比|
|getTextOfPlayerBossBar|Player-J player|String|获取玩家boss血条的文字|
|setBelowName|Player-J player,String str|void|设置玩家名字下方的计分板文字|
|makeTipsVar|String varname,String provider|void|为tips提供一个变量，变量名为varname(要替换掉的字符串)，provider是回调函数名，tips显示时会调用这个函数，注入一个参数player玩家类型，然后返回值会作为被替换成的字符串|
|makeTipsStatic|String varname,String toReplace|void|为tips提供一个静态变量，变量名为varname，要替换成的字符串为tpReplace|
|forceClearWindow|Player-J player|void|强制关闭玩家客户端上面所有正在显示的物品栏和表单|
|setPauseScreenList|String list|void|设置暂停界面右侧显示在线玩家区域的文字，用;分割多行，用"\\"转义分号|
|sendPlayerXboxInfo|Player from,Player to|void|向to玩家展示from玩家的xbox信息|
|startEndPoem|Player player|void|让玩家屏幕上开始展示终末之诗|
|setSwingStyle|String style|void|设置swing的样式，目前有：Darcula Intellij Metal Motif Multi Nimbus OS(系统样式)|
|getStyledSwingWindow|String title,int width,int height,String iconPath|JFrame|根据之前设置的样式获取Swing窗口对象，iconPath为null或""将使用bnLOGO替代|


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


### gameapi基对象  
详见[gameapi基对象详解](./GameAPI基对象详解)  

### Java基对象  

**仅js可用！其他语言中没有此基对象！**
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

## BN专有对象方法文档  

### windowbuilder三件套  

1.Custom  

- this setTitle(String title)
- this showToPlayer(Player p)
- this showToPlayer(Player p,boolean acceptClose)
- this showToPlayer(Player p,String callbackFunctionName/F function)
- this show(Player p)
- this show(Player p,boolean accpetClose)
- this show(Player p,String callbackFunctionName/F function)
- this show(Player p,String callbackFunctionName/F function,boolean acceptClose)
- this showToPlayer(Player p,String callbackFunctionName/F function,boolean acceptClose)
- this showAsSetting(Player p, String callbackFunctionName/F function)
- this showAsSetting(Player p, String imageURL, String callbackFunctionName/F function)
- this buildLabel(String text)
- this label(String text)
- this buildInput(String title,String placeholder)
- this input(String title,String placeholder)
- this buildInput(String title,String placeholder,String defaulttext)
- this input(String title,String placeholder,String defaulttext)
- this buildToggle(String title)
- this toggle(String title)
- this buildToggle(String title,boolean open)
- this toggle(String title,boolean open)
- this buildDropdown(String title,String inner)
- this dropdown(String title,String inner)
- this buildDropdown(String title,String inner,int index)
- this dropdown(String title,String inner,int index)
- this buildSlider(String title,double min,double max,int step,double defaultvalue)
- this slider(String title,double min,double max,int step,double defaultvalue)
- this buildSlider(String title,double min,double max,int step)
- this slider(String title,double min,double max,int step)
- this buildSlider(String title,double min,double max)
- this slider(String title,double min,double max)
- this buildStepSlider(String title,String options)
- this stepSlider(String title,String options)
- this stepslider(String title,String options)
- this buildStepSlider(String title,String options,int index)
- this stepSlider(String title,String options,int index)
- this stepslider(String title,String options,int index)
- this setAction(String callbackFunctionName/F function)
- this action(String callbackFunctionName/F function)

2.Modal  

- this setTitle(String title)
- this title(String title)
- this setContext(String context)
- this context(String context)
- this setButton1(String text)
- this setButton2(String text)
- this button1(String text)
- this button2(String text)
- this setAction(String callbackFunctionName/F function)
- this action(String callbackFunctionName/F function)
- this showToPlayer(Player p)
- this showToPlayer(Player p,boolean acceptClose)
- this showToPlayer(Player p,String callbackFunctionName/F function)
- this showToPlayer(Player p,String callbackFunctionName/F function,boolean acceptClose)
- this show(Player p)
- this show(Player p,boolean accpetClose)
- this show(Player p,String callbackFunctionName/F function)
- this show(Player p,String callbackFunctionName/F function,boolean acceptClose)

3.Simple  

- this buildButton(String text,String img)
- this button(String text,String img)
- this button(String text)
- this setAction(String actionFunctionName/F function)
- this action(String actionFunctionName/F function)
- this setTitle(String title)
- this title(String title)
- this setContext(String context)
- this context(String context)
- this showToPlayer(Player p)
- this showToPlayer(Player p,boolean acceptClose)
- this showToPlayer(Player p,String callbackFunctionName/F function)
- this showToPlayer(Player p,String callbackFunctionName/F function,boolean acceptClose)
- this show(Player p)
- this show(Player p,boolean accpetClose)
- this show(Player p,String callbackFunctionName/F function)
- this show(Player p,String callbackFunctionName/F function,boolean acceptClose)

### logger常用招式  

- void info(String s)
- void warning(String s)

### BNNPC使用方法  

|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|start|void|void|启动这个npc实体|
|turnRound|double yaw|void|让实体水平视角旋转yaw度|
|headUp|double pitch|void|让实体垂直视角旋转pitch度|
|setEnableAttack|boolean attack/void|void|设置npc是否能够接受伤害,无参数默认为true|
|setEnableHurt|boolean hurt/void|void|设置npc是否能显示受伤动画，无参数默认为true|
|displayHurt|void|void|强制显示npc受伤动画(并不会真的减血)|
|setEnableGravity|boolean gravity/void|void|设置npc是否收到重力影响，无参数默认为true|
|setG|double g|void|设置该npc的重力加速度(默认9.8)|
|lookAt|Position-J pos|void|让npc看向pos处|
|getNearestPlayer|void|Player-J|获取离npc最近的玩家，如果没有玩家返回空|
|isSneak|void|boolean|获取npc是否在潜行|
|setSneak|boolean sneak/void|void|设置npc是否在潜行，如果不填参数默认切换潜行状态|
|jump|void|void|让npc跳跃一次，如果npc正在寻路并移动或正在跳跃会忽略此函数调用|
|setJumpHigh|double high|void|设置npc的跳高能力，默认为1|
|setEnableKnockBack|boolean knock/void|void|设置npc是否收到攻击时被击退，不填参数默认为true|
|setKnockBase|double base|void|设置npc被击退时的击飞距离，默认为1.2|
|setRouteMax|int m|void|设置寻路递归上限，默认50，越大寻路范围越广越精确，但会加重服务器负担|
|setSpeed|double speed|void|设置npc自动寻路移动的速度，默认为3|
|canMoveTo|Position-J pos|boolean|检查npc是否能够通过自动寻路到达pos处，返回是否可以到达|
|findAndMove|Position-J pos|boolean|让npc自己寻路到pos，如果寻路成功就开始移动到pos并返回true，否则false|
|stopMove|void|void|让npc停止寻路移动|
|hit|Entity-J e|void|让npc打实体e|
|displaySwing|void|void|让npc挥动手臂一次|
|setSwim|boolean swim/void|void|设置npc是否在游泳，无参数默认切换状态|
|setTickCallback|String c|void|设置npc的tick回调函数名称|
|setAttackCallback|String c|void|设置npc的伤害回调函数名称|
|getPlayersIn|double distance|Array\<Player\>|获取指定距离内的所有玩家|
|getEntitiesIn|double distance|Array\<Entity\>|获取指定距离内的所有生物|
|getNearestPlayer|double far/void|Player|获取指定距离内的最近玩家，距离不指定为无穷远|
|setEntityRideOn|Entity entity|void|让实体entity骑上npc|
|isEntityRideOn|Entity entity|boolean|获取实体是否骑在npc上面|
|setEntityRideOff|Entity entity|void|让实体entity从npc上面下来|
|getRidingPlayer|void|Player|获取骑在npc上面的玩家|
|addExtraDropItem|Item item|void|为bnnpc添加死亡时额外的掉落物|
|hasDropItem|Item item|boolean|获取bnnpc死亡是是否会额外掉落此物品|
|removeExtraDropItem|Item item|void|为bnnpc移除死亡时指定额外的掉落物|
|getExtraDropItems|void|Array<Item>|获取bnnpc死亡时的额外掉落物|
|getDropItems|void|Array<Item>|获取当前bnnpc死亡时的所有掉落物|
|setDropHand|boolean drop/void|void|设置是否死亡时掉落手中物品，参数不填时默认为true|
|setDropOffhand|boolean drop/void|void|设置是否死亡时掉落副手物品，参数不填时默认为true|
|addDropSlot|int slot|void|指定背包槽位死亡时掉落|
|getDropSlots|void|Array<int>|获取所有死亡时掉落的背包槽位|
|removeDropSlot|int slot|void|移除死亡时掉落的背包槽位|
|doEmote|String action/void|void|让npc执行指定的表情动作,action可以是 Wave Punch Clap OverThere Hammer Fall Diamond Pickaxe,也可以填写对应的中文 挥手 拳击 鼓掌 在那 锤子 摔倒 钻石,不填的话将上面的动作中任选一个|
|directMove|Position to|boolean|bnnpc直线移动到某处|


例子：（在world,128,64,128处生成一个yj皮肤的npc，并且使得它可以被攻击） 

1. 准备:  

- 安装bn解释器1.2.7.5及以上版本
- 在./plugins/BlocklyNukkit/skins文件夹下面准备好一个4D/3D皮肤文件，比如这里我准备了一个yj.png和yj.json  

2. 首先创建一个BNNPC对象：  

~~~
var pos = Java.type("cn.nukkit.level.Position").fromObject(manager.buildvec3(128,64,128),server.getLevelByName('world'));
var npc = entity.buildNPC(pos,'测试NPC','yj')
~~~


3. 然后设置它的属性  

~~~
npc.setEnableAttack(true)
npc.setEnableHurt(true)
~~~


4. 最后启动这个npc，这样玩家就能看见并且攻击它了  

~~~
npc.start()
~~~

### bn插件与java联合开发  

可以通过导出标记将bn插件中的函数导出到全局环境中，然后即可使用java来快速调用bn插件，
命令exportdevjar <BN插件名>将可以导出bn插件中的函数头到一个jar包里面便于开发

javascript:  
```javascript
export function MyFun(arg1,arg2,arg3){}
```

python:  
```python
@export
def MyFun(arg1,arg2,arg3):
    pass
```

lua:  
```lua
function BlockPlaceEvent(ent)-->export

end
```

php:  
```php
static function PlayerJoinEvent($event){
    
}
```

### C/C++开发  

C/C++  

更新了基于webassembly技术栈的C/C++插件编写支持，可以调用bn基对象。  
可以直接调用java并于java进行交互，一次编译，处处运行，支持windows linux macos  
详细教程请看：[bn教程库-C/C++插件开发](http://www.blocklynukkit.info/2105692)  

### bn插件包功能  

bn插件包功能可以将多个互相具有依赖关系的插件文件以及附属的资源文件打成一个包，这样分发的时候只需分发一个文件即可，打成的插件包文件也可以继续打包为`jar`文件。  
bn插件包有两种格式，一种是`.bnp`文件，另一种是`.bnpx`文件，`.bnp`文件是单纯把各个插件文件和资源文件拼凑起来，而`.bnpx`是把它们压缩并归档成的文件，只有`.bnp`文件能继续达成`jar`包。

打包需要使用bn提供的`bnp`命令，`bnp build 构建清单路径`即可构建一个bn插件包。  

makefile是一个json格式的包配置文件，由name,compress,plugins三个字段组成，其中：  

- name为打包的插件包的名字(字符串)
- compress为是否打出压缩插件包(boolean)
- plugins是一个字符串数组，里面标注要打进包中的bn插件的路径，加载时从上到下加载，也可以打进去json yml xml txt格式的资源文件，资源文件将会被按顺序解压到打包时与nk核心的相对位置解压。


示例：  

```
{
	"name":"demo",
	"compress":false,
	"plugins":[
		"./plugins/BlocklyNukkit/mod.py",
		"./plugins/BlocklyNukkit/test.lua"
	]
}
```



## 事件回调函数  

事件回调函数是解释器内置的自动调用的函数,只要你的函数名跟列表里面的相同就会自动调用  
详细的事件成员方法跟调用方式详见事件回调详解章节  

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
|玩家跳跃事件|PlayerJumpEvent|
|玩家开始滑翔(鞘翅)事件|PlayerToggleGlideEvent|
|玩家开始游泳事件|PlayerToggleSwimEvent|
|玩家开始潜行事件|PlayerToggleSneakEvent|
|玩家开始疾跑事件|PlayerToggleSprintEvent|
|玩家开始飞行事件|PlayerToggleFlightEvent|
|玩家与实体交互事件|PlayerInteractEntityEvent|
|玩家被玩家伤害事件|PlayerDamageByPlayerEvent|
|玩家被实体伤害事件|PlayerDamageByEntityEvent|
|实体被实体杀死事件|EntityKilledByEntityEvent|
|实体被玩家杀死事件|EntityKilledByPlayerEvent|
|玩家重生事件|PlayerRespawnEvent|
|玩家手持物品变化事件|PlayerHeldEvent|
|物品栏点击事件|InventoryClickEvent|
|区块卸载事件|ChunkUnloadEvent|
|方块因自然原因消失或衰落事件|BlockFadeEvent|
|方块因重力掉落事件|BlockFallEvent|
|液体流动/龙蛋自己传送的事件|BlockFromToEvent|
|方块生长事件|BlockGrowEvent|
|方块点燃事件|BlockIgniteEvent|
|活塞臂状态变化事件|BlockPistonChangeEvent|
|方块接受到的红石信号变化事件|BlockRedstoneEvent|
|开关门事件|DoorToggleEvent|
|使用生成蛋事件|CreatureSpawnEvent|
|苦力怕被雷劈中事件|CreeperPowerEvent|
|实体护甲变化事件|EntityArmorChangeEvent|
|实体改变方块事件|EntityBlockChangeEvent|
|实体因方块而燃烧事件|EntityCombustByBlockEvent|
|实体因其他实体而燃烧事件|EntityCombustByEntityEvent|
|实体燃烧事件|EntityCombustEvent|
|实体被方块伤害事件|EntityDamageByBlockEvent|
|实体被幼年实体伤害事件|EntityDamageByChildEntityEvent|
|实体爆炸事件|EntityExplodeEvent|
|实体运动事件|EntityMotionEvent|
|实体进入传送门事件|EntityPortalEnterEvent|
|实体回血事件|EntityRegainHealthEvent|
|实体射箭事件|EntityShootBowEvent|
|实体坐上载具事件|EntityVehicleEnterEvent|
|实体离开载具事件|EntityVehicleExitEvent|
|实体开始爆炸倒计时事件|ExplosionPrimeEvent|
|酿造完成事件|BrewEvent|
|给物品附魔事件|EnchantItemEvent|
|非玩家触发格子物品传输事件|InventoryMoveItemEvent|
|开始酿造事件|StartBrewEvent|
|区块加载事件|ChunkLoadEvent|
|新区块生成事件|ChunkPopulateEvent|
|世界初始化事件|LevelInitEvent|
|世界加载事件|LevelLoadEvent|
|世界保存事件|LevelSaveEvent|
|世界卸载事件|LevelUnloadEvent|
|世界重生点更改事件|SpawnChangeEvent|
|雷暴天气更改事件|ThunderChangeEvent|
|天气更改事件|WeatherChangeEvent|
|玩家达成成就事件|PlayerAchievementAwardedEvent|
|玩家动画事件|PlayerAnimationEvent|
|玩家尝试登录服务器事件|PlayerAsyncPreLoginEvent|
|玩家捡起方块事件|PlayerBlockPickEvent|
|玩家空桶事件|PlayerBucketEmptyEvent|
|玩家填桶事件|PlayerBucketFillEvent|
|玩家切换皮肤事件|PlayerChangeSkinEvent|
|玩家请求区块事件|PlayerChunkRequestEvent|
|玩家创建事件|PlayerCreationEvent|
|玩家丢物品事件|PlayerDropItemEvent|
|玩家吃东西事件|PlayerEatFoodEvent|
|玩家编辑书本事件|PlayerEditBookEvent|
|玩家饥饿值改变事件|PlayerFoodLevelChangeEvent|
|玩家游戏模式改变事件|PlayerGameModeChangeEvent|
|玩家填充玻璃瓶事件|PlayerGlassBottleFillEvent|
|玩家错误地移动世界|PlayerInvalidMoveEvent|
|玩家使用了一个一次性消耗品事件|PlayerItemConsumeEvent|
|玩家客户端加载完成事件|PlayerLocallyInitializedEvent|
|玩家请求地图数据事件|PlayerMapInfoRequestEvent|
|玩家鼠标在指向实体事件|PlayerMouseOverEntityEvent|
|玩家请求服务器设置事件|PlayerServerSettingsRequestEvent|
|玩家设置服务器设置事件|PlayerSettingsRespondedEvent|
|插件被关闭事件|PluginDisableEvent|
|插件被启用事件|PluginEnableEvent|
|药水效果添加事件|PotionApplyEvent|
|药水效果冲突事件|PotionCollideEvent|
|玩家数据序列化事件|PlayerDataSerializeEvent|
|远程rcon控制执行命令事件|RemoteServerCommandEvent|
|实体进入载具事件|EntityEnterVehicleEvent|
|实体离开载具事件|EntityExitVehicleEvent|
|载具创建事件|VehicleCreateEvent|
|载具受伤事件|VehicleDamageEvent|
|载具破坏事件|VehicleDestroyEvent|
|载具移动事件|VehicleMoveEvent|
|载具更新事件|VehicleUpdateEvent|
|打雷事件|LightningStrikeEvent|
|机器人收到qq群消息事件|QQGroupMessageEvent|
|机器人收到qq好友消息事件|QQFriendMessageEvent|
|机器人其他qq操作事件|QQOtherEvent|


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

### Entity常用方法  
#### cn.nukkit.entity.Entity  

- 继承自 cn.nukkit.math.Vector3  
- 继承自 cn.nukkit.level.Position  
- 继承自 cn.nukkit.level.Location 

|返回值类型		|函数名																										|
|-				|-																											|
|void																|addEffect(Effect effect)																	|
|void																|addMotion(double motionX, double motionY, double motionZ)									|
|void																|addMovement(double x, double y, double z, double yaw, double pitch, double headYaw)		|
|void																|applyEntityCollision(Entity entity)														|
|boolean															|attack(EntityDamageEvent source)															|
|boolean															|attack(float damage)																		|
|boolean															|canBeMovedByCurrents()																		|
|boolean															|canClimb()																					|
|boolean															|canClimbWalls()																			|
|boolean															|canCollide()																				|
|boolean															|canCollideWith(Entity entity)																|
|boolean															|canPassThrough()																			|
|boolean															|canTriggerWalking()																		|
|void																|close()																					|
|static Entity														|createEntity(int type, FullChunk chunk, CompoundTag nbt, Object... args)					|
|static Entity														|createEntity(int type, Position pos, Object... args)										|
|static Entity														|createEntity(String name, FullChunk chunk, CompoundTag nbt, Object... args)				|
|static Entity														|createEntity(String name, Position pos, Object... args)									|
|void																|despawnFrom(Player player)																	|
|void																|despawnFromAll()																			|
|boolean															|dismountEntity(Entity entity)																|
|boolean															|doesTriggerPressurePlate()																	|
|boolean															|entityBaseTick()																			|
|boolean															|entityBaseTick(int tickDiff)																|
|boolean															|equals(Object obj)																			|
|void																|extinguish()																				|
|void																|fall(float fallDistance)																	|
|boolean															|fastMove(double dx, double dy, double dz)													|
|float																|getAbsorption()																			|
|List<Block>														|getBlocksAround()																			|
|List<Block>														|getCollisionBlocks()																		|
|boolean															|getDataFlag(int propertyId, int id)														|
|EntityMetadata														|getDataProperties()																		|
|EntityData															|getDataProperty(int id)																	|
|boolean															|getDataPropertyBoolean(int id)																|
|int																|getDataPropertyByte(int id)																|
|float																|getDataPropertyFloat(int id)																|
|int																|getDataPropertyInt(int id)																	|
|long																|getDataPropertyLong(int id)																|
|CompoundTag														|getDataPropertyNBT(int id)																	|
|Vector3															|getDataPropertyPos(int id)																	|
|int																|getDataPropertyShort(int id)																|
|String																|getDataPropertyString(int id)																|
|int																|getDataPropertyType(int id)																|
|Vector3f															|getDataPropertyVector3f(int id)															|
|static CompoundTag													|getDefaultNBT(Vector3 pos)																	|
|static CompoundTag													|getDefaultNBT(Vector3 pos, Vector3 motion)													|
|static CompoundTag													|getDefaultNBT(Vector3 pos, Vector3 motion, float yaw, float pitch)							|
|BlockFace															|getDirection()																				|
|Vector2															|getDirectionPlane()																		|
|Vector3															|getDirectionVector()																		|
|Effect																|getEffect(int effectId)																	|
|Map<Integer,Effect>												|getEffects()																				|
|float																|getEyeHeight()																				|
|protected float													|getGravity()																				|
|float																|getHealth()																				|
|float																|getHeight()																				|
|BlockFace															|getHorizontalFacing()																		|
|long																|getId()																					|
|EntityDamageEvent													|getLastDamageCause()																		|
|float																|getLength()																				|
|Location															|getLocation()																				|
|int																|getMaxHealth()																				|
|List<MetadataValue>												|getMetadata(String metadataKey)															|
|Vector3															|getMotion()																				|
|Vector3f															|getMountedOffset(Entity entity)															|
|String																|getName()																					|
|String																|getNameTag()																				|
|abstract int														|getNetworkId()																				|
|Entity																|getPassenger()																				|
|List<Entity>														|getPassengers()																			|
|Position															|getPosition()																				|
|Entity																|getRiding()																				|
|String																|getSaveId()																				|
|float																|getScale()																					|
|String																|getScoreTag()																				|
|Vector3f															|getSeatPosition()																			|
|Server																|getServer()																				|
|protected double													|getStepHeight()																			|
|Map<Integer,Player>												|getViewers()																				|
|float																|getWidth()																					|
|void																|handleLavaMovement()																		|
|boolean															|hasControllingPassenger()																	|
|boolean															|hasCustomName()																			|
|boolean															|hasEffect(int effectId)																	|
|int																|hashCode()																					|
|boolean															|hasMetadata(String metadataKey)															|
|void																|heal(EntityRegainHealthEvent source)														|
|void																|heal(float amount)																			|
|boolean															|isAlive()																					|
|boolean															|isClosed()																					|
|boolean															|isControlling(Entity entity)																|
|boolean															|isGliding()																				|
|boolean															|isImmobile()																				|
|boolean															|isInsideOfFire()																			|
|boolean															|isInsideOfSolid()																			|
|boolean															|isInsideOfWater()																			|
|boolean															|isNameTagAlwaysVisible()																	|
|boolean															|isNameTagVisible()																			|
|boolean															|isOnFire()																					|
|boolean															|isOnGround()																				|
|boolean															|isOnLadder()																				|
|boolean															|isPassenger(Entity entity)																	|
|boolean															|isSneaking()																				|
|boolean															|isSprinting()																				|
|boolean															|isSwimming()																				|
|void																|kill()																						|
|boolean															|mountEntity(Entity entity)																	|
|boolean															|mountEntity(Entity entity, byte mode)														|
|boolean															|move(double dx, double dy, double dz)														|
|void																|moveFlying(float strafe, float forward, float friction)									|
|void																|onCollideWithPlayer(EntityHuman entityPlayer)												|
|boolean															|onInteract(Player player, Item item)														|
|boolean															|onInteract(Player player, Item item, Vector3 clickedPos)									|
|void																|onStruckByLightning(Entity entity)															|
|boolean															|onUpdate(int currentTick)																	|
|void																|recalculateBoundingBox()																	|
|void																|recalculateBoundingBox(boolean send)														|
|void																|removeAllEffects()																			|
|void																|removeEffect(int effectId)																	|
|void																|removeMetadata(String metadataKey, Plugin owningPlugin)									|
|void																|resetFallDistance()																		|
|void																|respawnToAll()																				|
|void																|saveNBT()																					|
|void																|scheduleUpdate()																			|
|void																|sendData(Player player)																	|
|void																|sendData(Player[] players)																	|
|void																|sendData(Player[] players, EntityMetadata data)											|
|void																|sendData(Player player, EntityMetadata data)												|
|void																|sendPotionEffects(Player player)															|
|void																|setAbsorption(float absorption)															|
|void																|setCanClimb()																				|
|void																|setCanClimb(boolean value)																	|
|void																|setCanClimbWalls()																			|
|void																|setCanClimbWalls(boolean value)															|
|void																|setDataFlag(int propertyId, int id)														|
|void																|setDataFlag(int propertyId, int id, boolean value)											|
|boolean															|setDataProperty(EntityData data)															|
|boolean															|setDataProperty(EntityData data, boolean send)												|
|void																|setGliding()																				|
|void																|setGliding(boolean value)																	|
|void																|setHealth(float health)																	|
|void																|setImmobile()																				|
|void																|setImmobile(boolean value)																	|
|void																|setLastDamageCause(EntityDamageEvent type)													|
|void																|setMaxHealth(int maxHealth)																|
|void																|setMetadata(String metadataKey, MetadataValue newMetadataValue)							|
|boolean															|setMotion(Vector3 motion)																	|
|void																|setNameTag(String name)																	|
|void																|setNameTagAlwaysVisible()																	|
|void																|setNameTagAlwaysVisible(boolean value)														|
|void																|setNameTagVisible()																		|
|void																|setNameTagVisible(boolean value)															|
|void																|setOnFire(int seconds)																		|
|boolean															|setPosition(Vector3 pos)																	|
|boolean															|setPositionAndRotation(Vector3 pos, double yaw, double pitch)								|
|void																|setRotation(double yaw, double pitch)														|
|void																|setScale(float scale)																		|
|void																|setScoreTag(String score)																	|
|void																|setSeatPosition(Vector3f pos)																|
|void																|setSneaking()																				|
|void																|setSneaking(boolean value)																	|
|void																|setSprinting()																				|
|void																|setSprinting(boolean value)																|
|void																|setSwimming()																				|
|void																|setSwimming(boolean value)																	|
|void																|spawnTo(Player player)																		|
|void																|spawnToAll()																				|
|boolean															|teleport(Location location)																|
|boolean															|teleport(Location location, PlayerTeleportEvent.TeleportCause cause)						|
|boolean															|teleport(Position pos)																		|
|boolean															|teleport(Position pos, PlayerTeleportEvent.TeleportCause cause)							|
|boolean															|teleport(Vector3 pos)																		|
|boolean															|teleport(Vector3 pos, PlayerTeleportEvent.TeleportCause cause)								|
|void																|updateMovement()																			|
|void																|updatePassengers()																			|