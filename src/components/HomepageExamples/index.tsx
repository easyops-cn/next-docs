import React from "react";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import clsx from "clsx";
import type { FileInfo } from "../../interfaces";
import NextExample from "../NextExample";
import * as MyTodos3 from "../../examples/my-todos-3";
import * as WeatherShenzhen from "../../examples/weather-shenzhen";
import * as WeatherApp from "../../examples/weather-app";
import styles from "./styles.module.css";
import visualBuilderImage from "../../../static/img/weather-app.png";

interface ExampleInfo {
  files?: FileInfo[];
  hiddenFiles?: Record<string, string>;
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
      <HomepageExample
        button="learn-more-about-context"
        {...MyTodos3}
        title={translate({
          id: "homepage.examples.1.title",
          message: "Create interactive user interfaces",
        })}
        description={translate({
          id: "homepage.examples.1.description",
          message:
            "While bricks with properties describe the UI, you can define actions in response to events triggered by user interactions, and manage page states by simple JavaScript expressions.",
        })}
        postDescription={translate({
          id: "homepage.examples.1.postDescription",
          message:
            "Contexts are global states that can be shared across bricks on the page. The typical data flow in Brick Next is: properties → UI → events → actions → states → properties.",
        })}
      />
      <HomepageExample
        {...WeatherShenzhen}
        title={translate({
          id: "homepage.examples.2.title",
          message: "Connect to backend services",
        })}
        description={translate({
          id: "homepage.examples.2.description",
          message:
            "You can easily combine page states with any remote HTTP APIs.",
        })}
        postDescription={translate({
          id: "homepage.examples.2.postDescription",
          message:
            "Context can be initialized with a static value, or from a backend service.",
        })}
      />
      <HomepageExample
        button="learn-more-about-templates"
        large
        {...WeatherApp}
        title={translate({
          id: "homepage.examples.3.title",
          message: "Break the UI into a brick hierarchy",
        })}
        description={translate({
          id: "homepage.examples.3.description",
          message:
            "Split up the UI as it grows, you can make templates to encapsulate parts of your UI, and reuse them just like other bricks.",
        })}
      />
      <HomepageExample
        image={visualBuilderImage}
        button="contact-us"
        title={translate({
          id: "homepage.examples.4.title",
          message: "Empower with a visual IDE",
        })}
        description={translate({
          id: "homepage.examples.4.description",
          message:
            "Even better, build your app storyboards in a visual IDE, with minimal programming experience.",
        })}
      />
    </>
  );
}

export function HomepageExample({
  files,
  hiddenFiles,
  image,
  title,
  description,
  postDescription,
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
            hiddenFiles={hiddenFiles}
            condensed
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
                  to="/docs/learn/quick-start"
                >
                  Get started
                </Link>
              ) : button == "learn-more-about-context" ? (
                <Link
                  className="button button--outline button--secondary"
                  to="/docs/concepts/context"
                >
                  Learn more about context
                </Link>
              ) : button == "learn-more-about-templates" ? (
                <Link
                  className="button button--outline button--secondary"
                  to="/docs/concepts/custom-templates"
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
