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
### manager基对象

|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|getFile|String dir,String filename|File|获取bn目录下dir文件夹的filename文件(可为不存在文件)|
|time|int second|String|将秒数转为时:分:秒字符串|
|createConfig|File file,int type|Config|在虚拟文件file处构建种类type(yaml==2)的配置文件|
|createCommand|String name,String des,String call|void|创建名称为name,描述为des的命令，回调函数的函数名为call|

