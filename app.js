const md = window.markdownit()
    .use(window.texmath, {
        engine: katex,
        delimiters: ['dollars', 'brace'],
        katexOptions: { macros: {"\\RR": "\\mathbb{R}"} }
    });

const nocache = () => `?t=${Date.now()}`;

async function loadPost(postName) {
    const res = await fetch(`posts/${postName}.md` + nocache());
    if (!res.ok) return;
    document.getElementById('content').innerHTML = md.render(await res.text());
    window.location.hash = postName;
    document.querySelectorAll('pre code').forEach(b => hljs.highlightElement(b));
}

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (hash) loadPost(hash);
});

loadPost(window.location.hash.slice(1) || 'main');

