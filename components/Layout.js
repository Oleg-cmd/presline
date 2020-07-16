import Navbar from './navbar'
import Head from 'next/head'
//import Warning from './Warning'
import Footer from './Footer'
const Layout = (props) => (
    <div lang="en">
        <Head>
            <title>Presline</title>
            <link rel="shortcut icon" href="/static/favicon.ico" type="images/x-icon"/>
            <link href="../static/bootstrap.min.css" rel="stylesheet"/>
            <script dangerouslySetInnerHTML={{ __html: `
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
             m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
             (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
             ym(65558050, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
             });
            `}} />
            <noscript>
                <div>
                    <img src="https://mc.yandex.ru/watch/65558050" alt="metrika"/>
                        <style jsx>{`position:absolute;left:-9999px;`}</style>
                </div>
            </noscript>
            <meta name="yandex-verification" content="64c7f3af26f9a3a9" itemProp="meta"/>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>     
        </Head>
        <Navbar />
        {props.children} 
        <Footer/>
    </div>
)



export default Layout