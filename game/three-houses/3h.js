//let infos =[];
infos = [];


props = [];
//擅长职业 不擅长职业 才能绽放
//挖角条件 失物 兴趣
//喜欢的东西 讨厌的东西 喜好礼物
//喜好茶叶
//茶话会最佳选项 信件答案
props = props.concat(['擅长职业','不擅长职业','才能绽放']);
props = props.concat(['挖角条件','失物','兴趣']);
props = props.concat(['喜欢的东西','讨厌的东西','喜好礼物']);
props = props.concat(['喜好茶叶']);
props = props.concat(['茶话会最佳选项','信件答案']);

document.querySelectorAll('.table2').forEach(t => {
    console.log(1);

    //二维数组
    let info = [];
    infos.push(info);

    let i, j, k;//三列
    for (i = 0; i < props.length; i++) {
        info.push([]);
    }
    t.querySelectorAll('tr').forEach(r => {
        let tds = r.querySelectorAll('td');
        if ('擅长职业' == tds[0].innerHTML.trim()) {
            i = 0;
            j = 1;
            k = 2;
        } else if ('挖角条件' == tds[0].innerHTML.trim()) {
            i = 3;
            j = 4;
            k = 5;
        } else if ('喜欢的东西' == tds[0].innerHTML.trim()) {
            i = 6;
            j = 4;
            k = 8;
        } else if ('喜好茶叶' == tds[0].innerHTML.trim() && tds[0].colSpan == 1) {
            //西提司 锥里尔 阿罗伊斯 吉尔伯特 卡多莉奴
            i = 9;
            j = 4;
            k = 8;
        } else if ('喜好茶叶' == tds[0].innerHTML.trim()) {
            i = 9;
            j = 9;
            k = 9;
        } else if ('茶话会最佳选项' == tds[0].innerHTML.trim()) {
            i = 10;
            j = 10;
            k = 11;
        } else if ('信件答案' == tds[0].innerHTML.trim()) {
            //蕾雅
            i = 11;
            j = 8;
            k = 9;
        } else {
            try {
                info[i].push(tds[0] && tds[0].innerText);
                info[j].push(tds[1] && tds[1].innerText);
                info[k].push(tds[2] && tds[2].innerText);
            } catch (error) {
                console.log('读取错误跳过' + infos.length)
            }
        }
    });
})



namesEN = [];
namesEN = namesEN.concat(['Edelgard','Hubert','Ferdinand','Linhardt','Caspar','Bernadetta','Dorothea','Petra']);
namesEN = namesEN.concat(['Dimitri','Dedue','Felix','Ashe','Sylvain','Mercedes','Annette','Ingrid']);
namesEN = namesEN.concat(['Claude','Lorenz','Raphael','Ignatz','Lysithea','Marianne','Hilda','Leonie']);
namesEN = namesEN.concat(['Rhea','Seteth','Flayn','Hanneman','Manuela','Cyril','Alois','Shamir','Gilbert','Catherine','Jeralt']);
namesEN = namesEN.concat(['Byleth','Jeritza']);//我和蒙面老师



names=[];
document.querySelectorAll('strong').forEach(s=>names.push(s.innerText));


result = "";
img = ""
links = [];
infos.forEach((info,index) => {
    //遍历所有属性
    result += `# ${names[index]}    \n`;//姓名

    img = `![${namesEN[index]}](character-images/${namesEN[index]}.png "${names[index]} ${namesEN[index]}")`;//图片
    result += img+'    \n';
    links.push(`[${img}](#${names[index]})`);
	
    for(let i=0;i<props.length;i++){
        let p = info[i].filter(p=>p&&p.length>0);
        if(p.length>0){
		     result += `## ${props[i]}    \n`
            result += p.join(' , ')
            result += "    \n";
        }
    }

    result += "\n\n\n\n";
});

result += links.join('\n');

console.log(result);


