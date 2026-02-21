import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import CommentSystem from '@site/src/components/CommentSystem';

export default function BlogPostItemWrapper(props) {
    return (
        <>
        <BlogPostItem {...props} />
        <CommentSystem />
        </>
    );
}