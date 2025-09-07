import Link from 'next/link';
import React from 'react';
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
    return (
        <header className={styles.headerBase}>
            <div className={styles.container}>
                <h1>{title}</h1>
                {description && (
                    <h2>
                        {description.length > 40 ? `${description.substring(0, 40)}...` : description}
                    </h2>
                )}
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
            </div>
        </header>
    );
};

export default PageHeader;
