import { useSnackbar } from 'notistack';

export const useErrorHandler = () => {
	const { enqueueSnackbar } = useSnackbar();

	const getErrorMessage = (error) => {
		if (error.response && error.response.data) {
			const { message } = error.response.data;
			if (message) {
				return Array.isArray(message)?message.join(',') : message;

			}
			return error.response.data;
		}
		if (error.response) {
			return error.response.statusText || 'Error occurred';
		}
		return error.message;
	};

	const handleError = (error) => {
		// console.log('error', getErrorMessage(error));
		if (!error.response) {
			return enqueueSnackbar(error.message, { variant: 'error', preventDuplicate: true });
		}
		enqueueSnackbar(getErrorMessage(error), { variant: 'error' });
	};

	return { handleError };
};