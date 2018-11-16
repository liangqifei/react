import React ,{Component}from 'react';
import '../style/components/footbar.less'
import {Link} from 'react-router-dom'
class Footbar extends Component{
	render(){
		return (
				<div className='footBar'>
					<div className='foot-bar-item'>
                        <Link to='/'>热门话题</Link>
                    </div>
                    <div className='foot-bar-item'>
                        <Link to='/market'>二手市场</Link>
                    </div>
                    <div className='foot-bar-item'>
                        <Link to='/user'>我的</Link>
                    </div>
				</div>
		)
	}
}
export default Footbar;