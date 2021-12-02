# FUJI BOOKSTORE

## 簡介
這是一個前端使用 React.js 後端使用 Express.js 的迷你電商網站。用戶可以在上面瀏覽文具以及書籍、並在線上購物；店家可以使用後台管理系統管理商品、訂單。logo 以及 UI 色調啟發自在日本旅行時一家書店和門面掛的藍染棉布。

![smallLogo](https://user-images.githubusercontent.com/81896228/144393735-9786a95e-63d9-4b37-a8cc-c0669b7f9866.png)

## 狀態
開發中.....


## 功能

### 用戶
1. 登入、登出功能
2. 註冊功能
3. 使用 google 帳號登入
4. 依類別瀏覽商品
5. 加入購物車
6. 下單
7. 線上付款

### 店家
1. 管理商品
2. 上下架商品
3. 編輯商品資訊
4. 刪除品項
5. 新增品項
6. 管理訂單
7. 管理用戶

## schema

<img width="380" alt="schema" src="https://user-images.githubusercontent.com/81896228/140879257-de36e39e-108a-4bd7-9c5e-2f786f78e1ca.PNG">


## 使用技術
### 前端: 
React.js, React-Router, react-redux, redux
### 後端:
Node.js, Express.js, Sequelize Migration, MySQL
### 佈署:
Heroku
### 外部 API:
1. Google 0Auth
2. 綠界金流(開發中) 

## 目前學到的技術、觀念
### 整體
1. 如何規劃專案目標
2. 專案的資料架構
3. 導入 json token 認證機制
4. 導入 Eslint
5. 使用 bcrypt 將密碼 hash 加密後才存進 database

### 前端
1. dataflow 規劃 
2. 如何運用 object 畫簡化 state 和 打包給後端的流程。
3. 導入 Redux
4. 串接 google 0Auth API
5. React 專案中 css 的作用域為 global，導入 css module 解決問題。
6. component 中的 state 如果數量較大，如何使用 hooks 來管理 state 的 mutation
7. 使用 state 的改變來做到換頁的效果 (其實只是單純的 unmount 舊 component；mount 上新的 component(笑 )
8. styled component 的使用 (最後還是將 css 分開來寫，比較好管理)

### 後端
1. 規劃 Schema
2. 怎麼 associate 不同 table，以及其所延伸出來的先後問題。
3. 使用 sequelize ORM 物件關聯對映與資料庫互動，減少 typo 帶來的 bug
4. 使用 multer + express 實作圖片上傳功能


## 想要導入、改進的部分
### 整體
1. 串接綠界 API 實作線上付款的功能。

### 前端
1. 完善管理員頁面
2. 完善用戶管理訂單頁面

### 後端
1. 串接 cloudinary api 結合 multer 將圖片存到 cloudinary 轉移存取流量。
2. 重構程式碼，後端部分是自己在這個月硬塞進去的，程式碼寫的凌亂。





