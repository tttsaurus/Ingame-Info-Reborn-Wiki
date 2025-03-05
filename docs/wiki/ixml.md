---
title: IXML Introduction
---

IXML is a modified XML format for Ingame Info Reborn gui layout specification.
The gui layout resembles a tree structure and each node inherits class `Element`

## Find Available Child Classes
- Go to `./logs/latest.log`
- Find
  ```
  [17:03:34] [Client thread/INFO] [ingameinfo]: Registered serviceable elements: 
  [17:03:34] [Client thread/INFO] [ingameinfo]:   - UrlImage
  [17:03:34] [Client thread/INFO] [ingameinfo]:   - SlidingText
  [17:03:34] [Client thread/INFO] [ingameinfo]:   - Text
  [17:03:34] [Client thread/INFO] [ingameinfo]:   - VerticalGroup
  [17:03:34] [Client thread/INFO] [ingameinfo]:   - AnimText
  [17:03:34] [Client thread/INFO] [ingameinfo]:   - SimpleButton
  [17:03:34] [Client thread/INFO] [ingameinfo]:   - EmptyBlock
  [17:03:34] [Client thread/INFO] [ingameinfo]:   - SizedGroup
  [17:03:34] [Client thread/INFO] [ingameinfo]:   - HorizontalGroup
  [17:03:34] [Client thread/INFO] [ingameinfo]:   - ProgressBar
  [17:03:34] [Client thread/INFO] [ingameinfo]:
  [17:03:34] [Client thread/INFO] [ingameinfo]: Notice:
  [17:03:34] [Client thread/INFO] [ingameinfo]: 1. Elements marked with * below are unserviceable in ixml.
  [17:03:34] [Client thread/INFO] [ingameinfo]: 2. You can access style properties from parent elements.
  [17:03:34] [Client thread/INFO] [ingameinfo]:
  [17:03:34] [Client thread/INFO] [ingameinfo]: Element type: Sized* extends Element*
  [17:03:34] [Client thread/INFO] [ingameinfo]: - With style properties:
  [17:03:34] [Client thread/INFO] [ingameinfo]:   - [float] width (with deserializer: BuiltinTypesDeserializer)
  [17:03:34] [Client thread/INFO] [ingameinfo]:     - Setter callback pre: nonNegativeFloatValidation
  [17:03:34] [Client thread/INFO] [ingameinfo]:     - Setter callback post: requestReCalc
  [17:03:34] [Client thread/INFO] [ingameinfo]:   - [float] height (with deserializer: BuiltinTypesDeserializer)
  [17:03:34] [Client thread/INFO] [ingameinfo]:     - Setter callback pre: nonNegativeFloatValidation
  [17:03:34] [Client thread/INFO] [ingameinfo]:     - Setter callback post: requestReCalc
  ...
  ```

As you can see, there are abstract `Element` child classes (marked with `*`) and also solid implementations.

You **can only** use "registered serviceable elements" which are solid implementations in IXML.

## Element
What is an `Element`
- It has several style properties that determine important stuff
  - such as `uid`, `width`, `height`

And that's it. `Element` is just the most fundamental thing in gui layout specification.

There is also a crucial child class of `Element` called `ElementGroup`
which is the key to form the tree structure and helps you to define flexible gui layout.

`ElementGroup` literally groups `Element` as it acts as a parent node and contains other `Element`.
Of course, you can have nested `ElementGroup` as it is known as a tree structure.

## Style Property
e.g. this is a style property from `Sized`
- [float] width (with deserializer: BuiltinTypesDeserializer)
  - Setter callback pre: nonNegativeFloatValidation
  - Setter callback post: requestReCalc

As you can see, every style property has two callbacks and also a deserializer to convert what's in IXML to java object.
You don't have to know too much about style properties to create your IXML files.

## Example IXML
```xml
<Def debug = false focused = false>
<SizedGroup width = 50 height = 50 padding = {"left": 10, "top": 10}>
    <VerticalGroup>
        <Text uid = "biome">
    </Group>
</Group>
```

- Firstly, you define some settings, like `debug = false`, `focused = false`. However, `debug` and `focused` are set to `false` by default. Usually, you don't have to use `<Def>` for your gui.
  ```xml
  <Def debug = false focused = false>
  ```

- Then, you define a group. As you can see, we use `</Group>` to close all kinds of `ElementGroup`. When it comes to style properties, we have `width`, `height`, `padding`, where `width` and `height` are from `SizedGroup` itself but `padding` is from parent class `Element`. That is, we can use parent's style properties.
  (`SizedGroup` provides a mask effect, which only displays stuff inside it)
  ```xml
  <SizedGroup width = 50 height = 50 padding = {"left": 10, "top": 10}>
      ...
  </Group>
  ```

- Then, another group. (`VerticalGroup` stacks element together vertically, and it doesn't have a fixed size)
  ```xml
  <VerticalGroup>
      ...
  </Group>
  ```

- Finally, a text field. Notice: `uid` is just an identifier that helps you to bind data in ViewModel
  ```xml
  <Text uid = "biome">
  ```
