import React from "react";

const ComingSoonDialog = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 m-8"
            onClick={onClose}>
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative bg-[#F9EDD2] rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
                <div className="flex justify-between items-center border-b-2 border-[#991B1E] pb-2">
                    <h2 className="text-2xl font-bold text-[#991B1E]">Coming Soon</h2>
                    <button
                        className="text-[#991B1E] hover:text-[#F9EDD2] hover:bg-[#991B1E] rounded-full p-2 transition w-10 "
                        onClick={onClose}
                    >
                        &#x2715;
                    </button>
                </div>
                <div className="mt-4 text-[#991B1E] text-lg">
                    We will update soon
                </div>
                <div className="mt-6 flex justify-end">
                    <button
                        className="bg-[#F9EDD2] text-[#991B1E] px-4 py-2 rounded-3xl hover:bg-[#991B1E] hover:text-[#F9EDD2] transition"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonDialog;
