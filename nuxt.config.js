module.exports = {
    server: {
        port: 8080, // default: 3000
    },
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Badan Kepegawaian Dan Sumber Daya Manusia Daerah Kota Makassar - BKPSDMD',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
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
        { src: '@/plugins/fullcalendar', mode: 'client' },
        '~/api/init.js'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}