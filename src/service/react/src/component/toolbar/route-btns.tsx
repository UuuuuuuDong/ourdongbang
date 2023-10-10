import React, { useEffect, useRef } from 'react';
import { ToolBarRouteBtnStyle, ToolBarRouteBtnsStyle } from './route-btns.style';
import { Link, useLocation } from 'react-router-dom';
import { Me } from 'context/AuthContext';

const ToolBarRouteBtn = (props: { to: string; label: string }) => {
	const { to, label } = props;
	const location = useLocation();
	const btnRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (btnRef.current) {
			if (location.pathname === to) {
				btnRef.current.style.fontFamily = 'Pretendard-bold';
			} else {
				btnRef.current.style.fontFamily = 'Pretendard-regular';
			}
		}
	}, [location]);

	return (
		<div className={ToolBarRouteBtnStyle}>
			<Link to={to}>
				<button ref={btnRef}>{label}</button>
			</Link>
		</div>
	);
};

const ToolBarRouteBtns = (props: { me: Me | null }) => {
	const { me } = props;
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (divRef.current) {
			if (me) {
				divRef.current.style.gridColumn = '3';
			} else {
				divRef.current.style.gridColumn = '5';

				const loginBtnDiv = divRef.current.children[0] as HTMLDivElement;
				const registerBtnDiv = divRef.current.children[1] as HTMLDivElement;

				loginBtnDiv.style.borderLeft = 'none';
				registerBtnDiv.style.borderRight = 'none';
			}
		}
	}, [me]);

	return (
		<div className={ToolBarRouteBtnsStyle} ref={divRef}>
			{me ? (
				<>
					<ToolBarRouteBtn to="/main/info" label="정보" />
					<ToolBarRouteBtn to="/main/calendar" label="캘린더" />
					<ToolBarRouteBtn to="/main/audit" label="회계" />
					<ToolBarRouteBtn to="/main/search" label="탐색" />
					<ToolBarRouteBtn to="/main/mypage" label="마이페이지" />
				</>
			) : (
				<>
					<ToolBarRouteBtn to="/auth/login" label="로그인" />
					<ToolBarRouteBtn to="/auth/register" label="회원가입" />
				</>
			)}
		</div>
	);
};

export default ToolBarRouteBtns;
