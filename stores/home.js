import { observable } from 'mobx';
import HomeApi from 'api/home';

const HomeStore = observable( {
	list: [],
	marketlist:[],
	// 获取首页数据y
	async getList(params={}) {
		this.list = await HomeApi.getList(params);
	},
	async getmarketList(params={}) {
		this.marketlist=(await HomeApi.getmarketList(params)).list;
	}
	
} );
export default HomeStore;