---
title: MVVM Architecture
---

"Model-View-ViewModel (MVVM) is a software design pattern that separates an application's user interface (UI) from its business logic"

Ingame Info Reborn emphasizes **View** and **ViewModel** and _doesn't_ incorporate **Model** into the framework, since there are not much data under the Minecraft HUD context.

## For Ingame Info Reborn
- View
    - You'll link to an ixml file here to define the gui layout
- ViewModel
    - You'll bind data in View and update variables here
    - It acts more like ViewModel + Model
