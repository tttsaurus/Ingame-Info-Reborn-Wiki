
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
