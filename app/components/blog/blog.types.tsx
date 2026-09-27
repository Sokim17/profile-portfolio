export type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	category: string;
};

export type BlogProps = {
	posts?: BlogPost[];
};
