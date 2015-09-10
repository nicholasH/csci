// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://atomicobject.com/culture
// @grant        none
// ==/UserScript==

$('.development a').on('click',function(el){
    el.preventDefault();
});


$( function() {
 $('.employee-name:contains("s")').closest('li.development').find('a').click( function() {
    $(this).css('background-color','red');
  } );
} );

$( function() {
    $('.employee-name:not(:contains("s"))').closest('li.development').find('a').click( function() {
    $(this).hide();
  } );
} );
