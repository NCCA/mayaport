# mayaport README

MayaPort is a simple extension to allow sending the text document or selected text to the maya, you must first enable the commandPort in maya. To open a port for mel and python use the following code, which uses the default values, change to different port values as applicable.

```
import maya.cmds as cmds
# Open new ports
cmds.commandPort(name=":7001", sourceType="mel")
cmds.commandPort(name=":7002", sourceType="python")
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

## Features

You can send both mel and python code via the different commands sendPythonToMaya or sendMelToMaya

To get started use CMD + Shift P and run mayaPort, this will attempt to open two sockets on the localhost, using ports 7001 and 7002 one for Mel code and one for python code.

To send all the text so maya use CMD + Shift P and run sendMelToMaya or sendPythonToMaya depending upon the code you are writing. If you only wish to send a small segement of code just select the code required and use the same commands.

###Keyboard Shortcuts 

Use CTRL+SHIFT+P to send python code to Maya.
Use CTRL+SHIFT+M to send mel code to Maya.


## Requirements

Autodesk Maya (Should work with all version) tested on Maya 2016 Mac and Linux.  

## Extension Settings

To set custom port ID's edit the user settings (File > Preferences (Code > Preferences on Mac)) and add the following key values to override the defaults
```
{
    "mayaport.melPortID": 7005,
    "mayaport.pythonPortID": 7007
}
```
and restart the extension. 
## Known Issues

Can occasionally lose connection to maya, not yet tested on windows or linux.

## Release Notes

Initial Alpha release 0.1

## ToDo
* See if output from maya can be caputered into the debug console.
* get user feedback and see what else can be added.
