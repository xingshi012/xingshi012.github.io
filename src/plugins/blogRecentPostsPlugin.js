export default function blogRecentPostsPlugin() {
    return {
        name: 'blog-recent-posts-plugin',
        async allContentLoaded({allContent, actions}) {
        const {setGlobalData} = actions;
        const blogPluginRoot = allContent?.['docusaurus-plugin-content-blog'];
        const blogPlugin =
            blogPluginRoot?.default ??
            (blogPluginRoot && Object.values(blogPluginRoot)[0]);
        const blogPosts = blogPlugin?.blogPosts ?? [];
        const recentPosts = blogPosts.slice(0, 6).map((post) => ({
            title: post.metadata.title,
            description: post.metadata.description,
            permalink: post.metadata.permalink,
            date: post.metadata.date,
            authors: post.metadata.authors,
            image: post.metadata.frontMatter.image,
        }));
        setGlobalData({recentPosts});
        },
    };
}
