import { axiosClient } from 'libs';

const fetchData = ({ queryKey }) => {
	return axiosClient()
		.get(`/${queryKey}`)
		.then((res) => {
			// console.log('res', res);
			return res.data;
		});
};
export default fetchData;