export type Training = {
	title: string;
	provider: string;
	year: string;
	description?: string;
	url?: string;
};

export type TrainingsProps = {
	trainings?: Training[];
};
