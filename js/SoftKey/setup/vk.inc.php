<?php
/**
 * Converts numeric code to the UTF-8 symbol
 *
 * @param $num character number
 * @return string resulting char
 */
function code2utf($num){
    if ($num < 128) {
        return chr($num);
    }
    if ($num < 2048) {
        return chr(($num >> 6) + 192) . chr(($num & 63) + 128);
    }
    if ($num < 65536) {
        return chr(($num >> 12) + 224) . chr((($num >> 6) & 63) + 128) . chr(($num & 63) + 128);
    }
    if ($num < 2097152) {
        return chr(($num >> 18) + 240) . chr((($num >> 12) & 63) + 128) . chr((($num >> 6) & 63) + 128) . chr(($num & 63) + 128);
    }
    return '';
}

/**
 * $Id: vk.inc.php 737 2011-05-03 21:50:55Z wingedfox $
 *
 * Keyboard layout parset implementation
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Ilya Lebedev
 * @copyright 2006-2009 Ilya Lebedev <ilya@lebedev.net>
 * @version $Rev: 737 $
 * @lastchange $Author: wingedfox $ $Date: 2011-05-04 01:50:55 +0400 (Ср., 04 мая 2011) $
 */
class VirtualKeyboardLayout {

    var $SERIALIZE_USE_DOMAIN = "domain";
    var $SERIALIZE_USE_CODE   = "code";

    var $controlCodes = array(0x0600,0x0601,0x0602,0x0603,0x06DD,0x070F,0x17B4,0x17B5,0x200B
                             ,0x200C,0x200D,0x200E,0x200F,0x202A,0x202B,0x202C,0x202D,0x202E,0x2060
                             ,0x2061,0x2062,0x2063,0x206A,0x206B,0x206C,0x206D,0x206E,0x206F);

    /**
     *  Folder name to be used as prefix for building layout requirements
     */
    private $addonFolder = "";

    /**
     *  List of the chars to be not skipped in the layout
     */
    var $problemChars = array('021e','021f' // from Lakhota Standard, windows does not uppercase them properly
                             );

    /**
     *  Keys mapping as used in the US keyboard layout
     *  it might follow in the different order to the mapping described in the KLC file
     */
    var $keymap = array (
        '29' /* 'OEM_3'      */ => array()                 
       ,'02' /* 1            */ => array()
       ,'03' /* 2            */ => array()
       ,'04' /* 3            */ => array()
       ,'05' /* 4            */ => array()
       ,'06' /* 5            */ => array()
       ,'07' /* 6            */ => array()
       ,'08' /* 7            */ => array()
       ,'09' /* 8            */ => array()
       ,'0a' /* 9            */ => array()
       ,'0b' /* 0            */ => array()
       ,'0c' /* 'OEM_MINUS'  */ => array()
       ,'0d' /* 'OEM_PLUS'   */ => array()
       ,'2b' /* 'OEM_5'      */ => array()
       ,'10' /* 'Q'          */ => array()
       ,'11' /* 'W'          */ => array()
       ,'12' /* 'E'          */ => array()
       ,'13' /* 'R'          */ => array()
       ,'14' /* 'T'          */ => array()
       ,'15' /* 'Y'          */ => array()
       ,'16' /* 'U'          */ => array()
       ,'17' /* 'I'          */ => array()
       ,'18' /* 'O'          */ => array()
       ,'19' /* 'P'          */ => array()
       ,'1a' /* 'OEM_4'      */ => array()
       ,'1b' /* 'OEM_6'      */ => array()
       ,'1e' /* 'A'          */ => array()
       ,'1f' /* 'S'          */ => array()
       ,'20' /* 'D'          */ => array()
       ,'21' /* 'F'          */ => array()
       ,'22' /* 'G'          */ => array()
       ,'23' /* 'H'          */ => array()
       ,'24' /* 'J'          */ => array()
       ,'25' /* 'K'          */ => array()
       ,'26' /* 'L'          */ => array()
       ,'27' /* 'OEM_1'      */ => array()
       ,'28' /* 'OEM_7'      */ => array()
       ,'2c' /* 'Z'          */ => array()
       ,'2d' /* 'X'          */ => array()
       ,'2e' /* 'C'          */ => array()
       ,'2f' /* 'V'          */ => array()
       ,'30' /* 'B'          */ => array()
       ,'31' /* 'N'          */ => array()
       ,'32' /* 'M'          */ => array()
       ,'33' /* 'OEM_COMMA'  */ => array()
       ,'34' /* 'OEM_PERIOD' */ => array()
       ,'35' /* 'OEM_2'      */ => array()
    );
    /**
     *  Maps column number to the mnemonic
     */
    var $colmap = array(
            0 => 'normal'
           ,1 => 'shift'
           ,2 => 'ctrl'
           ,3 => 'shift_ctrl'
           ,6 => 'alt'
           ,7 => 'shift_alt'
           ,8 => 'caps'
           ,9 => 'shift_caps'
        );
    /**
     *  Layout name
     */
    var $name;
    /**
     *  Country code (might be not a _code_ but any string)
     */
    var $code;
    /**
     *  Language domain, as specified in the ISO-639* 
     */
    var $domain;
    /**
     *  Just a copyright string
     */
    var $copyright;
    /**
     *  Developer company
     */
    var $company;
    /**
     *  Enabled columns, regarding to the KLC enablement info
     */
    var $columns = array();
    /**
     *  List of the ligatures in the format
     *  '<key_name>' => array ('<column>' => array('<symbol1>','<symbol4>')));
     *  where <key_name> is the same as key in the {@link #keymap}
     *        <column>   column number
     *        <symbolN>  up to 4 consecutive symbols in the ligature
     */
    var $ligature = array();
    /**
     *  Deadkeys
     */
    var $deadkey = array();

    var $root = "";
    var $addon = "/addons/";
    var $callback = "callbacks/";
    var $fname = "";

    function VirtualKeyboardLayout($fname) {
	$this->convertControlCodes();

	$this->problemChars = array_map(create_function('$a','return code2utf(hexdec($a));'), $this->problemChars);
        $this->root = dirname($fname);
        $this->fname = $fname;

        mb_internal_encoding("UTF-8");
        $this->layoutText = mb_convert_encoding(file_get_contents($fname), "UTF-8", "UCS-2");

        $this->parseHeader();
    }

    /**
     *  Converts @{link #controlCodes} array to fast-replacement hash
     */
    function convertControlCodes() {
        $tmp = array();
        foreach ($this->controlCodes as $v) {
             $k = code2utf($v);
	     $tmp[$k] = "\u".str_pad(dechex($v),4,0,STR_PAD_LEFT);
        }
        $this->controlCodes = $tmp;
    }

    /**
     * Converts char code to UTF codepoing, if required
     *
     * @param $chr char or 4-byte hex
     * @return string UTF codepoint
     */
    function __chr2utf ($chr) {

        if (preg_match("/^[\\da-f]{4,6}$/i", $chr)) {
            return code2utf(hexdec($chr));
        } else {
            return $chr;
        }
    }
    /**
     *  Serializes the layout row
     *
     *  @param $data row data
     *  @param $token row id
     *  @return serialized row
     */
    function __serializeRow ($data, $token) {
        $uni_keys = array_keys($this->controlCodes);
        $uni_vals = array_values($this->controlCodes);
        if ($this->colmap[0] == $token) {
            $charset = addcslashes(join('',$data),"\\'");
            $charset = str_replace($uni_keys, $uni_vals, $charset);
            return $token.":'".$charset."'";
        } else if (!empty($data) && in_array($token, $this->colmap)) {
            $str = $token.":{";
            foreach ($data as $k => $v) {
                $charset = addcslashes(join('',$v),"\\'");
                $charset = str_replace($uni_keys, $uni_vals, $charset);
                $data[$k] = $k.":'".$charset."'";
            }
            $str .= join(",",$data)."}";
            return $str;
        }
        return null;
    }
    /**
     *
     *
     *
     */
    function __serializeDeadkeys() {
        if (!empty($this->deadkey)) {
            $dk = array();
            foreach ($this->deadkey as $k => $v) {
                $charr = array();
                foreach ($v as $s => $t) {
                    $charr[] = $s;
                    $charr[] = $t;
                }                                                                	
                $dk[] = "'".addslashes($k)."':'".addcslashes(join('',$charr),"\\'"/*.$this->controlCodes*/)."'";
            }
            return "dk:{".join(",",$dk)."}";
        }
    }

    /**
     *  Retrieves the DEADKEY xxxx block from the layout description, parses it and appends to {@link #deadkey}
     *
     *  @param $sym symbol to look deadkeys for
     */
    function parseDeadkey ($sym) {
        $str = &$this->layoutText;
        $char = $this->__chr2utf($sym);

        if (mb_strlen($sym) == 1) {
            $sym = str_pad(dechex(ord($sym)),4,0,STR_PAD_LEFT);
        }

        if (!key_exists($char, $this->deadkey)) {
            // DEADKEY xxx block
            if (preg_match("/^DEADKEY\s+".$sym."(.+?)(?:^KEYNAME|^DEADKEY)/ms", $str, $m)) {
                $keys = preg_split("/\s*[\r\n]+\s*/m",$m[1]);
                $deadkeys = array();
                for ($i=0; $i<sizeof($keys); $i++) {
                    $key = trim($keys[$i]);
                    if (!empty($key)) {
                        $key = preg_split("/\t+/",$key);
                        $deadkeys[$this->__chr2utf($key[0])] = $this->__chr2utf($key[1]);
                    }
                }
                if (sizeof($deadkeys) > 0) {
                    $this->deadkey[$char] = $deadkeys;
                }
            }
        }
    }
    /**
     *  Retrieves the LIGATURE block and parses it if exists
     *
     *  @param $sym symbol to look deadkeys for
     */
    function parseLigature () {
        $str = &$this->layoutText;

        if (empty($this->ligature)) {
            // LIGATURE block
            if (preg_match("/^LIGATURE(.+?)(?:^KEYNAME|^DEADKEY)/ms", $str, $m)) {
                preg_match_all("#^([A-Z\\d_]+)\\t\\t(\\d+)\\t+((?:[^\\t]+\\t)+)#m", $m[1], $m);
                if (!empty($m[1])) {
                    $keys = $m[1];
                    $modes = $m[2];
                    foreach ($keys as $key => $val) {
                        $mode = $modes[$key];
                        //this seems a bit strange, but ligatures for altGr and shift+altGr
                        //are counted by a real column number, not a 'virtual' one, set in the column header
                        if (key_exists($mode, $this->columns)) {
                            $this->ligature[$val][$this->columns[$mode]] = array_map(create_function('$a','return code2utf(hexdec($a));'), array_filter(explode("\t",$m[3][$key])));
                        }
                    }
                }
            }
        }
    }

    /**
     *  Preprocesses layout according to the KLC 1.4 file format
     *  Retrieves only name, code, domain, copyright and company fields
     *
     *  @return void
     */
    function parseHeader() {
        $str = &$this->layoutText;
       
        preg_match("/^.*?KBD\\t[^\\t]+\\t\"([^\"]+)/m", $str, $m);
        $this->name = $m[1];
        // probably we have to skip standard comment from MSKLC like "- Custom"
//        $this->name = array_shift(preg_split("/\\s-\\s/",$m[1]));

        preg_match("/^LOCALENAME\\t\"(\\w+)-(\\w+)/m", $str, $m);
        if (empty($m)) {
            $this->code = "US";
            $this->domain = "EN";
        } else {
            $this->code = $m[2];
            $this->domain = mb_strtoupper($m[1]);
        }

        preg_match("/^COMPANY\\t\"([^\"]*)/m", $str, $m);
        $this->company = $m[1];

        preg_match("/^COPYRIGHT\\t\"([^\"]+)/m", $str, $m);
        $this->copyright = $m[1];
        if (preg_match("/ilya lebedev/i",$this->copyright)) $this->copyright = "";
    }

    /**
     *  Makes the complete KLC parse, except done in the {@link #preParse}
     *
     *  @return void
     */
    function parse() {
        $str = &$this->layoutText;

        // available columns
        preg_match("#^//(SC[^\\r\\n]+)#m", $str, $m);
        $this->columns = array_slice(preg_split("/\\t/", $m[1]), 4);

        $this->parseLigature();

        // LAYOUT block
        // String format: ScanCode \t KeyId \t CapsFlag \t NormalKey \t ShiftKey       \t (and so on)
        // [SGCaps]:      -1       \t -1    \t 0        \t SGCapsKey \t ShiftSGCapsKey
        preg_match("/^LAYOUT.+?--[\\r\\n]+(.+?)(?:^DEADKEY|^LIGATURE|^KEYNAME)/sm",$str,$m);
        $strings = preg_split("#[\\r\\n]+#",$m[1]);
        $strings = array_map(create_function('$a','return preg_split("#\\t+#",$a);'),array_filter($strings));

        // Column values
        // 0 - normal key state
        // 1 - Shift
        // 2 - Ctrl 
        // 3 - Shift+Ctrl
        // 4 - AltGr (Shift+Ctrl)
        // 5 - Shift+AltGr (Shift+Ctrl+Alt)
        // 6 - SGCaps
        // 7 - Shift+SGCaps
        for ($i=0; $i<sizeof($strings); $i++) {
            $sgcaps  = 'SGCap' == $strings[$i][2];
            $shiftlock = 1 == $strings[$i][2];

            $keyCode = $strings[$i][0];
            $keyName = $strings[$i][1];
            $string  = $strings[$i];
            if (key_exists($keyCode, $this->keymap)) {
                $lKey    = &$this->keymap[$keyCode];
                foreach ($this->columns as $z => $v) {
                    $sym = trim($string[$z+3]);
                    $col = $this->colmap[$v];
                    $res;
                    if ('-1' == $sym) {
                       continue;
                    } else if ('%%' == $sym) {
                       $res = $this->ligature[$keyName][$v];
                    } else if (mb_substr($sym, -1) == '@') {
                       $sym = str_replace('@','',$sym);
                       $res = "\x03".$this->__chr2utf($sym);
                       $this->parseDeadkey($sym);
                    } else {
                       $res = $this->__chr2utf($sym);
                    }
                    $lKey[$col] = $res;
                    if ($shiftlock) {
                        if (0 == $z) {
                            $lKey[$this->colmap[9]] = $res;
                        } else if (1 == $z) {
                            $lKey[$this->colmap[8]] = $res;
                        }
                    }
                }
                if ($sgcaps) {
                    $string = $strings[$i+1];
                    if (key_exists(3, $string) && false === mb_strpos($string[3], "//")) {
                         $col = $this->colmap[8];
                         $lKey[$col] = $this->__chr2utf($string[3]);
                    }
                    if (key_exists(4, $string) && false === mb_strpos($string[4], "//")) {
                         $col = $this->colmap[9];
                         $lKey[$col] = $this->__chr2utf($string[4]);
                    }
                }
            }
            if ($sgcaps) {
                $i++;
            }
        }
    }
    
    /**
     *  Parses layout and returns structured data describing it
     *
     *  @return array
     */
    function & getParsedLayout () {
        mb_internal_encoding("UTF-8");
        $this->parse();

        $VK = array('name'    => $this->name
                   ,'code'    => $this->code
                   ,'domain'  => $this->domain
                   ,'copy'    => $this->copyright
                   ,'company' => $this->company
                   ,'keys'    => $this->keymap
                   ,'dk'      => $this->deadkey
                   ,'cbk'     => $this->getCallback()
                   ,'addon'   => $this->getAddon()
              );
        return $VK;
    }

    /**
     *  @return string with addon file path
     */
    function getAddon() {
        $add = realpath($this->root.$this->addon.$this->code.'.js');
        if (!file_exists($add)) {
            $add = '';
        }
        return $add;
    }

    /**
     *  @return string with callback file path
     */
    function getCallback() {
        $add = realpath($this->root.$this->addon.$this->callback.preg_replace("/.+[\\/\\\\]+(.+)\\.klc$/i","\\1.js",$this->fname));
        if (file_exists($add)) {
            return $add;
        }
        return '';
    }

    function getFilename() {
        return basename($this->fname, LAYOUT_EXT);
    }

    /**
     *  @return layout name
     */
    function getName () {
        return $this->name;
    }

    /**
     *  @return layout code
     */
    function getCode () {
        return $this->code;
    }

    /**
     *  @return layout domain
     */
    function getDomain () {
        return $this->domain;
    }

    /**
     *  @return layout copyright
     */
    function getCopyright () {
        return $this->copyright;
    }

    /**
     *  @param $v string addon folder name
     */
    function setAddonFolder ($v) {
        $this->addonFolder = $v;
    }

    /**
     *  Serializes layout in the following way
     *  1) ligatures are encoded as substrings surrounded with 0x01
     *  2) 'normal' key state is 47-item length array with the "empty" keys shown as 0x02
     *  3) 'shift', 'alt', 'shift_alt', 'caps', 'shift_caps' are the objects with 'diffs' against
     *     the 'normal' keys
     *  4) deadkeys are stored as the hash of string with all available pairs of the source and target symbols
     *
     *  @param $type one of: SERIALIZE_USE_CODE or SERIALIZE_USE_DOMAIN
     */
    function serialize ($type) {
        $domain = mb_strtoupper($this->domain);
        switch ($type) {
            case "lng" :
                $code = $domain==$this->code?$this->code
                                            :$domain.'-'.$this->code;
                break;
            case "domain" :
                $code = $domain;
                break;
            default:
                return "";
        }

        $this->parse();


        $keys = & $this->keymap;

        $anc  = array();
        $asc  = array();
        $aac  = array();
        $asac = array();
        $acc  = array();
        $ascc = array();

        $i_anc = $i_asc = $i_aac = $i_asac = $i_acc = $i_ascc = 0;

        foreach ($keys as $k => $v) {

            $nc  = @$v[$this->colmap[0]];
            $sc  = @$v[$this->colmap[1]];
            $ac  = @$v[$this->colmap[6]];
            $sac = @$v[$this->colmap[7]];
            $cc  = @$v[$this->colmap[8]];
            $scc = @$v[$this->colmap[9]];

            if (is_array($nc)) {
                // ligature
                $nc = chr(0x01).join($nc).chr(0x01);
            } else if (!is_string($nc)) {
                // key not exists
                $nc = chr(0x02);
            }
            if (is_array($sc)) {
                // ligature
                $sc = chr(0x01).join($sc).chr(0x01);
            }
            if (is_array($ac)) {
                // ligature
                $ac = chr(0x01).join($ac).chr(0x01);
            }
            if (is_array($sac)) {
                // ligature
                $sac = chr(0x01).join($sac).chr(0x01);
            }
            if (is_array($cc)) {
                // ligature
                $cc = chr(0x01).join($cc).chr(0x01);
            }
            if (is_array($scc)) {
                // ligature
                $scc = chr(0x01).join($scc).chr(0x01);
            }

            // fill the things
            $anc[$i_anc++] = $nc;

            //shift
            if (is_string($sc) && (preg_match("/^\\x03./",$sc) || in_array($sc, $this->problemChars) || mb_strtoupper($sc) != mb_strtoupper($nc))) {
                $asc[$i_asc][] = $sc;
            } else {
                // key not exists
                $i_asc = $i_anc;
            }
            // alt
            if (is_string($ac) && (preg_match("/^\\x03./",$ac) || in_array($ac, $this->problemChars) || mb_strtoupper($ac) != mb_strtoupper($nc))) {
                $aac[$i_aac][] = $ac;
            } else {
                // key not exists
                $i_aac = $i_anc;
            }
            // shift+alt
            if (is_string($sac) && (preg_match("/^\\x03./",$sac) || (in_array($sac, $this->problemChars) || mb_strtoupper($sac) != mb_strtoupper($ac)))) {
                $asac[$i_asac][] = $sac;
            } else {
                // key not exists
                $i_asac = $i_anc;
            }
            // caps
            // could not have deadkeys
            if (is_string($cc) && (in_array($cc, $this->problemChars) || mb_strtoupper($cc) != mb_strtoupper($nc))) {
                $acc[$i_acc][] = $cc;
            } else {
                // key not exists
                $i_acc = $i_anc;
            }
            // shift+caps
            // could not have deadkeys
            if (is_string($scc) && (in_array($scc, $this->problemChars) || mb_strtoupper($scc) != mb_strtoupper($cc))) {
                $ascc[$i_ascc][] = $scc;
            } else {
                // key not exists
                $i_ascc = $i_anc;
            }                                             	

        }

        $serArr = array(
            "code:'".addslashes($code)."'"
           ,"name:'".addslashes($this->name)."'"
           ,$this->__serializeRow($anc, $this->colmap[0])
           ,$this->__serializeRow($asc, $this->colmap[1])
           ,$this->__serializeRow($aac, $this->colmap[6])
           ,$this->__serializeRow($asac, $this->colmap[7])
           ,$this->__serializeRow($acc, $this->colmap[8])
           ,$this->__serializeRow($ascc, $this->colmap[9])
           ,$this->__serializeDeadkeys()
        );

        $add = $this->getCallback();
        if (!empty($add)) {
            $serArr[] = "'cbk':".trim(file_get_contents($add),"\r\n; ");
        }

        return "{".join("\n,",array_filter($serArr))."}";
    }

    /**
     *  Serializes layout header in the following way
     *  1) ligatures are encoded as substrings surrounded with 0x01
     *  2) 'normal' key state is 47-item length array with the "empty" keys shown as 0x02
     *
     *  @param $type one of: SERIALIZE_USE_CODE or SERIALIZE_USE_DOMAIN
     */
    function serializeHeader($type) {
        $domain = mb_strtoupper($this->domain);
        switch ($type) {
            case "lng" :
                $code = $domain==$this->code?$this->code
                                            :$domain.'-'.$this->code;
                break;
            case "domain" :
                $code = $domain;
                break;
            default:
                return "";
        }

        $this->parse();


        $keys = & $this->keymap;
        $anc  = array();

        $i_anc = $i_asc = $i_aac = $i_asac = $i_acc = $i_ascc = 0;

        foreach ($keys as $k => $v) {

            $nc  = @$v[$this->colmap[0]];

            if (is_array($nc)) {
                // ligature
                $nc = chr(0x01).join($nc).chr(0x01);
            } else if (!is_string($nc)) {
                // key not exists
                $nc = chr(0x02);
            }

            // fill the things
            $anc[$i_anc++] = $nc;
        }

        $serArr = array(
            "code:'".addslashes($code)."'"
           ,"name:'".addslashes($this->name)."'"
           ,$this->__serializeRow($anc, $this->colmap[0])
           ,"requires:['".
                          (($this->getAddon()=="")?""
                                                   :($this->addonFolder.basename($this->getAddon())."','"))
                         .($this->getFilename()).".js']"
        );

        return "{".join("\n,",array_filter($serArr))."}";
    }
}
