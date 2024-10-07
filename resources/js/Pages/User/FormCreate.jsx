import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Form from './Form';

export default function FormCreate({children}) {
    return (
    <>
        <AuthenticatedLayout>
            <Form routeForm="users.store" titleForm="Crear Usuario" labelButton="Crear" msgSuccess="Se ha creado exitosamente" msgError="Error al crear Usuario"/>
        </AuthenticatedLayout>
    </>
  );
};
