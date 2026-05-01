import { defineConfig } from 'vitepress'
import timeline from 'vitepress-markdown-timeline';

const time =  new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }) +  ' GMT+8:00';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  title: "河地大生活手册",
  description: "河地大生活手册 · 你的河北大道 601 号生活指南",
  markdown: {
    config: (md) => {
    md.use(timeline)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '关于', link: '/' }
    ],

    sidebar: [
      {
        text: '初入地大',
        items: [
          { text: '学校概况', link: '/begin/intro' },
          { text: '新生必看', link: '/begin/qa' },
          { text: '谨防诈骗', link: '/begin/anti_fraud' },
          { text: '入学准备', link: '/begin/preparation' },
          { text: '交通出行', link: '/begin/transport' },
          { text: '校园流量卡', link: '/begin/calling_card' },
          { text: '军训', link: '/begin/military_training' }
        ]
      },
      {
        text: '校园',
        items: [
          { text: '地图', link: '/campus/maphgu' },
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
        text: '生活',
        items: [
          { text: '生活费', link: '/life/alimony' },
          { text: '必备小程序/APP/公众号', link: '/life/app' },
          { text: '快递', link: '/life/couriers' },
          { text: '宿舍', link: '/life/dormitory' },
          { text: '早操晚自习', link: '/life/exercise' },
          { text: '医保', link: '/life/medical_insurance' },
          { text: '校园网', link: '/life/network' },
          { text: '公共交通', link: '/life/public_transportation' },
          { text: '校内交通', link: '/life/transport' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Creepermcr/LifeGuide-HGU' }
    ],

    footer: {
      message: '使用 VitePress 构建，基于 <a href="https://survive-hfut.cc/">Survive-HFUT</a> 改编<br>' + '最后更新：' + time,
      copyright: '原作品采用 CC BY-SA 4.0 授权，未做特别声明的内容，均按照此协议进行分发<br><a href="https://beian.miit.gov.cn/">吉ICP备2025033116号-1</a><br><a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=22038102000335">吉公网安备22038102000335号</a>'
    }

  }
})