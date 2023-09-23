export type MemberType = {
    userId: number;
    name: string;
    avatar: string;
};

export type CreatorType = {
    id: number;
    name: string;
};

export type AllProjectType = {
    members: MemberType[];
    creator: CreatorType;
    id: number;
    projectName: string;
    description: string;
    categoryId: number;
    categoryName: string;
    alias: string;
    deleted: boolean;
};
