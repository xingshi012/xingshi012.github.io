import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const bannerContent = [
    {
        Svg: require('@site/static/img/custom/undraw_data-at-work_banner.svg').default, 
        btnText: translate({id: 'homepage.banner.btnText', message: 'About me'}),
        url: '/about',
        heading: (
                <><Translate id="homepage.banner.greeting">你好！我是</Translate> <span class="gradient-text gradient-color__blue"><Translate id="homepage.banner.xingshi">星矢</Translate></span></>
            ),
        description: (
                <>
                    <Translate id="homepage.banner.description">一位基础的前端开发工程师，这里是我的个人博客网站，记录和分享一些工作、生活中遇到的有趣的事情和技术文档。同时也是一个树洞，用来倾听、记录自己的碎碎念。</Translate>
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
    const {i18n: {currentLocale, defaultLocale}} = useDocusaurusContext();
    const localizedUrl = (path) => currentLocale === defaultLocale ? path : `/${currentLocale}${path}`;
    
    const item = bannerContent[0];
    if (!item) return null;

    const { Svg, title, heading, description, btnText, url } = item;
    const localeUrl = localizedUrl(url);

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
                        url={localeUrl}
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
