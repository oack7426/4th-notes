## 呼叫  API 
### node.js 呼叫 API 
![螢幕快照 2020-09-01 下午10.36.03](https://i.imgur.com/u7SpL8E.jpg)

### 網頁上呼叫 API 
![螢幕快照 2020-09-01 下午10.36.10](https://i.imgur.com/ZgO0atB.jpg)

## 表單傳送資料
### GET
```
 <form method="GET" action="https://google.com">
    username:<input type="text" name="username">
    <input type="submit" value="送出">
  </form>
```
表單送出後的資訊會在網址上，並且導頁
![螢幕快照 2020-09-01 下午10.48.29](https://i.imgur.com/akKB4sN.png)

### POST
```
  <form method="POST" action=" https://google.com"> username:<input type="text" name="username">
    <input type="submit" value="送出">
  </form>
```
把資料傳到新頁面後，在等頁面回應回傳值
![螢幕快照 2020-09-01 下午10.50.15](https://i.imgur.com/ckrrspR.png)

## ajax 傳送資料
非同步交換資料
##### 取資料範例
```
const request = new XMLHttpRequest();
request.onload = function () {
    if (request.status >= 200 && request.status < 400) { // request suss
        const reponse = request.responseText;
        const json = JSON.parse(reponse); // 把一個JSON字串轉換成 JavaScript的數值或是物件
        const users = json.data;
        console.log(json);
    } else {
        console.log('err');
    }
}
request.onerror = function () { // request error
    console.log('error');
}
request.open('GET', 'https://reqres.in/api/users', true);
request.send();
```

## 取資料印出範例
```
const request = new XMLHttpRequest();
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const reponse = request.responseText;
        const json = JSON.parse(reponse); // 把一個JSON字串轉換成 JavaScript的數值或是物件
        const users = json.data;
        const body = document.querySelector('body');
        for (var i = 0; i < users.length; i++) {
            const div = document.createElement('div');
            div.className = "box";
            div.innerHTML = `<p>${users[i].first_name} ${users[i].last_name}</p>
            <img src="${users[i].avatar}" alt="${users[i].first_name} ${users[i].last_name}">`;
            body.appendChild(div);
        }
    } else {
        console.log('err');
    }
}
request.onerror = function () {
    console.log('error');
};
request.open('GET', 'https://reqres.in/api/users', true);
request.send();
```

## Same origin policy 與跨網域問題
不同源預設會擋掉，為了安全性
可以用 “跨來源資源共用” 取得資料 （server 端）
![Xnip2020-09-13_01-33-40](https://i.imgur.com/k3jHnJW.jpg)

#### 同源政策
只跟瀏覽器有關
所謂同源是指兩份網頁具備相同協定、埠號 (如果有指定) 以及主機位置，下表提供了一些例子展示那些來源和http://store.company.com/dir/page.html屬於同源:

![螢幕快照 2020-09-11 下午11.26.38](https://i.imgur.com/hpyYXUn.png)

###### 不受同源政策影響
- img
- script




### 單向傳送資料的延伸應用（email 與追蹤）
在 email 埋入一張透明的圖片，圖片網址是某個 api，當打開信件時同時會觸發 server 請求，這樣就可以記錄有多少人開過信

## 抓取資料並顯示
