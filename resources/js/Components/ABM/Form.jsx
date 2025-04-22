import {React, useState} from 'react';
import LogoDark from '@/images/logo/logo-dark.svg';
import Logo from '@/images/logo/logo.svg';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

/*const { setError } = useForm({ ... })

// Set a single error...
setError('field', 'Your error message.');

// Set multiple errors at once...
setError({
  foo: 'Your error message for the foo field.',
  bar: 'Some other error for the bar field.'
}); */

export default function Form({routeForm, routeBackForm, submit, titleForm, labelPrimaryButton, labelBackButton, showMsgSuccess, msgSuccess, showMsgError, msgError, processing, children}) {
    return (
    <>
        <Head title={titleForm} />

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">

            <div className="md:flex">

                <div className="p-8 w-full">

                    {showMsgSuccess &&
                        <div style={{color:'green'}}>{msgSuccess}</div>
                    }
                    {showMsgError &&
                        <div style={{color:'red'}}>{msgError}</div>
                    }
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">{titleForm}</h2>
                    <form onSubmit={submit}>

                        {children}

                        <div className="mb-5">
                            <Link
                                href={route(routeBackForm)}
                                className="mr-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
                            >
                                {labelBackButton}
                            </Link>

                            <PrimaryButton
                                className="justify-center cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                                disabled={processing}
                            >
                                {labelPrimaryButton}
                            </PrimaryButton>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
};
