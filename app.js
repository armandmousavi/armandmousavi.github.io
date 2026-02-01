const md = window.markdownit()
    .use(window.texmath, {
        engine: katex,
        delimiters: ['dollars', 'brace'],
        katexOptions: { macros: {"\\RR": "\\mathbb{R}"} }
    });

const nocache = () => `?t=${Date.now()}`;

// Strip YAML frontmatter from markdown content
function stripFrontmatter(text) {
    const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (match) {
        return text.slice(match[0].length);
    }
    return text;
}

async function loadPost(postName) {
    const res = await fetch(`posts/${postName}.md` + nocache());
    if (!res.ok) return;
    const rawText = await res.text();
    const content = stripFrontmatter(rawText);
    document.getElementById('content').innerHTML = md.render(content);
    window.location.hash = postName;
    document.querySelectorAll('pre code').forEach(b => hljs.highlightElement(b));
}

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (hash) loadPost(hash);
});

loadPost(window.location.hash.slice(1) || 'main');

