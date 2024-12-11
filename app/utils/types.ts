export type BuildApiCardPropsType = {
	title?: string;
	icon?: React.ReactNode;
	description?: string;
	background?: string;
	color?: string;
	color2?: string;
	iconBg?:string;
};

export type CardPropsType = {
	title?: string;
	children?: React.ReactNode;
	description?: string;
	className?: string;
	className2?: string;
	pr?: string;
};

export type CarouselType = {
	children?: React.ReactNode;
};

export type WhatWeDoCardSmallPropsType = {
	id: string;
	title?: {
		number?: string;
		name?: string;
	};
	content?: {
		subTitle?: string;
		list?: {
			key?: string;
			value?: React.ReactNode;
		};
	};
	image: string;
};

export type imgsType = {
	image?: string;
};

export type Data = {
	[key: string]: string;
};
