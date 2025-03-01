---
title: IXML Specification
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
