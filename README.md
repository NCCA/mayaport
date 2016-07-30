# mayaport README

MayaPort is a simple extension to allow sending the text document or selected text to the maya, you must first enable the commandPort in maya. To open a port for mel and python use the following code, which uses the default values, change to different port values as applicable.

```
import maya.cmds as cmds
# Open new ports
cmds.commandPort(name=":7001", sourceType="mel", echoOutput=True)
cmds.commandPort(name=":7002", sourceType="python", echoOutput=True)
```
To enable ports at startup create a file named userSetup.mel in the following folder:

```
Windows: <drive>:\Documents and Settings\<username>\My Documents\maya\<Version>\scripts
Mac OS X: ~/Library/Preferences/Autodesk/maya/<version>/scripts.
Linux: ~/maya/<version>/scripts.
(where ~ is your home folder)
```

In the userSetup.mel file add the following

```
commandPort -name ":7001" -sourceType "mel";
commandPort -name ":7002" -sourceType "python";
```

If you require a different client machine it is possible to set the host variable and send to another host. In this case the port needs to be explicitly opened in maya as follows passing in the ip address (or hostname if DNS working etc) of the machine.

```
import maya.cmds as cmds
# Open new ports
cmds.commandPort(name="192.168.0.4:7001", sourceType="mel")
cmds.commandPort(name="192.168.0.4:7002", sourceType="python")
```

## Features

You can send both mel and python code via the different commands sendPythonToMaya or sendMelToMaya

To get started use CMD + Shift P and run mayaPort, this will attempt to open two sockets on the localhost, using ports 7001 and 7002 one for Mel code and one for python code.

To send all the text so maya use CMD + Shift P and run sendMelToMaya or sendPythonToMaya depending upon the code you are writing. If you only wish to send a small segement of code just select the code required and use the same commands.

###Keyboard Shortcuts 

On Mac

Use CTRL+SHIFT+P to send python code to Maya.
Use CTRL+SHIFT+M to send mel code to Maya.

On Windows and Linux

Use ALT+SHIFT+P to send python code to Maya.
Use ALT+SHIFT+M to send mel code to Maya.


## Requirements

Autodesk Maya (Should work with all version) tested on Maya 2016 Mac and Linux.  

## Extension Settings

To set custom port ID's edit the user settings (File > Preferences (Code > Preferences on Mac)) and add the following key values to override the defaults
```
{
    "mayaport.melPortID": 7005,
    "mayaport.pythonPortID": 7007
    "mayaport.mayahost" : "192.168.0.4"
}
```
and restart the extension. 
## Known Issues

Can occasionally lose connection to maya, not yet tested on windows or linux.

## Release Notes
Release 0.3

Added the ability to specify the host machine for maya. 
Updated the key bidings for Windows as the keys clashed with command palette use.

Release 0.2
Updated README.md as was ill formated in the store.

## ToDo
* See if output from maya can be caputered into the debug console.
* get user feedback and see what else can be added.
