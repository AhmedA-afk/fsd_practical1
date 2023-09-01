  import React from 'react';
  import './MainContent.css'; // Import the CSS file for the MainContent component

  function MainContent() {
    return (
      <div className="main-content">
        <h2>Main Content</h2>

        {/* YouTube video */}
        <div className="youtube-video">
          <iframe width="560"
            height="315"
            src="https://www.youtube.com/embed/PdpuaQNgDSc?si=O0G8X7oTO0rwO75K"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

        </div>

        {/* Medium article section */}

        <div className="medium-article">
          <h3>Featured Medium Article</h3>
          <iframe src='https://widgets.sociablekit.com/medium-publication-feed/iframe/188458' frameborder='1' width='100%' height='720px'></iframe>
          <p>How can GenAI improve and reform the education sector (instead of ruining it.)</p>
          <a href="#">Read More</a>
        </div>

        {/* Google Maps location */}
        <div className="google-maps">
          <h3>Location</h3>
          <div>
            <iframe
              title="Google Maps Location"
              width="600"
              height="450"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6330.455325369789!2d72.81744393877094!3d22.599508485404026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1693561880029!5m2!1sen!2sin"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>


        {/* News headlines section */}
        <div className="news-headlines">
          <h3>News Headlines</h3>
          <ul>
            <li>
              <a
                href="https://indianexpress.com/article/cities/ahmedabad/anands-charusat-bags-dsts-purse-grant-worth-rs-8-51-crore-8906493/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anand’s CHARUSAT bags DST’s PURSE grant worth Rs 8.51 crore
              </a>
            </li>
            <br></br>
            <li>
              <a
                href="https://deshgujarat.com/2023/05/07/charusat-university-at-changa-introduce-digital-paperless-exams-in-gujarat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Charusat university at Changa introduce digital paperless exams in Gujarat
              </a>
            </li>
            <li>
              <a
                href="https://indianexpress.com/article/cities/ahmedabad/charusat-university-celebrates-12th-convocation-8383993/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Charusat University celebrates 12th convocation
              </a>
            </li>
            {/* Add more headlines with their respective URLs */}
          </ul>
        </div>
      </div>
    );
  }

  export default MainContent;
