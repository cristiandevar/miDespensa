import { Inertia } from '@inertiajs/inertia';

export const fetchUSer = async () => {
    const response = await Inertia.get('/user');
    return response.props.user;
};
