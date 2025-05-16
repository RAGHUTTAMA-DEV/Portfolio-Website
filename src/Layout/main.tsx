import { useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import Footer from '../components/Footer';
import ScrollProgressIndicator from '../components/SCrollProgress';
import ParticleBackground from '../components/particleDrop';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustumCursor';
import Preloader from '../components/PreLoader';
import StickyEmail from '../components/StickyEmail';

export default function App({ children }: { children: React.ReactNode }) {
    // Inject Hotjar
    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6380611,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `;
        document.head.appendChild(script);
    }, []);

    // Inject Google Analytics
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-MHLY1LNGY5';
        script1.async = true;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MHLY1LNGY5');
        `;
        document.head.appendChild(script2);
    }, []);

    return (
        <div className="antialiased">
            <ReactLenis
                root
                options={{
                    lerp: 0.1,
                    duration: 1.4,
                }}
            >
                <a
                    href="https://forms.gle/koQRNCbiJ99iTEXP9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-black text-center z-[1] text-sm py-2 hover:text-primary transition-all"
                >
                    Take a 2-min survey for developers!
                </a>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <CustomCursor />
                <Preloader />
                <ScrollProgressIndicator />
                <ParticleBackground />
                <StickyEmail />
            </ReactLenis>
        </div>
    );
}