import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { useEffect } from 'react';
import { getAllProjectThunk } from 'store/ProjectSlice';

const ProjectManagement = () => {
    const dispatch = useAppDispatch();
    const { allProjects } = useSelector((state: RootState) => state.ProjectSliceReducer);

    useEffect(() => {
        dispatch(getAllProjectThunk());
    }, [dispatch]);

    console.log(allProjects);

    return (
        <div className='p-5'>
            <ContentContainer className='bg-[var(--white-color)] p-8 rounded-lg shadow-sm'>
                <h1 className='text-center font-bold text-3xl'>Project Management</h1>

                <table className='table-project mt-4 w-full'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Creator</th>
                            <th>Members</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProjects?.map(project => (
                            <tr>
                                <td className='text-center'>{project.id}</td>
                                <td className=''>{project.projectName}</td>
                                <td className=''>{project.categoryName}</td>
                                <td className='text-center'>
                                    <span className='cursor-pointer bg-[var(--blue-100)] px-1 py-0.5 rounded-md border border-[var(--blue-300)]'>
                                        {project.creator.name}
                                    </span>
                                </td>
                                <td className=''>Member</td>
                                <td className='text-center'>
                                    <button className='px-2 mx-1'>
                                        <i className='fa-regular fa-pen-to-square'></i>
                                    </button>
                                    <button className='px-2 mx-1'>
                                        <i className='fa-regular fa-trash-can'></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ContentContainer>
        </div>
    );
};

const ContentContainer = styled.div`
    .table-project {
        th,
        td {
            border: 1px solid var(--bd-input-color);
            padding: var(--p-8) var(--p-8);
        }
    }
`;

export default ProjectManagement;
