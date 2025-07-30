---
title: Spotify Integration
---

## Setup

A config file example is as follows.
```yaml
spotify {
    # Whether to enable the whole integration module [default: false]
    B:"Enable Spotify Integration"=true

    # Input client id of your spotify app 
    # Declaration: this mod doesn't record or share your client id 
    # and it's not recommended for you to share your client id 
    # Guide: you have to create a spotify app to get client id & secrete 
    # https://developer.spotify.com/documentation/web-api/concepts/apps 
    # Redirect URI should be set to http://localhost:8888 for this mod to listen [default: ]
    S:"Spotify Client Id"=██████████████████████

    # Input client secret of your spotify app 
    # Declaration: this mod doesn't record or share your client secret 
    # and it's not recommended for you to share your client secret [default: ]
    S:"Spotify Client Secret"=██████████████████████

    # Whether to try displaying the overlay when the game starts 
    # May fail due to token/auth issues [default: true]
    B:"Try Auto Display Overlay"=true

    # Whether to display more info on the overlay [default: false]
    B:"Use Extended Overlay Layout"=true
}
```

- This integration depends on the Spotify Web API, so it only works when you are connected to the Internet.
- You have to register your own spotify app first and then input the client id & secret to the config file to allow the Web API to function properly ([About Spotify App](https://developer.spotify.com/documentation/web-api/concepts/apps)). By the way, Redirect URI _**must be**_ set to `http://localhost:8888` for this mod to listen.<br><br>Specific Spotify App config is as follows
  ![Image](/Ingame-Info-Reborn-Wiki/wiki/spotify1.png)
  
1. Input the command `#spotify-oauth` to the chat to authorize your spotify app.
2. After you finished the authentication, input the command `#spotify-gui true` while you're listening to a track on Spotify to open the gui overlay. `#spotify-gui false` for closing ofc.
3. You can always run `#spotify-gui true` again to refresh.
4. Album image loading could be slow.
5. You no longer need to run `#spotify-oauth` for the next launches, but you _should_ run `#spotify-oauth` to refresh just in case you encountered any issues.
6. Run `#spotify-gui-edit` to switch to another layout at runtime.

![Image](/Ingame-Info-Reborn-Wiki/wiki/spotify2.png)
![Image](/Ingame-Info-Reborn-Wiki/wiki/spotify3.png)

## IXML Config

Open `./config/ingameinfo/ixml/spotify.ixml`[^1]

[^1]: go to [IXML Introduction](/wiki/ixml.html) for details

```xml
<Def debug = false>
<VerticalGroup padding = {"top": 10, "bottom": 10, "left": 10, "right": 10} alignment = TOP_RIGHT pivot = TOP_RIGHT>
    ...
</Group>
```

Modify `alignment`[^2] and `pivot`[^3] to modify the overall layout.
You can run the command `/igirefresh spotify` in-game to see the changes you made.

[^2]: go to [Alignment](/wiki/classes/layout/alignment.html) for details
[^3]: go to [Pivot](/wiki/classes/layout/pivot.html) for details
