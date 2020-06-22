# Command Line 

### 簡介
文字視窗 CLI
下指令控制電腦
（透過純文字操作電腦）

### windows環境
安裝git-bash

##### 補充資料
[介紹好用工具：Cmder ( 具有 Linux 溫度的 Windows 命令提示字元工具 )](https://blog.miniasp.com/post/2015/09/27/Useful-tool-Cmder)

### Mac環境
way1:打開內建環境 terminal

way2:安裝iTerm 2

##### 補充資料
[[心得] iTerm2 + zsh，打造更好的工作環境](http://huli.logdown.com/posts/402147-iterm2-zsh-better-environment)

[超簡單！十分鐘打造漂亮又好用的 zsh command line 環境](https://medium.com/statementdog-engineering/prettify-your-zsh-command-line-prompt-3ca2acc967f)

---
## 指令
`~` /Users/我的資料夾/  簡寫法

`pwd` 目前所在路徑

`ls` 目前資料夾的所有檔案  
```
ls -al 所有檔案詳細（含時間）
```

`cd` 切換到指定資料夾  
```
cd .. 切到上一層資料夾
```

`man` 指令說明使用手冊
(指令更詳細的使用說明)


#### 檔案操作指令
`touch` 建立檔案or更改檔案時間（改成最新時間）

`rm` 刪除檔案

`rmdir` 刪除資料夾

`mkdir` 建立資料夾

`mv` 移動檔案or改名

```
# 移動檔案
mv {檔名} {資料夾} 移動到下一層指定資料夾
mv {檔名} .. 移動到上一層資料夾
mv {檔名} {資料夾路徑} 移動到指定資料夾

# 改名
mv {檔名} {新的檔名}
```
 `cp` 複製檔案
 `cp -r` 複製資料夾
```
cp {檔名} {複製後的新檔名}
```

#### 其他好用指令
`grep` 抓取關鍵字
```
grep {想找的關鍵字} {檔名}
```

`curl` 送出request (測試api)

`>` redirection重新導向 input output
```
 >> 新增檔案內容 
```

`｜` pipe指令的組合技 （一次組合多個指令）
```
cat {檔名} | grep {關鍵字}
```

#### 非內建指令
可自行安裝
`wget` 下載檔案






## Vim 文字編輯器
文字編輯器，修改簡易檔案時下指令快速

### 環境
mac內建 ／windows不一定

`vim {檔名}` 進入編輯檔案
`i` 編輯模式
`esc` 預覽模式
`:wq` 存檔離開
`cat` 查看檔案內容or連接檔案內容


