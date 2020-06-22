### 指令
`git init` 針對此資料夾做版本控制
`git status` 檔案狀態
`git add {檔案}` 選擇要加入版控的檔案 
```
add .  選擇所有檔案加入版控
```
`git commit` 檔案存檔入版控
```
git commit -m "{message}"  加入 commit 詳細訊息
```
`git log` 歷史紀錄
`git checkout` 切換 branch or 切到過去commit
```
git checkout {branch name} 切換 branch
git checkout {commit版本號} 切到過去commit
```


註：推到遠端就不要再改了，會導致本地端內容與他人不一致
`git commit --amend` 改 commit message  
`git reset HEAD^` 取消最後一次的 commit
`git reset --hard` 取消最後一次 commit + 最後 commit 所有的檔案變動都消失（還原）

`git checkout --{檔案名}` 把指定檔案的變動還原

### 分支(branch)指令
`git branch {branch}` 建立新 branch
`git branch` 查看所有 brnach
```
git branch -v 查看所有 brnach 最後 commit 資訊
```
`git branch -m {分支名} {新的分支名}` 重新命名branch  
`git branch -D {分支名}` 刪除brnach
`git merge {branch}` 將{分支名}合併到所在branch中  

###  檔案相關
`{資料夾名}.gitignore` 不讓資料進入版控

## 遇到衝突(conflict)
![遇到衝突](https://i.imgur.com/yFGDEr7.png)

---
## 協作平台
GitHub、GitLab、Bitbucket

## GitHub 共同協作

### 創建新專案
#####setp1
按下 [ New repository ]
![image1](https://i.imgur.com/DNWVtib.png)

#####setp2
命名[ 專案名稱(英文) ]、[ 專案描述 ] 
![image2](https://i.imgur.com/5yL3Vjt.png)

#####setp3
or create a new repository on the command line 在命令行上創建新的存储庫

push an existing repository from the command line從命令行推送現有存儲庫
註：需要先下 `git init`讓選擇的資料夾進入版控
![image3](https://i.imgur.com/XgsdHSl.png)

### 本地端紀錄推到 GitHub

`git push` 推到遠端
`git pull` 拉取遠端最新進度

### 抓取他人的 GitHub
![抓取他人的 GitHub](https://i.imgur.com/qBCOmdv.jpg)

##### way 1
直接抓取到本地端
`git clone {特定專案的網址}` 抓取他人的 GitHub 到本地端


##### way 2
按下 `Fork` 複製一份到自己的github


### 在 GitHub 合併分支

##### setp1
`Compare & pull request `
![image1](https://i.imgur.com/Yam7AB6.png)

##### setp2
輸入 commit 內容
![image2](https://i.imgur.com/UhNlMG8.png)

##### setp3
`Merge pull request`
![image3](https://i.imgur.com/FM7Kwyo.png)

## GitHub Pages 免費網頁空間
可以把 GitHub 專案變成靜態網頁  
以下圖解步驟
![](https://i.imgur.com/byVHrjq.png)  
![](https://i.imgur.com/KIirLVZ.png)  
![](https://i.imgur.com/n26aTTt.png)  
![](https://i.imgur.com/q6EWXj4.png)  
![](https://i.imgur.com/j7K0Z9Y.png)  
![](https://i.imgur.com/fzAWugp.png)  
![](https://i.imgur.com/SFb1vLL.png)  

## Hook （勾子）
發生某件事的時候通知我

