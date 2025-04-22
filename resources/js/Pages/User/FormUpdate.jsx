import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import UserForm from './UserForm';

export default function FormUpdate({user}) {
    // const user = usePage().props.user;
    return (
    <>
        <AuthenticatedLayout>
            <UserForm
                routeForm="users.update"
                titleForm="Actualizar Usuario"
                labelButton="Actualizar"
                msgSuccess="Se ha actualizado exitosamente"
                msgError="Error al actualizar Usuario"
                dataForm={user}
                id={user.id}
            />
        </AuthenticatedLayout>
    </>
  );
};
