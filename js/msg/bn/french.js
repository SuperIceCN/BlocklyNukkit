//左侧工具栏
function translateToolBox(xml) {
	xml.replace("核心", "Fonction principale")
	xml.replace("逻辑", "Logique")
	xml.replace("循环", "Répétition")
	xml.replace("数学", "Maths")
	xml.replace("字符串", "Texte")
	xml.replace("列表", "Liste")
	xml.replace("动态", "Tournure")
	xml.replace("变量", "Variable")
	xml.replace("函数", "Fonction")
	xml.replace("插件", "Plugin")
	xml.replace("BN插件", "BNPlugin")
	xml.replace("玩家", "Joueur")
	xml.replace("事件", "Evénement")
	xml.replace("位置", "Position")
	xml.replace("创世", "Création du monde")
	xml.replace("窗口", "Fenêtre")
	xml.replace("方块物品", "ObjetBloc")
	xml.replace("物品栏", "Inventaire")
	xml.replace("生物", "Entité")
	xml.replace("粒子", "Particule")
	xml.replace("粒子id,颜色码,形状码请去bn文档查看", "Saisissez id des particules,code de couleurs,code de formes dans le document BN")
	xml.replace("拓展", "Supplémentaire")
	xml.replace("实用工具", "Outil utile")
	xml.replace("请注意,此模块处于测试中", "Attention,ces modules sont en mode de teste")
	xml.replace("我们不保证这些块一定正常工作", "On ne peut pas donc assurer que ces modules fonctionnent toujours bien")
	xml.replace("如有问题,请随时联系我们", "Si vous rencontriez des problèmes, veuillez nous contacter")
	xml.replace("数据库功能目前不稳定,慎用", "La fonctionnilité de la base de données reste instable, utilisez attentivement")
	xml.replace("设置自定义服务器网站placeholder", "Construire un site internet personnalisé placeholder")
	xml.replace("这些是一bn联合第三方API提供的服务", "Ce sont des services offerts que BN coopère avec un troixième parti API")
	xml.replace("GET的数据将追加在url?后,POST类型会放在body里面",
		"les données de GET suiveront après url?, le type de POST se plecera dans body")
	xml.replace("添加自定义JavaScript脚本到代码里。", "Ajouter JavaScript souhaité dans la production")
	xml.replace("注意，这里声明的变量不会显示在BN编辑器的变量选项卡中。",
		"Attntion, la variable declarée d'ici n'apparaitra pas dans les choix de Variable")
	xml.replace("另外，这里不能直接声明中文变量。否则会出错。", "De plus, la variable declarée doit être en anglais")
	xml.replace("起床战争", "Bedwars")
	xml.replace("红石音乐", "MusiqueRedstone")
	xml.replace("功能测试中,可能不稳定", "La fonction est en mode de teste, elle pourrait être instable")
	return xml;
}

//其他
function translateHTMLtoken(str) {
	str.replace("BlocklyNukkit.jar最新版是1.2.8.0(7/7更新)",
		"La dernière version de BlocklyNukkit.jar est 1.2.8.0(renouvelée en 7/7)")
	str.replace("功能", "Fonctions")
	str.replace("下载插件", "Télécharger le plugin")
	str.replace("下载前置", "Télécharger le plugin preposé")
	str.replace("保存脚本", "Sauvegarder le projet sous forme *.js")
	str.replace("云端同步", "Synchronisation sur le drive")
	str.replace("新建工程", "Construire un nouveau projet")
	str.replace("导入工程", "Importer un projet")
	str.replace("导出工程", "Exporter un projet")
	str.replace("打开教程", "Ouvrir le tutoriel")
	str.replace("仓库主页", "Github de BN")
	str.replace("JS编辑器", "Editeur de JS")
	str.replace("在线编译", "Compilateur en ligne")
	str.replace("官方论坛", "Forum officiel")
	str.replace("更换背景", "Changement de fond")
	str.replace("工程切换", "Changement de projet")
	str.replace("功能待定", "Vide")
	str.replace("功能待定", "Vide")
	str.replace("关闭", "Fermer")
	str.replace("更换BlocklyNukkit编辑器背景", "Changer le fond de l'editeur de BlocklyNukkit")
	str.replace("请在下方输入完整的图片网址", "Rentrez une adresse complète de l'image")
	str.replace("如：http://www.xxx.com/xx.jpg 或 https://www.xxx.com/xxx.png",
		"Par exemple：http://www.xxx.com/xx.jpg ou https://www.xxx.com/xxx.png")
	str.replace("注意，保存后将自动刷新界面，请提前保存自己的工程，以免工程丢失。",
		"Attention, en sauvegardant le projet, la page sera renouvelée automatiquement")
	str.replace("更换!", "Changer!")
	str.replace("还原白色背景", "Reduire au fond blanc")
	str.replace("关闭", "Fermer")
	str.replace("点击下方按钮在多个工程间切换", "Cliquez sur un bouton au dessous pour changer des projets")
	str.replace("只要不清除浏览器缓存，各个工程是可以独立保存的。",
		"Si la mémoire de cache n'est pas vidée, chaque projet pourrait être sauvé independement")
	str.replace("到工程一", "Au projet 1")
	str.replace("到工程二", "Au projet 2")
	str.replace("到工程三", "Au projet 3")
	str.replace("到工程四", "Au projet 4")
	str.replace("到工程五", "Au projet 5")
	str.replace("到工程六", "Au projet 6")
	str.replace("到工程七", "Au projet 7")
	str.replace("到工程八", "Au projet 8")
	str.replace("关闭", "Fermer")
	str.replace("新建工程", "Construire un nouveau projet")
	str.replace("是否决定新建工程？新建工程将会清空当前项目！", "Vous êtes sûr de construire un nouveau projet ？Celui actuel sera vidé！")
	str.replace("不不不✖", "Non✖")
	str.replace("我决定了✔", "Oui✔")
	str.replace("导入工程", "Importer un projet")
	str.replace("导入本地工程(*.bn)", "Importer un projet de l'appareil(*.bn)")
	str.replace("确认导入", "Confirmer")
	str.replace("关闭", "Fermer")
	str.replace("保存脚本", "Sauvegarder le projet sous forme *.js")
	str.replace("保存JavaScript脚本到本地", "Sauvegarder le projet sous forme de JavaScript dans l'appreil")
	str.replace("在输入框输入欲保存的文件名，不需要输入.js文件后缀。",
		"Entrez dans la case le nom voulu du projet, la suffixe .js n'est pas demandée")
	str.replace("请输入您的文件名:", "Entrez le nom de votre fichier:")
	str.replace("保存!", "Sauvegarder!")
	str.replace("关闭", "Fermer")
	str.replace("云端同步", "Synchronisation sur le drive")
	str.replace("同步JavaScript脚本到云端", "Synchroniser le langage de JavaScript sur le drive de BN")
	str.replace("在输入框输入欲同步的文件名，不需要输入.js文件后缀。",
		"Entrez le nom du fichier à synchroniser，la suffixe .js n'est pas demandée.")
	str.replace("请输入您的文件名:", "Entrez le nom de votre fichier:")
	str.replace("同步!", "Synchroniser!")
	str.replace("关闭", "Fermer")
	str.replace("同步成功", "Synchronisation réussie")
	str.replace("您的文件名为：", "Le nom de votre fichier est：")
	str.replace("关闭", "Fermer")
	str.replace("导出工程", "Exporter un projet")
	str.replace("导出BlocklyNukkit(*.bn)工程到本地以便下次编辑",
		"Exporter le projet de BlocklyNukkit(*.bn) dans l'appareil pour le modifier pour la prochaine fois")
	str.replace("在输入框输入欲导出的文件名，不需要输入文件后缀。", "Entrez le nom du projet à exporter，la suffixe .bn n'est pas demandée.")
	str.replace("请输入您的文件名:", "Entrez le nom de votre fichier:")
	str.replace("导出!", "Exporter!")
	str.replace("关闭", "Fermer")
	str.replace("导出成功", "Exportation réussie")
	str.replace("您的工程文件名为：", "Le nom de votre projet est：")
	str.replace("关闭", "Fermer")
	//这里开始的不确定是不是该放在这个函数里
	str.replace("请输入文件名，不需要文件后缀。例如输入'myjs", "Entrez le nom du fichier，la suffixe n'est pas demandée. Ex:'monplugin'")
	str.replace("您的变量中含有与基对象重名的变量", "Il exite des variables dont le nom se répete avec celui de l'objet base")
	str.replace("这会使得解释器崩溃,请您及时修改!", "cela pourra écrouler l'interprète de BN, modifiez immediatement!")
	str.replace("输入背景图片链接:", "Rentrez l'adresse de l'image du fond:")
	return str;
}
//有些是重复的，感觉不需要重复翻译，但为了保险期间还是放进去了。

//blockanditem.js

//generated by python reMoudle

var blockanditem_line_5 = "Construire un bloc avec ID numérique %1 Valeur de l’état %2"

var blockanditem_line_20 = "Construire un bloc(BuldBlock)"

var blockanditem_line_37 = "Créer un ensemble des objets avec ID numérique %1 Valeur de l’état %2 Quantité %3 "

var blockanditem_line_57 = "Créer un ensemble des objets(BuildItem)"

var blockanditem_line_76 = "Créer un ensemble des objets à partir du bloc %1"

var blockanditem_line_86 = "Créer un des objets à partir du bloc"

var blockanditem_line_101 = "Saisir l’ID numérique du bloc %1"

var blockanditem_line_111 = "Saisir l’ID numérique du bloc(GetID)"

var blockanditem_line_126 = "Saisir la valeur de l’état du bloc %1"

var blockanditem_line_136 = "Saisir la valeur de l’état du bloc(GetDamage)"

var blockanditem_line_151 = "Fixer %2 de l’objet %1 à %3"

var blockanditem_line_162 = "Quantité"

var blockanditem_line_163 = "Valeur de l’état"

var blockanditem_line_164 = "Nom"

var blockanditem_line_177 = "Mettre en place un ensemble des objets(bi_setItem)"

var blockanditem_line_195 = "Saisir %2de l’objet %1"

var blockanditem_line_207 = "Quantité"

var blockanditem_line_208 = "Valeur de l’état"

var blockanditem_line_209 = "Nom"

var blockanditem_line_215 = "Saisir les informations de l’objet(bi_getItemInfo)"

var blockanditem_line_231 = "Saisir %2 du bloc %1"

var blockanditem_line_242 = "Monde"

var blockanditem_line_251 = "Saisir les informations du bloc(bi_getBlockInfo)"

var blockanditem_line_267 = "Saisir lore(chaine de caractères) de l’objet %1"

var blockanditem_line_277 = "Saisir lore d’un objet(getItemLore)"

var blockanditem_line_286 = "Fixer lore(chaine de caractère) d'un ensemble des objets %1 à %2"

var blockanditem_line_303 = "Fixer lore d'un ensemble des objets(bi_setItemLore)"

var blockanditem_line_327 = "Fabrication sans l’ordre：ingredients(liste) %1 produire(objets) %2"

var blockanditem_line_343 = "Ajouter une fabrication sans l’ordre(addShapelessCraft)"

var blockanditem_line_360 = "Fabrication avec l’ordre：forme %1 résultat de la fabrication %2 resultat suplementaire %3"

var blockanditem_line_381 = "Ajouter une fabrication avec l’ordre(addShapedCraft)"

var blockanditem_line_421 = "forme(shapestr)"

var blockanditem_line_460 = "forme(shapearray)"

var blockanditem_line_479 = "Ajouter un enchantement %2 du niveau %3 sur l'ensemble des objets %1"

var blockanditem_line_490 = "Protection"

var blockanditem_line_491 = "Protection contre le feu"

var blockanditem_line_492 = "Chute amortie"

var blockanditem_line_493 = "Protection contre les explosions"

var blockanditem_line_494 = "Protection contre les projectiles"

var blockanditem_line_495 = "Épines"

var blockanditem_line_496 = "Apnée"

var blockanditem_line_497 = "Agilité aquatique"

var blockanditem_line_498 = "Affinité aquatique"

var blockanditem_line_499 = "Tranchant"

var blockanditem_line_500 = "Châtiment"

var blockanditem_line_501 = "Fléau des arthropodes"

var blockanditem_line_502 = "Recul"

var blockanditem_line_503 = "Aura de feu"

var blockanditem_line_504 = "Butin"

var blockanditem_line_505 = "Efficacité"

var blockanditem_line_506 = "Toucher de soie"

var blockanditem_line_507 = "Solidité"

var blockanditem_line_508 = "Fortune"

var blockanditem_line_509 = "Puissance"

var blockanditem_line_510 = "Frappe"

var blockanditem_line_511 = "Flamme"

var blockanditem_line_512 = "Infinité"

var blockanditem_line_513 = "Chance de la mer"

var blockanditem_line_514 = "Appât"

var blockanditem_line_515 = "Semelles givrantes"

var blockanditem_line_516 = "Raccommodage"

var blockanditem_line_517 = "Malédiction du lien éternel"

var blockanditem_line_518 = "Malédiction de disparition"

var blockanditem_line_519 = "Affilage"

var blockanditem_line_520 = "Impulsion"

var blockanditem_line_521 = "Loyauté"

var blockanditem_line_522 = "Canalisation"

var blockanditem_line_535 = "Ajouter un enchantement(addItemEnchant)"

var blockanditem_line_553 =
	"Determiner si l’objet %1 et l’objet %2 sont identiques en comparant, detecter Valeur de l’état %3 detecter nbt %4"

var blockanditem_line_578 = "Determiner si des objets sont identiques(isSame)"

var blockanditem_line_599 = "Alchimie：ingredients(objets) %1 production(objets) %2"

var blockanditem_line_615 = "Ajouter une fabrication de l’alchimie(addFurnaceCraft)"

var blockanditem_line_632 =
	"Fabrication BN：Type(en caractere) %1 Description(en caractère) %2 Ingredient(liste des objets) %3 Production(liste des objets) %4 Durée(enitier/en tick) %5 Taux de réussite(0~1) %6"

var blockanditem_line_668 = "Ajouter une fabrication de BN"

var blockanditem_line_693 = "Ouvrir la fabrication BN du type %1 au joueur %2"

var blockanditem_line_709 = "Ouvrir un type spécifique de la fabrication BN(openBNCraftForPlayer)"

var blockanditem_line_726 = "Poser l’ensembles des objets %1 dans la barre d’action du mode creaitif"

var blockanditem_line_738 = "Fixer lore de l'ensemble des objets(addToCreativeBar)"

//entity.js

//generated by python reMoudle

var entity_line_5 = "Saisir l'ensembles de objets des obejets au sol %1"

var entity_line_15 = "Saisir l'ensembles de objets des obejets au sol(getDropItemStack)"

var entity_line_30 = "Retirer l’entité %1"

var entity_line_42 = "Retirer l’entité(removeEntity)"

var entity_line_57 = "Fixer le nom de l’entité %1 à %2"

var entity_line_74 = "Modifier le nom de l’entité(setEntityName)"

var entity_line_91 = "Fixer l'état de la visibilité %2 du nom de la créature %1 "

var entity_line_108 = "Fixer l'état de la visibilité(setEntityNameTagAlwaysVisable)"

var entity_line_125 = "Fixer la vie %3 de %2 de la créature %1"

var entity_line_136 = "Actuel"

var entity_line_137 = "Maximal"

var entity_line_150 = "Fixer la vie (des coeurs)(setEntityHealth)"

var entity_line_168 = "Saisir %2 de %1"

var entity_line_179 = "la vie actuelle"

var entity_line_180 = "la vie maximale"

var entity_line_186 = "Saisir la vie de l’entité(getEntityHealth)"

var entity_line_202 = "Retirer tous les effets de potions de l’entité %1"

var entity_line_214 = "Retirer tous les effets de potions d’une entité(cléarEntityEffect)"

var entity_line_229 = "Ajouter un effet de potion %2 Niveau %3 Durant %4 (en tick) sur l’entité %1"

var entity_line_240 = "Rapidité"

var entity_line_241 = "Lenteur"

var entity_line_242 = "Celerite"

var entity_line_243 = "Fatigue"

var entity_line_244 = "Force"

var entity_line_245 = "Soin instantané"

var entity_line_246 = "Dégâts instantanés"

var entity_line_247 = "Sauts améliorés"

var entity_line_248 = "Nausée"

var entity_line_249 = "Régénération"

var entity_line_250 = "Résistance"

var entity_line_251 = "Résistance au feu"

var entity_line_252 = "Apnée"

var entity_line_253 = "Invisibilité"

var entity_line_254 = "Cécité"

var entity_line_255 = "Nyctalopie"

var entity_line_256 = "Faim"

var entity_line_257 = "Faiblesse"

var entity_line_258 = "Poison"

var entity_line_259 = "Wither"

var entity_line_260 = "Bonus de vie"

var entity_line_261 = "Absorption"

var entity_line_262 = "Saturation"

var entity_line_263 = "Lévitation"

var entity_line_264 = "Poison(mortel)"

var entity_line_265 = "Force de conduit"

var entity_line_266 = "Chute lente"

var entity_line_284 = "Ajouter un effet de potions sur une entité"

var entity_line_304 = "Saisir l’ID de l'entité %1"

var entity_line_314 = "Saisir l’ID d’une entité"

var entity_line_329 = "Saisir le monde(level) de l’entité  %1"

var entity_line_339 = "Saisir le monde(level) d’une entité (getEntityLevel)"

var entity_line_354 = "Saisir le nom de l’entité %1"

var entity_line_364 = "Saisir le nom d’une entité(getEntityName)"

var entity_line_379 = "Saisir la position de l’entité %1"

var entity_line_389 = "Saisir la position d’une entité(getEntityPosition)"

var entity_line_404 = "Poser l’entité %1 à la position %2 "

var entity_line_421 = "Fixer la position d’une entité(setEntityPosition)"

var entity_line_438 =
	"Créer un texte flottant : Texte %1 Position %2 en rappelant la fonction nomée %4 (entité) tous les %3 ticks"

var entity_line_464 = "Créer un texte flottant(buildFloatingText)"

var entity_line_485 = "Afficher le texte flottant %1 (entité)"

var entity_line_497 = "Afficher un texte flottant(startDisplayFloatingText)"

var entity_line_512 = "fonction de rappel de BN(par defaut)"

var entity_line_515 = "fonction de rappel de BN (par defaut)"

//event.js

//generated by python reMoudle

var event_line_5 = "Retirer l’événement %1"

var event_line_16 = "Retirer un événement(setCancelled)"

var event_line_31 = "lejoueur saisissant l’événement %1"

var event_line_41 = "lejoueur saisissant un événement(getPlayer)"

var event_line_56 = "Saisir le message d’entrée du serveur de l’événement %1"

var event_line_66 = "Saisir le message d’entrée du serveur d’un événement(getJoinMessage)"

var event_line_81 = "Définir un message d’entrée du serveur %2 de l’événement %1"

var event_line_97 = "Définir un message d’entrée du serveur(setJoinMessage)"

var event_line_114 = "Saisir le message de conversation de l’événement %1"

var event_line_124 = "Saisir le message de conversation de l’événement(getMessage)"

var event_line_138 = "Définir un message de conversation %2 de l’événement %1"

var event_line_154 = "Définir un message de la conversation(setMessage)"

var event_line_171 = "Saisir le joueur mourant dans l’événement %1"

var event_line_181 = "Saisir le joueur mourant dans un événement (getEntity)"

var event_line_196 = "Saisir le message de mort de l’événement %1"

var event_line_206 = "Saisir le message de mort d’un événement(getDeathMessage)"

var event_line_220 = "Garder l’expérience %1 après la mort"

var event_line_231 = "Garder l’expérience après la mort(setKeepExperience)"

var event_line_246 = "Garder l’inventaire du joueur %1 après la mort"

var event_line_257 = "Garder l’inventaire du joueur après la mort(setKeepInventory)"

var event_line_272 = "Définir un message de mort %2 de l’événement %1"

var event_line_288 = "Définir un message de mort (setDeathMessage)"

var event_line_305 = "Saisir le nom du bouton cliqué dans la fenêtre simple de l’événement %1"

var event_line_315 = "Saisir dans un événement le nom du bouton cliqué dans la fenêtre simple(getEventResponseText)"

var event_line_329 = "Saisirle nom du bouton cliqué de la boite de dialogue de l’événement  %1"

var event_line_339 = "Saisirle nom du bouton cliqué de la boite de dialogue de un événement(getEventResponseModal)"

var event_line_353 =
	"Saisir l’instruction de retour du mode %3 du %2 eme élément de la fenêtre de haute gamme de l’événement %1 "

var event_line_369 = "boite d’intrant"

var event_line_370 = "boite de Vrai/Faux"

var event_line_371 = "boite de choix"

var event_line_377 = "Saisir les éléments de la fenêtre de haute gamme d’un événement(getEventCustomVar)"

var event_line_394 = "le bloc saisissant l’événement %1"

var event_line_404 = "le bloc saisissant un événement(getBlock)"

var event_line_419 = "l’objet saisissant l’événement %1"

var event_line_429 = "l’objet saisissant un événement(getItem)"

var event_line_444 = "la barre d’action saisissant l’événement %1"

var event_line_469 = "Saisir l’inventaire fictif de l’événement %1"

var event_line_494 = "Saisir la radio musicale de Redstone de l’événement %1"

var event_line_504 = "Saisir la radio musicale de Redstone d’un événement(getSongPlayer)"

var event_line_519 = "Saisir l’entité qui inflige un degat dans l’événement %1"

var event_line_529 = "Saisir l’entité qui inflige un degat dans un événement(getDamager)"

var event_line_544 = "Saisir la valeur des dégâts infligés dans l’événement %1"

var event_line_554 = "Saisir la valeur des dégâts infligés dans un événement(getDamage)"

var event_line_569 = "Saisir la distance de recul dans l’événement %1 lorsqu’il reçoit un dommage"

var event_line_579 = "Saisir la distance de recul dans un événement lorsqu’il reçoit un dommage(getKnockBack)"

//inventory.js

//generated by python reMoudle

var inventory_line_5 = "Créer un inventaire fictif %1, liste des objets %2 titre %3"

var inventory_line_11 = "grandcoffre"

var inventory_line_12 = "coffre simple"

var inventory_line_28 = "Créer un inventaire(addInv)"

var inventory_line_46 = "Afficher l’inventaire fictif %2 au joueur %1"

var inventory_line_63 = "Afficher un inventaire fictif à un joueur(showFakeInv)"

var inventory_line_80 = "Remplacer tous les objets de l’inventaire %1 par la liste %2 des objets"

var inventory_line_97 = "Fixer des objets d’un inventaire(editInv)"

var inventory_line_114 = "Deposer des objets %3 dans le %2 slot de l’inevntaire %1"

var inventory_line_136 = "Fixer des objets d’un inventaire(editInvBySlot)"

var inventory_line_155 = "Est-ce que l’inventaire %1 contient l’objet %2"

var inventory_line_170 = "Verifier des objets dans un inventaire(containsItemInInv)"

var inventory_line_187 = "Ajouter l’objet %2 dans l’inventaire %1"

var inventory_line_204 = "Ajouter des objets dans un inventaire(addItemToInv)"

var inventory_line_221 = "Retirer l’objet %2 de l’inventaire %1"

var inventory_line_238 = "Retirer un objet d’un inventaire(removeItemFromInv)"

var inventory_line_255 = "liste de tous les objets de l’inventaire %1"

var inventory_line_265 = "liste des objets (getItemsInInv)"

//myblocks.js

//generated by python reMoudle

var myblocks_line_5 = "Instance du serveur nukkit"

var myblocks_line_8 = "Instance retour du serveur nukkit"

var myblocks_line_19 = "Instance de la console nukkit"

var myblocks_line_22 = "Instance retour de la console nukkit"

var myblocks_line_33 = "Emetteur de la commande de la console nk"

var myblocks_line_36 = "Retourner l’émetteur de la commande de la console nk"

var myblocks_line_47 = "Utiliser %1 pour Envoyer la message %2 de console "

var myblocks_line_64 = "EMettre des messages de console"

var myblocks_line_81 = "Utiliser %1 pour Envoyer un avertissement %2 de console"

var myblocks_line_98 = "EMettre des avertissements de console"

var myblocks_line_115 = "Liste de joueurs en ligne"

var myblocks_line_118 = "Retourner la liste de joueurs en ligne"

var myblocks_line_129 = "BN gestionaire de plugins"

var myblocks_line_132 = "Retourner BN gestionaire de plugins"

var myblocks_line_143 =
	"Inscrire une commande:Utiliser %1 Commande(sans /) %2 Description %3 Nom de la fonction de rappel(sender,args) %4"

var myblocks_line_169 = "Inscrire une commande"

var myblocks_line_190 = "Rappeler en retardant:Utiliser %1 Nom de la fonction de rappel(tick) %2 retard(en tick) %3"

var myblocks_line_211 = "Rappeler en retardant une fonction"

var myblocks_line_230 =
	"Répéter dans la tache de fond: Utiliser %1 Nom de la fonction de rappel(tick) %2 et tick executer une fois chaque %3 ticks"

var myblocks_line_251 = "Rappeler une fonction en répétant"

var myblocks_line_270 = "yml:Utiliser %1 Nom du fichier %2 Nom du dossier %3"

var myblocks_line_290 =
	"Saisir un fichier de yaml, le nom du dossier est celui sous le dossier du plugin，s’il n’extiste pas un dossier du même nom se Créera automatiquement"

var myblocks_line_310 = "yml:Pour %1 la clé %2 prend la valeur %3 "

var myblocks_line_331 = "Définir la clé de yml en prenant une valeur"

var myblocks_line_350 = "yml:Pour %1 saisir la valeur de la clé %2 "

var myblocks_line_365 = "Saisir la valeur de la clé de yml"

var myblocks_line_383 = "yml:Pour %1 saisir les noms de toutes les clés"

var myblocks_line_393 = "Saisir les noms de toutes les clés de yml"

var myblocks_line_409 = "yml:Sauvegarder %1 "

var myblocks_line_420 = "Sauvegarder le fichier yml"

var myblocks_line_435 = "Saisir le nom de %1"

var myblocks_line_445 = "Saisir le nom(getname)"

var myblocks_line_460 = "Laisser %1 exécuter la commande %2"

var myblocks_line_477 = "Exécuter la commande(dispatchCommand)"

var myblocks_line_494 = "Saisir la fonction à travers le nom %1"

var myblocks_line_504 = "Saisir la fonction à travers un nom"

var myblocks_line_519 = "Sauvegarder provisoirement：Clé %1 Valeur %2"

var myblocks_line_536 = "Sauvegarder provisoirement(putEasy)"

var myblocks_line_553 = "Sauvegarder provisoirement：Saisir la valeur ( %2 ) de la clé %1"

var myblocks_line_564 = "Caractère"

var myblocks_line_565 = "Nombre"

var myblocks_line_566 = "Vrai/Faux"

var myblocks_line_567 = "Location"

var myblocks_line_568 = "Joueur"

var myblocks_line_569 = "L'ensemble des objets"

var myblocks_line_570 = "Bloc"

var myblocks_line_576 = "Sauvegarder provisoirement(getEasyString)"

var myblocks_line_592 =
	"Pour des blocs situés dans la zone de %1 a %2 (2 positions) L’air est inclus ou pas %3 Rappeler la fonction nomée(block) %4 "

var myblocks_line_618 = "Rappel des blocs qui sont dans une zone"

var myblocks_line_639 = "Pour des blocs qui s’attachent a la position %1 Rappeler la fonction nomée(Position) %2"

var myblocks_line_655 = "Rappel des blocs qui s’attachent"

var myblocks_line_672 = "Appliquer l’événement public %1 à l’événement prive %2"

var myblocks_line_689 = "Appliquer un événement privé"

//notemusic.js

//generated by python reMoudle

var notemusic_line_5 = "Lire et Saisir la musique Redstone du fichier %1"

var notemusic_line_15 = "Lire et Saisir la musique Redstone d'un fichier(getSongFromFile)"

var notemusic_line_30 = "Saisir %2 de la musique Redstone % 1"

var notemusic_line_41 = "Le titre"

var notemusic_line_42 = "La description"

var notemusic_line_43 = "L’auteur"

var notemusic_line_44 = "La longueur"

var notemusic_line_50 = "Saisir des informations sur la musique Redstone (getSongInfo)"

var notemusic_line_66 = "Créer une radio musicale: musique %1 jouer en répétant %2 détruire personne écoute %3"

var notemusic_line_87 = "Créer une radio musicale(buildRadio)"

var notemusic_line_106 = "%2 le joueur %1 dans/de la radio musicale %3"

var notemusic_line_117 = "Ajouter"

var notemusic_line_118 = "Retirer"

var notemusic_line_131 = "Faire quelque chose au joueur à la radio(makePlayerToRadio)"

var notemusic_line_149 = "Saisir des joueurs qui écoutent la radio musicale %1"

var notemusic_line_159 = "Saisir des joueurs qui écoutent la radio musicale(getPlayerInRadio)"

var notemusic_line_174 = "Fixer l’état de la radio musicale %1 à %2"

var notemusic_line_191 = "Fixer l’état de la radio musicale(setRadioStatus)"

var notemusic_line_208 = "Saisir la musique qui est en train d’être jouer dans la radio musicale %1"

var notemusic_line_218 = "Saisir la musique qui est en train d’être jouer dans la radio musicale(getSongInRadio)"

//player.js

//generated by python reMoudle

var player_line_4 = "Saisir le joueur à partir du nom %1"

var player_line_14 = "Saisir un joueur(getPlayer)"

var player_line_29 = "Est-ce que le joueur %1 a déjà rentré dans le serveur auparavant"

var player_line_39 = "Est-ce que un joueur a déjà rentré dans le serveur auparavant(playedBefore)"

var player_line_54 = "Saisir le joueur à partir de uuid  %1"

var player_line_64 = "Saisir un joueur(getPlayer)"

var player_line_79 = "Envoyer un message %2 à %1"

var player_line_95 = "Envoyer un message à un joueur(sendMessage)"

var player_line_112 = "Envoyer une chaine de caractères %2 à %1 comme une notification au niveau de la barre d’action"

var player_line_128 = "Envoyer un message(sendMessage)"

var player_line_145 = "Envoyer une chaine de caractères %2 à %1 comme une notification dynamique"

var player_line_161 = "Envoyer un message(sendActionBar)"

var player_line_178 = "Envoyer une chaine de caractères %2 à %1 comme un sous titre"

var player_line_194 = "Envoyer un message(setSubtitle)"

var player_line_211 = "Envoyer une chaine de caractères %2 à %1 comme un titre"

var player_line_227 = "Envoyer un message(sendTitle)"

var player_line_253 = "Débarrasser le titre du joueur %1"

var player_line_264 = "Débarrasser le titre d’un joueur(cléarTitle)"

var player_line_279 = "Saisir la vie du joueur %1"

var player_line_289 = "Saisir la vie d’un joueur (getHealth)"

var player_line_304 = "Fixer la vie du joueur %1 à %2"

var player_line_321 = "Fixer la vie d’un joueur (setHealth)"

var player_line_338 = "Fixer la vie maximale du joueur %1 à %2"

var player_line_355 = "Fixer la vie maximale d’un joueur(setMaxHealth)"

var player_line_372 = "Saisir la position du joueur %1"

var player_line_382 = "Saisir la position d’un joueur(getPosition)"

var player_line_396 = "Teleporter le joueur %1 à %2"

var player_line_413 = "Teleporter un joueur(teleport)"

var player_line_430 = "Fixer le nom du peau du joueur %1 à c’est le peau de %2 "

var player_line_464 = "Fixer le nom du peau du joueur %1 à c’est le peau de %2 puis montrer au joueur %3"

var player_line_504 = "Saisir l’argent du joueur %1"

var player_line_514 = "Saisir l’argent d’un joueur(getMoney)"

var player_line_528 = "%1 l’argent %3 du joueur %2"

var player_line_534 = "Augmenter"

var player_line_535 = "Diminuer"

var player_line_536 = "Fixer"

var player_line_572 = "Saisir l’objet que le joueur %1 saisit"

var player_line_582 = "Saisir l’objet qu'un joueur saisit(getItemInHand)"

var player_line_596 = "Fixer l’objet que le joueur %1 saisit à %2 "

var player_line_613 = "Changer l’objet que le joueur saisit(setItemInHand)"

var player_line_630 = "Verifier si le joueur %1 est un op"

var player_line_640 = "Verifier si un joueur est un op(PlayerIsOP)"

var player_line_654 = "Ajouter l’objet %2 dans l’inventaire du joueur %1  "

var player_line_671 = "Ajouter un objet dans un inventaire(addItemToPlayer)"

var player_line_688 = "Retirer l’objet %2 de l’inventaire du joueur %1  "

var player_line_705 = "Retirer un objet d’un inventaire(removeItemToPlayer)"

var player_line_722 = "Verifier s’il y a %2 dans l’inventaire du joueur %1  "

var player_line_737 = "Verifier s’il y a un objet dans l’inventaire d’un joueur(hasItemToPlayer)"

var player_line_753 = "Saisir l’inventaire du joueur %1 "

var player_line_763 = "Saisir l’inventaire d’un joueur(getPlayerInv)"

var player_line_778 = "Fixer l’inventaire du joueur %1 à %2 "

var player_line_795 = "Fixer l’inventaire d’un joueur(setPlayerInv)"

var player_line_812 = "Kicker un joueur %1 Envoyer la raison %2 "

var player_line_829 = "Kicker un joueur(kickPlayer)"

//pos.js

//generated by python reMoudle

var pos_line_4 = "Saisir le monde (level) à partir du nom %1"

var pos_line_14 = "Saisir le monde à partir du nom(getLevelByName)"

var pos_line_29 = "Construire la position monde: %1 x: %2 y: %3 z: %4"

var pos_line_54 = "Construire une position(Position.fromObject)"

var pos_line_75 = "Saisir la position x de %1 "

var pos_line_85 = "Saisir la position x(getX)"

var pos_line_100 = "Saisir la position y de %1"

var pos_line_110 = "Saisir la position y(getY)"

var pos_line_125 = "Saisir la position z de %1"

var pos_line_135 = "Saisir la position z(getZ)"

var pos_line_150 = "Saisir la position monde de %1 "

var pos_line_160 = "Saisir la position monde(getLevel)"

var pos_line_175 = "Fixer le monde de la position %1 à %2"

var pos_line_192 = "Fixer la position monde (setLevel)"

var pos_line_209 = "Fixer x %2 y %3 z %4 de la position %1 "

var pos_line_236 = "Fixer xyz(setComponents)"

var pos_line_257 = "Saisir le point d’apparition du monde %1"

var pos_line_267 = "Saisir le point d’apparition d’un monde(getSafeSpawn)"

var pos_line_282 = "Fixer le point d’apparition du monde %1 à %2"

var pos_line_299 = "Fixer un point d’apparition(setSpawnLocation)"

var pos_line_316 = "Faire du son %2 à la position %1 "

var pos_line_333 = "Faire du son(makeSound)"

var pos_line_350 = "Créer des orbes d’experience contenant %2 d’experiences à la position %1"

var pos_line_367 = "Créer des orbes d’experience(makeExpBall)"

var pos_line_384 = "Créer des objets au sol identiques à %2 à la position %1"

var pos_line_401 = "Créer des objets au sol(makeDropItem)"

var pos_line_418 = "Saisir le bloc situé à %1"

var pos_line_428 = "Saisir un bloc(getBlock)"

var pos_line_443 = "Saisir la liste des créatures du monde de la position %1"

var pos_line_453 = "Saisir la liste des créatures du monde d’une position(getLevelEntities)"

var pos_line_468 = "Saisir la liste des joueurs du monde de la position %1"

var pos_line_478 = "Saisir la liste des joueurs du monde d’une position(getLevelPlayers)"

var pos_line_493 = "Verifier si la météo du monde de la position %1 est claire et calme"

var pos_line_503 = "Verifier si la météo du monde d’une position est claire et calme(getIsSunny)"

var pos_line_518 = "Verifier s’il est le matin dans le monde de la position %1"

var pos_line_528 = "Verifier s’il est le matin dans un monde(isDay)"

var pos_line_543 = "Fixer la météo de la position %1 à %2 "

var pos_line_554 = "clair et calme"

var pos_line_555 = "pluie"

var pos_line_556 = "orage"

var pos_line_564 = "Fixer la météo(setLevelWeather)"

var pos_line_580 = "Construire le bloc %2 situé à %1 ses particules tombent ou pas %3"

var pos_line_602 = "Construire un bloc(setBlock)"

var pos_line_621 = "Saisir l’inventaire du bloc situé à %1"

var pos_line_631 = "Saisir l’inventaire d’un bloc (getBlockInv)"

var pos_line_646 = "Définir l’inventaire du bloc situé à la position %1 par %2"

var pos_line_663 = "Définir l’inventaire d’un bloc(setBlockInv)"

var pos_line_680 = "Forcer de charger le monde appelé %1"

var pos_line_692 = "Charger un monde(loadLevel)"

var pos_line_707 = "Générer le monde avec la graine %1 le nom %2 du type %3 "

var pos_line_723 = "Monde amplifié"

var pos_line_724 = "Monde plat"

var pos_line_725 = "Monde vide"

var pos_line_726 = "Nether"

var pos_line_734 = "Générer un monde(genLevel)"

var pos_line_752 = "Saisir le nom du monde %1"

var pos_line_762 = "Saisir le nom d’un monde(getLevelName)"

var pos_line_777 = "Saisir la liste des objets au sol dans le monde de la position %1"

var pos_line_787 = "Saisir la liste des objets au sol dans le monde d’une position(getDropItems)"

var pos_line_802 = "Saisir la liste des créatures dans le monde de la position %1"

var pos_line_812 = "Saisir la liste des créatures dans le monde d’une position(getEntities)"

var pos_line_827 = "Saisir la liste des mondes du serveur"

var pos_line_830 = "Saisir la liste des mondes du serveur(getServerLevels)"

var pos_line_843 = "Saisir la créature ayant l'ID %2 dans le monde %1"

var pos_line_858 = "Saisir une créature par son ID et sa position mondiale(getEntityByLevelAndID)"

var pos_line_875 = "Saisir la liste des textes flottants dans le monde %1"

var pos_line_885 = "Saisir la liste des textes flottants dans un monde(getLevelFloatingText)"

//utils.js

//generated by python reMoudle

var utils_line_5 = "Saisir la position du joueur %1"

var utils_line_15 = "Saisir la position d’un joueur(buildPositionfromPlayer)"

var utils_line_30 = "Saisir la position du bloc %1"

var utils_line_40 = "Saisir la position d’un bloc(buildPositionfromBlock)"

var utils_line_55 = "Saisir la position de la créature %1"

var utils_line_65 = "Saisir la position d’une créature(buildPositionfromEntity)"

var utils_line_80 = "Connecter à une base de données url: %1 Utilisateur %2 Mot de passe %3 Nom du tableau %4"

var utils_line_107 = "Connecter à une base de données(databaseOpen)"

var utils_line_128 = "Renouveler une base de données Instruction de sql: %1 Liste de paramètres: %2"

var utils_line_145 = "Renouveler une base de données(databaseUpdate)"

var utils_line_162 = "Chercher une base de données Instruction de sql: %1 Ligne: %2 Liste de paramètres: %3"

var utils_line_183 = "Chercher une base de données(databaseQuery)"

var utils_line_202 = "Créer une site d’internet personnalisée placeholder：Nom %1 Remplacement %2"

var utils_line_219 = "Fixer la personnalisation de placeholder de html(setHTMLPlaceholder)"

var utils_line_236 =
	"Verifier si le joueur %1 est un batard (littéralement) et retourner le resultat de verification(technique basée sur BlackBE云黑)"

var utils_line_246 =
	"Verifier si un joueur est un batard (littéralement) et retourner le resultat de verification(technique basée sur BlackBE云黑)"

var utils_line_261 = "Saisir la position géographique du joueur %1(basée sur la rétro-ingénierie de IP)"

var utils_line_271 = "Saisir la position géographique du joueur %1(basée sur la rétro-ingénierie de IP)"

var utils_line_286 =
	"Envoyer une demande de http à %1 du type %2 contenant des données %3 et Saisir l’instruction du retour"

var utils_line_309 = "Envoyer une demande de http et Saisir l’instruction du retour"

//window.js

//generated by python reMoudle

var window_line_5 = "Créer une fenêtre simple avec le titre %1 le contenu %2 "

var window_line_20 = "Créer une fenêtre simple(getSimpleWindowBuilder)"

var window_line_36 = "Ajouter dans la fenêtre simple %1 un bouton appelé %2 de l’image %3"

var window_line_57 = "Ajouter un bouton(buildButton)"

var window_line_76 = "Utiliser %1 pour envoyer une fenêtre au joueur %2 et Rappeler la fonction %3 "

var window_line_97 = "Montrer une fenêtre(showToPlayer)"

var window_line_116 = "Créer une boite de dialogue avec le titre %1 le contenu %2"

var window_line_131 = "Créer une boite de dialogue(getModalWindowBuilder)"

var window_line_147 = "Pour la boite de dialogue %1 Définir le nom du 1er bouton par %2 le nom du 2eme bouton par %3"

var window_line_187 = "Créer une fenêtre de haute gamme avec le titre %1"

var window_line_197 = "Créer une fenêtre de haute gamme(getCustomWindowBuilder)"

var window_line_211 = "Ajouter dans la fenêtre de haute gamme %1 un élément du texte contenant %2"

var window_line_227 = "Ajouter un élément du texte(buildLabel)"

var window_line_244 =
	"Ajouter dans la fenêtre de haute gamme %1 une boite d’intrant avec le titre %2 la notification %3"

var window_line_265 = "Ajouter l’élément d’une boite d’intrant (buildInput)"

var window_line_284 = "Ajouter dans la fenêtre de haute gamme %1 une boite de Vrai/Faux avec le titre %2"

var window_line_300 = "Ajouter l’élément d’une boite Vrai/Faux(buildToggle)"

var window_line_317 = "Ajouter dans la fenêtre de haute gamme %1 une boite de choix avec le titre %2 avec les choix %3"

var window_line_338 = "Ajouter l’élément d’une boite de choix(buildDropdown)"

var window_line_357 = "Mettre au courant le tableau d’affichage avec le titre %1 contenant %2 pour tout le monde"

var window_line_373 = "Mettre au courant le tableau d’affichage pour tout le monde(updateAllScoreBoard)"

var window_line_389 = "Mettre au courant le tableau d’affichage avec le titre %2 contenant %3 pour le joueur %1"

var window_line_410 = "Mettre au courant le tableau d’affichage pour un joueur((updateOneScoreBoard)"

var window_line_428 = "l’image du bouton BN %1"

var window_line_434 = "logo de Microsoft"

var window_line_435 = "coche"

var window_line_436 = "symbole de croix"

var window_line_437 = "point de suspension"

var window_line_438 = "point d’exclamation rouge"

var window_line_439 = "étoile jaune"

var window_line_440 = "engrenage"

var window_line_441 = "Steve"

var window_line_442 = "enveloppe"

var window_line_443 = "Alex"

var window_line_444 = "couronne d'OP"

var window_line_450 = "l’image du bouton BN"

//blockanditem.js update at 2020/5/6

//generated by python reMoudle

var blockanditem_line_753 = "Saisir la chaine de caractères de nbt de l’ensemble des objets %1"

var blockanditem_line_764 = "Saisir la chaine de caractères de nbt"

var blockanditem_line_779 = "Injecter nbt (sous forme de caractère) %2 dans l’ensemble des objets %1"

var blockanditem_line_796 = "Injecter nbt"

//entity.js update at 2020/5/6

//generated by python reMoudle

var entity_line_528 = "Considerer le joueur %1 comme une entité"

var entity_line_538 = "Considerer un joueur comme une entité"

var entity_line_553 = "Saisir la liste des effets des potions sur l’entité %1"

var entity_line_563 = "Saisir la liste des effets des potions sur une entité"

var entity_line_578 = "Saisir l’effet des potions %1 de %2"

var entity_line_589 = "le niveau"

var entity_line_591 = "le temps resté"

var entity_line_597 = "Saisir l’effet des potions"

//particlé.js update at 2020/5/6

//generated by python reMoudle

var particlé_line_5 =
	"Poser un cerclé dessiné horizontalement sur la position %1 avec un rayon %2 en utilisant des particules ayant l’ID  %3 avec des écarts de %4 carreaux"

var particlé_line_32 = "Dessiner un cercle avec des particules"

var particlé_line_53 =
	"Poser une ligne droite dessinée sur la position de %1 à %2 en utilisant des particules ayant l’ID %3 avec des écarts de %4 carreaux"

var particlé_line_80 = "Dessiner une droite avec des particules"

var particlé_line_101 =
	"Dessiner du feu d’artifice à la position %1 Code de la couleur %2 Clignoter ou pas %3 Trace ou pas %4 Code de forme %5 Durée de vole (en seconde) %6"

var particlé_line_138 = "Dessiner du feu d’artifice avec des particules"

var particlé_line_163 = "Dessiner des particules du bloc détruit %2 à la position %1"

var particlé_line_180 = "Dessiner des particules d’un bloc détruit"

var particlé_line_197 =
	"Dessiner des particules personnelles provenant de l’usine de particule du fichier mcfunction %3 à la position %1 l’angle %2"

var particlé_line_219 =
	"Dessiner des particules personnelles provenant de l’usine de particule de mcfunction(pas besoin de télécharger le plugin anticipe (mcfunction)，c’est deja telecharge sous le dossier function)"

//pos.js update at 2020/5/6

//generated by python reMoudle

var pos_line_727 = "Des iles du ciel"

var pos_line_901 =
	"Quantité de filons %1 Taille de filons %2 Hauteur minimale de la génération %3 Hauteur maximale de la génération %4 "

var pos_line_927 = "Créer un filon"

var pos_line_948 =
	"Générateur des iles du ciel：Niveau de la mer %1 Hauteur de la ligne de base %2 Générer des minéraux ou pas %3 parametre de génération de carbon %4 parametre de génération de fer %5 parametre de génération de Redstone  %6 parametre de génération de Lapis-lazuli %7 parametre de génération d’Or %8 parametre de génération de diamant %9 parametre de génération de terre %10 parametre de génération de sable %11 parametre de génération de granite %12 parametre de génération de diorite %13 parametre de génération d’Andesite %14 Est-ce que Générer : des grottes %15 des biomes %16 un océan %17 "

var pos_line_1040 = "Installer un générateur d’iles du ciel(setSkyLandGenerator)"

//window.js update at 2020/5/6

//generated by python reMoudle

var window_line_464 =
	"Ajouter dans une boite de dialogue %1 Ajouter le titre %2 Signaler %3 Ajouter un élément de la boite d’intrant %4 par défaut(caractère) "

var window_line_490 = "Ajouter un élément dans la boite d’intrant(buildInput)"

//event.js update at 2020/5/17

//generated by python reMoudle

var event_line_454 = "Saisir le slot s’engageant dans l’evenemt(getAction.getSlot)"

var event_line_479 = "Saisir le slot s’engageant dans l’evenemt(getAction.getInventory)"

var event_line_594 = "Saisirbl’entité s’engageant dans l’événement %1"

var event_line_604 = "Saisir l’entité de l’événement"

//JSON.js update at 2020/5/17

//generated by python reMoudle

var JSON_line_5 = "un objet json vide"

var JSON_line_8 = "un objet json vide"

var JSON_line_21 = "Définir la clé %2 de %1 en prennant la valeur %3"

var JSON_line_43 = "Valuation de la clé de json"

var JSON_line_62 = "Retirer la clé %2 de %1 et sa valeur correspondante"

var JSON_line_79 = "Retirer une clé Json bien définie"

var JSON_line_96 = "Saisir la valeur de l’objet Json %1 de la clé %2"

var JSON_line_111 = "Saisir la valeur de la clé"

var JSON_line_128 = "Saisir la valeur de l’objet Json %1 de la clé %2"

var JSON_line_143 = "Saisir la valeur de la clé"

var JSON_line_160 =
	"Sauvegarder l’objet Json %1 dans le chemin d’accès %2 (il faut que le nom du fichier se termine par .json)"

var JSON_line_177 = "Sauvegarder json"

var JSON_line_194 = "Lire l’objet Json à travers le chemin d’accès %1"

var JSON_line_204 = "Saisir l’objet Json à travers un fichier"
