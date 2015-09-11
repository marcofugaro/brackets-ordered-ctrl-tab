define(function (require, exports, module) {
    'use strict';
    
    // Brackets modules
    var Commands            = brackets.getModule('command/Commands'),
        KeyBindingManager   = brackets.getModule('command/KeyBindingManager');
 
    // Unbind keys
    KeyBindingManager.removeBinding('Ctrl-Tab');
    KeyBindingManager.removeBinding('Ctrl-Shift-Tab');
   
    // Rebind to the command executed with Ctrl+PageUp/PageDown
    KeyBindingManager.addBinding(Commands.NAVIGATE_NEXT_DOC_LIST_ORDER, 'Ctrl-Tab');
    KeyBindingManager.addBinding(Commands.NAVIGATE_PREV_DOC_LIST_ORDER, 'Ctrl-Shift-Tab');
});