// Initialize markdown-it with LaTeX support
const md = window.markdownit()
    .use(window.texmath, {
        engine: katex,
        delimiters: ['dollars', 'brace'],
        katexOptions: { macros: {"\\RR": "\\mathbb{R}"} }
    });

let posts = [];

async function initialize() {
    try {
        // Check if there's a hash in the URL
        const hash = window.location.hash.slice(1);
        if (hash) {
            loadPost(hash);
        } else {
            // otherwise just load main.md
            loadPost('main');
        }
    } catch (error) {
        console.error('Error loading posts list:', error);
    }
}

async function loadPost(postName) {
    try {
        const filepath = `posts/${postName}.md`;
        const response = await fetch(filepath);
        const markdown = await response.text();
        const html = md.render(markdown);
        document.getElementById('content').innerHTML = html;
        
        window.location.hash = postName;
        
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
        
    } catch (error) {
        console.error('Error loading post:', error);
        document.getElementById('content').innerHTML = '<h1>Error loading content</h1>';
    }
}

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (hash) {
        loadPost(hash);
    }
});

initialize();

