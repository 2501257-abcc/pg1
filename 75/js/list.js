let diaryList = JSON.parse(localStorage.getItem('diaryList')) || [];

document.addEventListener('DOMContentLoaded', () => {

    const listArea = document.getElementById('diaryListArea');
    listArea.innerHTML = '';

    if (diaryList.length === 0) {
        listArea.textContent = '現在は何も登録されていません';
        return;
    }

    diaryList.forEach((diary, index) => {

        const item = document.createElement('div');
        item.className = 'diary-item';

        item.innerHTML = `
            <p>⭐ ${index + 1}</p>
            <p>タイトル：${diary.title}</p>
            <p>サブタイトル：${diary.subTitle || ''}</p>
            <p>場所：${diary.place}</p>
            <p>日付：${diary.date}</p>
            <p>${diary.comment || ''}</p>
            <button onclick="deleteDiary(${index})">削除</button>
        `;

        listArea.appendChild(item);
    });
});

function addButton() {
    location.href = 'register.html';
}

function deleteDiary(index) {
    if (!confirm('この日記を削除しますか？')) {
        return;
    }

    diaryList.splice(index, 1);
    localStorage.setItem('diaryList', JSON.stringify(diaryList));

    location.reload();
}
