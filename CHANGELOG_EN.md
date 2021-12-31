## Update log
### 1.2.8.4
new

Updated the qq robot docking module, using the Xiaolizi qq robot framework (because this is the only free robot that hasn't run away), and the package is downloaded in the bn group
You can also download the framework from the official website and install the tcpapi.dll plug-in into the robot framework by yourself, bn interacts with it through tcpapi
Added com.blocklynukkit.JavaAPI class to provide bn's api to java
Added a debugging tool, use the command bndebug to open the debugging tool, you can view variables and monitor commands

Lua

Added lua language support, version is luaj5.2, bn plug-in can be made through lua, the interface is exactly the same as js and py
You need to use: to access the base object functions. In addition, it also provides three global functions: luajava objects for interacting with java and asTable asList asMap
See bn development documentation for details

Bug Fixed

- Fixed the problem of nbt missing in the furnace recipe
- Fixed the problem that setting chests and hopper inventory is not working well
- Fixed the unavailability problem of py plugin
- Fixed the issue of BNNPC being knocked back and hiding when moving in the path
- Fixed the block error issue caused by BNNPC

BNNPC

- Array<Player> getPlayersIn(double distance)
- Array<Entity> getEntitiesIn(double distance)
- Player getNearestPlayer(double far)
- Player getNearestPlayer()
- void setEntityRideOn(Entity entity)
- void isEntityRideOn(Entity entity)
- void setEntityRideOff(Entity entity)
- Player getRidingPlayer()

window

- setPauseScreenList(String list) --Set the text of the online player area displayed on the right side of the pause interface, use; to split multiple lines

CustoWindowBuilder

- this showAsSetting(Player p, String imageURL, String callback) --support icon, the same way as button icon writing

manager

- void qq.startBot() to start the qq robot process
- void qq.reDirectBot(String ip)
    -Redirect the robot to the specified ip address and use the Xiaolizi qq robot framework of that computer
    -Require the target computer to open port 8404-TCP, and allow remote control in Xiaolizi’s tcpapi plug-in
- void qq.sendFriendMessage(String fromQQ,String toQQ,String message) Send friend message
- void qq.sendGroupMessage(String fromQQ,String toGroup,String message) Send group information
- void qq.sendGroupPicMessage(String fromQQ,String toGroup,String picturePaths,String message)
    -Send qq graphic messages
    -used for picturePaths; split multiple local picture paths
    -You only need to use %picture number% to use pictures in the message, and the number refers to the picture of the number path, counting from 0
- void qq.kickGroupMember(String fromQQ, String toGroup, String toQQ) - kicked the designated group member, fromQQ is the robot account
- void qq.banSpeakGroupMember(String fromQQ,String toGroup,String toQQ,int second) ---speak designated group member
- String getPlayerDeviceID(Player player) - Get the player's mobile phone or computer device identification code
- String getPlayerDeviceModal(Player player) - Get the player's device model
- int getPlayerDeviceOS(Player player) - Get the player's operating system id
- double getMoney(String player)
- void reduceMoney(String player,double money)
- void addMoney(String player,double money)
- void setMoney(String player,double money)
- void setNukkitCodeVersion(String string) - modify the nk version displayed by the version command
- void nodejs.eval(String str, boolean isPath) - use nodejs to run str
    -Running nodejs code is isolated to run in the nodejs environment, not the java environment
    -If isPath is true, the file in that path will be executed
    -Otherwise, execute str as nodejs code
    -You can use callFunction(String BNFunctionName, String args...) to call the function of the bn plugin
- void nodejs.newDocker(String dockerName, String str, boolean isPath) - open a resident nodejs container
    -dockerName is the name of the created nodejs container, once the container is created, it will immediately start executing the code in it
    -After restarting and creating, the code will not be destroyed after execution, but you can continue to call the method through callDockerFunction
    -If you need to call the nodejs function in other bn plugins, you need to register with registerFunction(String function name, Function function)
    -The rest is the same as nodejs.eval function
- void nodejs.closeDocker(String dockerName) - close the specified nodejs container and release the occupied resources
- String callDockerFunction(String function,String... args)
    -Call the specified function in the specified container and pass parameters to it. The called function must be registered before use, otherwise bn cannot obtain the memory address of this function to call
    -The return value will be automatically converted to a string, if the called function has no return value, the string "null" will be returned
    -function specifies the function to be called, the format is container name::function name (same as the calling format in other places)
    -If you enter the function name directly, it will randomly search for a container call with this name function among all unclosed containers. If it is not found, return NO FUNCTION
    -The args parameter only accepts strings, the number is unlimited, or none
- TaskHandler createTask(String functionName, int delay ,\<E+\>... args)
- TaskHandler createLoopTask(String functionName, int delay,\<E+\>... args)
    -Supports any number of parameters from 2 to 128, the first parameter is the name of the callback function, the second is the callback interval tick, and the rest are the parameters passed to the function when the function is called
- void newPlugin(String path) - load the bn plugin on the specified path
- void newJSPlugin(String name,String code) --Create a new bn plugin based on the code string
- void newPYPlugin(String name,String code)
- void newLUAPlugin(String name,String code)
- void addCommandCompleter(String cmd,String id,String completer)
    -Create a command completion device, which will be sent to the player as a command prompt and tab completion
    -cmd is the name of the command to be added, and id is the identifier of the completer, as long as it is not repeated
    -completer is the content of the completer, which is composed of \<required unit> and \[optional unit] followed by spaces
    -The internal format of each unit is name: @type=parameter 1; parameter 2;...The equal sign and the following part are not necessary
    -Types are: @target @blockpos @pos @int @float @string @text
    -Types are: @message @command @json @filepath @operator
    -For example: \<player:@target\> \<sentence:@message=BNNB!;blocklynukkit\> \[color:@text=red;green\] 

EventLoader

- QQGroupMessageEvent --The robot receives the QQ group message event
    -String getSelfQQ() - Get the QQ account that received the message
    -String getFromQQ() - Get the QQ account that sent the message
    -String getFromGroup() --Get the qq group number of the message event
    -String getMessage()-Get the message
- QQFriendMessageEvent - The event that the robot receives a QQ friend message
    -String getEventId() --Get event id
    -String getEventSeed() - Get the group message identification code in the event
    -String getFromQQ() - Get the qq that sent the message
    -String getSelfQQ() - Get the QQ account that received the group message
    -String getMessage() --Get the message of the event
- QQOtherEvent
    -String getFromGroup() - Get the QQ group number that triggered the event
    -String getFromQQ() - Get the QQ account that triggered the event
    -String getSelfQQ() - Get the QQ account that received the event
    -String getSeq() - Get the identification id of the received event
    -int getType() - Get event type code
    
Entity

- void setPlayerExp(Player player,int exp)
- int getPlayerExp(Player player)
- void setPlayerExpLevel(Player player,int lel)
- int getPlayerExpLevel(Player player)
- void setPlayerHunger(Player player,int hunger)
- int getPlayerHunger(Player player)
- void makeSoundToPlayer(Player player,String sound)
- Entity spawnEntity(String name,Position pos) --return value change 
### 1.2.8.3

Bugs Fixed

- Fixed the bug of bnnpc walking while floating in the air
- Fixed an error in the event of floating items empty
- The error message now looks much better than before

manager

- <E> callFunction(String functionname,Object...args) --callFunction will return the return value of the function
- <E> getVariableFrom(String scriptName,String varName) --Get variable content based on bn plugin name and variable name
- void putVariableTo(String scriptName,String varName,<E> var) - put the variable value in the specified bn plugin with the specified variable name
- double getCPULoad()
- int getCPUCores()
- double getMemoryTotalSizeMB()
- double getMemoryUsedSizeMB()
- void forceDisconnect(Player player)
- Array<String> getEventFunctions(Event event)
- void getServerMotd(String host, int port, String callback) - Get online information based on server IP and port

blockitem

- void setItemColor(Item item,int r,int g,int b)
- void setItemUnbreakable(Item item,boolean unbreakable)

inventory

- Item getEntityHelmet(Entity entity)
- Item getEntityChestplate(Entity entity)
- Item getEntityLeggings(Entity entity)
- Item getEntityBoots(Entity entity)
- Item getEntityItemInHand(Entity entity)
- Item getEntityItemInOffHand(Entity entity)
- void setEntityItemHelmet(Entity entity,Item item)
- void setEntityItemChestplate(Entity entity,Item item)
- void setEntityItemLeggings(Entity entity,Item item)
- void setEntityItemBoots(Entity entity,Item item)
- void setEntityItemInHand(Entity entity,Item item)
- void setEntityItemInOffHand(Entity entity,Item item)
- Item getInventorySlot(Inventory inv,int slot)

window

- void forceClearWindow(Player player)
- int getEventResponseIndex(PlayerFormRespondedEvent event)

entity

- boolean isPlayer(Entity e)
- void spawnFallingBlock(Position pos, Block block, boolean enableGravity,boolean canBePlaced)

gameapi - the new base object

- void createGame(String name,boolean useTeam,String startGameCallBack,String endGameCallBack,String mainLoopCallBack,String deathCallBack)
    - Create a small game room
- void joinGame(Player player, String gameName) - Let the player enter the mini game with the specified name, and automatically match the room
- void leaveGame(Player player) - let the player leave the small game room
- boolean isPlayerInGame(Player player) - Whether the player is playing a small game
- GameBase getPlayerRoom(Player player) - Get the small game object the player is playing
- Array<GameBase> getAllRoomByName(String gameName) --gets an array of all small game room objects with the same game name
- Array<String> getAllGameNames() --gets an array of the names of all running small game rooms
- Messager getMessager(String prefix)
- Messager getGameMessager(GameBase game)
- Multiline getMultiline(String messageType)
- InventoryMenu createInventoryMenu(String inventoryType, String title)
- FormMenu createFormMenu(String title, String content)
- void addMenuItem(InventoryMenu menu, int slot, Item item, String inventoryCallback)
- void addMenuButton(FormMenu menu,String buttonText,String imageData,String formCallback)
- Scoreboard getScoreboard(Player p)
- void setObjective(Scoreboard sb, String objectiveName,String displayName)

GameBase - small game room object

EventLoader --73 new

- BlockFadeEvent
- BlockFallEvent
- BlockFromToEvent
- BlockGrowEvent
- BlockIgniteEvent
- BlockPistonChangeEvent
- BlockRedstoneEvent
- DoorToggleEvent
- CreatureSpawnEvent
- CreeperPowerEvent
- EntityArmorChangeEvent
- EntityBlockChangeEvent
- EntityCombustByBlockEvent
- EntityCombustByEntityEvent
- EntityCombustEvent
- EntityDamageByBlockEvent
- EntityDamageByChildEntityEvent
- EntityExplodeEvent
- EntityMotionEvent
- EntityPortalEnterEvent
- EntityRegainHealthEvent
- EntityShootBowEvent
- EntityVehicleEnterEvent
- EntityVehicleExitEvent
- ExplosionPrimeEvent
- BrewEvent
- EnchantItemEvent
- InventoryMoveItemEvent
- StartBrewEvent
- ChunkLoadEvent
- ChunkPopulateEvent
- LevelInitEvent
- LevelLoadEvent
- LevelSaveEvent
- LevelUnloadEvent
- SpawnChangeEvent
- ThunderChangeEvent
- WeatherChangeEvent
- PlayerAchievementAwardedEvent
- PlayerAnimationEvent
- PlayerAsyncPreLoginEvent
- PlayerBlockPickEvent
- PlayerBucketEmptyEvent
- PlayerBucketFillEvent
- PlayerChangeSkinEvent
- PlayerChunkRequestEvent
- PlayerCreationEvent
- PlayerDropItemEvent
- PlayerEatFoodEvent
- PlayerEditBookEvent
- PlayerFoodLevelChangeEvent
- PlayerGameModeChangeEvent
- PlayerGlassBottleFillEvent
- PlayerInvalidMoveEvent
- PlayerItemConsumeEvent
- PlayerLocallyInitializedEvent
- PlayerMapInfoRequestEvent
- PlayerMouseOverEntityEvent
- PlayerServerSettingsRequestEvent
- PlayerSettingsRespondedEvent
- PluginDisableEvent
- PluginEnableEvent
- PotionApplyEvent
- PotionCollideEvent
- PlayerDataSerializeEvent
- RemoteServerCommandEvent
- EntityEnterVehicleEvent
- EntityExitVehicleEvent
- VehicleCreateEvent
- VehicleDamageEvent
- VehicleDestroyEvent
- VehicleMoveEvent
- VehicleUpdateEvent
- LightningStrikeEvent 
### 1.2.8.2

Bug Fixed

- Fixed the problem of bnnpc and bn floating words disappearing inexplicably

New

- Now you can add a line of comment //pragma es9 at the beginning of the js code to enable es9 language features, but there will be some performance loss, and the loss is not large, so you can use it with confidence
- This function is still a test function, if you report an error, please feedback immediately, thanks
- The bninstall command has been deprecated. All libraries are packaged into the bn interpreter jar. This is done to save memory space.

CustomWindowBuilder

- Custom showAsSetting(Player p, String callback)
- Custom buildDropdown(String title,String inner,int index)

EventLoader

- ChunkUnloadEvent

entity

- void setPlayerExp(Player player,int exp)
- int getPlayerExp(Player player)
- void setPlayerExpLevel(Player player,int lel)
- int getPlayerExpLevel(Player player)
- void setPlayerHunger(Player player,int hunger)
- int getPlayerHunger(Player player)

window

- void makeTipsVar(String varname,String providerCallback)
- void makeTipsStatic(String varname,String toReplace)

### 1.2.8.1

Entity

- BNNPC buildNPC(Position pos,String name,String skinID,int calltick,String callfunction,String attackfunction)
- void showFloatingItem(Position pos,Item item)
- void removeFloatingItem(Position pos,Item item)

windowbuilder

- Custom buildSlider(String title,double min,double max)
- Custom buildSlider(String title,double min,double max,int step)
- Custom buildSlider(String title,double min,double max,int step,double defaultvalue)
- Custom buildStepSlider(String title,String options)
- Custom buildStepSlider(String title,String options,int index)

window

- String getEventCustomVar(PlayerFormRespondedEvent event,int id,String mode)
- Mode can be input toggle dropdown slider stepslider

BNNPC

- void displaySwing()
- void setSwim(boolean swim)
- void setSwim()
- void setTickCallback(String callback)
- void setAttackCallback(String callback)

manager

- void bStats(String pluginName,String pluginVer,String authorName,int pluginid)
- void callFunction(String functionname,Object... args) - fixed incorrect spelling

world

- void loadScreenTP(Player player,Position pos)
- void loadScreenTP(Player player,Position pos,int loadScreenTick)
- void clearChunk(Position pos)

EventLoader

- PlayerHeldEvent
- InventoryClickEvent

Bug Fixed

- manager.kickPlayer no longer displays the prefix "kicked by admin"
- bnnpc will shake the arm correctly when hitting someone
- The spelling of callFunction is correct
- The database is now really available and all libraries will be installed correctly

### 1.2.8.0_LTS
Class library manager

- Now the library manager can install modules directly, for the time being there are only two modules, python and database
- Use the command bninstall module name to install this library

window

- void setBelowName(Player player,String str)

manager

- void loadJar(String path)

world

- void setOceanGenerator(int seaLevel)

entity

- BNNPC buildNPC(Position pos,String name,String skinID)
- BNNPC buildNPC(Position pos,String name,String skinID,int calltick,String callfunction)

BNNPC

- void turnRound(double yaw)
- void headUp(double pitch)
- void setEnableAttack(boolean attack)
- void setEnableAttack()
- void setEnableHurt(boolean hurt)
- void setEnableHurt()
- void displayHurt()
- void start()
- void setEnableGravity(boolean gravity)
- void setEnableGravity()
- void setG(double newg)
- void lookAt(Position pos)
- Player getNearestPlayer()
- boolean isSneak()
- void setSneak(boolean sneak)
- void setSneak()
- void jump()
- void setJumpHigh(double j)
- void setEnableKnockBack(boolean knock)
- void setEnableKnockBack()
- void setKnockBase(double base)
- boolean canMoveTo(Position to)
- boolean findAndMove(Position to)
- void setSpeed(double s)
- void setRouteMax(int ​​m)
- void stopMove()
- void hit(Entity entity)

bug fixed:

- Some potions of the entity's effect are not displayed, but there are still some potion effects that cannot be displayed because nk does not support
- World generates VOID and OCEAN errors
- Horizon World configuration loss problem
- ssh error report
- Now the operation functions of the window manager all return to themselves and can be directly linked in the code 
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
