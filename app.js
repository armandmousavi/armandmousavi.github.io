function isRelative(url) {
    return url && !/^(https?:|\/|#|data:)/.test(url);
}

function resolveRelative(url, base) {
    return base + url.replace(/^\.\//, '');
}

const md = window.markdownit({ html: true })
    .use(window.texmath, {
        engine: katex,
        delimiters: ['dollars', 'brace'],
        katexOptions: { macros: {"\\RR": "\\mathbb{R}"} }
    });

// Resolve relative URLs from the post's directory (like a local md viewer)
md.renderer.rules.image = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const src = token.attrGet('src');
    const base = env.postBasePath || '';
    if (base && isRelative(src)) token.attrSet('src', resolveRelative(src, base));
    return self.renderToken(tokens, idx, options);
};
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const href = token.attrGet('href');
    const base = env.postBasePath || '';
    if (base && isRelative(href)) token.attrSet('href', resolveRelative(href, base));
    return self.renderToken(tokens, idx, options);
};

const nocache = () => `?t=${Date.now()}`;

// Strip YAML frontmatter from markdown content
function stripFrontmatter(text) {
    const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (match) {
        return text.slice(match[0].length);
    }
    return text;
}

// Base path for the current post (relative URLs in markdown resolve from the post's directory, like a local md viewer)
function postBasePath(postName) {
    const lastSlash = postName.lastIndexOf('/');
    return 'posts/' + (lastSlash >= 0 ? postName.slice(0, lastSlash + 1) : '');
}

async function loadPost(postName) {
    const res = await fetch(`posts/${postName}.md` + nocache());
    if (!res.ok) return;
    const rawText = await res.text();
    const content = stripFrontmatter(rawText);
    const html = md.render(content, { postBasePath: postBasePath(postName) });
    document.getElementById('content').innerHTML = html;
    window.location.hash = postName;
    document.querySelectorAll('pre code').forEach(b => hljs.highlightElement(b));
}

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (hash) loadPost(hash);
});

loadPost(window.location.hash.slice(1) || 'main');

