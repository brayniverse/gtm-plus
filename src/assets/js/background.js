// Copyright (c) 2014 Brayniverse. All rights reserved.
// Use of this script is governed by a MIT license that can be
// found in the LICENSE file.

;(function(window, document, undefined) {
	"use strict";

	function filterItems(items, regex) {
		for (var i = 0; i < items.length; i++) {
			if ( ! items[i].innerText.match(regex)) {
				items[i].style.display = 'none';
			} else {
				items[i].style.display = 'block';
			}
		}
	}

	setTimeout(function() {
		var tagListContainer   = document.querySelector('.ID-tm-tags-block'),
			ruleListContainer  = document.querySelector('.ID-tm-conditions-block'),
			macroListContainer = document.querySelector('.ID-tm-macros-block'),
			tagListItems       = document.querySelectorAll('.ID-tm-tags-block li'),
			ruleListItems      = document.querySelectorAll('.ID-tm-rules-block li'),
			macroListItems     = document.querySelectorAll('.ID-tm-macros-block li'),
			tagSearchInput     = document.createElement('input'),
			ruleSearchInput    = document.createElement('input'),
			macroSearchInput   = document.createElement('input');

		tagSearchInput.className   = 'id-sb-tag-search-input jfk-textinput';
		ruleSearchInput.className  = 'id-sb-rule-search-input jfk-textinput';
		macroSearchInput.className = 'id-sb-macro-search-input jfk-textinput';

		tagSearchInput.placeholder   = 'search';
		ruleSearchInput.placeholder  = 'search';
		macroSearchInput.placeholder = 'search';

		tagSearchInput.addEventListener('keyup', function() {
			filterItems(tagListItems, this.value);
		});

		ruleSearchInput.addEventListener('keyup', function() {
			filterItems(ruleListItems, this.value);
		});

		macroSearchInput.addEventListener('keyup', function() {
			filterItems(macroListItems, this.value);
		});

		tagListContainer.insertBefore(tagSearchInput, tagListContainer.querySelector('li'));
		ruleListContainer.insertBefore(ruleSearchInput, ruleListContainer.querySelector('li'));
		macroListContainer.insertBefore(macroSearchInput, macroListContainer.querySelector('li'));
	}, 1000);
}(window, document));