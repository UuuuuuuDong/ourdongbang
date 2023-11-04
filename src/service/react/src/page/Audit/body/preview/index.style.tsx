import { css } from '@emotion/css';

export const AuditDocumentPreviewStyle = css({
	width: '100%',
	height: '100%',
	display: 'grid',
	gridTemplateRows: '3fr 1fr',
	cursor: 'pointer',

	'&:hover': {
		outline: '5px auto -webkit-focus-ring-color',
	},
	'&:active': {
		outline: 'none',
	},
});

export const AuditDocumentPreviewImageStyle = css({
	height: '100%',
	borderBottom: '1px solid black',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#D9D9D9',

	'> img': {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
});

export const AuditDocumentPreviewTitleStyle = css({
	height: 70,
	display: 'flex',
	alignItems: 'center',
	padding: '0 20px',
	fontSize: 20,
	fontFamily: 'Pretendard-regular',
});
