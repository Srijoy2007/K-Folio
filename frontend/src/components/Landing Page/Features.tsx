import styles from "./landing.module.css";

// Features
// Landing section that highlights product features. It sets
// `data-section="features"` so the page-level IntersectionObserver can
// detect and mark this section as active.
export default function Features() {
  return (
    <section className={styles.section} data-section="features">
      <h2>Features built for you</h2>
    </section>
  );
}
