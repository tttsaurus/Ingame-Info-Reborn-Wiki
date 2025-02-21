(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{487:function(t,e,o){"use strict";o.r(e);var n=o(2),a=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),e("p",[t._v("A config file example is as follows")]),t._v(" "),e("div",{staticClass:"language-cfg extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('spotify {\n    # Whether to enable the whole integration module [default: false]\n    B:"Enable Spotify Integration"=true\n\n    # Input client id of your spotify app \n    # Declaration: this mod doesn\'t record or share your client id \n    # and it\'s not recommended for you to share your client id \n    # Guide: you have to create a spotify app to get client id & secrete \n    # https://developer.spotify.com/documentation/web-api/concepts/apps \n    # Redirect URI should be set to http://localhost:8888 for this mod to listen [default: ]\n    S:"Spotify Client Id"=██████████████████████\n\n    # Input client secret of your spotify app \n    # Declaration: this mod doesn\'t record or share your client secret \n    # and it\'s not recommended for you to share your client secret [default: ]\n    S:"Spotify Client Secret"=██████████████████████\n\n    # Whether to try displaying the overlay when the game starts \n    # May fail due to token/auth issues [default: true]\n    B:"Try Auto Display Overlay"=true\n\n    # Whether to display more info on the overlay [default: false]\n    B:"Use Extended Overlay Layout"=true\n}\n')])])]),e("ul",[e("li",[e("p",[t._v("This integration depends on the Spotify Web API, so it only works when you are connected to the Internet")])]),t._v(" "),e("li",[e("p",[t._v("You have to register your own spotify app first and then input the client id & secret to the config file to allow the Web API to function ("),e("a",{attrs:{href:"https://developer.spotify.com/documentation/web-api/concepts/apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("About Spotify App"),e("OutboundLink")],1),t._v("). By the way, Redirect URI "),e("strong",[t._v("must")]),t._v(" be set to "),e("code",[t._v("http://localhost:8888")]),t._v(" for this mod to listen"),e("br"),e("br"),t._v("Specific Spotify App config is as follows\n"),e("img",{attrs:{src:"/Ingame-Info-Reborn-Wiki/wiki/spotify1.png",alt:"Image"}})])]),t._v(" "),e("li",[e("p",[t._v("Input the command "),e("code",[t._v("#spotify-oauth")]),t._v(" to the chat to authorize your spotify app")])]),t._v(" "),e("li",[e("p",[t._v("After you finished the authentication, input the command "),e("code",[t._v("#spotify-gui true")]),t._v(" while you're listening to a track on Spotify to open the gui overlay. "),e("code",[t._v("#spotify-gui false")]),t._v(" for closing ofc")])]),t._v(" "),e("li",[e("p",[t._v("You can always run "),e("code",[t._v("#spotify-gui true")]),t._v(" again to refresh")])]),t._v(" "),e("li",[e("p",[t._v("Album image loading could be slow")])]),t._v(" "),e("li",[e("p",[t._v("You no longer need to run "),e("code",[t._v("#spotify-oauth")]),t._v(" for the next launches, but you should run "),e("code",[t._v("#spotify-oauth")]),t._v(" to refresh if you encountered any issues")])]),t._v(" "),e("li",[e("p",[t._v("Run "),e("code",[t._v("#spotify-gui-edit")]),t._v(" to switch to another layout at runtime")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"/Ingame-Info-Reborn-Wiki/wiki/spotify2.png",alt:"Image"}})]),t._v(" "),e("h2",{attrs:{id:"ixml-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ixml-config"}},[t._v("#")]),t._v(" IXML Config")]),t._v(" "),e("p",[t._v("Open "),e("code",[t._v("./config/ingameinfo/spotify.ixml")])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("debug")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n<VerticalGroup padding = {"top": 10, "bottom": 10, "left": 10, "right": 10} alignment = TOP_RIGHT pivot = TOP_RIGHT>\n    ...\n'),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Group")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Modify "),e("code",[t._v("alignment")]),t._v(" and "),e("code",[t._v("pivot")]),t._v(" to modify the overall layout.")])])}),[],!1,null,null,null);e.default=a.exports}}]);