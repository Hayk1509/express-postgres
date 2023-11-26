declare module "*.css" {
    const value: Record<string, string>;
    export default value;
  }
  
  declare module "*.scss" {
    const value: Record<string, string>;
    export default value;
  }
  
  declare module "*.svg?react" {
    import { FC, SVGProps } from "react";
  
    export const ReactComponent: FC<SVGProps<SVGSVGElement> & { title?: string }>;
  }
  