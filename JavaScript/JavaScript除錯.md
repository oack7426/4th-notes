## 瀏覽器偵錯
`debugger` 除錯語法，程式跑到此語法會停住

- 按下 `Step` 會一行行的跑程式  
（想一次跑完程式就按最左邊藍色的播放鈕）
- 按下 `Watch` 新增想查看的變數，就可以跟著程式看變數的變化

![螢幕快照 2020-06-26 下午4.48.42](https://i.imgur.com/pnfwR4t.jpg)

### 瀏覽器設中斷點

![螢幕快照 2020-06-26 下午4.59.31](https://i.imgur.com/BhBwuC7.png)

## 防雷 瀏覽器console.log array / object
`array` / `object` 後面的值改變，前面的console.log 第一次跟重整後的值會不同

###### 第一次載入
印出的 `console` 是正確，但詳細清單裡的不對 
（印出的是最新的而非`console`時間點的）
![螢幕快照 2020-07-05 上午12.00.42](https://i.imgur.com/BnTrm1g.png)

###### 重整後載入
變得很奇怪，直接印出最後 `array`
![螢幕快照 2020-07-05 上午12.00.34](https://i.imgur.com/6s0M8vX.png)

##### 防雷推薦 - 直接印成字串
建議做法：把  `array` / `object` 改為字串印出
![螢幕快照 2020-07-04 下午11.58.09](https://i.imgur.com/3GJPQsA.png)

---

## Mac 本地端跳出迴圈
按 `ctrl + C` 跳離無窮迴圈
![螢幕快照 2020-06-26 下午5.06.30](https://i.imgur.com/KB3iV6o.png)

