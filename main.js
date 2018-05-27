const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

function createWindow () {
	let mainWindow;

	/* developer open on 2nd screen */
	let displays = electron.screen.getAllDisplays();
	let externalDisplay = displays.find((display) => {
		return display.bounds.x != 0 || display.bounds.y != 0
	});

	if (externalDisplay) {
		mainWindow = new BrowserWindow({
			x: externalDisplay.bounds.x + 50,
			y: externalDisplay.bounds.y + 50
		});
	} else {
		mainWindow = new BrowserWindow({
			width: 800, 
			height: 600,
			minHeight: 300,
			minWidth: 600 
		});
	}

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	mainWindow.webContents.openDevTools();
	mainWindow.setMenu(null);
	
	mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow();
	}
});