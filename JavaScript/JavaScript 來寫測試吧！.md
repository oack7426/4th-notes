## Unit Test 單元測試
### 利用 Jest 寫測試
> tips:
> 詳細 Jest 測試步驟請看 參考文件

模組檔 myModule.js
```
function repeat(str, num) {
    var result = '';
    for (var i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

module.exports = repeat;
```

使用模組檔 test.js
```
var useModule = require('./myModule');

// 測試寫法
test('這邊寫測試訊息：a 重複 5 次要等於aaaaa', () => {
    expect(useModule('a', 5)).toBe('aaaaa');
});
```
package.json 檔裡，在 `scripts` 裡面增加測試指令
```
 "scripts": {
    "test": "jest {測試檔名}"  //後面可不加運行的測試檔名
  },
```
下指令 `npm run test` 測試結果如預期會打綠勾

![螢幕快照 2020-07-05 下午4.13.45](https://i.imgur.com/PY06sUd.png)

不如預期會告知輸出結果
`Expected`  預期結果  
`Received`  實際結果
![螢幕快照 2020-07-05 下午4.20.17](https://i.imgur.com/FywqCZh.png)

### 不使用 package.json 檔 運行 Jest 方法
下指令 `npx jest {檔案名}`
![螢幕快照 2020-07-05 下午4.18.30](https://i.imgur.com/yoF0hAO.png)


##### 參考文件
[十分鐘上手前端單元測試 - 使用 Jest
](https://wcc723.github.io/development/2020/02/02/jest-intro/)

### 整理測試

使用模組檔 test.js
```
var useModule = require('./myModule');

// 測試寫法
describe('測試 useModule', function () {
    test('這邊寫測試訊息："a" 重複 5 次要等於aaaaa', () => {
        expect(useModule('a', 5)).toBe('aaaaa');
    });
    test('這邊寫測試訊息："" 重複 5 次要等於"', () => {
        expect(useModule('', 5)).toBe('');
    });
    test('這邊寫測試訊息："abc" 重複 1 次要等於abc', () => {
        expect(useModule('abc', 1)).toBe('abc');
    });
});
```
![螢幕快照 2020-07-05 下午4.28.22](https://i.imgur.com/gnCYz5k.png)


## TDD 測試驅動開發
先把測試寫好再來寫程式