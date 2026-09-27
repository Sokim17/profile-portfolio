export type Project = {
	title: string;
	description: string;
	year: string;
	category: string;
	url?: string;
};

export type ProjectsProps = {
	projects?: Project[];
};
