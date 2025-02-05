---
title: Spotify Integration
---

- It depends on the Spotify Web API, so it only works when you are connected to the Internet
- You have to register your own spotify app first and then input the client id & secret to the config file to allow the Web API to function ([About Spotify App](https://developer.spotify.com/documentation/web-api/concepts/apps)). By the way, Redirect URI **must** be set to `http://localhost:8888` for this mod to listen<br><br>Specific Spotify App config is as follows
  ![Image](/Ingame-Info-Reborn-Wiki/wiki/spotify1.png)
  
- Input the command `#spotify-oauth` to the chat to authorize your spotify app
- After you finished the authentication, input the command `#spotify-gui true` while you're listening to a track on Spotify to open the gui overlay. `#spotify-gui false` for closing ofc
- You can always run `#spotify-gui true` again to refresh
- Album image loading could be slow
- You no longer need to run `#spotify-oauth` for the next launches, but you should run `#spotify-oauth` to refresh if you encountered any issues
- Run `#spotify-gui-edit` to switch to another layout at runtime

![Image](/Ingame-Info-Reborn-Wiki/wiki/spotify2.png)
