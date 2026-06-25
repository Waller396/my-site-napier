import VideoTile from "@/components/VideoTile";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-site">
      <nav className="site-nav">
        <Link href="/" className="site-logo">
          Borders
        </Link>

        <div className="nav-links">
          <Link href="/films">Films</Link>
        </div>
      </nav>

      <section className="hero-film">
        <VideoTile
          title="Nowness"
          subtitle="Campaign Film"
          image="/images/nowness-16_9-thumb.jpg"
          hoverVideo="/videos/nowness-16_9-preview.mp4"
          muxPlaybackId="lg6X992KPDNTTea4Tw2Yrkb7bNO4pWN8dJVmMkpKFLY"
        />

        <div className="hero-title">
          <h1>Nowness</h1>
          <p>Campaign Film</p>
        </div>
      </section>

      <section className="film-grid">
        <article className="film-card">
          <VideoTile
            title="Adidas"
            subtitle="Campaign Film"
            image="/images/adidas-16_9-thumb-v2.jpg"
            hoverVideo="/videos/adidas-16_9-preview.mp4"
            muxPlaybackId="l9Ip00bQQ52wVcIaIGA2qfUgqaKIO1xhFUmuNwEn01PqU"
          />
          <div className="film-card-text">
            <h3>Adidas</h3>
            <p>Campaign Film</p>
          </div>
        </article>

        <article className="film-card">
          <VideoTile
            title="Artois"
            subtitle="Campaign Film"
            image="/images/artois-16_9-thumb.jpg"
            hoverVideo="/videos/artois-16_9-preview.mp4"
            muxPlaybackId="GO007buFyVnCzwdqBEKfmQrduGOLPkyXcTgA01Q01K6DNk"
          />
          <div className="film-card-text">
            <h3>Artois</h3>
            <p>Campaign Film</p>
          </div>
        </article>

        <article className="film-card">
          <VideoTile
            title="UGG"
            subtitle="Campaign Film"
            image="/images/ugg-16_9-thumb.jpg"
            hoverVideo="/videos/ugg-16_9-preview.mp4"
            muxPlaybackId="ZbMnw8F2or02x01iyQO019Xdw5wZYUJjAbSPVAWHGrXBdU"
          />
          <div className="film-card-text">
            <h3>UGG</h3>
            <p>Campaign Film</p>
          </div>
        </article>

        <article className="film-card">
          <VideoTile
            title="Nike & Palace"
            subtitle="Campaign Film"
            image="/images/nike-16_9-thumb.jpg"
            hoverVideo="/videos/nike-16_9-preview.mp4"
            muxPlaybackId="Povomc7OplHDMN801VmU900xSKeNFyVm22KCq6YtFVVh4"
          />
          <div className="film-card-text">
            <h3>Nike & Palace</h3>
            <p>Campaign Film</p>
          </div>
        </article>

        <article className="film-card">
          <VideoTile
            title="Gucci"
            subtitle="Campaign Film"
            image="/images/gucci-16_9-thumb.jpg"
            hoverVideo="/videos/gucci-16_9-preview.mp4"
            muxPlaybackId="ARHpI6eC6pa02P02019bPIhrfx92UdtJWDsXYNMPyBRwik"
          />
          <div className="film-card-text">
            <h3>Gucci</h3>
            <p>Campaign Film</p>
          </div>
        </article>

        <article className="film-card">
          <VideoTile
            title="Evisu"
            subtitle="Campaign Film"
            image="/images/evisu-16_9-thumb.jpg"
            hoverVideo="/videos/evisu-16_9-preview.mp4"
            muxPlaybackId="f00EriRTXQ00OHjHdcRtVMenkE7InAyWTV6MrP7TX2tVI"
          />
          <div className="film-card-text">
            <h3>Evisu</h3>
            <p>Campaign Film</p>
          </div>
        </article>
      </section>

      <section className="bio-section">
        <div className="bio-colour">
          <h2>Biography</h2>
          <p>
            Min-jae Han developed his cinematic voice between Seoul’s independent
            film scene and Berlin’s experimental cinema community. After creating
            a series of acclaimed short films recognised at international
            festivals including the Berlinale, he moved into commercial
            filmmaking with a focus on emotion, atmosphere and visual precision.
            His work blends rich colour, human performances and a refined sense
            of composition, creating films that feel cinematic, authentic and
            deeply connected to the world of each brand.
          </p>
        </div>

        <div className="bio-contact">
          <h3>Contact</h3>

          <div className="contact-group">
            <span>Email</span>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </div>

          <div className="contact-group">
            <span>Commercial Agent</span>
            <a href="mailto:commercial@example.com">commercial@example.com</a>
          </div>

          <div className="contact-group">
            <span>Film Agent</span>
            <a href="mailto:film@example.com">film@example.com</a>
          </div>
        </div>

        <div className="bio-image">
          <div className="bio-image-frame">
            <Image
              src="/images/bio-portrait2.jpg"
              alt="Portrait"
              width={1600}
              height={900}
              className="image-fill"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
