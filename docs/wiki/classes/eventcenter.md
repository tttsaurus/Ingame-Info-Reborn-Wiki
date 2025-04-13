---
title: Event Center
---

Java Package: `com.tttsaurus.ingameinfo.common.impl.igievent.EventCenter`<br>
ZenScript Package: `mods.ingameinfo.igievent.EventCenter`

## IgiGuiFpsEvent
Listener: `(int fixedFps, int renderFps) -> void`<br>
Java: `EventCenter.igiGuiFpsEvent.addListener(...)`<br>
ZenScript: `EventCenter.addIgiGuiFpsEventListener(...)`

## IgiGuiFboRefreshRateEvent
Listener: `(float percentage) -> void`<br>
Java: `EventCenter.igiGuiFboRefreshRateEvent.addListener(...)`<br>
ZenScript: `EventCenter.addIgiGuiFboRefreshRateEventListener(...)`

## GameFpsEvent
Listener: `(int fps) -> void`<br>
Java: `EventCenter.gameFpsEvent.addListener(...)`<br>
ZenScript: `EventCenter.addGameFpsEventListener(...)`

## GameMemoryEvent
Listener: `(long usedMemoryInBytes, long totalMemoryInBytes) -> void`<br>
Java: `EventCenter.gameMemoryEvent.addListener(...)`<br>
ZenScript: `EventCenter.addGameMemoryEventListener(...)`

## GameTpsMsptEvent
Listener: `(int tps, double mspt) -> void`<br>
Java: `EventCenter.gameTpsMsptEvent.addListener(...)`<br>
ZenScript: `EventCenter.addGameTpsMsptEventListener(...)`

## EnterBiomeEvent
Listener: `(String name, String registryName) -> void`<br>
Java: `EventCenter.enterBiomeEvent.addListener(...)`<br>
ZenScript: `EventCenter.addEnterBiomeEventListener(...)`

## SpotifyOverlayEvent
Internal Event. Don't use.

## SpotifyOverlayEditEvent
Internal Event. Don't use.

## BloodMagicEvent
Listener: `(int lp, int orbTier) -> void`<br>
Java: `EventCenter.bloodMagicEvent.addListener(...)`<br>
ZenScript: `EventCenter.addBloodMagicEventListener(...)`

## SereneSeasonsEvent
Listener: `(SereneSeasonsEvent.SereneSeasonsData data) -> void`<br>
Java: `EventCenter.sereneSeasonsEvent.addListener(...)`<br>
ZenScript: `EventCenter.addSereneSeasonsEventListener(...)`

## ThaumcraftEvent
Listener: `(ThaumcraftEvent.ThaumcraftData data) -> void`<br>
Java: `EventCenter.thaumcraftEvent.addListener(...)`<br>
ZenScript: `EventCenter.addThaumcraftEventListener(...)`

## RfToolsDimEvent
Listener: `(RfToolsDimEvent.RfToolsDimData data) -> void`<br>
Java: `EventCenter.rftoolsdimEvent.addListener(...)`<br>
ZenScript: `EventCenter.addRfToolsDimEventListener(...)`

## DeepResonanceEvent
Listener: `(float radiation) -> void`<br>
Java: `EventCenter.deepresonanceEvent.addListener(...)`<br>
ZenScript: `EventCenter.addDeepResonanceEventListener(...)`

## ToughAsNailsEvent
Listener: `(int currentTemp, int targetTemp) -> void`<br>
Java: `EventCenter.toughasnailsEvent.addListener(...)`<br>
ZenScript: `EventCenter.addToughAsNailsEventListener(...)`

## SimpleDifficultyEvent
Listener: `(int temp) -> void`<br>
Java: `EventCenter.simpledifficultyEvent.addListener(...)`<br>
ZenScript: `EventCenter.addSimpleDifficultyEventListener(...)`
