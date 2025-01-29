import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { createUser, updateUser, getUser } from '../services/api';
import LoadingSpinner from './LoadingSpinner';
import "../styles/user-form.css"

const userSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    department: z.string().min(1, 'Department is required'),
});

export default function UserForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const queryClient = useQueryClient();
    const isEditMode = Boolean(id);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(userSchema),
    });

    const { isLoading: isLoadingUser } = useQuery({
        queryKey: ['user', id],
        queryFn: () => getUser(id),
        enabled: isEditMode,
        onSuccess: (data) => reset(data)
    });

    const mutation = useMutation({
        mutationFn: (data) => isEditMode ? updateUser(id, data) : createUser(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
            toast.success(`User ${isEditMode ? 'updated' : 'created'} successfully`);
            navigate('/');
        },
        onError: () => {
            toast.error(`Failed to ${isEditMode ? 'update' : 'create'} user`);
        }
    });

    if (isLoadingUser) {
        return <LoadingSpinner />;
    }

    return (
        <div className="form-container">
            <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem' }}>
                {isEditMode ? 'Edit User' : 'Create User'}
            </h1>

            <form onSubmit={handleSubmit((data) => mutation.mutate(data))}>
                <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                        First Name
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        className="form-input"
                        {...register('firstName')}
                    />
                    {errors.firstName && (
                        <p className="error-text">{errors.firstName.message}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        className="form-input"
                        {...register('lastName')}
                    />
                    {errors.lastName && (
                        <p className="error-text">{errors.lastName.message}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="form-input"
                        {...register('email')}
                    />
                    {errors.email && (
                        <p className="error-text">{errors.email.message}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="department" className="form-label">
                        Department
                    </label>
                    <input
                        id="department"
                        type="text"
                        className="form-input"
                        {...register('department')}
                    />
                    {errors.department && (
                        <p className="error-text">{errors.department.message}</p>
                    )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="btn btn-secondary"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={mutation.isLoading}
                        className="btn btn-primary"
                    >
                        {isEditMode ? 'Update' : 'Create'} User
                    </button>
                </div>
            </form>
        </div>
    );
}