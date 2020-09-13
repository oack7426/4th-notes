## 選取DOM

`getElementById({id})` 選取id
`getElementsByClassName({class name})` 選取第一個 class 元素
`getElementsByTagName({DOM})` 選取第一個 DOM 元素
`querySelector({css選擇器})` 選取第一個符合的元素
`querySelectorAll({css選擇器})` 選取全部符合的元素

## 改變 css 樣式
`Element.style.cssProperty = newStyle`  
`Element.style.cssText = newCSS`

##### 參考資料
[JavaScript DOM CSS (修改 CSS 樣式)](https://www.fooish.com/javascript/dom/css.html)

## 改變元素的 class
`element.classList.toggle({className})` 

##### 參考資料
[How TO - Toggle Class](https://www.w3schools.com/howto/howto_js_toggle_class.asp)

## 改變內容
`innerText`  改純文字  
`innerHTML`  改含dom的內容  
`outerHTML`  改本身元素整塊含dom的內容  

##### 參考資料
[innerHTML、outerHTML、innerText、outerText的區別](http://design2u.me/blog/121/innerhtml%E3%80%81outerhtml%E3%80%81innertext%E3%80%81outertext%E7%9A%84%E5%8D%80%E5%88%A5)

## 插入與刪除元素
`appendChild`  新增元素
`removeChild`  刪除元素

## 監聽事件
```
el.addEventListener('click',function(){})
```

## 送出表單
預設行為是送出
```
el.addEventListener('submit',function(){});
```

## 阻止預設行為
```
e.preventDefault(); 
```
# 事件傳遞機制
捕獲與冒泡
> 先捕獲，再冒泡

捕獲：抓到元素
冒泡：往抓到的元素網上一個個抓
![螢幕快照 2020-08-08 下午11.49.34](https://i.imgur.com/81xQxxq.png)

 

## stopPropagation 停止向上傳遞
只觸發捕獲，不觸發冒泡（不會往上抓）

## event delegation 事件代理

