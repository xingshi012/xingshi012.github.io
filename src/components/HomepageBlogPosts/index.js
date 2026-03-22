import React from 'react';
import clsx from 'clsx';
import {usePluginData} from '@docusaurus/useGlobalData';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const defaultImage = '/img/custom/avatar-xingshi.jpg';

function formatDate(dateStr) {
    const d = new Date(dateStr);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function BlogPostCard({post, localizedUrl}) {
    const authorName = post.authors?.[0]?.name ?? '';

    return (
        <article className={styles.card}>
        <div className={styles.cardImageWrapper}>
            <img
            src={post.image || defaultImage}
            alt={post.title}
            className={styles.cardImage}
            loading="lazy"
            />
        </div>
        <div className={styles.cardContent}>
            <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardDesc}>{post.description}</p>
            </div>
            <div className={styles.cardFooter}>
                <small className={styles.cardMeta}>
                    <span className={styles.authorName}>{authorName}{authorName && ' · '}</span>
                    <span className={styles.cardDate}>{formatDate(post.date)}</span>
                </small>

                <a href={localizedUrl(post.permalink)} className={styles.readMore}>
                    <span className='line-animnation__button'><Translate id="homepage.blogPosts.readMore">阅读全文</Translate></span>
                </a>
            </div>
        </div>
        </article>
    );
}

export default function HomepageBlogPosts() {
    const {recentPosts} = usePluginData('blog-recent-posts-plugin');
    const localizedUrl = (path) => path;

    if (!recentPosts || recentPosts.length === 0) {
        return null;
    }

    return (
        <section className={styles.blogSection}>
            <div className={ clsx('container', styles['HPBlogPostsContainer'])}>
                <div className={styles.blogHeader}>
                    <h2 className={styles.blogHeading}>
                        <Translate id="homepage.blogPosts.title">最新博客</Translate>
                    </h2>
                    <a href={localizedUrl('/blog')} className={styles.viewMore}>
                        <span className='line-animnation__button'><Translate id="homepage.blogPosts.viewMore">了解更多</Translate></span>
                    </a>
                </div>
                <div className={styles.blogGrid}>
                {recentPosts.map((post) => (
                    <BlogPostCard
                    key={post.permalink}
                    post={post}
                    localizedUrl={localizedUrl}
                    />
                ))}
                </div>
            </div>
        </section>
    );
}
