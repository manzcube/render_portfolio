declare namespace JSX {
  interface IntrinsicElements {
    "zapier-interface-page-embed": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "page-id": string;
      "no-background"?: string | boolean;
    };
  }
}
