import s from "./Layout.module.css";

const Layout = ({ title, descr, urlBg = "none" , colorBg = "none"  }) => {

    const inlineStyles = {
        backgroundImage: `url(${urlBg})`,
        backgroundColor: colorBg,

    }

    return (
            <section style={inlineStyles} className={ s.root }>
                <div className={ s.wrapper }>
                    <article>
                        <div className={ s.title }>
                            <h3>{ title }</h3>
                            <span className={ s.separator }></span>
                        </div>
                        <div className={`${s.desc} ${s.full}`}>
                            <p>{ descr }</p>
                        </div>
                    </article>
                </div>
            </section>
    )
};

export default Layout;
