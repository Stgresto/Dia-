#!/usr/bin/env python3
"""Builds game/level-t1d-premium.html from the untouched original by injecting the premium layer."""
import pathlib, sys
here = pathlib.Path(__file__).resolve().parent
src = (here.parent / 'original' / 'level-t1d.html').read_text(encoding='utf8')
css = (here / 'premium.css').read_text(encoding='utf8'); js = (here / 'premium.js').read_text(encoding='utf8')
assert src.count('</style>') >= 1 and src.rstrip().endswith('</html>') and src.count('</body>') == 1
i = src.index('</style>')  # first style block closes the main stylesheet; premium CSS is appended after it
out = src[:i] + '\n/* === premium layer === */\n' + css + src[i:]
j = out.rindex('</body>')
out = out[:j] + '<script>\n' + js + '\n</script>\n' + out[j:]
(here.parent / 'level-t1d-premium.html').write_text(out, encoding='utf8')
print('built', len(out))
