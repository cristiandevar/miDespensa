import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

export default function AddButton({
    className = '',
    title='',
    disabled=false,
    href,
    method,
    // handleClick,
    children,
    ...props
}) {
    // const handleRedirect = () => {
    //     const url = route(hrefButton); // Genera la URL para la ruta nombrada

    //     get(route(hrefButton));
    //     // window.location.href = url;
    // };

    return (
        <div className="flex justify-end">

            <Link
                href={href}
                method={method}
            >
                <PrimaryButton
                    className={className}
                    disabled={disabled}
                    title={title}
                >
                    {children}
                </PrimaryButton>
            </Link>

        </div>
    );
}

