import { useI18n } from '../i18n';
import { ContactForm } from './ContactForm';
import './Form.css';
import './Hero.css';
import './Maintenance.css';

export function Maintenance() {
  const { t } = useI18n();
  const m = t.maintenance;
  const [first, middle, last] = m.lines;

  return (
    <section className="hero maintenance" id="top">
      <div className="container">
        <span className="label label--brand reveal">{m.eyebrow}</span>
        <h1 className="hero__title reveal">
          <span>{first}</span>
          <span className="accent">{middle}</span>
          <span>{last}</span>
        </h1>
        <blockquote className="hero__quote reveal">{m.text}</blockquote>

        <div className="maintenance__status reveal" role="status">
          <span className="maintenance__dot" aria-hidden="true" />
          <span className="label">{m.status}</span>
          <span className="maintenance__bar" aria-hidden="true">
            <span />
          </span>
        </div>

        <div className="maintenance__contact reveal">
          <h2 className="maintenance__contact-title">{t.contact.title}</h2>
          <ContactForm text={t.contact} />
        </div>
      </div>
    </section>
  );
}
