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

// Button
export interface IButton {
  selectionId: string;
  activeSection: string;
  scrollFunc: (section: string) => void;
}

// Service Box
export interface IServiceBox {
  title: string;
  text: string;
  icon: React.ReactNode;
}

// Project
export interface IProject {
  title: string;
  subtitle: string;
  image: string;
  url: string;
  iconsList: string[] | null;
}
