/*!
 * Console logging for Greasemonkey, log4j-style
 *
 * Copyright 2012, Jan Chimiak <jan.chimiak@gmail.com>
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
(function (context) {
  /**
   * Wraps a console object from unsafeWindow (if it exists) in an wrapper which allows log4j-style levels
   */
  context.console = {
    level: 'INFO',
    /**
     * Sets log level property (default: INFO)
     * @param {String} level logging level: DEBUG / INFO / WARN / ERROR / LOG
     */
    setLoggingLevel: function (level) {
      window.console.level = level;
    },
    /**
     * Always log into console
     */
    log: function () {
      if (unsafeWindow.console)
      {
        unsafeWindow.console.log.apply(this, arguments);
      }
    },
    /**
     * Log arguments into console unless severity is set to LOG (lowest)
     */
    error: function () {
      if (unsafeWindow.console && ['DEBUG', 'INFO', 'WARN', 'ERROR'].indexOf(window.console.level) !== -1)
      {
        unsafeWindow.console.error.apply(this, arguments);
      }    
    },
    /**
     * Log arguments into console if severity is set to DEBUG (highest) or INFO (second-highest) or WARN
     */
    warn: function () {
      if (unsafeWindow.console && ['DEBUG', 'INFO', 'WARN'].indexOf(window.console.level) !== -1)
      {
        unsafeWindow.console.warn.apply(this, arguments);
      }
    },
    /**
     * Log arguments into console if severity is set to DEBUG (highest) or INFO (second-highest)
     */
    info: function () {
      if (unsafeWindow.console && ['DEBUG', 'INFO'].indexOf(window.console.level) !== -1)
      {
        unsafeWindow.console.info.apply(this, arguments);
      }    
    },
    /**
     * Log arguments into console if severity is set to DEBUG (highest)
     */
    debug: function () {
      if (unsafeWindow.console && ['DEBUG'].indexOf(window.console.level) !== -1)
      {
        unsafeWindow.console.debug.apply(this, arguments);
      }
    }
  };
})(this);