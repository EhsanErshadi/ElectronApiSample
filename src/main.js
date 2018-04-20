var Electron = require('electron');
var App = Electron.app;
var Win = Electron.BrowserWindow;
var Menu = Electron.Menu;


App.on('ready', _ => {
    new Win();

    var template = [
        {
            label: App.getName(),
            submenu: [
                {
                    label: "About",
                    click: _ => {
                        console.log('hi');
                    }
                },
                {
                    type: 'separator',
                },
                {
                    label: 'Quit',
                    accelerator: "CommandOrControl+Q",
                    click: e => {
                        App.quit();                        
                    }
                }
            ],
        }
    ];

    var menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
});