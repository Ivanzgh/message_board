import React,{Component} from 'react';

export default class ComponentItem extends Component {
    render(){
        return (
            <div  className="comment">
                <div className="comment-box">
                    <div  className="comment-user">
                        <span>user</span>
                    </div>
                    <p>content</p>
                </div>
                <div className="btn">
                    <a href="javascript:">删除</a>
                </div>
            </div>
        )
    }
}