import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";
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
        <p className="hero__subtitle">
          <Translate id="homepage.hero.subtitle">
            A low-code engine library based on Web Components
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/learn/quick-start"
          >
            <Translate>Get Started</Translate>
          </Link>
          <Link
            className="button button--secondary button--outline button--lg"
            href="https://stackblitz.com/edit/brick-next-renderer?file=storyboard.yml"
            target="_blank"
          >
            <Translate>Try a Demo</Translate>
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
              <Translate
                id="homepage.hero.description"
                values={{
                  link: (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components"
                    >
                      Web Components
                    </a>
                  ),
                }}
              >
                {"Build user interfaces by defining storyboards, which are composed " +
                  "of individual pieces called bricks. Bricks are just {link}, " +
                  "combine bricks into pages and apps, just like building LEGOs."}
              </Translate>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageExamples />
      </main>
    </Layout>
  );
}
