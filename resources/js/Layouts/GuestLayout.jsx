import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Header from '../tailadmin/components/Header/index';
import Sidebar from '../tailadmin/components/Sidebar/index';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            {/* <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div> */}

            {/* <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"> */}
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
            </div>
        </div>
    );
}
