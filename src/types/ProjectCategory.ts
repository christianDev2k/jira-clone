export type ProjectCategoryItemType = {
    id: number;
    projectCategoryName: string;
};

export type ProjectCategoryType = {
    statusCode: number;
    content: ProjectCategoryItemType[];
    dateTime: string;
};
