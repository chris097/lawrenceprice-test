export default function ValidationError({ message }) {
	return message ? <span style={{ color: 'red', display: 'block', fontSize: '12px' }}>{message}</span> : null;
}