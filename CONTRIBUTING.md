# Add a new Language to the Graphical Editor
Examples for the graphical editor translation files exist in the js/msg/bn folder. Right now, only English and French translations exist. To add a new language, follow these steps:

1. Make a copy of one of the existing translation files, and change the name to the language you will be translating.
2. Some translations are incomplete, so check other translations to make sure that you have all of the variables.
3. Translate each individual string in the translateToolBox() and translateHTMLtoken() functions, as well as all of the variables in the rest of the file.
4. In the index.html file, there is a script that checks the URL for the desired language. You need to copy and paste a block that looks like this:
```
if(lang=="french"||lang=="fr"){
    document.writeln('\<script src="./js/msg/bn/french.js"\>\</script\>');
    document.writeln('\<script src="./js/msg/js/fr.js"\>\</script\>');
}
```
5. Note that there is a second JavaScript file "./js/msg/js/fr.js". Blockly comes with many translations already. Find the one for your language, and make sure you change it in your new if-block.

# Help with the preparation of tutorials on the blocklynukkit.info website
# Contribute project code