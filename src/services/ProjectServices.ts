import apiInstance from 'constant/apiInstance';
import { AllProjectType } from 'types';

const api = apiInstance({
    baseURL: import.meta.env.VITE_PROJECT,
});

const ProjectServices = {
    getAllProject: () => api.get<ApiResponse<AllProjectType[]>>('/getAllProject'),
};

export default ProjectServices;
