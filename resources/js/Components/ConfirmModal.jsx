import Modal from 'react-modal';

Modal.setAppElement("#app");

const ConfirmModal = ({isOpen, message, onCancel, onConfirm}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCancel}
            className="fixed inset-0 flex items-center justify-center outline-none"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            shouldCloseOnOverlayClick={true}
        >
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <p className="text-lg font-semibold text-center">{message}</p>
                <div className="flex justify-center mt-4 space-x-4">
                    <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-gray-700">Cancelar</button>
                    <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Aceptar</button>
                </div>
            </div>
        </Modal>
    );
}

export default ConfirmModal;
