import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Form from './Form';

export default function FormUpdate({}) {
    const user = usePage().props.user;
    return (
    <>
        <AuthenticatedLayout>
            <Form routeForm="users.update" titleForm="Actualizar Usuario" labelButton="Actualizar" msgSuccess="Se ha actualizado exitosamente" msgError="Error al actualizar Usuario" userUpdate={user}/>
        </AuthenticatedLayout>
    </>
  );
};
