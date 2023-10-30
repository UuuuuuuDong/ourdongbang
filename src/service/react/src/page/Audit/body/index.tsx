import React, { Dispatch, SetStateAction, useContext } from 'react';
import AuditRegisterButton from './register/button';
import {
	AuditDocumentBodyStyle,
	AuditDocumentHeaderStyle,
	AuditDocumentStyle,
} from './index.style';
import { DownArrowIcon, ExportIcon } from './icon';
import AuditDocumentPreview from './preview';
import { Audit, AuditContext } from 'context/AuditContext';

const Header = () => {
	return (
		<div className={AuditDocumentHeaderStyle}>
			<span>회계 문서</span>
			<div>
				<span>|</span>
				<div
					onClick={() => {
						console.log('export');
					}}
				>
					<span
						onClick={() => {
							alert('업데이트 예정입니다!');
						}}
					>
						회계 장부 내보내기
					</span>
					<ExportIcon width={24} height={24} />
				</div>
			</div>
		</div>
	);
};

const Body = (props: {
	audits: Audit[] | null;
	setAudits: Dispatch<SetStateAction<Audit[] | null>>;
}) => {
	const { audits, setAudits } = props;

	return (
		<div className={AuditDocumentBodyStyle}>
			<div>
				<span>날짜별</span>
				<DownArrowIcon
					width={22}
					height={12}
					onClick={() => {
						alert('업데이트 예정입니다!');
					}}
				/>
			</div>
			<div>
				<AuditRegisterButton />
				{audits?.map((audit, index) => {
					return (
						<AuditDocumentPreview
							key={index}
							index={index}
							audit={audit}
							audits={audits}
							setAudits={setAudits}
						/>
					);
				})}
			</div>
		</div>
	);
	console.log(audits, setAudits);
};

const AuditDocumentBody = () => {
	const { audits, setAudits } = useContext(AuditContext);

	return (
		<div className={AuditDocumentStyle}>
			<Header />
			<Body audits={audits} setAudits={setAudits} />
		</div>
	);
};

export default AuditDocumentBody;
