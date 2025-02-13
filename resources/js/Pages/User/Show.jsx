import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from "@inertiajs/react";
import { format } from 'date-fns';



export default function Show({children}){
    const user = usePage().props.auth.user;
    return (
        <>
            <AuthenticatedLayout>
                <Head
                    title="Ver Usuario"
                />



                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">

                    <div className="flex justify-end">
                            <Link
                                href={route('users.index')}
                                className="mr-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
                            >
                                Atras
                            </Link>
                    </div>

                    <div className="md:flex">
                        <div className="p-8 w-full">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">Información de {user.name}</h2>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-xs">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <label
                                            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            {user.email}
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-xs">
                                        Creado
                                    </label>
                                    <div className="relative">
                                        <label
                                            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            {format(new Date(user.created_at), 'dd/MM/yyyy')}
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-xs">
                                        Modificado
                                    </label>
                                    <div className="relative">
                                        <label
                                            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            {format(new Date(user.updated_at), 'dd/MM/yyyy')}
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-xs">
                                        Estado
                                    </label>
                                    <div className="relative">
                                        <label
                                            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            {user.active?'Activo':'Inactivo'}
                                        </label>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
