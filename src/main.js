const { electron, app, globalShortcut, BrowserWindow, Tray, Menu } = require('electron')
const path = require('path');

app.on('ready', _ => {
    new BrowserWindow();

    globalShortcut.register('CommandOrControl+Q', () => {
        app.quit();
    })

    var template = [
        {
            label: app.getName(),
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
                        app.quit();
                    }
                }
            ],
        }
    ];

    var menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);


    var tray = new Tray(path.join('assets/image', 'app-512.png'));
    var trayMenu = Menu.buildFromTemplate([
        {
            label: 'Wow',
            click: e => { console.log('hi') }
        }
    ]);
    tray.setContextMenu(trayMenu);
});