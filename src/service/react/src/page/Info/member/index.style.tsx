import { css } from '@emotion/css';

export const InfoPageMemberStyle = css({
	width: '100%',
	display: 'grid',
	gridTemplateRows: 'auto 1fr',
	border: '1px solid black',
});

export const InfoPageMemberBodyStyle = css({
	gridRow: 2,
	display: 'grid',
	gridTemplateRows: 'auto auto',
	marginBottom: '2rem',

	'> div': {
		margin: '0 50px',
		display: 'grid',
		gridTemplateRows: '100px auto',

		'> div': {
			width: '95%',
		},

		'> div:nth-child(1)': {
			height: '50px',
			display: 'flex',
			margin: '17px auto 33px auto',
			justifyContent: 'space-between',

			'> span': {
				marginTop: 'auto',
			},
			'> span:nth-child(1)': {
				fontSize: '25px',
				fontFamily: 'Pretendard-medium',
			},
			'> span:nth-child(2)': {
				fontSize: '20px',
				fontFamily: 'Pretendard-regular',
			},
		},

		'> div:nth-child(2)': {
			display: 'grid',
			margin: '0 auto',
			gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
			gap: 20,
			overflowY: 'auto',
		},
	},

	'> div:nth-child(1)': {
		// manager
		paddingBottom: '30px',
		borderBottom: '1px solid black',
	},

	'> div:nth-child(2)': {
		// member
	},
});
