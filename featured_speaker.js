const featuredSpeaker = document.getElementById('featured-speakers');
const featureImgSrc = document.querySelectorAll('.speaker');
const featuredSpeakerData = [
  {
    imgSrc: './assets/speaker-three.JPG',
    fullName: 'Yannick Muliluza',
    speakerDescrition: 'Manager at AMJ Company',
    paragrapheContent: 'The literature review was carried out by a team of researchers',

  },
  {
    imgSrc: './assets/speaker1.png',
    fullName: 'Joyce All',
    speakerDescrition: 'FullStack Software Developer at Microverse',
    paragrapheContent: 'The literature review was carried out by a team of researchers',

  },
  {
    imgSrc: './assets/speaker(1).jpeg',
    fullName: 'Yan Zah',
    speakerDescrition: 'FullStack Software Developer at Microverse',
    paragrapheContent: 'The team was brought together during the initial bidding process.',

  },
  {
    imgSrc: './assets/speaker-three.JPG',
    fullName: 'Joyce All',
    speakerDescrition: 'Manager at AMJ Company',
    paragrapheContent: 'The review process involved co-ordinated team work',

  },
  {
    imgSrc: './assets/speaker1.png',
    fullName: 'Yan Zah',
    speakerDescrition: 'FullStack Software Developer at Microverse',
    paragrapheContent: 'In further discussions with UNICEF shortly before the completion date for',

  },
  {
    imgSrc: './assets/speaker1.png',
    fullName: 'Yan Zah',
    speakerDescrition: 'FullStack Software Developer at Microverse',
    paragrapheContent: 'Teacher educators (who are they, how are they trained and supported,disabilities)',

  },
];

featuredSpeaker.innerHTML = `
<h1>Featured Speakers</h1>
          <div class="featured-speakers">
            <div class="feature-speaker">
              <figure>
              <img
                  src="${featureImgSrc.src = featuredSpeakerData[0].imgSrc}"
                  alt="speaker one"
                  class="speaker"
                  id="featured-speaker-img"
                />
              </figure>
              <div>
                <h3>${featuredSpeakerData[0].fullName}</h3>
                <p>
                  <span class="speaker-description"> <em>${featuredSpeakerData[0].speakerDescrition}</em> </span> <br>
                  ${featuredSpeakerData[0].paragrapheContent}
                </p>
              </div>
            </div>
            <div class="feature-speaker">
              <figure>
                <img
                  src="${featureImgSrc.src = featuredSpeakerData[1].imgSrc}"
                  alt="speaker two"
                  class="speaker"
                />
              </figure>
              <div>
              <h3>${featuredSpeakerData[1].fullName}</h3>
              <p>
              <span class="speaker-description"> <em>${featuredSpeakerData[1].speakerDescrition}</em> </span> <br>
                ${featuredSpeakerData[1].paragrapheContent}
              </p>
              </div>
            </div>
            <div class="feature-speaker see-feature">
              <figure>
                <img
                  src="${featureImgSrc.src = featuredSpeakerData[2].imgSrc}"
                  alt="speaker three"
                  class="speaker"
                />
              </figure>
              <div>
              <h3>${featuredSpeakerData[2].fullName}</h3>
              <p>
              <span class="speaker-description"> <em>${featuredSpeakerData[2].speakerDescrition}</em> </span> <br>
                ${featuredSpeakerData[2].paragrapheContent}
              </p>
              </div>
            </div>
            <div class="feature-speaker see-feature">
              <figure>
                <img
                  src="${featureImgSrc.src = featuredSpeakerData[3].imgSrc}"
                  alt="speaker four"
                  class="speaker"
                />
              </figure>
              <div>
              <h3>${featuredSpeakerData[3].fullName}</h3>
              <p>
              <span class="speaker-description"> <em>${featuredSpeakerData[3].speakerDescrition}</em> </span> <br>
                ${featuredSpeakerData[3].paragrapheContent}
              </p>
              </div>
            </div>
            <div class="feature-speaker see-feature">
              <figure>
                <img
                  src="${featureImgSrc.src = featuredSpeakerData[4].imgSrc}"
                  alt="speaker five"
                  class="speaker"
                />
              </figure>
              <div>
              <h3>${featuredSpeakerData[4].fullName}</h3>
              <p>
              <span class="speaker-description"> <em>${featuredSpeakerData[4].speakerDescrition}</em> </span> <br>
                ${featuredSpeakerData[4].paragrapheContent}
              </p>
              </div>
            </div>
            <div class="feature-speaker">
              <figure>
                <img
                  src="${featureImgSrc.src = featuredSpeakerData[5].imgSrc}"
                  alt="speaker six"
                  class="speaker"
                />
              </figure>
              <div>
              <h3>${featuredSpeakerData[5].fullName}</h3>
              <p>
              <span class="speaker-description"> <em>${featuredSpeakerData[5].speakerDescrition}</em> </span> <br>
                ${featuredSpeakerData[5].paragrapheContent}
              </p>
              </div>
            </div>
          </div>
        
`;