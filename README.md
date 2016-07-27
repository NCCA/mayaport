# mayaport README

MayaPort is a simple extension to allow sending the text document or selected text to the maya, you must first enable the command I've used the example from [here](https://fredrikaverpil.github.io/2013/07/15/send-mel-python-code-from-sublime-text-to-maya/) port as follows

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
## Requirements

None 

## Extension Settings


## Known Issues

Still work in progress

## Release Notes

Initial Alpha release 0.1