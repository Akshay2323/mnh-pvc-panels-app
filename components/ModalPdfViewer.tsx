import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalPdfViewerProps {
    url: string | null;
    onClose: () => void;
}

const ModalPdfViewer: React.FC<ModalPdfViewerProps> = ({ url, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!url) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999,
                    padding: '2rem',
                    boxSizing: 'border-box',
                }}
                onClick={onClose}
                ref={modalRef}
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        border: 'none',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                        target.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                        target.style.transform = 'scale(1)';
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '90vw',
                        height: '95vh',
                        maxHeight: '95vh',
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onClick={e => e.stopPropagation()}
                >
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
                    }}>
                        {url ? (
                            <div style={{
                                flex: 1,
                                overflow: 'auto',
                                WebkitOverflowScrolling: 'touch',
                                padding: '0',
                                margin: '0',
                                height: '100%',
                                width: '100%',
                            }}>
                                <object
                                    data={`${url}#toolbar=1&navpanes=1&scrollbar=1`}
                                    type="application/pdf"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        border: 'none',
                                        minHeight: '100%',
                                    }}
                                    aria-label="PDF Viewer"
                                >
                                    <div style={{
                                        padding: '20px',
                                        textAlign: 'center',
                                        color: '#666',
                                    }}>
                                        <p>Unable to display PDF.
                                            <a
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: '#0066cc', textDecoration: 'underline' }}
                                            >
                                                Click here to download
                                            </a>
                                        </p>
                                    </div>
                                </object>
                            </div>
                        ) : (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                color: '#666',
                            }}>
                                No PDF available
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ModalPdfViewer;
