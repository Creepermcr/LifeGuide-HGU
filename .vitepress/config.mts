import { defineConfig } from 'vitepress'
import timeline from 'vitepress-markdown-timeline';

const time = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }) + ' GMT+8:00';

export default defineConfig({
  base: "/",
  title: "河地大新生手册",
  description: "河地大新生手册 · 你的河北大道 601 号生活指南",
  head: [
    ['link', { rel: 'icon', href: '/head.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/head.png' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: '河地大新生手册' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],
  lang: "zh-CN",

  markdown: {
    container: {
      tipLabel: '💡 提示',
      warningLabel: '⚠️ 注意',
      dangerLabel: '‼️ 警告',
      infoLabel: '📖 信息',
      detailsLabel: '📜 详细信息',
    },
    config: (md) => {
      md.use(timeline)
    }
  },

  themeConfig: {
    outline: {
      label: '页面导航',
      level: [2, 3],
    },
    sidebar: [
      {
        text: '前言',
        link: '/begin/',
        collapsed: true,
        items: [
          { text: '致新生的你', link: '/begin/advise' },
        ]
      },
      {
        text: '入学篇',
        // link: '/begin/',
        collapsed: true,
        items: [
          { text: '入学准备', link: '/entrance/preparation' },
          { text: '开学报到', link: '/entrance/registration' },
          { text: '地图', link: '/entrance/maphgu' },
          { text: '校园卡', link: '/entrance/calling_card' },
          { text: '军训', link: '/entrance/military_training' },
          { text: '谨防诈骗', link: '/entrance/anti_fraud' }
        ]
      },
      {
        text: '学校篇',
        collapsed: true,
        items: [
          { text: '学校概况', link: '/campus/intro' },
          { text: '教学楼', link: '/campus/academic_building' },
          { text: '食堂', link: '/campus/canteen' },
          { text: '1953街区', link: '/campus/1953block' },
          { text: '宿舍', link: '/campus/dormitory' },
          { text: '体育馆与操场', link: '/campus/gym' },
          { text: '图书馆', link: '/campus/library' },
          { text: '其他建筑', link: '/campus/other_building' },
          { text: '小动物', link: '/campus/animals' }
        ]
      },
      {
        text: '生活篇',
        collapsed: true,
        items: [
          { text: '生活费', link: '/life/alimony' },
          { text: '必备小程序/APP/公众号', link: '/life/app' },
          { text: '快递', link: '/life/couriers' },
          { text: '宿舍', link: '/life/dormitory' },
          { text: '早操晚自习', link: '/life/exercise' },
          { text: '医保', link: '/life/medical_insurance' },
          { text: '公共交通', link: '/life/public_transportation' },
          { text: '校内交通', link: '/life/transport' }
        ]
      }
    ],

    docFooter: {
      prev: false,
      next: false
    },

    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',

    editLink: {
      pattern: "https://pd.qq.com/s/394eynhsj?b=9",
      text: "加入河地大校园频道",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Creepermcr/LifeGuide-HGU' }
    ],

    footer: {
      message: '使用 VitePress 构建，基于 <a href="https://survive-hfut.cc/">Survive-HFUT</a> 改编<br>' + '最后更新：' + time,
      copyright: '原作品采用 CC BY-SA 4.0 授权，未做特别声明的内容，均按照此协议进行分发<br><a href="https://beian.miit.gov.cn/">吉ICP备2025033116号-1</a><br><a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=22038102000335">吉公网安备22038102000335号</a>'
    }

  }
})