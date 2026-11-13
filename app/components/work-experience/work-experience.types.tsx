export type WorkExperienceItem = {
	company: string;
	role: string;
	period: string;
	duration?: string;
	location: string;
	description: string[];
};

export type WorkExperienceProps = {
	experiences?: WorkExperienceItem[];
};
