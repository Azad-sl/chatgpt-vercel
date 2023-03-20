export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `Powered by OpenAI Vercel
- 需左下角设置按钮处填入网站密码，网站密码请联系[站长](mailto:liushulin@azad.asia)。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。
- 如果本站对你有所帮助，可以请站长 [喝杯咖啡](http://www.azad.asia/dashang/)，其余所得赞助都将用于网站维护。
- 本站基于 [chatgpt-vercel](https://github.com/ourongxing/chatgpt-vercel) 开发，原作者 [@ourongxing](https://github.com/ourongxing)。
- 欢迎光顾 [我的小店](https://faka.azad.asia/)。个人独享 [18美金ChatGPT账号](https://faka.azad.asia/buy/43) 可在此处购买。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
