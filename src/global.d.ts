declare module "*.yaml" {
  const content: string;
  export default content;
}

declare module "*.raw.css" {
  const content: string;
  export default content;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.png" {
  const url: string;
  export default url;
}
