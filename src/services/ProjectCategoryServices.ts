import apiInstance from 'constant/apiInstance';
import { ProjectCategoryType } from 'types/ProjectCategory';

const api = apiInstance({
    baseURL: import.meta.env.VITE_PROJECT_CATEGORY,
});

const ProjectCategoryServices = {
    ProjectCategory: () => api.get<ApiResponse<ProjectCategoryType>>(''),
};

export default ProjectCategoryServices;
