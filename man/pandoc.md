
-- markdown 转换为html
pandoc --standalone  -t html -o nav.html nav.md

pandoc --standalone --from gfm --to html5 -o nav.html nav.md
