// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var net = require('net');
var socket;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "mayaport" is now active!');
    var socket = net.createConnection({port: 7002});

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        ///vscode.window.showInformationMessage('Maya Port Code');
    });

    context.subscriptions.push(disposable);

var disposable = vscode.commands.registerCommand('extension.showMayaConfig', function () {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('In Maya Do the Following' +'For Mel use  commandPort -n ":54321";'+'For Python use import maya.cmds as cmds cmds.commandPort(\'localhost:54321\')');
        vscode.window.s
});

    context.subscriptions.push(disposable);

var disposable = vscode.commands.registerCommand('extension.sendToMaya', function () {

    //var socket = net.createConnection({port: 7002});
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
    socket.write(text);
    socket.write('\n');
     //socket.write('print "hello maaya"');
     console.log('attempt to write');
    });

    context.subscriptions.push(disposable);

}



exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;