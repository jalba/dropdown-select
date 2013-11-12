/* ========================================================================
 * Dropdown-Select v1.0
 * 
 * ========================================================================
 * Copyright 2013 Javier Alba
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */
  



if (!jQuery) { throw new Error("dropdown-select requires jQuery") }
if (typeof $().dropdown !== 'function') {throw new Error("dropdown-select requires Bootstrap dropdown plugin")}
         
$(function($) {
             
    if(!$('.dropdown-select').length) return
        var dropdownSelect = {
                 
            dropdownElement: '.dropdown-select',
                
            init: function() {
                this.clickListener()
                this.dropdownDisplayed()
                this.initDefault()
                this.required()
            },

            clickListener: function() {
                var that = this
                $(that.dropdownElement).click(function(e) {
                    if ($(e.target).attr('role') === 'menuitem' && !$(e.target).parent().is('.disabled,.groupheader,.dropdown-header')) {
                        that.clickedMenuItem = e.target
                        that.changeDisplay()
                    }
                    that.dropdownSelected = $(this)
                    that.dropdownToggle = $(that.dropdownSelected).children('.dropdown-toggle')
                })
                $(that.dropdownElement).one('click', function() {
                    that.typeSearch()
                    that.dropdownClosed()
                })
            },

            initDefault: function() {
                $('.default').each(function() {
                    var displayElement = $(this).parents('.dropdown-select').find('.display')
                    displayElement.text($(this).text())
                })
            },

            changeDisplay: function(text) {
                var t
                (text) ? t = text : t = $(this.clickedMenuItem).html()
                $(this.dropdownToggle).children('.display').html(t)
                this.required(t)
            },

            dropdownDisplayed: function() {
                var that = this
                $(that.dropdownElement).on('shown.bs.dropdown',function() {
                    if(that.clickedMenuItem) {
                        $('li a').removeClass('focus')
                        $(that.clickedMenuItem).addClass('focus')
                        $(that.clickedMenuItem).focus()      
                    }
                })
            },

            dropdownClosed: function() {
                var that = this
                $(that.dropdownSelected).on('hidden.bs.dropdown', function() {
                    $(that.dropdownToggle).focus()        
                })
            },

            typeSearch: function() {
                var that = this
                that.query = ""
                that.queryHeap = []
                var counter = 0
                that.count = 0 
                var menuItems = $(that.dropdownSelected).find('li:not(.divider) a')
                $(that.dropdownSelected).on('keydown', function(event) {
                    that.flag = false
                    var c= String.fromCharCode(event.keyCode).toLowerCase()  
                    that.query += c
                    if(that.queryHeap[0] !=that.query) {
                        that.queryHeap = []
                        that.queryHeap[0] =that.query
                        that.queryIterator(menuItems)
                        if (counter === 0 || counter > that.queryHeap.length -1) counter = 1
                        if ($(that.dropdownSelected).hasClass('open')) {
                            $(menuItems).filter(function(index) {return $(this).
                            html().toLowerCase() === that.queryHeap[counter]}).focus()
                            $(menuItems).filter(function(index) {return $(this).
                            html().toLowerCase() === that.queryHeap[counter]}).hover()
                        }
                        else {
                            that.changeDisplay($(menuItems).filter(function(index) {return $(this).
                            html().toLowerCase() === that.queryHeap[counter]}).text())
                        }
                    }    
                    (counter < that.queryHeap.length - 1 && that.queryHeap[0] == c) ? ++counter : counter = 1
                })
            },

            queryIterator: function(menuItems) {
                var that = this
                $(menuItems).each(function() {
                    var liText = $(this).text().toLowerCase()
                    if (liText.startsWith(that.query)) {
                        that.queryHeap.push(liText)
                        that.flag = true   
                    } 
                })
                if(that.flag === false && that.query.length > 1) {                    
                    that.query = that.query.substring(that.query.length -1)
                    that.queryHeap = []
                    that.queryHeap[0] = that.query
                    that.queryIterator(menuItems)
                }

            },

            required: function(text) {
                if(!$('.required').length) return
                if(text !== undefined)
                    $(this.dropdownSelected).children('input.required').val(text)
                else
                    $(".required").each(function() {
                        $(this).append('<input name="'+$(this).attr('id')+'" class="required" type="hidden" value="default">')
                    })
            }
}
        
dropdownSelect.init()

if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str){
        return this.slice(0, str.length) == str;
    };
}

})