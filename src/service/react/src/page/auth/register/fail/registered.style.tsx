import { css } from '@emotion/css';
import { PageStyle } from 'page/page.style';

export const RegisteredPageStyle = css(PageStyle, {
	backgroundColor: '#FFFFFF',
	width: 1000,
	height: 800,

	'&': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	'> div': {
		display: 'grid',
		gridTemplateRows: 'auto auto',
		gridGap: '4rem',

		'> span': {
			margin: 'auto',
			':nth-child(1)': {
				fontSize: '1.5rem',
			},
			':nth-child(2)': {
				fontSize: '1.2rem',
				cursor: 'pointer',
				textDecoration: 'underline',
				textUnderlinePosition: 'under',
			},
		},
	},
});
