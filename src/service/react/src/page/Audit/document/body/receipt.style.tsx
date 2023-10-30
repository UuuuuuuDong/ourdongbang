import { css } from '@emotion/css';

export const AuditDocumentBodyReceiptStyle = css({
	display: 'grid',
	gridTemplateRows: '1fr 6fr',
	borderRight: '2px solid black',

	'> div': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	'> div:nth-child(1)': {
		borderBottom: '2px solid black',
		backgroundColor: '#F2F2F2',
		'> span': {
			fontSize: 10,
			fontFamily: 'Pretendard-regular',
		},
	},
	'> div:nth-child(2)': {
		'> img': {
			width: '220px',
			height: '125px',
			objectFit: 'cover',
			border: '2px solid black',
		},
	},
});
