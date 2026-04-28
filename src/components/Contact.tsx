import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

import { openingHours, socials } from '../../constants/index.ts';

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', { type: 'words' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      defaults: { ease: 'power1.inOut' },
    });

    tl.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    })
      .from('#contact h3, #contact p', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to('#f-right-leaf', {
        y: -50,
        duration: 1,
        ease: 'power1.inOut',
      })
      .to(
        '#f-left-leaf',
        {
          x: -50,
          duration: 1,
          ease: 'power1.inOut',
        },
        '<',
      );
  });

  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="" aria-hidden="true" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="" aria-hidden="true" id="f-left-leaf" />

      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@ljscocktail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map(({ day, time }) => (
            <p key={day}>
              {day}: {time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map(({ url, icon, name }) => (
              <a href={url} key={name} target="_blank" rel="noopener noreferrer" aria-label={name}>
                <img src={icon} alt={name} />
              </a>
            ))}
          </div>
        </div>

        <img src="/images/footer-drinks.png" alt="drinks" className="drink-img" />
      </div>
    </footer>
  );
};

export default Contact;
