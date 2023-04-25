import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import type { FileInfo } from "../../interfaces";
import NextExample from "../NextExample";
// import * as MyTodos1 from "../../examples/my-todos-1";
// import * as MyTodos2 from "../../examples/my-todos-2";
import * as MyTodos3 from "../../examples/my-todos-3";
import * as WeatherShenzhen from "../../examples/weather-shenzhen";
import * as WeatherApp from "../../examples/weather-app";
import styles from "./styles.module.css";
import visualBuilderImage from "../../../static/img/weather-app.png";

interface ExampleInfo {
  files?: FileInfo[];
  image?: string;
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  postDescription?: string | JSX.Element;
  styleText?: string;
  button?: HomepageButtonType;
  large?: boolean;
}

type HomepageButtonType =
  | "get-started"
  | "learn-more-about-context"
  | "learn-more-about-templates"
  | "contact-us";

export default function HomepageExamples(): JSX.Element {
  return (
    <>
      {/* <HomepageExample {...MyTodos1} /> */}
      {/* <HomepageExample {...MyTodos2} /> */}
      <HomepageExample button="learn-more-about-context" {...MyTodos3} />
      <HomepageExample {...WeatherShenzhen} />
      <HomepageExample
        button="learn-more-about-templates"
        large
        {...WeatherApp}
      />
      <HomepageExample
        title="Empower with a visual IDE"
        description="Even better, build your app storyboards in a visual IDE, with minimal programming experience."
        image={visualBuilderImage}
        button="contact-us"
      />
    </>
  );
}

export function HomepageExample({
  files,
  image,
  title,
  description,
  postDescription,
  styleText,
  button,
  large,
}: ExampleInfo): JSX.Element {
  return (
    <section className={styles.homeContainer}>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h2 className={styles.title}>{title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--8 col--offset-2">
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        {files && (
          <NextExample
            files={files}
            styleText={styleText}
            className={clsx(styles.homeExample, {
              [styles.homeExampleLarge]: large,
            })}
          />
        )}
        {image && (
          <img
            src={image}
            className={styles.image}
            width={840}
            loading="lazy"
          />
        )}
        <div className="row">
          <div className="col col--8 col--offset-2">
            <p className={styles.description}>{postDescription}</p>
          </div>
        </div>
        {button && (
          <div className={clsx("row", styles.buttonContainer)}>
            <div className="col col--8 col--offset-2">
              {button === "get-started" ? (
                <Link
                  className="button button--outline button--secondary"
                  to="/docs/intro"
                >
                  Get started
                </Link>
              ) : button == "learn-more-about-context" ? (
                <Link
                  className="button button--outline button--secondary"
                  to="/docs/intro"
                >
                  Learn more about context
                </Link>
              ) : button == "learn-more-about-templates" ? (
                <Link
                  className="button button--outline button--secondary"
                  to="/docs/intro"
                >
                  Learn more about templates
                </Link>
              ) : (
                <Link
                  className="button button--outline button--secondary"
                  href="https://uwintech.cn/"
                  target="_blank"
                >
                  Contact us
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
