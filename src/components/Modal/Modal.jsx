const Modal = ({ children, closeModal }) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="absolute inset-0 bg-slate-900/40 flex items-center justify-center"
    >
      <div className="p-4 bg-slate-700">{children}</div>
    </div>
  );
};

export default Modal;
