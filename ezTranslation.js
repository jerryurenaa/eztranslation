/**
 * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 * Xtreme Software Solutions LLC @2020
 * FrontEnd MultiLanguage Module v0.1
 * Coded By @jerryurenaa <{@!@}>
 * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 */

/**
 * Dictionary carrier
 * configure language with default frontend locale
 */
let dictionary = require(`./en.json`);


/**
 * @method setLanguageDictionary
 * @param  locale 
 * This method will set current language dictionary
 */
export function setLocale(locale)
{
    dictionary = require(`./${locale}.json`);
}




/** 
 * @method lang
 * @param string key
 * @return string translation  
 */
export default function lang(key)
{
    return dictionary[key];
}
