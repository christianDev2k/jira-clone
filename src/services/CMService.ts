import apiInstance from 'constant/apiInstance';
import { InsertCommentValueType, UpdateCommentValueType } from 'types';

const api = apiInstance({
    baseURL: import.meta.env.VITE_COMMENT_MANAGEMENT,
});

const CMServices = {
    getAll: (taskID: number) => api.get(`/getAll?taskId=${taskID}`),
    insertComment: (value: InsertCommentValueType) => api.post('/insertComment', value),
    updateComment: (value: UpdateCommentValueType) =>
        api.put(`/updateComment?id=${value.id}&contentComment=${value.contentComment}`),
    deleteComment: (id: number) => api.delete(`deleteComment?idComment=${id}`),
};

export default CMServices;
