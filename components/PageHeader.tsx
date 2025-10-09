import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../styles/header.module.css';

interface PageHeaderProps {
    title: string;
    description?: string;
    breadcrumbs?: Array<{
        label: string;
        href: string;
    }>;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, breadcrumbs = [] }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return (
        <header className={styles.headerBase}>
            <div className={styles.container}>
                <h1>{title}</h1>
                {/* {description && ( */}
                <h2>
                    {description}
                    {/* {description.length > 40 ? `${description.substring(0, 40)}...` : description} */}
                </h2>
                {/* )} */}
                {
                    !isMobile &&
                    <ol className={styles.breadcrumb}>
                        <li><Link href="/">Home</Link></li>
                        {breadcrumbs.map((crumb, index) => (
                            <li key={index}>
                                {
                                    crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <Link href={"#"}><span>{crumb.label}</span></Link>
                                }
                            </li>
                        ))}
                        {/* <li className={styles.active}>{title}</li> */}
                    </ol>
                }
            </div>
        </header>
    );
};

export default PageHeader;
