import styles from "./landing.module.css";

// Testimonials
// Simple testimonial section for the landing page. Marked with
// `data-section="testimonials"` so the page-level visibility tracker can
// update the active section.
export default function Testimonials() {
  return (
    <section className={styles.section} data-section="testimonials">
      <h2>What students say</h2>
    </section>
  );
}
