import React, { Component } from 'react';
import *as actionCreators from '../action/memAction.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time:''
         };
    }
    // 单选按钮
    change=(e)=>{
        let {data,onOff,allOnoff}=this.props;
        e.checked=!e.checked;
       this.setState(data)
       onOff =data.every(e => e.checked = e.checked);
       allOnoff(onOff)
    }
     // 删除按钮
    del=(e)=>{
        // console.log(e)//所有数据
       let {deltan} = this.props
        deltan(e)
    }


    render() {
         let { data, e, i, nowpage}=this.props;
         let time=e.time;
        let d = new Date(time*1);
         d.setTime(d.getTime(time))
        let time1 = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()+'  '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
        return (
            <tr>
                <td>
                    <label>
                        <input 
                        type="checkbox"
                        className="ace" 
                        onChange={this.change.bind(this, e)}
                        checked={e.checked}
                         /><span className="lbl"></span>
                    </label>
                </td>
                <td>{e.MessNumber}</td>
                <td>{e.userName}</td>
                <td className="message">{e.mess}</td>
                <td>{time1}</td>
                <td>
                    <i className="iconfont icon-yuandianxiao dian"></i>
                    <span>{e.status}</span>
                </td>
                <td>
                    <a 
                    title="删除" 
                    href="javascript:;" 
                    className="yellow"
                    onClick={this.del.bind(this,e,data)}
                    ><i className="iconfont icon-shanchu1"></i></a>
                </td>
            </tr>
        );
    }
}

export default connect((state) => {
    return { data: state.reducer3.content };
}, (dispatch) => bindActionCreators(actionCreators, dispatch))(MessageList)