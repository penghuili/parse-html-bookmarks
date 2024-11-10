# parse-html-bookmarks

Parse HTML bookmarks file for web apps.

1. Works for your frontend web app;
2. Keeps the folder structure;

## Installation

```
npm install parse-html-bookmarks
```

## Usage

### Sample code for react:

```
import { parseHTMLBookmarks } from 'parse-html-bookmarks';

function ImportBookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  return (
    <>
      <input
        onChange={(event) => {
          const file = event.target.files[0];
          const reader = new FileReader();
          reader.onload = () => {
            const htmlContent = reader.result;
            const groups = parseHTMLBookmarks(htmlContent);
            setBookmarks(groups);
          };
          reader.readAsText(file);
        }}
      />

      {bookmarks.map((group) => (
        <div key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((link) => (
              <li key={link.link}>
                <a href={link.link} target="_blank">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
```

## API

### parseHTMLBookmarks

#### Arguments

htmlContent: The string content of the html file;

#### Returns

```
[
  {
    title: 'Folder 1',
    items: [
      { title: 'easyy.click', link: 'https://easyy.click/' }
    ]
  }
]
```

That's everything.

See how I use **parse-html-bookmarks** in [easyy.click](https://github.com/penghuili/easyy.click)
