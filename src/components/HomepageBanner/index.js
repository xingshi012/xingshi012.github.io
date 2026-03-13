import Heading from '@theme/Heading';
import styles from './styles.module.css';

const bannerContent = [
    {
        Svg: require('@site/static/img/custom/undraw_data-at-work_banner.svg').default, 
        btnText: 'About me',
        url: '/about',
        heading: (
                <>你好！我是 <span class="gradient-text gradient-color__blue">Xingshi | 星矢</span></>
            ),
        description: (
                <>
                    一位基础的前端开发工程师，这里是我的个人博客网站，记录和分享一些工作、生活中遇到的有趣的事情和技术文档。同时也是一个树洞，用来倾听、记录自己的碎碎念。
                </>
            )
    }
];

function Content({ heading, description, btnText, url }) {
    return (       
        <div className="text--left md:text--center padding-horiz--md">
            <Heading as="h2">{heading}</Heading>
            <p>{description}</p>

            <a href={ url } target='_blank' className={ styles.HPBannerButton }>{ btnText }</a>
        </div>
    );
}

export default function HomepageBanner() {
    const item = bannerContent[0];
    if (!item) return null;

    const { Svg, title, heading, description, btnText, url } = item;

    return (
        <section className={styles.HPBanner}>
            <div className={styles.HPBannerContainer}>
                <div className={styles.HPBannerRow}>
                    <div className={styles.HPBannerLeftCol}>
                        <Content
                        title={title}
                        heading={heading}
                        description={description}
                        btnText={btnText}
                        url={url}
                        />
                    </div>
                    <div className={styles.HPBannerRightCol}>
                        <Svg role="img" aria-label={title} />
                        <div className={styles.HPBannerRightBg}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
