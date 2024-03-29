module.exports = {
    server: {
        port: 8080, // default: 3000
    },
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'SIPP BPSDM - Badan Pengembangan Sumber Daya Manusia Provinsi Sulawesi Selatan',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'google-site-verification', content: 'zfRcI1CpBf3ggRxPWZ-K__t9E1Mqe-mdlmP5OuY3rQo' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#000' },
    /*
     ** Global CSS
     */
    css: [
        { src: 'ant-design-vue/dist/antd.css' },
        { src: '@/assets/sass/bkpsdmd.scss', lang: 'scss' }
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '@/plugins/antd-ui' },
        { src: '@/plugins/vPreview', mode: 'client' },
        { src: '@/api/init' }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
    
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        ['nuxt-vuex-localstorage', {
            mode: 'debug'
        }],
        ['@nuxtjs/axios'],
        ['@nuxtjs/proxy'],
        ["@nuxtjs/moment"],
        ['@nuxtjs/google-gtag', { 
            id: 'UA-150420686-1',
            config: {
                anonymize_ip: true, // anonymize IP 
                send_page_view: false, // might be necessary to avoid duplicated page track on page reload
                linker: {
                    domains: ['sipp-bpsdm.sulselprov.go.id']
                }
            },
            debug: true,
         }]
    ],

    moment: {
        defaultLocale: "id",
        locales: ["id"]
    },
    /*
     ** Build configuration
     */
    axios: {
        proxy: true
    },

    proxy: {
        '/api': { target: 'https://api.bkpsdmd-sulsel.online', pathRewrite: { '^/api': '/' }, changeOrigin: true },
        '/pdf': { target: 'http://www.pt-jakarta.go.id', pathRewrite: { '^/pdf': '/' }, changeOrigin: true }
    },
    build: {
        /*
         ** You can extend webpack config here
         */
        vendor: ['vue-pdf'],
        extend(config, ctx) {
            config.output.globalObject = 'this'
        }
    }
}