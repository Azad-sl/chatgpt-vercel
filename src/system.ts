export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `Powered by OpenAI Vercel
- ❗ 左下角[[设置按钮⚙]] 填入网站密码，网站密码请联系站长 [邮箱](mailto:liushulin@azad.asia)，或在 [此处](https://faka.aihub.ren/buy/42) 自取。
- 速度快，秒级响应，支持GPT3.5。内置三个5美金API key，输入网站密码后可直接调用。也可使用自己API。
- 具体设置及使用提示请看 [💡 这里](https://blog.azad.asia/022)。[[Shift]] + [[Enter]] 换行。开头输入 [[空格]] Prompt 预设。
- 如果本站对你有所帮助，可以请站长 [☕ 喝杯咖啡](http://www.azad.asia/dashang/)。
- 欢迎光顾 [🛒 我的小店](https://faka.aihub.ren)。个人独享 [5美金ChatGPT账号API](https://faka.aihub.ren/buy/42) 可在此处购买。
- 本站基于 [chatgpt-vercel](https://github.com/ourongxing/chatgpt-vercel) 开发，原作者 [@ourongxing](https://github.com/ourongxing)。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
