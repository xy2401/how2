



# 添加空格

给多级列表标题千明添加 空格 和 - 以符合 markdown 的 格式

    $ echo -e '1\n1.1\n1.2\n1.2.1.1\n2\'   \
    | sed 's/^\([0-9]\+\.\)\{4\}/            -  &/'  \
    | sed 's/^\([0-9]\+\.\)\{3\}/        -  &/'  \
    | sed 's/^\([0-9]\+\.\)\{2\}/    -  &/'  \
    | sed 's/^\([0-9]\+\.\)\{1\}/-  &/'
    1
    -  1.1
    -  1.2
            -  1.2.1.1
    2\