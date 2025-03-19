document.addEventListener('DOMContentLoaded', function () {
    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']], // 启用单 $ 符号
            processEscapes: true, // 允许转义符号
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
        },
        CommonHTML: { matchFontHeight: false },
        messageStyle: 'none'
    });
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
});