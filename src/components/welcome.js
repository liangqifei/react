import React ,{Component}from 'react';
import '../style/components/welcome.less'
class Welcome extends Component{
	render(){
		return (
				<div className='welcome'>
					<div className="spinner">
						<div className="rect1 view"></div>
						<div className="rect2 view"></div>
						<div className="rect3 view"></div>
						<div className="rect4 view"></div>
						<div className="rect5 view"></div>
					</div>
					<div className='login'>正在登录</div>
				</div>
		)
	}
}
export default Welcome;