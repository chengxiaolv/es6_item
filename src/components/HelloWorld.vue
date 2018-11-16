<template>
  <div class="content clearfix">
    <div class="TipsInfo">
      <span class="Number_of_periods">
        11选5&nbsp;&nbsp;第 <span>10</span> 期
      </span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="Surplus_tiem">
        购彩剩余时间： <span> 一天 </span>&nbsp;&nbsp;
        销售： 9:00~22:00 (78期)&nbsp;&nbsp;
        10分钟开奖&nbsp;&nbsp;
        返奖<span> 59% </span>
      </span>
    </div>
    <div class="Choice_item">
      <ul class="clearfix">
        <li v-for="(item,index) in listTime" :key="index" @click="itemClick(item)" :class="{ChoiceItem: item.Choice}">{{item.name}}</li>
      </ul>
    </div>
    <div class="play_tips">
      <span>玩法提示：</span>从01~11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<span>540</span>元。
    </div>
    <div class="Choice_Number">
      <div class="Choice_Number_left">
        <p>
          <span>选号区</span>&nbsp;至少选5个
        </p>
        <p>
          <span class="Identification">号码</span>
          <ul class="clearfix">
            <li v-for="(item,index) in NumberList" :key="index" :class="{ChoiceItem: item.Choice}" @click="numberClick(item)">{{item.name}}</li>
          </ul>
        </p>
        <p>
          <span class="Identification">选漏</span>
          <ul class="clearfix">
            <li v-for="(item,index) in OmissionNumber" :key="index" class="active">{{item}}</li>
          </ul>
        </p>
      </div>
      <div class="Choice_Number_right">
        <p>
          <span>操作区</span>&nbsp;快捷选号
        </p>
        <p>
          <ul class="clearfix">
            <li v-for="(item,index) in QuickChoiceList" :key="index" :class="{ChoiceItem: item.Choice}" @click="QuickChoice(item)">{{item.name}}</li>
          </ul>
          <span @click="clear">清除</span>
        </p>
      </div>
    </div>
    <p class="Choice_total">
      您选了 <span>0</span> 注，共 <span>0</span> 元
    </p>
    <p class="sure_choice">
      <el-button type="success">确认选号</el-button> 
      <el-button size="mini" type="danger">清空选号</el-button>
    </p>
    <div class="random_item">
      <div class="random_item_left"></div>
       <div class="random_item_right">
        <ul>
          <li v-for="(item,index) in randomBtnList" :key="index">
            <el-button size="mini" >{{item.name}}</el-button>
          </li>
        </ul>
      </div>
    </div>
    <div class="Choice_total_2">
      您选了 <span>0</span> 注，倍投<input>倍，共 <span>0</span> 元
    </div>
    <div class="Betting">
      <el-button type="primary">立即投注</el-button>
    </div>
    <div class="History_info">
      <div class="History_info_left">
        <p>
          11选5&nbsp; 第<span>325432</span>期  开奖
          <ul class="clearfix">
            <li v-for="(item,index) in AwardResultsList" :key="index">{{item}}</li>
          </ul>
          <span>今天已销78期，还剩0期</span>
        </p>
      </div>
      <div class="History_info_right">
        <p>
          <span>期号</span>
          <span>开奖号码</span>
          <span>大小比</span>
          <span>基偶比</span>
        </p>
         <p>
          <span>23452</span>
          <span>324324</span>
          <span>3：1</span>
          <span>4：1</span>
        </p>
        <p>
          <span>查看历史开奖</span>
          <span>查看走势图表</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import lottery from '../js/lottery.js';
  export default {
    data () {
      return {
        listTime: [
          {
            name: '任二',
            id: '1',
            Choice: false
          },
           {
            name: '任三',
            id: '2',
            Choice: false
          },
           {
            name: '任四',
            id: '3',
            Choice: false
          },
           {
            name: '任五',
            id: '4',
            Choice: false
          },
           {
            name: '任六',
            id: '5',
            Choice: false
          },
           {
            name: '任七',
            id: '6',
            Choice: false
          },
           {
            name: '任八',
            id: '7',
            Choice: false
          }
        ], 
        NumberList:[
          {
            name: '01',
            Choice: false
          },
           {
            name: '02',
            Choice: false
          },
           {
            name: '03',
            Choice: false
          },
           {
            name: '04',
            Choice: false
          },
           {
            name: '05',
            Choice: false
          },
           {
            name: '06',
            Choice: false
          },
           {
            name: '07',
            Choice: false
          },
           {
            name: '08',
            Choice: false
          },
           {
            name: '09',
            Choice: false
          },
           {
            name: '10',
            Choice: false
          },
           {
            name: '11',
            Choice: false
          }
        ],
        OmissionNumber: [0,2,2,2,2,2,2,2,2,2,2],
        QuickChoiceList:[
          {
            name: '全',
            id: 1,
            Choice: false
          },
          {
            name: '大',
            id: 2,
            Choice: false
          },
          {
            name: '小',
            id: 3,
            Choice: false
          },
          {
            name: '基',
            id: 4,
            Choice: false
          },
          {
            name: '偶',
            id: 5,
            Choice: false
          },
        ],
        randomBtnList:[
          {
            name: '随机1注',
            id: 1
          },
           {
            name: '随机5注',
            id: 2
          },
           {
            name: '随机10注',
            id: 3
          },
           {
            name: '清空列表',
            id: 4
          }
        ],
        AwardResultsList: ['09','02','01','07','11'],
      }
    },
    methods: {
      itemClick(item){
        for(let item of this.listTime.values()){
          item.Choice = false;
        }
        item.Choice = true;
      },
      QuickChoice(item){
        for(let item of this.QuickChoiceList.values()){
          item.Choice = false;
        }
        item.Choice = true;
      },
      numberClick(item){
        item.Choice = !item.Choice;
      },
      clear(){
        for(let item of this.listTime.values()){
          item.Choice = false;
        }
        for(let item of this.QuickChoiceList.values()){
          item.Choice = false;
        }
        for(let item of this.NumberList.values()){
          item.Choice = false;
        }
      }
    },
    created(){
      
    }
  }
</script>

<style scoped lang="scss">
  html,body{
    width: 100%;
    height: 100%;
  }
  .content{
    padding: 0px 50px 0px 50px;
    width: 900px;
    height: 100%;
    margin: 0 auto;
    background-color: #eee;
    overflow-y: auto;
    .Choice_item{
      ul{
        li{
          float: left;
          width: 50px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background-color: #fff;
          border: 1px solid #eee;
          &:hover{
            color: #fff;
            cursor: pointer;
            background-color: #CE732D;
          }
        }
      }
    }
    .ChoiceItem{
      color: #fff;
      background-color: #CE732D !important;
    }
    .TipsInfo{
      margin-bottom: 20px;
      margin-top: 30px;
      .Number_of_periods{
        font-size: 26px;
        span{
          color: red;
        }
      }
      .Surplus_tiem{
        span{
          color: red;
        }
      }
    }
    .play_tips{
      padding-left: 50px;
      margin-top: 10px;
      font-size: 13px;
      span:first-child{
        font-weight: bold;
      }
      span:last-child{
        color: red;
      }
    }
    .Choice_Number{
      display: flex;
      margin-top: 20px;
      border-bottom: solid 1px #E6E6E6;
      padding-bottom: 15px;
      .Choice_Number_left{
        flex:1;
        p:first-child{
          text-align: center;
          margin-bottom: 20px;
          color: #9D9D9D;
          font-size: 12px;
          span{
            color:red;
            font-weight: bold;
            font-size: 14px;
          }
        }
        .Identification{
          background-color: #D4D4D4;
          display: inline-block;
          width: 40px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          font-size: 13px;
          border-radius: 5px;
        }
        ul{
          li{
            float: left;
          }
        }
        p:nth-child(2),p:last-child{
          margin-top: 10px;
          display: flex;
        }
        p:nth-child(2){
          ul{
            margin-left: 5px;
            li{
              width: 30px;
              height: 30px;
              border: solid 1px #fff;
              border-radius: 50%;
              text-align: center;
              line-height: 30px;
              margin: 0px 5px 0px 5px;
              &:hover{
                color: #fff;
                cursor: pointer;
                background-color: #CE732D;
              }
            }
          }
          span{
            margin-top: 6px;
          }
        }
        p:last-child{
          ul{
            margin-top: 3px;
            margin-left: 18px;
            li{
              width: 32px;
              margin: 0px 5px 0px 5px;
            }
            .active{
              color: red;
            }
          }
        }
      }
      .Choice_Number_right{
        p:first-child{
          color: #9D9D9D;
          font-size: 12px;
          text-align: center;
          span{
            color:red;
            font-weight: bold;
            font-size: 14px;
          }
        }
        p:last-child{
          width: 300px;
          margin-top: 20px; 
          display: flex;
          ul{
            li{
              float: left;
              width: 30px;
              height: 20px;
              border: solid 1px #fff;
              text-align: center;
              line-height: 20px;
              margin: 0px 5px 0px 5px;
              font-size: 13px;
              &:hover{
                color: #fff;
                cursor: pointer;
                background-color: #CE732D;
              }
            }
          }
          span{
            color: #6FAAE0;
            margin-left: 5px;
            font-size: 13px;
            line-height: 23px;
            &:hover{
              cursor: pointer;
              color: #2A93F5;
            }
          }
        }
      }
    }
    .Choice_total{
      text-align: center;
      margin: 8px 0px;
      span{
        color: red;
      }
    }
    .sure_choice{
      text-align: center;
      margin-top: 20px;
    }
    .random_item{
      display: flex;
      margin-top: 20px;
      .random_item_right {
        width: 100px;
        border: solid 1px #E6E6E6;
        padding-top: 13px;
        li{
          height:30px;
          line-height: 30px;
          text-align: center;
        }
      }
      .random_item_left{
        border: solid 1px #E6E6E6;
        background-color: #fff;
        height:150px;
        flex: 1;
        overflow-y: auto;
      }
    }
    .Choice_total_2{
      margin-top: 20px;
      padding-left: 50px;
      span{
        color:red;
      }
      input{
        width: 50px;
        margin: 0px 5px;
      }
    }
    .Betting{
      margin-top: 20px;
      text-align: center;
      padding-bottom: 20px;
      border-bottom: solid 1px #E6E6E6;
    }
    .History_info{
      margin-top: 20px;
      display: flex;
      .History_info_left{
        border-right: solid 1px #E6E6E6;
        flex:1;
        text-align: center;
        span:first-child{
          color: red;
        }
        ul{
          margin-top: 10px;
          margin-bottom: 10px;
          padding-left: 125px;
          li{
            float: left;
            color:#fff;
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background-color: #C5594A;
            border-radius: 50%;
            margin: 0px 5px;
          }
        }
      }
      .History_info_right{
        flex:1;
        span{
          display: inline-block;
          width: 100px;
          text-align: center;
        }
        p{
          height:28px;
          line-height: 28px;
        }
        p:last-child{
          padding-left: 150px;
          span{
            color: #6FAAE0;
            margin-left: 5px;
            font-size: 13px;
            line-height: 23px;
            &:hover{
              cursor: pointer;
              color: #2A93F5;
            }
          }
        }
      }
    }
  }
</style>
