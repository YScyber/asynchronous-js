// オプションを設定
const options = {
    root: null, // ルート要素 (nullはデフォルト値) nullにした場合、見ている画面との交差監視を有効にする
    rootMargin: "-50% 0px", // 交差を検知するルート要素からの距離
    threshold: 0 // 閾値 (0はデフォルト値) 0にした場合、見え始めと見え終わりのときにコールバック関数が呼ばれる
};

// IntersectionObserverコンストラクターを呼び出して交差したときに実行したい関数と、オプション設定を渡す
const observer = new IntersectionObserver(intersectingElement, options);

// 今回の交差を監視するarticle要素
const articles = document.querySelectorAll("article");

// それぞれのarticle要素を監視する
articles.forEach((article) => {
    observer.observe(article);
});

// 交差したときに呼び出す関数
function intersectingElement(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            chengeColor(entry.target);
        }
    });
}

// タイトルの背景色を変える関数
function chengeColor(element) {
    const currentActiveArticles = document.querySelector(".active");
    if (currentActiveArticles !== null) {
        currentActiveArticles.classList.remove("active");
    }
    const newActiveArticles = document.querySelector(`a[href="#${element.id}"]`);
    newActiveArticles.classList.add("active");
}