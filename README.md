# mayaport README

MayaPort is a simple extension to allow sending the text document or selected text to the maya, you must first enable the commandPort in maya. I've used the example from [here](https://fredrikaverpil.github.io/2013/07/15/send-mel-python-code-from-sublime-text-to-maya/) port as follows

```
import maya.cmds as cmds

# Close ports if they were already open under another configuration
try:
    cmds.commandPort(name=":7001", close=True)
except:
    cmds.warning('Could not close port 7001 (maybe it is not opened yet...)')
try:
    cmds.commandPort(name=":7002", close=True)
except:
    cmds.warning('Could not close port 7002 (maybe it is not opened yet...)')

# Open new ports
cmds.commandPort(name=":7001", sourceType="mel")
cmds.commandPort(name=":7002", sourceType="python")
```
## Features

You can send both mel and python code via the different commands sendPythonToMaya or sendMelToMaya

To get started use CMD + Shift P and rund mayaPort, this will attempt to open two sockets on the localhost, using ports 7001 and 7002 one for Mel code and one for python code.

To send all the text so maya use CMD + Shift P and run sendMelToMaya or sendPythonToMaya depending upon the code you are writing. If you only wish to send a small segement of code just select the code required and use the same commands.

###Keyboard Shortcuts 

Use CTRL+SHIFT+P to send python code to Maya.
Use CTRL+SHIFT+M to send mel code to Maya.


## Requirements

Autodesk Maya (Should work with all version) tested on Maya 2016 Mac and Linux.  

## Extension Settings

At present the ports are coded in the file ~/.vscode/extensions/JonMacey.mayaport-0.0.1/extension.js to change the values of the ports modify the lines

```
const melPort=7001;
const pythonPort=7002; 
```

To new values and restart the extension. 
## Known Issues

Still work in progress

## Release Notes

Initial Alpha release 0.1

## ToDo
* See if output from maya can be caputered into the debug console.
* get user feedback and see what else can be added.
