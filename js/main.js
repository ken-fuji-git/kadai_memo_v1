

//1.Save クリックイベント
$("#t_btn").on("click",function(){
    const mWord   = $("#m_word").val();
    const rWord = $("#r_word").val();
    const age = $("#age").val();
    const value = [mWord,rWord,age];

    console.dir(value);

    if(mWord.length == 0 || rWord.length == 0){
        alert("項目を入力してくださいね");
    }else{
        // 配列をJSON文字列にして保存
        localStorage.setItem(mWord, JSON.stringify(value));
        //localStorage.setItem(key,value);
        const html = '<tr><td>'+mWord+'</td><td>'+rWord+'</td><td>'+age+'</td></tr>';
        $("#list").append(html);
        $("#m_word").val("");//空文字入れて消す
        $("#r_word").val("");//空文字入れて消す
        $("#age").val(0);//空文字入れて消す
    }
});

//2.clear クリックイベント
$("#c_btn").on("click",function(){
    localStorage.clear();
    $("#list").empty();
    $("#key").val("");//空文字入れて消す
    $("#memo").val("");//空文字入れて消す
});

//3.ページ読み込み：保存データ取得表示
for(let i=0;i<localStorage.length;i++){
    const key = localStorage.key(i);//key名
//    const array = localStorage.getItem(key);
    const json  = localStorage.getItem(key);
    const array = JSON.parse(json);   // ← ここで配列に戻す
//    const second = array[1];          // 2番目の要素
    const r_word = array[1];
    const age = array[2];
    console.log("key "+key);
    console.log("array "+array);
    console.log("r_word "+r_word);
    console.log("age "+age);

    
    const html = '<tr><td>'+key+'</td><td>'+r_word+'</td><td>'+age+'</td></tr>';
    $("#list").append(html);
}



