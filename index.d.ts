declare module "parse-html-bookmarks" {
  export interface BookmarkLink {
    link: string;
    title: string;
  }

  export interface BookmarkGroup {
    title: string;
    items: BookmarkLink[];
  }

  /**
   * Parses an HTML string of bookmarks and groups them by their headings.
   * @param htmlContent - The HTML string containing bookmarks.
   * @returns An array of BookmarkGroup objects, each representing a category of bookmarks.
   */
  export function parseHTMLBookmarks(htmlContent: string): BookmarkGroup[];
}
