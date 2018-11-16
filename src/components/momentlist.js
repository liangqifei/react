import React ,{Component} from 'react'
class Listcontent extends Component{
    constructor(props){
        super(props)
        this.state={
          
        }
        this.handMomentClick=this.handMomentClick.bind(this);
    }
    handMomentClick(item){
        console.log(item.id)
    }
    render(){
        return(
            <div className='moment-section'>                       
                {
                    this.props.list && this.props.list.map( ( el ) => {
                            return ( 
                                <div className='listbox' key={el.id}>
                                    <div className='list'  onClick={this.handMomentClick.bind(this,el)}>
                                        <div className='user'>
                                            <img src={ el.smallPortrait} className='avatar' alt='头像'></img>
                                            <div>{el.nickName}</div>
                                        </div>
                                        <div className='content'>
                                            {el.text}
                                        </div> 
                                    </div>  
                                </div>          
                            ) 
                        })
                }             
            </div>
        )
    }
}

export default Listcontent;