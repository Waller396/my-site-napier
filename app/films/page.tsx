import VideoTile from "@/components/VideoTile";
import Link from "next/link";

export default function Films() {
  return (
    <main className="main-site">
      <div className="hero-wrap">
        {/* NAVIGATION */}
        <nav className="site-nav">
          <div className="site-logo-wrap">
            <Link href="/" className="site-logo">
              Min-jae Han
            </Link>

            <div className="site-subtitle">
              Films
            </div>
          </div>

          <div className="nav-links">
            <Link href="/films">
              Films
            </Link>
          </div>
        </nav>

        {/* UGG / ARTOIS */}
        <section className="media-grid-two">
          <VideoTile
            title="UGG"
            subtitle="Campaign Film"
            image="/images/ugg-16_9-thumb.jpg"
            hoverVideo="/videos/ugg-16_9-preview.mp4"
            filmVideo="/videos/ugg-16_9-video.mp4"
          />

          <VideoTile
            title="Artois"
            subtitle="Campaign Film"
            image="/images/artois-16_9-thumb.jpg"
            hoverVideo="/videos/artois-16_9-preview.mp4"
            filmVideo="/videos/artois-16_9-video.mp4"
          />
        </section>

        {/* GUCCI */}
        <section className="hero-image">
          <VideoTile
            title="Gucci"
            subtitle="Campaign Film"
            image="/images/gucci-16_9-thumb.jpg"
            hoverVideo="/videos/gucci-16_9-preview.mp4"
            filmVideo="/videos/gucci-16_9-video.mp4"
          />
        </section>

        {/* NIKE / NOWNESS / ADIDAS */}
        <section className="media-grid">
          <VideoTile
            title="Nike & Palace"
            subtitle="Campaign Film"
            image="/images/nike-16_9-thumb.jpg"
            hoverVideo="/videos/nike-16_9-preview.mp4"
            filmVideo="/videos/nike-16_9-video.mp4"
          />

          <VideoTile
            title="Nowness"
            subtitle="Campaign Film"
            image="/images/nowness-16_9-thumb.jpg"
            hoverVideo="/videos/nowness-16_9-preview.mp4"
            filmVideo="/videos/nowness-16_9-video.mp4"
          />

          <VideoTile
            title="Adidas"
            subtitle="Campaign Film"
            image="/images/adidas-16_9-thumb-v2.jpg"
            hoverVideo="/videos/adidas-16_9-preview.mp4"
            filmVideo="/videos/adidas-16_9-video.mp4"
          />
        </section>

        {/* EVISU */}
        <section className="hero-image">
          <VideoTile
            title="Evisu"
            subtitle="Campaign Film"
            image="/images/evisu-16_9-thumb.jpg"
            hoverVideo="/videos/evisu-16_9-preview.mp4"
            filmVideo="/videos/evisu-16_9-video.mp4"
          />
        </section>
      </div>
    </main>
  );
}