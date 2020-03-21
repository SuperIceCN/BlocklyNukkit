/**
 * $Id: ethiopic-washra.js 643 2009-07-09 15:19:14Z wingedfox $
 *
 * Ethiopian WashRa layout
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Konstantin Wiolowan
 * @copyright 2008-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 * @version $Rev: 643 $
 * @lastchange $Author: wingedfox $ $Date: 2009-07-09 19:19:14 +0400 (Чт., 09 июля 2009) $
 */
function(i,I){var l,o='',O=0,Q={A:'እ',U:'ሽ',O:'ዕ',I:'ይ',Y:'ኅ'},_={e:0,',':1,'ይ':2,'እ':3,'ኅ':4,'ሽ':5,'ዕ':6,'/':7,'1':9,'3':10,'4':11,'5':12,'6':13};if(i=='\u0008'){if(I.length){o=I.slice(0,-1);O=I.length-1}}else{i=VirtualKeyboard.Langs.ET.conv[i]||Q[i]||i;if(i==' '){o='፡'}else{if(I=='`'){if(/[0-9]/.test(i))o='፻፩፪፫፬፭፮፯፰፱'.charAt(i);else if('`'==i)o=i;else o=I+i}else if(I=='~'){if(/[0-9]/.test(i))o='፼፲፳፴፵፶፷፸፹፺'.charAt(i);else if('~'==i)o=i;else sre=I+i}else{l=_[i]||_[i.toLowerCase()];if(isNumber(l)&&I){o=VirtualKeyboard.Langs.ET.cons[I].charAt(l);if(!o||o==' '){o=I;O=I.length}}else{o=I+i;if('`'==o||'~'==o)O=1;else O=VirtualKeyboard.Langs.ET.cons[i]?1:0}}}}return[o,O]}
