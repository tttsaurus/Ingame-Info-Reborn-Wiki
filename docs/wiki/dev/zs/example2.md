---
title: Example - Template
---

## IXML Part
`template` is a default example defined in `./config/ingameinfo/template.ixml`

## ZenScript Part
```javascript
import mods.ingameinfo.gui.IgiGuiManager;
import mods.ingameinfo.event.IgiGuiInitEvent;

events.onIgiGuiInit(function(event as IgiGuiInitEvent)
{
    IgiGuiManager.openGui("template");
});
```
