<?php
/**
 * $Id: setup.php 753 2011-05-05 20:35:49Z wingedfox $
 *
 * Keyboard setup script
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Ilya Lebedev
 * @copyright 2006-2011 Ilya Lebedev <ilya@lebedev.net>
 * @version $Rev: 753 $
 * @lastchange $Author: wingedfox $ $Date: 2011-05-06 00:35:49 +0400 (Пт., 06 мая 2011) $
 */

header("Content-Type: text/html; charset=utf-8");

require "vk.inc.php";

define ('LAYOUT_ROOT', dirname(__FILE__)."/in/");
define ('LAYOUT_EXT', '.klc');
define ('LAYOUT_MASK', '*'.LAYOUT_EXT);
define ('LAYOUT_OUT_FOLDER', dirname(__FILE__)."/out/");
define ('DICTIONARY_OUT_FOLDER_NAME', "d/");
define ('DICTIONARY_OUT_FOLDER', LAYOUT_OUT_FOLDER.DICTIONARY_OUT_FOLDER_NAME);
define ('LAYOUT_OUT', LAYOUT_OUT_FOLDER."layouts.js");
define ('LAYOUT_REPORT', dirname(__FILE__)."/out/layouts.tsv");
define ('LAYOUT_INSTALL', dirname(__FILE__)."/../layouts/layouts.js");

/*
*  prepare layouts file;
*/
$VK_ADDONS = array();

/**
 *  Converts plaintext keyboard layout to the valid javascript code and saves it
 *
 *  @param VirtualKeyboardLayout $f layout object
 *  @return boolean conversion state
 *  @scope public
 */
function convertKbd(&$f) {
    global $VK_ADDONS;


    $addon = $f->getAddon();
    $aname = basename($addon);

    $fname = $f->getFilename().'.js';

    if (!empty($addon)) {
        copy($addon, DICTIONARY_OUT_FOLDER.$aname);
    }

    $data = '﻿'."VirtualKeyboard.addLayout(".$f->serialize($_REQUEST['group']).");";

    $fd = fopen (LAYOUT_OUT_FOLDER.$fname, "w");
    fwrite($fd, $data);
    fclose($fd);

    return $f->serializeHeader($_REQUEST['group']);
}


function getLayoutList () {
    return glob(LAYOUT_ROOT.LAYOUT_MASK);
}
?>
<html>
 <head>
  <title>Virtual Keyboard layouts setup page</title>
  <style type="text/css">
   table {
       padding: 0;
       border-collapse: collapse;
   }
   th {
       text-align: left;
   }
   tr.odd td {
       background: #f4f4f4;
   }
  </style>
 </head>
 <body>
  <p>Keyboard layouts setup</p>
  <form action="" method="POST" >
   <div>
    <div style="height: 400px; overflow: auto; border: 1px inset black;">
     <table id="targetkbd" border="0">
      <thead>
       <tr>
        <th><input type="checkbox" onclick="var els=this.parentNode.parentNode.parentNode.parentNode.tBodies[0].getElementsByTagName('input'); for(var i=0, eL=els.length; i<eL; i++) els[i].checked=this.checked;"></th>
        <th>Layout Code</th>
        <th>Layout Name</th>
        <th>Copyright</th>
        <th>Saved</th>
       </tr>
      </thead>
      <tbody>
       <?php

         @unlink(LAYOUT_OUT_FOLDER);
         @mkdir(LAYOUT_OUT_FOLDER);
         @mkdir(DICTIONARY_OUT_FOLDER);

         $layouts = array();
         $report = array();

         $kbdl = getLayoutList();
         $saved = false;
         for ($i=0;$i<sizeof($kbdl);$i++) {
            $kl = new VirtualKeyboardLayout($kbdl[$i]);
            $kl->setAddonFolder(DICTIONARY_OUT_FOLDER_NAME);
            $cname = str_replace(".","_",urlencode($kl->name));
            $cls = $i%2?"even":"odd";
            $checked = isset($_POST[$cname])?'checked="true"':'';
            if (isset($_POST[$cname])) {
                $saved = "<span style=\"color:green\">Yes</span>";
//                       "<span style=\"color:red\">No</span>"
                $layouts[] = convertKbd($kl);
                $report[] = $kl->getCode()."\t".$kl->getName()."\t".$kl->getCopyright();
            } else {
                $saved = "<span></span>";
            }
       ?>
        <tr class="<?php echo($cls)?>">
         <td><input type="checkbox" name="<?php echo($cname)?>" <?php echo($checked)?> /></td>
         <td><?php echo($kl->getCode())?></td>
         <td><?php echo($kl->getName())?></td>
         <td><?php echo($kl->getCopyright())?></td>
         <td><?php echo($saved)?></td>
        </tr>
       <?php
         }
         if (!empty($layouts)) {

             $s  = join("\n",$VK_ADDONS);
             $s .= "VirtualKeyboard.addLayoutList(\n".join(",\n",$layouts)."\n);";

             // save layout
             @unlink(LAYOUT_OUT);
             $fd = fopen(LAYOUT_OUT,"ab");
             fwrite($fd,'﻿');
             fwrite($fd,$s);
             fclose($fd);

             // save report
             @unlink(LAYOUT_REPORT);
             $fd = fopen(LAYOUT_REPORT,"ab");
             fwrite($fd,join("\r\n",$report));
             fclose($fd);

             if (isset($_POST['doinstall'])) {
                 $inst_res = 1;
                 if (file_exists(LAYOUT_INSTALL))
                     $inst_res = 2;
                 else
                     $inst_res = @copy(LAYOUT_OUT, LAYOUT_INSTALL);
             }
         }
       ?>
      </tbody>
     </table>
    </div>
    <label for="install">Install layouts<input type="checkbox" name="doinstall" /></label>
    <?php if (isset($inst_res)) { ?>
        <?php if (1==$inst_res) {?>
            <span style="color: green">success</span>
        <?php } else { ?>
            <span style="color: red">error: <?php echo ($inst_res==0?"New layout file is not accessible. Have you selected any layouts to install?"
                                                                    :"Target file (<b>/layouts/layouts.js</b>) is already exists, remove it before installing new one.")?></span>
        <?php } ?>
    <?php } ?>
    <br />
    <strong>Group languages by</strong><br />
    <label for="group1"><input type="radio" name="group" id="group1" value="lng" checked="true" />Language code (en-<strong>US</strong>)</label>&nbsp;
    <label for="group2"><input type="radio" name="group" id="group2" value="domain" />Language domain (<strong>en</strong>-US)</label>
    <br />
    <br />
    <input type="submit" value="Process selected" />
   </div>
  </form>
  
 </body>
</html>
  
