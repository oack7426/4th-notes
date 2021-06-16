### node 發 request
![螢幕快照 2021-06-16 下午9.41.01](https://i.imgur.com/OkO9A46.png)

### 瀏覽器發 request
![螢幕快照 2021-06-16 下午9.41.13](https://i.imgur.com/jXYi0pi.png)

### 傳送資料的方式
##### 第一種方式：表單 form
直接發送到 `action` 的網址，直接導過去 (跟js無關)
![螢幕快照 2021-06-16 下午9.50.46](https://i.imgur.com/ADXg5Mp.png)
```html
 <form method="GET" action="https://google.com">
    <input name="username" />
    <input type="submit">
 </form>
```
結果顯示在網址 `username=XXX`
![螢幕快照 2021-06-16 下午9.45.51](https://i.imgur.com/8ZFipg7.png)

##### 第二種方式：ajax 跟伺服器非同步交換資料
![螢幕快照 2021-06-16 下午9.53.10](https://i.imgur.com/whxWgDO.png)

使用 `XMLHttpRequest()` 去執行 ajax

```javascript
const request = new XMLHttpRequest();
request.onload = function(){
  if(request.status >= 200 && request.status <400){
    console.log(request.responseText)
  }else{
    console.log('error')
  }
}

request.onerror = function(){
  console.log('error')
}

request.open('GET','https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery',true)

request.send()

```
![螢幕快照 2021-06-16 下午10.00.33](https://i.imgur.com/0G2MBMO.png)
![螢幕快照 2021-06-16 下午10.00.59](https://i.imgur.com/fRfNLh0.png)
