# BlocklyNukkit JavaScript开发文档  
## 基对象

|对象名|解释|
|------|---|
|server|服务器对象|
|plugin|blocklynukkit自身|
|logger|控制台输出器实例|
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
> 带有-J的类型指Java对象，可以在js中直接使用java类型的成员函数  
> 带有-C的类型指Java类，可以直接new一个java对象在js中使用，也可以世界使用static的java类成员函数  

### manager基对象

|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|getFile|String dir,String filename|File|获取bn目录下dir文件夹的filename文件(可为不存在文件)|
|time|int second|String|将秒数转为时:分:秒字符串|
|createConfig|File file,int type|Config|在虚拟文件file处构建种类type(yaml==2)的配置文件|
|createCommand|String name,String des,String call|void|创建名称为name,描述为des的命令，回调函数的函数名为call|
|createTask|String functionName, int delay|TaskHandler|延迟dalay刻调用函数名functionName的函数(不会阻塞)|
|createLoopTask|String functionName, int delay|TaskHandler|每dalay刻重复调用函数名functionNmae的函数|
|getTaskId|TaskHandler handler|int|获取handler的任务id|
|cancelTask|int id|void|取消任务ID为id的任务|
|getPlugin|String name|Plugin|获取注册名称为name的插件对象|
|plugin|void|Plugin-J|获取plugin基对象(有点多余)|
|buildskin|Player player,String skin|void|将玩家的皮肤设置为BlocklyNukkit/skin文件夹下的同名皮肤(自动识别4D)|
|buildskinfor|Player player,String skin,Player to|void|同上，但只展示给to玩家|
|getMoney|Player player|double|获取玩家player金钱(EconomyAPI)|
|reduceMoney|Player player,double money|void|给玩家减去money金钱(可减为负数)|
|addMoney|Player player,double money|void|给玩家加上money金钱|
|setMoney|Player player,double money|void|设置玩家的金钱为money|
|getAllKeyInConfig|Config config|Array|获取config配置文件的所有键|
|putEasy|String string,\<E\> val|void|存入临时存储->键string,值为泛型val|
|getEasy\<E\>|String string|\<E\>|获取临时存储->键string|
|setPrivateCall|String event,String callname|void|将event事件回调在本插件映射到callname函数|
|PlayerIsOP|Player player|boolean|获取player是否是op|
|kickPlayer|Player player,String reason|void|踢出玩家player并发送踢出原因reason|
|setHTMLPlaceholder|String key,String value|void|设置速建官网功能的自定义placeholder|
|getPlayerArea|Player player|String|获取玩家的地理位置字符串|
|checkIsBear|Player player|boolean|使用BlackBE云黑检查玩家是否为熊孩子|
|buildvec3|double x,double y,double z|Vector3-J|从xyz构建三维向量|
