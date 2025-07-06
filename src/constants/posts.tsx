export type PostResponse = {
    id: string;
    frontMatter: {
      title: string;
      tags: string[];
      summary: string;
      time: string;
    };
  };
  