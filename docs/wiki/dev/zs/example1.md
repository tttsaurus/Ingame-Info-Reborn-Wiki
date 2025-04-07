---
title: Example - Bouncy Text Effect
---

## IXML Part
create file `./config/ingameinfo/test_ixml.ixml`
```xml
<AnimText uid = "myUid">
```

## ZenScript Part
```javascript
#loader preinit

import mods.ingameinfo.mvvm.ViewModel;
import mods.ingameinfo.mvvm.View;
import mods.ingameinfo.mvvm.Mvvm;
import mods.ingameinfo.Types;
import mods.ingameinfo.igievent.EventCenter;
import mods.ingameinfo.gui.IgiGuiManager;
import mods.ingameinfo.event.IgiGuiInitEvent;
import mods.ingameinfo.animation.text.TextAnimDef;
import mods.ingameinfo.animation.SmoothDamp;
import crafttweaker.util.Math;

Mvvm.define("test");

View.setIxmlFileName("test_ixml");

var myUidText = ViewModel.registerReactiveObject("myUidText", Types.String, "myUid", "text", true);
var myUidAnimDef = ViewModel.registerReactiveObject("myUidAnimDef", Types.TextAnimDef, "myUid", "animDef", true);

ViewModel.setStartAction(function(this0)
{
    EventCenter.addIgiGuiFpsEventListener(function(fixedFps, renderFps)
    {
        myUidText.set("Fixed FPS: " ~ fixedFps ~ ", Render FPS: " ~ renderFps);
    });

    var smoothDamp = SmoothDamp.new(0.0f, 3.1415926f * 2.0f, 1.0f);
    myUidAnimDef.set(TextAnimDef.new(function(charInfos, timer, deltaTime)
    {
        var progress = smoothDamp.evaluate(deltaTime);
        if (timer.getTime() >= 1.0f)
        {
            smoothDamp.setFrom(0.0f);
            timer.setTime(0.0f);
        }
        
        if (charInfos.getCharInfosLength() != 0)
        {
            for i in 0 to charInfos.getCharInfosLength()
            {
                var charInfo = charInfos.getCharInfo(i);
                charInfo.setY(Math.sin(progress + i * 1.5f) * 2.0f);
            }
        }
    }));
});
```
```javascript
import mods.ingameinfo.gui.IgiGuiManager;
import mods.ingameinfo.event.IgiGuiInitEvent;

events.onIgiGuiInit(function(event as IgiGuiInitEvent)
{
    IgiGuiManager.openGui("test");
});
```
