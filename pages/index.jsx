import BackToTop from "@/components/button/BackToTop";
import HomeHero from "@/components/hero/HomeHero";

export default function Home() {
    return (
        <>
            <HomeHero />
            <section className="py-[100px]">
                <div className="container">
                    <div></div>
                </div>
            </section>
            <BackToTop />
        </>
    );
}
