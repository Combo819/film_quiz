# film_quiz

> a webpage for film name quiz based on vue-cli and vuetify.
<br>preview: https://combo819.github.io/film_quiz/#/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## webpage structure
This webpage consist of 6 pages: welcomePage, scoreboard, QuizPage, movie, instrunction and egg, among which the welcomePage is the homepage having a router path of "/". scoreboard is the page that shows the index of every quiz with a white background color indicating the quiz unanswered. After the quiz is anwsered, the rectangler of index will turn into red, yellow or green, indicating you score 0, 1 or 2 points. There is also a sum of all points at the top of the page. <br>The QuizPage is the main battlefield of the game. Players should type in the title of the film(Chinese only) while observing the illustration of the film with information wiped off. If the orange button is clicked, the page will show part of the film title. But players can only get half of the score as they have seen part of the answer. An information card about the film will appear after the answer verified or the player surrender.
<br>As the card is clicked, the page will skip into moviepage, showing the details of the answering film. After all quizs are answered, an easter egg card will appear. A instruction card is in the welcome page containing the game instruction and something other about myself.

## usage
If you want to change the images and film list by yourself, just clone this repository, find the movieJson object in store/index.js, and then change the film name and corresponding douban id. After that, copy your images into static/noName and static/original. Keeping in mind, the file names in these two folder must be identical.

## Difficulty
+ At first, I put the movielist into static/movieList.json and get the json with axios. However, Error occurred when the vue-cli was built. That's because Chrome refuse to load local json via axios. I fix the problem by putting movielist into the vuex file.
+ The data of infomation card and movie page is get from a douban api. There is CORS problems when getting data from douban api. At first, I use proxy. But it no longer work after the program is built. So I use ajax with jsonp(see:[jianshu](https://www.jianshu.com/p/1f32c9a96064)) instead of axios to get data from douban api. What's more, do not request the douban api too frequently, which may lead to visit limitaion.
<br>
<br>

# 猜电影名游戏

> 用vue-cli和vuetify搭建的猜电影名字的网页。

## 网页结构
本网页包含6个页面，欢迎页，积分榜，问题页，电影页，说明页和彩蛋， 其中欢迎页是主页，并且路由路径被设置为"/"。 积分榜显示每一道题的序号，在没有答题时序号是白色的。当问题被回答后，序号所在的矩形会变成红色，黄色和绿色，对应着得0分，1分，2分。 积分榜页面顶端有记总分的牌子。<br>问题页是回答问题的页面，玩家需要通过观察抹去信息的电影插画，来猜测电影的标题。 当橙色按钮被点击， 部分答案会显示，但即使玩家后面答对了，也会被扣一般分。当玩家回答了题目之后，一个信息卡会在底部出现。<br>当信息卡被点击后，页面会跳转到电影页，电影页显示电影的详细信息。所有的问题都回答后，一个彩蛋会显示在积分榜页面。欢迎页也有包含游戏说明的指示卡。

## 使用方法
如果你想改变为自己的图片和电影名单，只需要把项目克隆到本地，在store/index.js里找到movieJson这个对象，写上自己的电影名和对应的豆瓣id。然后把电影的图片分别拷到static/noName和static/original。请注意，两个文件夹内电影图片的文件名必须一致。

## 遇到的困难
+ 刚开始，我把电影名单的json文件放到static/movieList.json，　再通过axios请求。可是，在vue-cli被编译后，这个方法就会出错，因为Chrome浏览器无法读取本地的json。因此电影名单只能放到vuex的store里面去。
+ 电影的数据是来自豆瓣的api，请求这个api有跨域问题。刚开始我有代理，但是vue-cli编译后代理就没法用了。所以我引入jquery使用ajax和jsonp（参考：[简书](https://www.jianshu.com/p/1f32c9a96064))。另外，不要访问api太过频繁，会有访问限制。
