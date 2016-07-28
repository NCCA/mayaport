// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var net = require('net');
// the socket for the python ports created at startup of script
var socketPython;
// the socket for the mel port create at startup of script
var socketMel;
// variables for ports, can be over ridden in config if you wish to use another port, going to default to 7001 for mel and 7002 for python
var melPort=7001;
var pythonPort=7002; 
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    console.log('"mayaport" is now active!');
    console.log('To use make sure the following code is run in Maya python ');
    var msg=`
import maya.cmds as cmds
try:
    cmds.commandPort(name=":7001", close=True)
except:
    cmds.warning('Could not close port 7001 (maybe it is not opened yet...)')
try:
    cmds.commandPort(name=":7002", close=True)
except:
    cmds.warning('Could not close port 7002 (maybe it is not opened yet...)')

cmds.commandPort(name=":7001", sourceType="mel")
cmds.commandPort(name=":7002", sourceType="python")
`;
    console.log(msg);

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.openMayaPort', function () 
    {
        var config=vscode.workspace.getConfiguration('mayaport');
        
        if(config.has("melPortID")){
            melPort=config.get("melPortID");
        }
        if(config.has("pythonPortID")){
            pythonPort=config.get("pythonPortID");
        }
        // create a connection to maya on port 7001 for Mel commands
        socketMel = net.createConnection({port: melPort});
        socketMel.on('error', function(error) { 
            vscode.window.showErrorMessage("Unable to connect to port " + melPort + " in maya for Mel");
         });
        // create a connection to maya on port 7002 for python commands

        socketPython = net.createConnection({port: pythonPort});
        socketPython.on('error', function(error) { 
            vscode.window.showErrorMessage("Unable to connect to port "+ pythonPort +" in maya for Python");
         });

    });

    context.subscriptions.push(disposable);


    var disposable = vscode.commands.registerCommand('extension.sendPythonToMaya', function () {

        var editor = vscode.window.activeTextEditor;
        var selection = editor.selection;
        var text;
        // if we have selected text only send this
        if (selection.isEmpty != true )
        {
            text = editor.document.getText(selection);     
        }
        // otherwise send the whole document
        else
        {
            text=editor.document.getText();
        }
        socketPython.write(text);
        socketPython.write('\n');
        vscode.window.setStatusBarMessage("Python sent to Maya");
    
    });

    context.subscriptions.push(disposable);

    var disposable = vscode.commands.registerCommand('extension.sendMelToMaya', function () {

        var editor = vscode.window.activeTextEditor;
        var selection = editor.selection;
        var text;
        if (selection.isEmpty != true )
        {
            text = editor.document.getText(selection);    
        }
        else
        {
            text=editor.document.getText();
        }
        socketMel.write(text);
        socketMel.write('\n');
        vscode.window.setStatusBarMessage("mel sent to Maya");

        });

    context.subscriptions.push(disposable);

}

exports.activate = activate;



// this method is called when your extension is deactivated
function deactivate() {
    socketMel.close();
    socketPython.close();
}
exports.deactivate = deactivate;