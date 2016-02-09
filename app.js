System.register(['angular2/platform/browser', './components/CommandAndControl'], function(exports_1) {
    var browser_1, CommandAndControl_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (CommandAndControl_1_1) {
                CommandAndControl_1 = CommandAndControl_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(CommandAndControl_1.CommandAndControl);
        }
    }
});
