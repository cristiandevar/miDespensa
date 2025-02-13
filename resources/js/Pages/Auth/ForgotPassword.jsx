import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout
            textMain="Se enviará un link al email proporcionado para restablecer su Password"
            textTitle="Restablecer Password"
            textSubtitle="Ingresa email para recibir el link"
        >
            <Head title="Recuperar contraseña" />
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Ingrese Email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />

                    <div className="mt-4 flex items-center justify-end">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Enviar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
