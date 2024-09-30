import { useEffect, useState } from 'react';
import { fetchUser } from '@/Services/userServices';

interface User {
    id: number;
    email:string
    name: string;
    description: string;
}

const useUser = () => {
    const [user, setUser] = useState<User[]>([]);

    useEffect(() => {
        fetchUser().then(data => setUser(data));
    }, []);

    return user;
};

export default useUser;
