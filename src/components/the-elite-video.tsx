
export default function TheEliteVideo() {
  return (
    <section className="the-elite-media__video">
      <div className="property-detail__section-heading">
        <span className="property-detail__eyebrow property-detail__eyebrow--dark">
          PROJECT VIDEOS
        </span>

        <h2>
          The Elite by Rohit Group in Gomti Nagar Extension Lucknow - Project Videos
        </h2>
      </div>

      <video controls preload="metadata" playsInline>
        <source
          src="/videos/properties/the-elite-project.mp4"
          type="video/mp4"
        />
        Your browser does not support the video element.
      </video>
    </section>
  );
}
