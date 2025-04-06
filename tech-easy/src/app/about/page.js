import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";

/**
 * About Page Component
 *
 * This page provides information about the Tech-Easy platform,
 * its mission, and the team behind it.
 *
 * It demonstrates:
 * - Semantic HTML structure
 * - Responsive grid layouts
 * - Image optimization with Next.js
 * - BEM class naming convention
 *
 * @returns {JSX.Element} The about page
 */
export default function AboutPage() {
  return (
    <main className={styles.about}>
      {/* Page header section */}
      <header className={styles.about__header}>
        <h1 className={styles.about__title}>About Tech-Easy</h1>
        <p className={styles.about__subtitle}>
          We're on a mission to make technology accessible to everyone through
          AI-powered learning experiences.
        </p>
      </header>

      {/* Main content sections using CSS Grid */}
      <div className={styles.about__content}>
        <section className={styles.about__section}>
          <h2 className={styles.about__sectionTitle}>Our Mission</h2>
          <p className={styles.about__sectionText}>
            At Tech-Easy, we believe that technology should be accessible to
            everyone, regardless of their background or prior experience. Our
            AI-powered platform is designed to break down complex technical
            concepts into easy-to-understand guides that adapt to your learning
            style and pace.
          </p>
        </section>

        <section className={styles.about__section}>
          <h2 className={styles.about__sectionTitle}>How It Works</h2>
          <p className={styles.about__sectionText}>
            Our platform uses advanced AI to analyze your learning patterns and
            preferences. We then customize the content to match your specific
            needs, whether you're a visual learner, prefer step-by-step
            instructions, or learn best through examples and analogies. Our
            technology evolves with you, ensuring you're always receiving the
            most effective learning experience.
          </p>
        </section>

        <section className={styles.about__section}>
          <h2 className={styles.about__sectionTitle}>Our Vision</h2>
          <p className={styles.about__sectionText}>
            We envision a world where technological literacy is universal, where
            people of all ages and backgrounds can harness the power of
            technology to improve their lives and communities. By breaking down
            barriers to tech education, we're working to create a more inclusive
            and innovative future for everyone.
          </p>
        </section>
      </div>

      {/* Team section */}
      <div className={styles.about__team}>
        <h2 className={styles.about__teamTitle}>Meet Our Team</h2>

        <div className={styles.about__teamMembers}>
          {/* Team member cards */}
          <div className={styles.about__teamMember}>
            <div className={styles.about__memberImageContainer}>
              {/* Using Next.js Image component for optimization */}
              <Image
                src="/api/placeholder/150/150" // Placeholder for now, replace with real image path
                alt="Sarah Chen, CEO"
                width={150}
                height={150}
                className={styles.about__memberImage}
              />
            </div>
            <h3 className={styles.about__memberName}>Sarah Chen</h3>
            <p className={styles.about__memberRole}>Chief Executive Officer</p>
            <p className={styles.about__memberBio}>
              With over 15 years of experience in tech education, Sarah founded
              Tech-Easy to make technology accessible to everyone.
            </p>
          </div>

          <div className={styles.about__teamMember}>
            <div className={styles.about__memberImageContainer}>
              <Image
                src="/api/placeholder/150/150" // Placeholder for now, replace with real image path
                alt="Marcus Johnson, CTO"
                width={150}
                height={150}
                className={styles.about__memberImage}
              />
            </div>
            <h3 className={styles.about__memberName}>Marcus Johnson</h3>
            <p className={styles.about__memberRole}>Chief Technology Officer</p>
            <p className={styles.about__memberBio}>
              Marcus leads our technical team, bringing his expertise in AI and
              machine learning to create our adaptive learning platform.
            </p>
          </div>

          <div className={styles.about__teamMember}>
            <div className={styles.about__memberImageContainer}>
              <Image
                src="/api/placeholder/150/150" // Placeholder for now, replace with real image path
                alt="Aisha Patel, Head of Content"
                width={150}
                height={150}
                className={styles.about__memberImage}
              />
            </div>
            <h3 className={styles.about__memberName}>Aisha Patel</h3>
            <p className={styles.about__memberRole}>Head of Content</p>
            <p className={styles.about__memberBio}>
              Aisha ensures that all our educational content is accurate,
              accessible, and engaging for learners at every level.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
