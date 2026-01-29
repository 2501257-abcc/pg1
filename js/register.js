let diaryList = JSON.parse(localStorage.getItem('diaryList')) || [];

function register() {

    const Diarytitle = document.getElementById('title');
    const title = document.getElementById('contentTitle');
    const subTitle = document.getElementById('contentSubTitle');
    const place = document.getElementById('contentPlace');
    const date = document.getElementById('contentDate');
    const comment = document.getElementById('contentComment');

    // 必須チェック
    if (!title.value || !place.value || !date.value) {
        alert('(必須)項目が入力されていません');

        // エラーメッセージ重複防止
        if (!document.getElementById('errorMessage')) {
            const p = document.createElement('p');
            p.id = 'errorMessage';
            p.textContent = '(必須)項目を入力してください。';
            p.style.color = '#e41515';
            Diarytitle.appendChild(p);
        }
        return;
    }

    // 追加保存（上書きされない）
    diaryList.push({
        title: title.value,
        subTitle: subTitle.value,
        place: place.value,
        date: date.value,
        comment: comment.value,
    });

    localStorage.setItem('diaryList', JSON.stringify(diaryList));

    // 入力欄クリア
    title.value = '';
    subTitle.value = '';
    place.value = '';
    date.value = '';
    comment.value = '';

    console.log(diaryList);

    alert('登録が完了しました！');

    location.href = 'list.html';
}
