import { css } from '@emotion/css';

export const AuditFormBodyAmountStyle = css({
	display: 'grid',
	gridTemplateColumns: '1.01fr 3.6fr 2fr',
	borderRight: '1px solid black',

	'> div': {
		display: 'flex',
		alignItems: 'center',
	},
	'> div:nth-child(1)': {
		borderRight: '1px solid black',
		justifyContent: 'center',
		backgroundColor: '#F2F2F2',
		'> span': {
			fontSize: 10,
			fontFamily: 'Pretendard-regular',
		},
	},
	'> div:nth-child(2)': {
		padding: '0 8.6%',
		'> input': {
			width: '100%',
			fontSize: 10,
			fontFamily: 'Pretendard-regular',
		},
		'> span': {
			fontSize: 10,
			fontFamily: 'Pretendard-regular',
		},
	},
	'> div:nth-child(3)': {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		'> div': {
			display: 'flex',
			alignItems: 'center',
			'> span': {
				fontSize: 8,
				fontFamily: 'Pretendard-regular',
			},
			'> input': {
				margin: '0 0 0 5px',
				width: 10,
				height: 10,
				accentColor: 'black',
			},
		},
	},
});