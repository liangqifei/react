
    import React,{Component} from "react"
    import '../style/components/market.less'
    class Market extends Component{
        constructor(props){
            super(props)
            console.log(this.props)
            this.state={

            }
            this.handMarketClick=this.handMarketClick.bind(this);
        }  
    handMarketClick(item){
        console.log(item.id)
    }
    render() {
       
                return (
                    <div className='market-section'>
                            {
                               this.props.list && this.props.list.map( ( el ) => {
                                    return ( 
                                        <div className='listbox'  key={el.id}>
                                            <div className='list' onClick={this.handMarketClick.bind(this,el)} data-id={el.id}>
                                                <div className='user'>
                                                    <img src={ el.smallPortrait} className='avatar' alt='头像'></img>
                                                    <div>{el.nickName}</div>
                                                </div>
                                                <div className='content'>
                                                    {el.title}
                                                </div> 
                                            </div> 
                                            <div className='listlike'>
                                                <div className='likeitem'>点赞</div>
                                                <div className='likeitem likeitemcenter'>分享</div>
                                                <div className='likeitem'>评论</div>
                                            </div>
                                        </div>          
                                    ) 
                                })
                            }
                    </div>
                )
            
           
           
        
      
    }
    
}
export default Market;