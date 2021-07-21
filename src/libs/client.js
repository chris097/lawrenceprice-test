import axios from 'axios';
import { BASE_URL } from '../helpers/constant';

const client = () => {
	return axios.create({
		baseURL: BASE_URL,
		headers: {
			Accept: 'application/json',
		},
	});
};
export default client;