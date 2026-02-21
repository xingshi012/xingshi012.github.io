import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function CommentSystem() {

    const { colorMode } = useColorMode();
    
    return (
        <section className="comment-system__section"> 
            <hr />
            <Giscus
            id="comments"
            repo="xingshi012/xingshi012.github.io"
            repoId="R_kgDOMP6eUA"
            category="Announcements"
            categoryId="DIC_kwDOMP6eUM4CkXEu"
            mapping="pathname"
            term="Xingshi Blog Comments"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={colorMode === "dark" ? "dark_protanopia" : "light_protanopia"}
            lang="zh-CN"
            loading="lazy"
            />
        </section>
    );
}