import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Hello() {
    const imageUrl = useBaseUrl('/img/custom/xiyang.webp');

    return (
        <Layout
            title={translate({
                id: 'myFirstPage.layoutTitle',
                message: 'Sunset',
            })}
            description={translate({
                id: 'myFirstPage.layoutDescription',
                message: 'A short page about the sunset.',
            })}>
            <div>
                <h1 align="center">
                    <Translate id="myFirstPage.heading">夕阳</Translate>
                </h1>
                <p align="center">
                    <Translate id="myFirstPage.updatedAt">更新时间：2022年10月5日 星矢</Translate>
                </p>
                <a href="https://www.baidu.com/">
                    <img
                        src={imageUrl}
                        align="left"
                        height="450"
                        width="750"
                        alt={translate({
                            id: 'myFirstPage.imageAlt',
                            message: 'This image cannot be displayed properly',
                        })}
                        title={translate({
                            id: 'myFirstPage.imageTitle',
                            message: 'This image is sourced from the Internet. It will be removed if there is any infringement.',
                        })}
                        hspace="20"
                    />
                </a>
                <p>
                    &nbsp;&nbsp;
                    <strong>
                        <Translate id="myFirstPage.heading">夕阳</Translate>
                    </strong>
                    <Translate id="myFirstPage.paragraph1">
                        ，是一个汉语词汇，拼音是
                    </Translate>
                    <em>xī yáng</em>
                    <Translate id="myFirstPage.paragraph1Suffix">
                        ，即傍晚的太阳；也指山的西面；另外还用以比喻晚年。由于接近黄昏时，夕阳通常为橙红色。
                    </Translate>
                </p>
                <p>
                    <Translate id="myFirstPage.paragraph2">
                        &nbsp;&nbsp;在夕阳温馨的光辉里，勤劳纯朴的人们踏着艰辛，卸下肩头沉重的犁耙，夕阳赐给他们圣洁的光环，把岁月的疲惫和生活的沉重圈起来，赋予她们轻松。夕阳把她的一切都赐给人间，献给大地，这才有了万缕霞光，有了绮丽的山水，有了宁静的山乡和勤劳质朴的人。
                    </Translate>
                </p>
                <p>
                    <Translate id="myFirstPage.paragraph3">
                        &nbsp;&nbsp;夕阳山外山，春水渡边渡。
                    </Translate>
                </p>
                <p>
                    <Translate id="myFirstPage.paragraph4">
                        &nbsp;&nbsp;暮归的行人，影子被夕阳拉长。街口轮班睁眼的红绿灯面对来来往往的车辆，总是顾此失彼。大地变得金黄了，梧桐树的剪影，留在了安全岛上。天色渐渐暗了，残阳如血，朦胧慢慢的笼罩整个山，天边只剩下一道晚霞。
                    </Translate>
                </p>
                <p>
                    <Translate id="myFirstPage.paragraph5">
                        &nbsp;&nbsp;夕阳，不同于清晨的太阳，它拥有独特的光芒;夕阳，不同于当午的烈日，它舍弃强烈耀眼的光芒。当我们在黄昏时，平视远方，就能看到夕阳。这时，我们可以用肉眼去正视它，一望无际的晚霞变得美丽，因为有了它，心灵变得无法摸测。
                    </Translate>
                </p>
            </div>
        </Layout>
    );
}