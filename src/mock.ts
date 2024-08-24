export default {
  info: {
    name: '韩毅',
    gender: '男',
    age: 26,
    position: '前端开发工程师',
    workingYears: 3,
    phoneNumber: '15679112682',
    email: '2387870957@qq.com',
    picture: '/hanyi.jpg',
    github: 'https://github.com/magician-hy',
  },
  skills: {
    icons: [
      '/javascript.svg',
      '/typescript.svg',
      '/react.svg',
      '/redux.svg',
      '/react-router.svg',
      '/antd.svg',
      '/vite.svg',
      '/webpack.svg',
      '/rollup.svg',
      '/babel.svg',
      '/axios.svg',
      '/nodejs.svg',
      '/git.svg',
      '/npm.svg',
      '/etc.svg',
    ],
    descriptions: [
      '熟悉 JavaScript 常用语法，日常开发使用 TypeScript 提高代码可靠性和可维护性',
      '熟悉 React 技术栈和相关生态，包含路由、状态管理库和各类工具库',
      '熟悉主流组件库，例如 Ant Design、Ant Design Mobile 使用及二次封装',
      '了解网络，例如 fetch 和 Axios 使用及二次封装',
      '了解工程化，例如 Vite 和 Webpack 使用及配置',
      '了解 Node.js ，例如 Express 使用及配置',
      '具备代码质量意识，采用规范、重构、Code Review 等方式进行优化',
      '具备良好英语水平，拥有六级证书，能够查阅官方文档，并在开发中规范命名',
    ],
  },
  experiences: [
    {
      type: 'company',
      icon: '/fliggy.svg',
      company: '易宝软件科技有限公司（驻场阿里巴巴-飞猪旅行）',
      position: '前端开发工程师',
      time: '2024 年 05 月 - 2024 年 09 月',
      descriptions: [
        '负责飞猪旅行机票出行中后台、支付中后台、小蜜客服模板等业务迭代开发',
      ],
    },
    {
      type: 'company',
      icon: '/eleme.svg',
      company: '法本信息技术股份有限公司（驻场阿里巴巴-饿了么）',
      position: '前端开发工程师',
      time: '2023 年 08 月 - 2024 年 03 月',
      descriptions: [
        '负责饿了么放心点·榜、VIP、拼团、小饿替你点等 C 端导购业务迭代开发',
        '针对业务所使用的集团内部框架和库，汇总并反馈相关 bug，提供相关 case 复现 demo',
      ],
    },
    {
      type: 'company',
      icon: '/wuitu.svg',
      company: '辉途智能科技有限公司',
      position: '前端开发工程师',
      time: '2021 年 03 月 - 2023 年 07 月',
      descriptions: [
        '负责牛轻松牧场管理系统 WEB 和 APP，以及内部运营配置平台迭代开发',
        '基于 Node-Red 并结合业务场景，模拟牛舍内网关、操作设备和传感器工作流程，提高测试效率',
      ],
    },
    {
      type: 'education',
      icon: '/NCHU.svg',
      school: '南昌航空大学（本科）',
      degree: '本科',
      major: '通信工程',
      time: '2016 年 09 月 - 2020 年 07 月',
      descriptions: [
        '专业排名 23 / 103，曾获数学建模省奖、校级奖学金等'
      ],
    },
  ],
  projects: [
    {
      type: 'close',
      icon: '/react.svg',
      name: '飞猪机票出行中后台',
      description:
        '包含出行服务各项配置能力，致力于优化机票经营流程、提升运营研发服务体验，并为日常经营活动提供一站式解决方案',
      stack: [
        'React',
        'Ant Design',
        'Umi',
        'Midway',
        'ahooks',
      ],
      details: [
        '负责应急取数、排查工具、航司规则等功能模块开发',
        '封装业务组件，例如基于 React-Diff-Viewer 和 Drawer 的 JSON diff 组件',
        '封装工具函数，例如 File 转 base64、文件下载通用函数（使用者无需关心下载资源是否会跨域，函数内会抹平）',
        '封装自定义 hook，例如基于 useRequest 的获取表格数据、联动表单的 useTable',
        '解决将该后台迁移至机票经营后台（微前端架构）作为子应用时的各类问题，例如主应用 antd 版本为 4，为避免样式冲突需将基于 antd 5 特有的功能进行修改适配',
      ],
    },
    {
      type: 'close',
      icon: '/alipay.svg',
      name: '北京环球度假小程序',
      description:
        '包含北京环球度假区票务、酒店预定、园区地图、会员商城、活动资讯等功能，为游客提供一站式服务',
      stack: [
        '支付宝小程序开发框架',
        'Ant Design Mini',
        'Mini Ali UI',
        'Alife Logger',
      ],
      details: [
        '负责优速通、快速入园卡等票务正向与逆向交易链路',
        '封装业务组件，例如 sku 时间段、场次选择弹窗组件，包含列表自动排序、购买数量和超时校验、和置灰禁用等功能',
        '封装工具函数，例如针对特定数据结构，生成对应内容弹窗所需展示状态和富文本',
        '封装各模块数据清洗函数，包含接口异常兜底和数据重组',
        '重构部分模块，例如票型详情页面代码拆分，减少耦合、游客选择组件按照 sku 纬度分组展示等',
        '优化用户体验，例如日历折叠面板与底部滚动容器结合，可能无法正常滚动，通过修改触发区域解决',
      ],
    },
    {
      type: 'close',
      icon: '/react.svg',
      name: '饿了么 放心点·榜',
      description:
        '放心点·榜是饿了么店铺榜、商品榜和营养榜等一系列榜单 IP 统称，作为导购效率和B端资源撬动产品，日均 pv 在百万量级，基于 Hybrid 混合开发，落地页为 H5 版本',
      stack: [
        'React',
        'Ice',
        'Ant Design Mobile',
        'Weex',
        'EBridge',
        'WindVane',
        'HybridAPI',
        'ahooks',
      ],
      details: [
        '负责所有餐饮类榜单落地页迭代开发，以及搭建零售商品榜落地页',
        '封装双列分栏弹窗组件，支持侧边栏和内容区自动选中类目并滚动至可视区域交互效果，并解决滚动穿透问题',
        '封装图文 Tab 栏和全部类目浮层组件，支持点击锚点和上滑吸顶效果，异常数据过滤展示',
        '重构部分模块，例如店铺列表，使用 useMemo、useCallback、memo 进行优化，提高性能',
        '封装 hook，例如主接口请求，监听各项参数触发 fetch，并包含超时、loading 以及错误兜底逻辑',
        '封装 dataStore，实现缓存逻辑，提升用户体验，可通过 url 参数动态开启',
        '封装工具函数，例如基于 lodash 实现加载更多数据时的防抖处理、判断设备端类型、rpx 转 px 等',
        '封装各模块数据清洗函数 adapter，包含接口异常兜底和数据重组',
        '基于 EBridge 调用饿了么 APP Native 能力，例如获取地理位置信息、经纬度参数等',
        '基于 WindVane 和 HybridAPI 开发全局导航栏，同时适配饿了么 APP 和支付宝小程序',
        '基于 ltracker 封装埋点组件，基于 exlog 实现异常监控上报',
        '基于 postcss-px-to-viewport 实现响应式布局',
        '使用 react-infinite-scroller 作为滚动容器实现上滑加载、回调触发距离、loader 展示、动态样式等',
        '处理双端各机型兼容性问题，例如 IOS 端在页面返回时 tab 栏不吸顶',
        '根据 AB 实验方案设置不同版本样式和相应功能，并调整请求链路逻辑及参数',
        '配置 webpack，实现文件维度条件编译，兼容 weex 版本，处理相关 bug 并汇总反馈',
        '基于内部二维码平台，提供测试所需的榜单二维码生成规则，包含环境选项和各项请求参数配置',
      ],
    },
    {
      type: 'close',
      icon: '/react.svg',
      name: '饿了么 VIP',
      description:
        'VIP 是饿了么针对高净值人群提供专属表达和服务，基于 Hybrid 混合开发，落地页为 H5 版本',
      stack: [
        'React',
        'Ice',
        'Weex',
        'EBridge',
        'WindVane',
        'HybridAPI',
        'ahooks',
        'acom-alsc-request',
      ],
      details: [
        '负责搭建身份详情页，以及开卡主链路',
        '封装业务组件，例如较为复杂动画效果的权益卡片、封装全局上下文 hook 实现 toast 提示等',
        '基于唤端 SDK 开发微信过桥页，展示下载提示弹窗或唤起饿了么 APP 并定位到身份详情页，并通过端外验证 token 以展示不同文案，提升用户体验',
        '基于 WindVane 实现领卡成功后通知 Native 刷新皮肤',
        '处理双端各机型兼容性问题，例如安卓端部分机型浏览器版本不支持 Object.fromEntries 导致 crash',
      ],
    },
    {
      type: 'close',
      icon: '/vue.svg',
      name: '牛轻松 WEB',
      description:
        '一款涉及牧场、牛舍、人员、设备的奶牛养殖管理系统，该项目可在线监控牧场、牛舍各项数据指标，及时通知告警相关人员，并能根据需要控制各类智能硬件',
      stack: [
        'Vue 3',
        'Vite',
        'Arco Design',
        'Vue Router',
        'Pinia',
        'Axios',
        'VueUse',
        'Lodash'
      ],
      details: [
        '开发并维护 30+ 页面和组件，例如产奶分析、牛群管理、设备管理、事件配置等功能模块',
        '迁移旧平台，例如网关和设备管理页面，并在原有基础上增加新功能，如表格编辑，以及不同网关下的可编辑字段等',
        '重构部分模块，例如将设备类型从使用字典映射改为兼容新的查询接口',
        '封装业务组件，例如基于腾讯地图封装地图组件，并用于内部的牛只定位测试工具',
        '封装工具函数，例如基于 dayjs 封装处理日期时间函数，基于 lodash 封装深拷贝函数',
        '封装全局样式，减少样式重复，提高开发效率，例如常用 flex 布局、页面容器、背景毛玻璃效果等',
        '优化页面加载速度和性能，例如使用减少请求、懒加载、代码分割等方法',
        '优化用户体验，例如环境配置模块中一键同步到其他牛舍选项',
        '基于 ECharts 开发常见图表，并能根据不同选项和时间动态更新数据',
        '基于 Pinia 实现状态管理，例如全局的牧场切换功能，解决不同组件无法监听 localStorage 中的牧场 ID 变化的问题',
        '修改请求响应拦截器，例如在请求头中添加当前牧场 ID 用于鉴权，全局处理分页、排序等参数等',
        '修改用户登录以及在各种异常状态下的校验逻辑',
      ],
    },
    {
      type: 'close',
      icon: '/vue.svg',
      name: '牛轻松 APP',
      description:
        '一款奶牛养殖管理 APP，该项目可在线监控牧场、牛舍各项数据指标，及时通知告警相关人员，并且能根据场景需要控制各类硬件设备',
      stack: [
        'Vue 2',
        'uni-app',
        'uView',
        'WebSocket',
        'MQTT'
      ],
      details: [
        '开发并维护 10+ 页面和组件，例如巡检详情、设备控制、告警消息等功能模块',
        '开发适配平板的可视化大屏，用于奶业展会',
        '封装业务组件，例如针对 uView 组件库暂不提供 Table 组件，实现支持插槽渲染的自定义表格组件',
        '重构部分模块，例如设备列表需要兼容新类型的网关，进而展示不同控制功能',
        '优化用户体验，例如列表页下拉刷新机制、不同机型样式适配',
        '基于 globalData 封装全局消息管理模块，实现未读告警消息数量和最新时间展示',
        '基于 WebSocket 实现各类硬件设备实时数据更新，发送控制命令等',
        '结合 Node-Red，提高自测效率，例如通过增加虚拟网关控制命令，测试喷淋模块切换网关模式功能',
        '针对边缘网关协议中涉及到设备注册、点位上报、下发消息等存在的问题，及时反馈后端进行修改',
      ],
    },
  ],
};
