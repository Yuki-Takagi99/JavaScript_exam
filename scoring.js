$(document).ready(function(){
  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                        ]; //subject_points配列を作成
    let sum = subject_points.reduce(function(accumulator, currentvalue, currentIndex, array){
      return accumulator + currentvalue;
    }); // 追加課題1・・・reduceメソッドを利用して配列の合計を簡潔に記述
    $("#sum_indicate").text(sum); //合計点を出力する処理
    let avg = sum / 5
    $("#average_indicate").text(avg); //平均点を出力する処理
    return avg
  };
  function get_achievement(){
    let avg2 = score_indicate();
    if (avg2 >= 80) {
      return "A"; //平均点が80点以上なら"A"
    } else if (avg2 >= 60) {
      return "B"; //平均点が60点以上なら"B"
    } else if (avg2 >= 40) {
      return "C"; //平均点が40点以上なら"C"
    } else {
      return "D"; //上記以外なら"D"
    }
  };
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                        ]; //subject_points配列を再定義
    let number = subject_points.length; //配列の要素数を代入　
    let judge = "合格";
    for(let i=0; i<number; i++) {
      if (subject_points[i] < 60) { //60点未満の場合
        judge = "不合格";            //"不合格"
        break;
      };
    };
    return judge
  };
  function judgement(){
    let ac = get_achievement();
    let pf = get_pass_or_failure();
    if ($('#alert-indicate')){ //追加課題2・・・removeメソッドで要素を削除
      $('#alert-indicate').remove();
    };
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${ac}です。${pf}です</label>`); //.appendで要素追加
  };
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();　//要素の中身が変更された際に発火
  });
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement()); //get_achievementの結果を出力
  });
  $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure()); //get_pass_or_failureの結果を出力
  });
  $('#btn-declaration').click(function() {
    judgement(); //judgementの結果を出力
  });
});
// ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。
// 例ではJavaScriptとJqueryの両方の記述を使用しているが、どちらかに統一しても構わない
