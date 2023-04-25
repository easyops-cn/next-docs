import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageExamples from "../components/HomepageExamples";
import { files, styleText } from "../examples/my-todos-1";
import NextExample from "../components/NextExample";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--outline button--lg"
            href="https://stackblitz.com/edit/brick-next-renderer?file=storyboard.yml"
            target="_blank"
          >
            Try a Demo
          </Link>
        </div>
      </div>
      <div className="container">
        <NextExample
          files={files}
          styleText={styleText}
          className={styles.heroExample}
          condensed
        />
        <div className="row">
          <div className="col col--8 col--offset-2">
            <p className={styles.description}>
              Build user interfaces by defining storyboards, which are composed
              of individual pieces called bricks. Bricks are just{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components"
              >
                Web Components
              </a>
              , combine bricks into pages and apps, just like building LEGOs.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout description="A low-code engine library based on Web Components">
      <HomepageHeader />
      <main>
        <HomepageExamples />
      </main>
    </Layout>
  );
}
