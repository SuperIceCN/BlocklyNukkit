# BlocklyNukkit

#### Introduction
Our online website: [Click to enter https://tools.blocklynukkit.com/]

Blocklynukkit friendly interface Chinese plug-in editor is an open-source plug-in editor project initiated by Surperice666. Its purpose is to provide fresh, powerful, practical and concise Chinese server plug-in development services for the majority of server owners. It makes it easy for more server owners who want to develop their own plug-ins but are deterred from the obscure Java programming Develop all kinds of functions you want.

Our code is completely open source based on AGPL3.0. Anyone can join us or contribute. If you are a user or a server owner, you can [enter the tutorial here  https://docs.qq.com/doc/DRkRpS0xmV2ZJbGdi] to learn how to use this project and build your own plug-in.

#  Sponsor Us

<img src="https://gitee.com/Kingdom_of_dragon/BlocklyNukkit/raw/master/afdian-%E8%B6%85%E7%A5%9E%E7%9A%84%E5%86%B0%E5%87%89%20(1).png"  height="337" width="262">

# Some officially released BN plug-ins:
- bins：[mcbbs for download](https://www.mcbbs.net/thread-1026281-1-1.html)
- Airtech：[mcbbs for download](https://www.mcbbs.net/thread-1025826-1-1.html)
- OP check inventory：[mcbbs for download](https://www.mcbbs.net/thread-1023528-1-1.html)
- ironelevator：[mcbbs for download](https://www.mcbbs.net/thread-1022615-1-1.html)
- BNTreeCutter：[mcbbs for download](https://www.mcbbs.net/thread-993246-1-1.html)
- BNreper：[mcbbs for download](https://www.mcbbs.net/thread-997816-1-1.html)
- NoteMusic：[mcbbs for download](https://www.mcbbs.net/thread-1015627-1-1.html)
- DeathTeleport：[mcbbs for download](https://www.mcbbs.net/thread-1013139-1-1.html)
- No void：[mcbbs for download](https://www.mcbbs.net/thread-1010990-1-1.html)
- BoxArrange：[mcbbs for download](https://www.mcbbs.net/thread-1000413-1-1.html)
- Auto brush stone machine：[mcbbs for download](https://www.mcbbs.net/thread-995834-1-1.html)
- Kick menu：[minebbs for download](https://www.minebbs.com/resources/ekick.1088/)
- Real-time CPS display：[mcbbs for download](https://www.mcbbs.net/thread-1027746-1-1.html)
- Magic stick：[mcbbs fordownload](https://www.mcbbs.net/thread-1027698-1-1.html)
- Gui play songs：[mcbbs fordownload](https://www.mcbbs.net/thread-1028589-1-1.html)
- Building roads practice：[minebbs for download](https://www.minebbs.com/resources/coblocks-nk.1149/)
- Bank：[minebbs for download](https://www.minebbs.com/resources/cobank.1165/)
- Parkour：[minebbs for download](https://www.minebbs.com/resources/bn-corun.1172/)
- ScriptBlock：[minebbs for download](https://www.minebbs.com/resources/bn-scriptblock.1180/)
- Custom weapon：[minebbs download](https://www.minebbs.com/resources/bn-blocklynukkit.1179/)
- Parkour rewards：[minebbs for download](https://www.minebbs.com/resources/bn-lxrun.1181/)
- Integral：[minebbs fordownload](https://www.minebbs.com/threads/bn-char_xjifen-x-bn.3891/)
  
  
# for BN plug-in developer:  

No content...

## Update log
### 1.2.7.5
window

- void setBelowName(Player player,String str)

manager

- void loadJar(String path)

entity

- BNNPC buildNPC(Position pos,String name,String skinID)

BNNPC

- void turnRound(double yaw)
- void headUp(double pitch)
- void setEnableAttack(boolean attack)
- void setEnableAttack()
- void setEnableHurt(boolean hurt)
- void setEnableHurt()
- void displayHurt()
- void start()

### 1.2.7.4

Languages

Now you can use Python 2.7 to make plug-ins
Add full support for Python development plug-ins, just download additional py support packages to use Python plug-ins
The support for Python development plug-ins will be synchronized with JavaScript. Python and JS use the same set of BN class libraries. All the BN class libraries of JS (except Java modules) can be called directly in Python without import
Support all Python 2.7 native standard syntax and standard library, run time is the same as JS, compiled to Java bytecode run, do not worry about inefficiency.
Download the python for BN support module: https://tools.blocklynukkit.com/pythonForBN.jar
After downloading, put it directly under the ./plugins/BlocklyNukkit folder

EventLoader

- PlayerInteractEntityEvent
- PlayerDamageByPlayerEvent
- PlayerDamageByEntityEvent
- EntityKilledByEntityEvent
- EntityKilledByPlayerEvent
- PlayerRespawnEvent

window

- void setPlayerBossBar(Player player,String text,float len)
- void removePlayerBossBar(Player player)
- double getLengthOfPlayerBossBar(Player player)
- String getTextOfPlayerBossBar(Player player)

manager

- void createPermission(String per,String description,String defaultper)
- void removePermission(String per)
- boolean checkPlayerPermission(String per,Player player)
- String MD5Encryption(String str)
- String SHA1Encryption(String str)
- void createCommand(String name, String description, String callbackFunctionName, String per)
- void newCommand(String name, String description, Function jsFunction,String per)

entity

- int getNetworkID(Entity entity)
- String getIDName(Entity entity)
- void spawnEntity(String name,Position pos)

notemusic

- HornSongPlayer buildHorn(Song song, Position pos, boolean isloop, boolean isautodestroy)
- void addPlayerToHorn(HornSongPlayer SongPlayer, Player player)
- void removePlayerToHorn(HornSongPlayer SongPlayer, Player player)
- Array getPlayerInHorn(HornSongPlayer radioSongPlayer)
- void setHornStatus(HornSongPlayer radioSongPlayer, boolean isplaying)
- Song getSongInHorn(HornSongPlayer radioSongPlayer)

world

- genLevel added "OCEAN" generator

bug fixed

- setNameTagAlwaysVisable error

### 1.2.7.3  

blockitem  

- fixed error of nbt function

EventLoader  

- Fixed player misjudgment bug

entity  

- Replace the floating word PID to the armor bracket PID

Loader  

- Now the BN plug-in console output will use the filename as a prefix instead of \[BlocklyNukkit\]
- The BN command is no longer visible to non-OP

Editor 

- added JSON module
- added jar online compiler

### 1.2.7.2  

manager

- String formatJSON(String json)
- Fixed an error where the writeFile function could not automatically create a path

### 1.2.7.1  

Fixed some bug where older NK/PN kernels could not load

### 1.2.7.0  

manager

- String readFile(String path)
- void wirteFile(String path,String text)
- boolean isFileSame(String path1,String path2)
- String JSONtoYAML(String json)
- String YAMLtoJSON(String yaml)
- void newCommand(String name, String description, Function fun)
- int setTimeout(Function fun,int delay,<E+>... args)
- void clearTimeout(int id)
- int setInterval(Function fun,int delay,<E+>... args)
- void clearInterval(int id)
- void isWindows()
- int getPlayerGameMode(Player player)

Loader

- \_\_NAME\_\_ represents the name of the loaded JS file (protects against low-level rename reselling)
- After the release of the new version, mandatory updates 24 hours

Custom/Modal/Simple (WindowBuilder)

- void showToPlayerCallLambda(Player p, Function fun)

blockitem

- Array<Enchantment> getItemEnchant(Item item)
- int getEnchantID(Enchantment enchantment)
- int getEnahcntLevel(Enchantment enchantment)

EventLoader

- PlayerJumpEvent
- PlayerToggleFlightEvent
- PlayerToggleGlideEvent
- PlayerToggleSwimEvent
- PlayerToggleSneakEvent
- PlayerToggleSprintEvent
