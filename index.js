export function parseHTMLBookmarks(htmlContent) {
  const h3s = findH3Positions(htmlContent);
  const groups = [];

  for (let i = 0; i < h3s.length; i++) {
    const h3 = h3s[i];
    const nextH3 = h3s[i + 1];
    const subString = htmlContent.slice(h3.index, nextH3?.index);
    const links = parseLinks(subString);
    if (links.length) {
      groups.push({
        title: h3.title,
        items: links,
      });
    }
  }

  return groups;
}

function parseLinks(htmlContent) {
  const aPattern = /<A HREF="(.*?)".*?>(.*?)<\/A>/gi;
  let match;
  const links = [];

  while ((match = aPattern.exec(htmlContent)) !== null) {
    links.push({
      link: match[1],
      title: match[2],
    });
  }

  return links;
}

function findH3Positions(htmlContent) {
  const h3Pattern = /<H3.*?>(.*?)<\/H3>/gi;
  let match;
  const h3Positions = [];

  while ((match = h3Pattern.exec(htmlContent)) !== null) {
    h3Positions.push({
      index: match.index,
      title: match[1],
    });
  }

  return h3Positions;
}
