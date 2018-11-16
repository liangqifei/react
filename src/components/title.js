
import React,{Component} from "react"
import '../style/components/moment.less'
class Title extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
          
        }
        this.gomore=this.gomore.bind(this);
    }  
    gomore(path){
        console.log("gomore"+path)
        console.log(this.props.history);
    }
    render() {  
        return (    
            <div className='title'>
                <span>{this.props.titlecontent}</span>
                <span onClick={this.gomore.bind(this,this.props.gopath)}>更多+</span>    
            </div>
        )  
    }
    
}

export default Title;