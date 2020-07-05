
### 使用模組：require 
[node.js os module 可使用](https://nodejs.org/dist/latest-v12.x/docs/api/os.html)

使用範例：檢查目前的作業系統
[os.platform( )文件](https://nodejs.org/dist/latest-v12.x/docs/api/os.html#os_os_platform)

```
var osModule = require('os'); //模組名
console.log(Module.platform());
```

### 自創模組：export

模組檔案 myModule.js
```
function double(n) {
    return n * 2;
}
module.exports = double;  // 定義模組
```

使用模組檔案 
```
var useMyModule = require('./myModule.js'); // 模組檔案路徑
console.log(useMyModule(2));

結果 4
```

## npm 安裝套件
> tips:
> 詳細安裝步驟請看 參考文件
`npm init` 先產出 package.json 檔
`npm install {套件名}` 安裝套件

node.modules 資料夾不建議進入版控，建議可以紀錄套件名供人下載（下方是步驟） 

`npm install {套件名}--save` 把此套件資訊寫到packject.json 檔中
![螢幕快照 2020-07-05 下午1.49.35](https://i.imgur.com/O2mDnIb.png)

與他人同步npm套件 `npm install` （會根據 packject.json 檔案裡安裝對應的套件）

##### 參考文件
[從零開始: 使用NPM套件](https://medium.com/html-test/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B-%E4%BD%BF%E7%94%A8npm%E5%A5%97%E4%BB%B6-317beefdf182)  

### npm scripts 讓專案跑起來
在 package.json 檔
![螢幕快照 2020-07-05 下午3.07.13](https://i.imgur.com/tGhf98l.png)

在 `scripts` 裡可以增加指令運行模組檔案

##### 運行方式
```
npm run {自定義指令}
```

----

## yarn：npm 以外的另一種選擇
>tips:
>跟 npm 一樣是裝套件用的