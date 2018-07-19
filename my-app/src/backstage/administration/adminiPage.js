import React, {Component} from 'react';
import '../css/Pagecomponent.css';
import *as actionCreators from '../action/adminiAction.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class AdminiPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num: this.props.nowpage
         };
    }
    // 页码的数字点击
    pageClick=(i)=>{
        let {oddAdmini,numFn,ke,val,allOnoff,onOff,} = this.props;
        this.setState({num:i})
         onOff=false
        allOnoff(onOff)
        // console.log(ke,val)
        // 如果左侧的下拉菜单是真的
        if(!ke){
            oddAdmini(i)
        }
        numFn(i)
    }
     // 上一页按钮
    prevClick=(num)=>{
        let {oddAdmini,numFn,ke,val}=this.props;
        if(num>1){
            num--
            if (!ke) {
                oddAdmini(num)
            } 
            numFn(num)
            this.setState({num})
        }
    }
    // 页码的下一页
    nextClick=(num)=>{
        let {oddAdmini,count,numFn,ke,val}=this.props;
        if(num<count){
            num++
            if (!ke) {
                oddAdmini(num)
            } 
            numFn(num)
            this.setState({num})
        }
    }



    render() {
        let {count,nowpage}=this.props;
        let {num}=this.state;
        num=nowpage
        let pageArr=[]
        for(let i=1;i<=count;i++){
            pageArr.push(
                <a
                    className={(i===num)?'cur':''}
                    key={i}
                    onClick={this.pageClick.bind(this,i)}
                >{i}</a>
            )
        }
        return (
             <div className="page_box">
                <a 
                onClick={this.prevClick.bind(this,num)}
                >&lt;</a>
                  {pageArr} 
                <a
                onClick={this.nextClick.bind(this,num)}
                >&gt;</a>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        data: state.reducer4.content,
        count: state.reducer4.page
    };
}, (dispatch) => bindActionCreators(actionCreators, dispatch))(AdminiPage)