import { Head, usePage, Link } from "@inertiajs/react";
import { format } from 'date-fns';
import View from '@/Components/ABM/View'



export default function Show({children}){
    const user = usePage().props.auth.user;
    return (
        <>
                <View
                    titleForm = 'Ver Usuario'
                    labelBackButton = 'Atras'
                    routeBackForm = 'users.index'
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 text-xs">Nombre</label>
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={user.name}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                disabled
                            />

                            <span className="absolute right-4 top-2">
                            <svg
                                className="fill-current"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g opacity="0.5">
                                <path
                                    d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                                    fill=""
                                />
                                <path
                                    d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                                    fill=""
                                />
                                </g>
                            </svg>
                            </span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 text-xs">Email</label>

                        <div className="relative">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={user.email}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                disabled
                            />

                            <span className="absolute right-4 top-2">
                                <svg
                                    className="fill-current"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g opacity="0.5">
                                    <path
                                        d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                                        fill=""
                                    />
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="created" className="block text-gray-700 text-sm font-bold mb-2 text-xs">Creado</label>

                        <div className="relative">
                            <input
                                id="created"
                                type="text"
                                name="created"
                                value={format(new Date(user.created_at), 'dd/MM/yyyy')}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                disabled
                            />
                        </div>

                    </div>

                    <div className="mb-4">
                        <label htmlFor="updated" className="block text-gray-700 text-sm font-bold mb-2 text-xs">Modificado</label>

                        <div className="relative">
                            <input
                                id="updated"
                                type="text"
                                name="updated"
                                value={format(new Date(user.updated_at), 'dd/MM/yyyy')}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                disabled
                            />
                        </div>

                    </div>

                    <div className="mb-6">
                        <label htmlFor="active" className="flex items-center text-gray-700 text-sm font-bold mb-2 text-xs">
                            <input
                                id="active"
                                type="checkbox"
                                name="active"
                                checked={user.active}
                                disabled
                                className="mr-2 h-5 w-5 text-blue-600 border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded"
                                // onChange={(e) => setData("active", e.target.checked)}
                            />
                            Usuario activo
                        </label>
                        {/* <InputError message={errors.active} className="mt-2" /> */}
                    </div>

                </View>


        </>
    );
}
