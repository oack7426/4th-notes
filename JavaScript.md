JavaScript 無法單獨執行，一定要有執行環境，不然很多指令無法使用。

### runtime 執行環境
- 瀏覽器
- 本地端安裝 Node.js

### 在本地端執行 JavaScript 程式
`node` 開啟 node.js 運行環境  
`> console.log('123')` 欲執行程式  

跳出 node.js 執行狀態
- `>^C`  mac : control鍵 ＋ Ｃ *2遍  
- `>.exit`


### 基本運算
| 運算符 | 名稱 | 例子 | 回傳|
|  :----  | :----  | :----  | :----  |
| `+` | 加法 | 3+2 |5|
|`-`| 減法 | 3-2 |1|
|`*`| 乘法 | 3*2 |6|
|`/`| 除法 | 3/2 |1.5|
|`%`| 取餘數 | 2％2 |0|

##### 參考資料
[算術運算符](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/First_steps/Math)   

### 邏輯運算子 || 與 &&

| 運算符 | 名稱 |   
|  :----  | :----  |   
| `｜｜` | or |   
|`&&`| and |   
|`!`| not |   

#### 短路邏輯＆短路求值
 >Javascript 裡面只要是 0、""、null、false、undefined、NaN 都會被判定為 false

 - ||  的特性是只要其中一個為 true 就為 true，因此如果第一個運算式符合就直接返回不會做第二個
![螢幕快照 2020-06-23 上午12.23.49](https://i.imgur.com/Wu3bymg.png)

- && 的特性是只要有一個 false 就是 false
![螢幕快照 2020-06-23 上午12.22.20](https://i.imgur.com/bAXFx3P.png)


##### 參考資料
[運算式與運算子](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators)  

[Javascript 基礎打底系列 (三) - 邏輯運算子，與短路邏輯 (short circuit logic) ](https://sweeteason.pixnet.net/blog/post/43022921-javascript-%E5%9F%BA%E7%A4%8E%E6%89%93%E5%BA%95%E7%B3%BB%E5%88%97-%28%E4%B8%89%29---%E9%82%8F%E8%BC%AF%E9%81%8B%E7%AE%97%E5%AD%90%EF%BC%8C%E8%88%87)