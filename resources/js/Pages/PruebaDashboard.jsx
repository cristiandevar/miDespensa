import DefaultLayout from '@/Layouts/DefaultLayout';
import ECommerce from '@/Pages/ECommerce';
// import { Head } from '@inertiajs/react';

export default function PruebaDashboard({ user }) {
    return (
        <DefaultLayout
            user={user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <ECommerce/>

        </DefaultLayout>
    );
}
