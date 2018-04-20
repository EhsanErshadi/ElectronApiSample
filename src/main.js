var Electron = require('electron');
var App = Electron.app;
var Win = Electron.BrowserWindow;
var Menu = Electron.Menu;


App.on('ready', _ => {
    new Win();

    var template = [
        {
            label: "ddd",
        }
    ];

    var menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
});