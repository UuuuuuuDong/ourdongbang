import { css } from '@emotion/css';

export const AuditDocumentPreviewStyle = css({
	width: '100%',
	height: '100%',
	display: 'grid',
	gridTemplateRows: 'auto auto',
});

export const AuditDocumentPreviewImageStyle = css({
	height: 255,
	borderBottom: '1px solid black',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#D9D9D9',
});

export const AuditDocumentPreviewTitleStyle = css({
	height: 70,
	display: 'flex',
	alignItems: 'center',
	padding: '0 20px',
	fontSize: 20,
	fontFamily: 'Pretendard-regular',
});
