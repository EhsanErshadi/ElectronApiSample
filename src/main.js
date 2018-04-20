const { electron, app, globalShortcut, BrowserWindow, Tray, Menu, clipboard } = require('electron')
const path = require('path');
const uuidv1 = require('uuid/v1');

let tray;

app.on('ready', _ => {
    new BrowserWindow();

    globalShortcut.register('CommandOrControl+Q', () => {
        app.quit();
    });
    globalShortcut.register('CommandOrControl+G', () => {
        GenerateGuid();
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


    tray = new Tray(path.join('assets/image', 'app-512.png'));
    var trayMenu = Menu.buildFromTemplate([
        {
            label: 'Wow',
            click: e => { GenerateGuid(); }
        }
    ]);
    tray.setContextMenu(trayMenu);

    tray.setToolTip('ok, click me ...');


});

function GenerateGuid() {
    var guid = uuidv1().toUpperCase();
    console.log('Guid Generated: ' + guid);
    clipboard.writeText(guid);

    tray.displayBalloon({
        title: 'Guid is in clipboard',
        content: guid
    });
}