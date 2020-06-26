### 陣列(Array)
陣列寫法
```
var Array [];

ex:
var Array [1,2,3......,10];
```

`{Array}.length` 取得陣列長度
`{Array}.push({內容})` 把新的資訊push到array
`{Array[{索引值}]}`  取得陣列裡面的特定資訊

```
var A = 1;
var B = 2;
.
.
.
var Z = 26;

陣列寫法 （含有物件寫法）
var engNum = [{ A : 1},{ B : 2}......,{ Z : 26}] 
```

#### 取值
```
var engNum = [{A:1},{B:2}];
console.log(engNum[0]);

結果
{A:1}
```


儲存性質相似的資訊
![螢幕快照 2020-06-25 下午1.39.07](https://i.imgur.com/fpcGHlo.png)


### 物件(Object)
物件寫法
```
var Object = {key:value};

ex:
var Object = {A:1,B:2,C:3};
```

#### 取值
```
var peter = {
    name: 'peter',
    scores: [1, 2, 3],
    address: 'taipei city',
    phone: '010101',
    father: {
        name: 'nick',
        phone: '12345'
    }
};

var key = 'name';
console.log(peter.name);
console.log(peter[key]);
console.log(peter.father.name);
console.log(peter['father']['name']);

結果
peter
peter
nick
nick
```