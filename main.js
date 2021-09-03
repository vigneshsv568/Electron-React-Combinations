const{app,BrowserWindow} = require('electron');

function createWindow(){
 const win =   new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor:"white",
        webPreferences:{
            nodeIntegration:true
        }
    })
win.loadFile('index.html')
//win.webContents.openDevTools(); 
} 

app.whenReady().then(createWindow);
    

app.on('window-all-closed' , () =>{
    if(process.platform !=='darwin'){
        app.quit();
    }
})
app.on("ready", createWindow);


app.on('activate', ()=>{
    if(BrowserWindow.getAllWindows().length ===0){
        createWindow();
    }
})