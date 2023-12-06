import './HomeSectionVideo.css';
import teslaVid from '../../assets/tesla-vid.mp4';

export default function HomeSectionVideo() {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src={teslaVid} type="video/mp4" />
      </video>
      <div className="overlay">
        <div>
          <h1>Experiência Suzuki</h1>
          <h5>Agende hoje um Test Drive</h5>
        </div>
        <div>
          <button>Test Drive</button>
        </div>
      </div>
    </div>
  );
}
