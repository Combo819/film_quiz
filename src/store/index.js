import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
  state: {
    currentQuestion: 0,
    movieLength: 0,
    movieList: [],
    getFlag: true, // determine whether to get Movie list, if it's false , the getMoiveList function should not be executed.
    sum: 0,
    allAnswered: null,
    movieJson: {
      "2001太空漫游.jpg": 1292226,
      "V字仇杀队.jpg": 1309046,
      "三傻大闹宝莱坞.jpg": 3793023,
      "两杆大烟枪.jpg": 1293350,
      "侏罗纪公园.jpg": 1292523,
      "冰川时代.jpg": 1291578,
      "剪刀手爱德华.jpg": 1292370,
      "千钧一发.jpg": 1300117,
      "华尔街之狼.png": 2997076,
      "发条橙.jpg": 1292233,
      "回到未来.jpg": 1300555,
      "国王的演讲.png": 4023638,
      "地心引力.jpg": 3793783,
      "壮志凌云.jpg": 1293799,
      "大白鲨.jpg": 1294941,
      "大话西游.jpg": 1299398,
      "天使爱美丽.jpg": 1292215,
      "她.jpg": 6722879,
      "少年派的奇幻漂流.jpg": 1929463,
      "异形.jpg": 11803087,
      "德州电锯杀人狂.jpg": 1300392,
      "心灵捕手.png": 1292656,
      "情书.png": 1292220,
      "我是传奇.jpg": 1820156,
      "我，机器人.jpg": 1308843,
      "教父.jpg": 1291841,
      "星球大战.jpg": 1293838,
      "星际穿越.jpg": 1889243,
      "杀死比尔.png": 1291580,
      "沉默的羔羊.jpg": 1293544,
      "泰坦尼克号.jpg": 1292722,
      "消失的爱人.jpg": 21318488,
      "火星救援.jpg": 25864085,
      "爱乐之城.jpg": 25934014,
      "独立日.png": 1293013,
      "狮子王.jpg": 1301753,
      "王牌特工.jpg": 24405378,
      "现代启示录.jpg": 1292260,
      "机器人总动员.jpg": 2131459,
      "疯狂麦克斯.jpg": 1295670,
      "盗梦空间.jpg": 3541415,
      "碟中谍.jpg": 1292484,
      "禁闭岛.jpg": 2334904,
      "穿普拉达的女王.jpg": 1482072,
      "第九区.jpg": 3006772,
      "终结者.jpg": 1300656,
      "美丽人生.jpg": 1292063,
      "美国狙击手.png": 21263666,
      "美女与野兽.jpg": 25900945,
      "肖申克的救赎.jpg": 1292052,
      "花样年华.jpg": 1291557,
      "荒野猎人.jpg": 5327268,
      "菲利普船长.jpg": 4116480,
      "蝙蝠侠大战超人.jpg": 24750534,
      "超能陆战队.jpg": 11026735,
      "辛德勒的名单.jpg": 1295124,
      "这个杀手不太冷.jpg": 1295644,
      "速度与激情.jpg": 1304899,
      "金刚.jpg": 1309043,
      "钢铁巨人.jpg": 1293863,
      "闪灵.jpg": 1292225,
      "间谍之桥.jpg": 25908051,
      "阿凡达.jpg": 1652587,
      "阿波罗13号.jpg": 1293785,
      "降临.jpg": 21324900,
      "飞屋环游记.jpg": 2129039,
      "鸟人.jpg": 20438962,
      "黄金三镖客.jpg": 1401118,
      "黑天鹅.jpg": 1978709,
      "黑客帝国.jpg": 1291843,
      "黑衣人.jpg": 1301445,
      "楚门的世界.jpg": 1292064,
      "舌尖上的中国.jpg": 10606004
    }
  },
  mutations: {
    addObject(state, object) {
      state.movieList.push(object);
    },
    setGetFlag(state) {
      state.getFlag = false;
    },
    lastQuiz(state) {
      if (state.currentQuestion > 0) {
        state.currentQuestion--;
      } else {
        return false
      }
    },
    nextQuiz(state) {
      if (state.currentQuestion < state.movieList.length - 1) {
        state.currentQuestion++;
      } else {
        return false
      }
    },
    allRight(state) {
      state.movieList[state.currentQuestion].status = 2;
    },
    halfRight(state) {
      state.movieList[state.currentQuestion].status = 1;
    },
    peepStatus(state) {
      state.movieList[state.currentQuestion].status = -1;
    },
    surrenderStatus(state) {
      state.movieList[state.currentQuestion].status = 0;
    },
  },
  getters: {
    scoreSum(state) {
      state.sum = 0
      for (let i = 0; i < state.movieList.length; i++) {
        if (state.movieList[i].status > 0) {
          state.sum += state.movieList[i].status;
        }
      }
      return state.sum
    },
    checkallAnswer(state) {
      for (let i = 0; i < state.movieList.length; i++) {
        if (state.movieList[i].status >= 0) {
          state.allAnswered = true;
        } else {
          state.allAnswered = false;
        }
      }
      return state.allAnswered
    }
  }
})
