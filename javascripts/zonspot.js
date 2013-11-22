(function($){$.fn.fadeMenu=function(){$(this).each(function(){var mouse_in_menu=false;var root=$(this);$('.fade-menu-link',root).click(function(){var link=$(this);var content=$('.fade-menu-content',root);if(content.is(":visible")){content.fadeOut("fast");link.removeClass('active');}else{content.fadeIn("fast");link.addClass('active');}
return false;});$('.fade-menu-content',root).hover(function(){mouse_in_menu=true;},function(){mouse_in_menu=false;});$("body").click(function(){if(!mouse_in_menu){$('.fade-menu-content',root).fadeOut("fast");$('.fade-menu-link',root).removeClass('active');}});});};$.fn.tab=function(options){var defaults={selectedClass:'active',menuClass:'nav',contentsClass:'tab-content',contentClass:'tab-pane',};var opt=$.extend(defaults,options);$(this).each(function(){var item=$(this);$('.'+opt.menuClass+' li:first-child',item).addClass(opt.selectedClass);$('.'+opt.contentClass,item).hide();var first=$('.'+opt.contentClass+':first-child',item);first.addClass(opt.selectedClass).show();$('.'+opt.contentsClass,item).height(first.height());$('.'+opt.menuClass+' a',item).click(function(){var href=$(this).attr('href');var hrefBefore=$('.'+opt.selectedClass+' a',item).attr('href');var before=$(hrefBefore,item);if(href==hrefBefore){return false;}
$('.'+opt.menuClass+' li',item).removeClass(opt.selectedClass);$(this).parents('li',item).addClass(opt.selectedClass);$('.'+opt.contentClass,item).removeClass(opt.selectedClass);$(href,item).addClass(opt.selectedClass);$(href,item).css('opacity','0').show();before.animate({opacity:"0"},600,function(){$(this).css('top',0).hide();});$(href,item).animate({opacity:"1"},1200,function(){$(this).css('top',0);});$('.'+opt.contentsClass,item).animate({height:$(href,item).height()},600);return false;});$(window).resize(function(){var height=$('.'+opt.contentsClass+' .'+opt.selectedClass,item).height();$('.'+opt.contentsClass,item).height(height);});});};$(document).ready(function(){$('.fade-menu').fadeMenu();$('.tab').tab();$(".button-hover").click(function(){return false;});var current_button=false;var in_button=false;$(".button-hover").each(function(){var root=$(this);$('.button-label',root).hover(function(){var label=$(this);var url=label.data('action');var cls=label.attr('class').replace('button-label','');var text=label.html();var link=$('<a class="'+cls+'">'+text+'</a>');link.attr('href',url);link.click(function(){window.location.href=url;return false;});var button=$('<div class="button-main"></div>').append(link);var pos=root.offset();button.css('position','absolute').css('width','100%').css('top',0).css('left',0).css('z-index','9999');button.hover(function(){in_button=true;},function(){in_button=false;setTimeout(function(){button.remove();current_button=false;},400);});$(root).append(button);current_button=button;},function(){setTimeout(function(){if(!in_button&&current_button){current_button.remove();current_button=false;}},400);});});$('#linkReview').click(function(){if($('#iframereview').length<1){var datasrc=$(this).data('src');$('#tab-review .review-content').append('<iframe id="iframereview" src="'+datasrc+'"></iframe>');}});});})(jQuery);+function($){"use strict";var Modal=function(element,options){this.options=options
this.$element=$(element)
this.$backdrop=this.isShown=null
if(this.options.remote)this.$element.load(this.options.remote)}
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this[!this.isShown?'show':'hide'](_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.escape()
this.$element.on('click.dismiss.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(document.body)}
that.$element.show()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in').attr('aria-hidden',false)
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$element.find('.modal-dialog').one($.support.transition.end,function(){that.$element.focus().trigger(e)}).emulateTransitionEnd(300):that.$element.focus().trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one($.support.transition.end,$.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.focus()}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keyup.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keyup.dismiss.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.removeBackdrop()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(document.body)
this.$element.on('click.dismiss.modal',$.proxy(function(e){if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one($.support.transition.end,callback).emulateTransitionEnd(150):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one($.support.transition.end,callback).emulateTransitionEnd(150):callback()}else if(callback){callback()}}
var old=$.fn.modal
$.fn.modal=function(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
e.preventDefault()
$target.modal(option,this).one('hide',function(){$this.is(':visible')&&$this.focus()})})
$(document).on('show.bs.modal','.modal',function(){$(document.body).addClass('modal-open')}).on('hidden.bs.modal','.modal',function(){$(document.body).removeClass('modal-open')})}(window.jQuery);
