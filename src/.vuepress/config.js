const { description } = require('../../package');

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'مرکز آموزش',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#C10C1C' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'کارنما',
                link: 'https://karnema.com'
            }
        ],
        sidebar: {
            '/': [
                {
                    collapsable: false,
                    children: [
                        ['/dashboard/', 'داشبورد'],
                        ['/account/', 'حساب کاربری'],
                        ['/payments/', 'دریافت و پرداخت پول'],
                        ['/wallet/', 'کیف پول'],
                        ['/badges/', 'نشان'],
                        ['/due-date/', 'تاریخ انجام کار'],
                        ['/profile/', 'پروفایل'],
                        ['/account-setting/', 'تنظیمات حساب کاربری'],
                        ['/search/', 'جستجو و فیلتر کارها'],
                        ['/chat/', 'چت خصوصی با کاربران'],
                        ['/image-size/', 'نوع و حجم تصاویر ارسالی'],
                        ['/file-size/', 'نوع و حجم فایل های ارسالی'],
                        ['/disable-account/', 'غیرفعال سازی حساب']
                    ]
                }
            ],
        }
    },






    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
};
