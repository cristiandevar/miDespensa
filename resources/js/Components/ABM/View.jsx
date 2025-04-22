import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from '@inertiajs/react';

export default function Form({routeBackForm, titleForm, labelBackButton, children}) {
    return (
    <>
        <AuthenticatedLayout>
            <Head title={titleForm} />

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">

                <div className="md:flex">

                    <div className="p-8 w-full">

                        <h2 className="text-2xl font-bold mb-6 text-gray-900">{titleForm}</h2>
                            <div className="flex justify-end">
                                <Link
                                    href={route(routeBackForm)}
                                    // className="mr-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
                                    className="mr-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"

                                >
                                    {labelBackButton}
                                </Link>
                            </div>

                        {children}

                    </div>

                </div>
                
            </div>
        </AuthenticatedLayout>
    </>
  );
};