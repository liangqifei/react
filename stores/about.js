import { observable } from 'mobx';

class AboutStore {
	@observable title = 'this is about1 page';
}

export default new AboutStore();