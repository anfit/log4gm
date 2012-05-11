/*
 * Console logging for Greasemonkey, log4j-style
 *
 * Copyright 2012, Jan Chimiak <jan.chimiak@gmail.com>
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
(function(a){a.console={level:"INFO",setLoggingLevel:function(b){window.console.level=b;},log:function(){if(unsafeWindow.console){unsafeWindow.console.log.apply(this,arguments);
}},error:function(){if(unsafeWindow.console&&["DEBUG","INFO","WARN","ERROR"].indexOf(window.console.level)!==-1){unsafeWindow.console.error.apply(this,arguments);}},warn:function(){if(unsafeWindow.console&&["DEBUG","INFO","WARN"].indexOf(window.console.level)!==-1){unsafeWindow.console.warn.apply(this,arguments);}},info:function(){if(unsafeWindow.console&&["DEBUG","INFO"].indexOf(window.console.level)!==-1){unsafeWindow.console.info.apply(this,arguments);
}},debug:function(){if(unsafeWindow.console&&["DEBUG"].indexOf(window.console.level)!==-1){unsafeWindow.console.debug.apply(this,arguments);}}};})(this);