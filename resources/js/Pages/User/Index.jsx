import {React, useState} from 'react';
import Table from '@/Components/Tables/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router, usePage, Link, useForm } from '@inertiajs/react';
import { format } from 'date-fns';
import PrimaryButton from '../../Components/PrimaryButton';
import AddButton from '@/Components/ABM/AddButton'
import { formatRelativeWithOptions } from 'date-fns/fp';
import ConfirmModal from '../../Components/ConfirmModal';

export default function Index({errorMsg, successMsg}){
    const users = usePage().props.users;
    const errorIndex = usePage().props.error;
    const [showConfirm, setShowConfirm] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    // const [routeForm, setRouteForm] = useState('');
    const columns = [
        'Nro',
        'Nombre',
        'Email',
        'Estado',
        'Acciones'
    ]
    const { data, setData, setError, patch, processing, errors, reset } = useForm({
        id:'',
        active:false
    });

    const submit = (e, user) => {

        e.preventDefault();

        setShowConfirm(true);
        setCurrentUser(user);
    }

    const onConfirm = () => {
        setShowConfirm(false);
        let routeForm = currentUser.active?'users.deactive':'users.active';
        let active = currentUser.active
        patch(route(routeForm, currentUser), {
            onSuccess:(page) => {
                reset()
            }
        });
    }


    return (
    <>
      <AuthenticatedLayout>
        {errorIndex&&
            <div style={{color:"red"}}>{errorIndex}</div>
        }
        {successMsg&&
            <div style={{color:"green"}}>{successMsg}</div>
        }
        <AddButton
            hrefButton="users.create"
            method="put">
                Nuevo
        </AddButton>
        <Table columns={columns} >
            {users.map((user, key)=>{
                return(
                <tr key={key}>
                    <td className="py-4 whitespace-nowrap text-sm text-right">
                        {key + 1}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-left">
                        {user.name}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                            {user.email}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-left">
                        {user.active?'Activo':'Inactivo'}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center space-x-3.5">

                            <Link className="hover:text-primary" title="Ver" href={route('users.show',user.id)} method="get">
                                <svg width="18" height="18" viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="8.192"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"></path></g></svg>
                            </Link>

                            <Link className="hover:text-primary" title="Modificar" href={route("users.edit", user.id)} method="get">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </Link>

                            <form onSubmit={(e) => submit(e, user)}>
                                <button type="submit" className="flex items-center" disabled={processing}>
                                {
                                    user.active?
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        transform="matrix(1, 0, 0, 1, 0, 0)"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth="0"
                                        />

                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                        <g
                                            id="SVGRepo_iconCarrier"
                                        >
                                            <path
                                                stroke="#0131ef"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 6H9a6 6 0 1 0 0 12h6a6 6 0 0 0 0-12Z"
                                            />

                                            <circle
                                                cx="15"
                                                cy="12"
                                                r="3"
                                                fill="#0131ef"
                                                stroke="#0131ef"
                                                strokeWidth="2"
                                            />

                                        </g>

                                    </svg>
                                    :
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        transform="matrix(-1, 0, 0, 1, 0, 0)"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth="0"
                                        />

                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                        <g
                                            id="SVGRepo_iconCarrier"
                                        >
                                            <path
                                                stroke="#a6a6a6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 6H9a6 6 0 1 0 0 12h6a6 6 0 0 0 0-12Z"
                                            />

                                            <circle
                                                cx="15"
                                                cy="12"
                                                r="3"
                                                fill="#a6a6a6"
                                                stroke="#a6a6a6"
                                                strokeWidth="2"
                                            />

                                        </g>

                                    </svg>
                                }
                                </button>
                            </form>

                        </div>

                    </td>

                </tr>
            );})}
        </Table>
            <div className="relative w-full h-[300px] gray-300 flex justify-center items-center">

                <ConfirmModal
                    isOpen={showConfirm}
                    message="¿Estás seguro de realizar esta acción?"
                    onConfirm={onConfirm}
                    onCancel={() => setShowConfirm(false)}
                />
            </div>

      </AuthenticatedLayout>
    </>
  );
};
