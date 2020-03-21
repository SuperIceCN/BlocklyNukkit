/**
 * $Id: ethiopic-xtt.js 643 2009-07-09 15:19:14Z wingedfox $
 *
 * Ethiopian Xenotype XXT layout
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Konstantin Wiolowan
 * @copyright 2008-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 * @version $Rev: 643 $
 * @lastchange $Author: wingedfox $ $Date: 2009-07-09 19:19:14 +0400 (Чт., 09 июля 2009) $
 */
function(i,I){var l,o='',O=0,Q={a:1,i:2,A:3,e:4,u:5,o:6,W:7,Y:8};if(i=='\u0008'){if(I.length){o=I.slice(0,-1);O=I.length-1}}else{i=VirtualKeyboard.Langs.ET.conv[i]||i;if(i==' '){o='፡'}else{l=Q[i]||Q[i.toLowerCase()];if(isNumber(l)){if(I){o=VirtualKeyboard.Langs.ET.cons[I].charAt(l);if(!o||o==' '){o=I;O=I.length}}else{o=VirtualKeyboard.Langs.ET.cons['እ'].charAt(l)||I+i}}else{o=I+i;O=VirtualKeyboard.Langs.ET.cons[i]?1:0}}}return[o,O]}
