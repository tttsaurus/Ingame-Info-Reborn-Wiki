module.exports = {
    base: '/Ingame-Info-Reborn-Wiki/',
    title: 'Ingame Info Reborn Wiki',
    description: 'Wiki for Ingame-Info-Reborn',
    theme: 'reco',

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
                        { title: 'Wiki Home', path: '/wiki/' },
                        { title: 'MVVM Architecture', path: '/wiki/mvvm' }
                    ]
                }
            ]
        }
    },
    markdown: {
        lineNumbers: true
    }
};
