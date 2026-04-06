import React, { useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const VECTOR_STORE_OPTIONS = ["Qdrant"];
const EMBEDDING_MODEL_OPTIONS = ["text-embedding-ada-002"];

const Modal = React.memo(({ isOpen, onClose }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  }, [handleClose]);

  const handleBackdropClick = useCallback((event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/20 flex justify-end"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="w-[420px] bg-white p-6 h-full shadow-xl"
      >
        <div className="flex justify-between mb-4">
          <div>
            <h2 id="modal-title" className="font-semibold text-sm">
              Create New Knowledge Base
            </h2>
            <p className="text-xs text-gray-500 mt-1">Best for quick answers from documents, websites and text files.</p>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-700">
              Name (Cannot be edited later)<span className="text-red-500">*</span>
            </label>
            <input
              className="w-full border p-2 rounded focus:ring-2 focus:ring-primary"
              placeholder="Name"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-700">Description</label>
            <textarea
              className="w-full border p-2 rounded focus:ring-2 focus:ring-primary"
              placeholder="Description"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-700">
              Vector Store<span className="text-red-500">*</span>
            </label>
            <select className="w-full border p-2 rounded" required>
              {VECTOR_STORE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-700">
              LLM Embedding Model<span className="text-red-500">*</span>
            </label>
            <select className="w-full border p-2 rounded" required>
              {EMBEDDING_MODEL_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:opacity-90"
          >
            Create
          </button>
        </form>
      </motion.div>
    </div>
  );
});

Modal.displayName = "Modal";

export default Modal;