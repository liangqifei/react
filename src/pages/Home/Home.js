import React, { Component } from 'react';
import "../..//style/pages/home/home.less"
import { observer, inject } from 'mobx-react';
import Title from '../../components/title'
import MomentList from '../../components/momentlist'
import MarketList from '../../components/marketlist'

@inject( 'homeStore' )
@observer
class Home extends Component{
    constructor(props){
        super()
    }
    componentDidMount() {
        this.props.homeStore.getList({
            collegeId:2357
        });
        this.props.homeStore.getmarketList({
            collegeId:2357,
            curPage:1
        });

     
    }

    render(){
        return (
            <div className='home-section'>
                <div className='moment-section'>
                    <Title titlecontent="热门评论" gopath='hotmoment'></Title>
                    <MomentList list={this.props.homeStore.list} onClick={this.handMomentClick}></MomentList>
                </div>
                <div className='market-section'>
                    <Title titlecontent="二手市场"  gopath='market'></Title>
                    <MarketList list={this.props.homeStore.marketlist} onClick={this.handMomentClick}></MarketList>
                </div>
            </div>
           
        )
    }
}
export default Home;

