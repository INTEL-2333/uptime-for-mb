// 配置
window.Config = {

  // 站点名
  SiteName: 'MB今天倒闭了嘛（雾',

  // 站点链接
  SiteUrl: 'https://xian2333.github.io/uptime-for-mb/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm784715715-a8ff3bc3b527914cb07da96c',
    'm784715714-ef314cc58a63da133004cf56',
    'm784685406-522d37e5c90ff4786ada3cf9',
    'm784736480-8bbeb837520f37808fdee2e1',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 45,

  // 导航栏菜单
  Navi: [
    {
      text: '项目地址',
      url: 'https://github.com/xian2333/uptime-for-mb'
    },
    {
      text: '项目安装',
      url: 'https://www.minebbs.com/'
    },
    {
      text: '卑微小站',
      url: 'https://www.cattery.work/'
    }
  ]
};
