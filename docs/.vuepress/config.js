
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
        lineNumbers: true
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
                            path: '/wiki/dev',
                            collapsible: true,
                            children: [
                                {
                                    title: 'Java Dev',
                                    path: '/wiki/dev/java',
                                    collapsible: true,
                                    children: [
                                        {
                                            title: 'Setup',
                                            path: '/wiki/dev/java/setup'
                                        }
                                    ]
                                },
                                {
                                    title: 'ZenScript Dev',
                                    path: '/wiki/dev/zs',
                                    collapsible: true,
                                    children: [
                                        {
                                            title: 'Setup',
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
