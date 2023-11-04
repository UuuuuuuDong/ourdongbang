import React from 'react';

export const HumanIcon = (props: { width: number | string; height: number | string }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 29 30"
			fill="none"
		>
			<path
				d="M28 29C28 21.2677 21.9562 15 14.5 15C7.04383 15 1 21.2677 1 29H28Z"
				fill="black"
				stroke="black"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.5 15C18.6421 15 22 11.866 22 8C22 4.13401 18.6421 1 14.5 1C10.3579 1 7 4.13401 7 8C7 11.866 10.3579 15 14.5 15Z"
				fill="black"
				stroke="black"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const EditIcon = (props: { width: number | string; height: number | string }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 18 18"
			fill="none"
		>
			<path
				d="M1.10071 18.3958L1.10393 18.3991C1.18955 18.4853 1.29136 18.5538 1.40352 18.6005C1.51569 18.6473 1.63599 18.6714 1.7575 18.6715C1.85976 18.6714 1.9613 18.6546 2.05809 18.6216L7.32784 16.834L17.4401 6.72166C18.0583 6.10342 18.4056 5.26492 18.4056 4.39062C18.4055 3.51633 18.0582 2.67786 17.4399 2.05967C16.8217 1.44148 15.9832 1.0942 15.1089 1.09424C14.2346 1.09428 13.3961 1.44163 12.7779 2.05987L2.66564 12.1722L0.87816 17.4418C0.821854 17.6056 0.812867 17.7821 0.852228 17.9508C0.89159 18.1196 0.977707 18.2738 1.10071 18.3958ZM13.6177 2.89955C14.0137 2.50653 14.5494 2.28646 15.1073 2.28754C15.6653 2.28861 16.2 2.51073 16.5946 2.90526C16.9891 3.2998 17.2112 3.83459 17.2123 4.39253C17.2133 4.95048 16.9932 5.48611 16.6002 5.88214L15.2704 7.21192L12.2878 4.22932L13.6177 2.89955ZM3.70137 12.8158L11.4482 5.069L14.4308 8.05159L6.68392 15.7984L2.17016 17.3296L3.70137 12.8158Z"
				fill="black"
			/>
		</svg>
	);
};
