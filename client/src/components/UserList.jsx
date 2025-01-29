import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteUser, getUsers } from '../services/api';
import '../styles/user-list.css'

export default function UserList() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [page, setPage] = useState(1);

    // Updated the useQuery call to use an object as per React Query v5
    const { data, isLoading } = useQuery({
        queryKey: ['users', page],       // Query key including page number
        queryFn: () => getUsers(page),   // Function to fetch data
    });

    const deleteMutation = useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries(['users']);  // Invalidates users query to refetch data
            toast.success('User deleted successfully');
        },
        onError: () => {
            toast.error('Failed to delete user');
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-list-container">
            <div className="header">
                <h1 className="title">Users</h1>
                <div className="buttons">
                    {/* Button to navigate to create new user */}
                    <button onClick={() => navigate('/users/new')} className="add-user-button">
                        Add User
                    </button>
                </div>
            </div>

            {/* Additional navigation button */}
            <div className="navigate-home">
                <button onClick={() => navigate('/')} className="home-button">
                    Go to Home
                </button>
            </div>

            <div className="user-table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.users?.map((user) => (
                            <tr key={user._id}>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.department}</td>
                                <td>
                                    <button
                                        onClick={() => navigate(`/users/${user._id}/edit`)}
                                        className="edit-button"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteMutation.mutate(user._id)}
                                        className="delete-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    className="pagination-button"
                >
                    Previous
                </button>
                <button
                    onClick={() => setPage((p) => p + 1)}
                    disabled={!data?.pagination?.hasMore}
                    className="pagination-button"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
