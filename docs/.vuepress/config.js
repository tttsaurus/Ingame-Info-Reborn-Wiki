
module.exports = {
    base: '/Ingame-Info-Reborn-Wiki/',
    title: 'Ingame Info Reborn Wiki',
    description: 'Wiki for Ingame-Info-Reborn',
    theme: 'reco',

    markdown: {
        extendMarkdown: (md) => {
            md.use(require('markdown-it-footnote'));
            md.use(require('markdown-it-task-lists'));
        },
        lineNumbers: false
    },

    themeConfig: {
        modePicker: true,

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Wiki', link: '/wiki/' },
            { text: 'GitHub', link: 'https://github.com/tttsaurus/Ingame-Info-Reborn-Wiki' }
        ],

        sidebar: {
            '/wiki/': [
                {
                    text: 'Wiki',
                    collapsible: true,
                    children: [
                        {
                            title: 'Wiki Home',
                            path: '/wiki/'
                        },
                        {
                            title: 'Spotify Integration',
                            path: '/wiki/spotify'
                        },
                        {
                            title: 'MVVM Architecture',
                            path: '/wiki/mvvm'
                        },
                        {
                             title: 'IXML Introduction',
                             path: '/wiki/ixml'
                        },
                        {
                             title: 'Classes',
                             collapsible: true,
                             children: [
                                 {
                                     title: 'Element Related',
                                     collapsible: true,
                                     children: [
                                         {
                                             title: 'Element',
                                             path: '/wiki/classes/element/element'
                                         }
                                     ]
                                 },
                                 {
                                     title: 'Layout Related',
                                     collapsible: true,
                                     children: [
                                         {
                                             title: 'Alignment',
                                             path: '/wiki/classes/layout/alignment'
                                         },
                                         {
                                             title: 'Padding',
                                             path: '/wiki/classes/layout/padding'
                                         },
                                         {
                                             title: 'Pivot',
                                             path: '/wiki/classes/layout/pivot'
                                         }
                                     ]
                                 },
                                 {
                                      title: 'Event Center',
                                      path: '/wiki/classes/eventcenter'
                                 },
                             ]
                        },
                        {
                            title: 'For Devs',
                            collapsible: true,
                            children: [
                                {
                                    title: 'Java Dev',
                                    collapsible: true,
                                    children: [
                                        {
                                            title: 'Java Setup',
                                            path: '/wiki/dev/java/setup'
                                        }
                                    ]
                                },
                                {
                                    title: 'ZenScript Dev',
                                    collapsible: true,
                                    children: [
                                        {
                                            title: 'ZenScript Setup',
                                            path: '/wiki/dev/zs/setup'
                                        },
                                        {
                                            title: 'Example #1',
                                            path: '/wiki/dev/zs/example2'
                                        },
                                        {
                                            title: 'Example #2',
                                            path: '/wiki/dev/zs/example1'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};
