import {fetch} from '../http/http';

export default {

	/**
	 * 获取首页列表页数据
	 * @returns {Promise.<*>}
	 */
	async getList(params={}){
		return await fetch('/social/moment/getAll',params).then( ( res ) =>res.body);
	},
	/**
	 * 获取首页列表页数据
	 * @returns {Promise.<*>}
	 */
	async getmarketList(params={}){
		return await fetch('/app/flea/getPage',params).then( ( res ) =>res.body);
	}
}