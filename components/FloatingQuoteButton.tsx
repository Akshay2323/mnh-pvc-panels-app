/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import styles from '../styles/FloatingQuoteButton.module.css';
import { states } from '@/utils/states';
import { productCategory, sendQuote } from '@/utils/api';

const FloatingQuoteButton: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState<any[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        category: '',
        state: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        loadProductCategory();
    }, []);
    const loadProductCategory = async () => {
        try {
            const resp = await productCategory();
            if (resp?.status) {
                const categories = [
                    { value: '', label: 'Select Category' },
                    ...resp.data.map((category: any) => ({
                        value: category.name,
                        label: category.name
                    }))
                ];
                setCategories(categories);
            }
        } catch (error: any) {
            const msg = error?.message || "Something went wrong to load details";
            console.error(msg);
        } finally {
            setIsLoading(false);
        }
    }



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await sendQuote(formData);
            setIsModalOpen(false);
            setFormData({
                name: '',
                email: '',
                phoneNo: '',
                category: '',
                state: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <button
                className={styles.floatingButton}
                onClick={() => setIsModalOpen(true)}
                aria-label="Get a quote"
            >
                <div className={styles.buttonContent}>
                    <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                    <span className={styles.buttonText}>Get Quote</span>
                </div>
                <div className={styles.pulseRing}></div>
            </button>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button
                            className={styles.closeButton}
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <h2>Get a Free Quote</h2>
                        <p className={styles.subTitle}>Calling all distributors! Interested in bulk PVC panel purchases? Click here to submit your buy enquiry and discover exclusive deals today!</p>
                        <form onSubmit={handleSubmit} className={styles.quoteForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phoneNo">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phoneNo"
                                    name="phoneNo"
                                    value={formData.phoneNo}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="state">State *</label>
                                <select
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    required
                                    className={styles.selectInput}
                                >
                                    {states.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={`${styles.formGroup} ${styles.fullWidthInput}`}>
                                <label htmlFor="category">Category *</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    required
                                    className={styles.selectInput}
                                >
                                    {categories.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Your Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={3}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className={styles.spinner}></span>
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingQuoteButton;
