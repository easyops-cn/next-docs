declare module "*.yaml" {
  const content: string;
  export default content;
}

import type * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    // Add a CSS Custom Property
    '--prism-color'?: string;
    '--prism-background-color'?: string;
  }
}