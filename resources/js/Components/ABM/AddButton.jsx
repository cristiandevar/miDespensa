import PrimaryButton from "@/Components/PrimaryButton";

export default function AddButton({
    className = '',
    disabled,
    hrefButton,
    methodButton,
    children,
    ...props
}) {
    const handleRedirect = () => {
        const url = route(hrefButton); // Genera la URL para la ruta nombrada
        window.location.href = url;
    };

    return (
        <div className="align-right">

            <PrimaryButton
                className={className}
                disabled={disabled}
                children={children}
                onClick={handleRedirect}
                method={methodButton}
            />

        </div>
    );
}

