import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
import './reflection.css';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: '1935—38',
    title: '一座神社，在殖民治理下成形',
    text: '桃園神社自 1935 年開始籌建，1938 年竣工。它的選址、參道與建築形式，不只是木構工藝，也承載當時的政治與信仰秩序。',
    note: '桃園市政府資料記載：昭和 10 年開始籌建；文化資產資料與園區沿革記載 1938 年竣工。',
    side: '建立'
  },
  {
    year: '1946',
    title: '建築被留下，名稱與用途被改寫',
    text: '戰後，原桃園神社改設為新竹縣忠烈祠。神社空間轉作祭祀忠烈者之用，新的功能疊在原有建築上，舊的象徵並未因此消失。',
    note: '戰後改設的年份與名稱見桃園市政府及交通部觀光署資料。',
    side: '改作'
  },
  {
    year: '1950',
    title: '行政區更名，場域再一次被命名',
    text: '桃園設縣後，祠名隨之成為桃園縣忠烈祠。一次更名看似只改了牌額，也讓同一空間進入新的地方行政與紀念秩序。',
    note: '官方觀光資料列出 1950 年更名；確切牌額變更日期尚未比對原始檔案。',
    side: '命名'
  },
  {
    year: '1985',
    title: '拆除提案，讓保存成為公共議題',
    text: '縣府曾規劃拆除神社、改建中國宮殿式忠烈祠。建築師、學界、文化界與媒體投入討論；地方議會最後不同意拆除，原預算轉作修葺。',
    note: '官方沿革與學術研究對事件節點和議會日期有不同記載；本展僅標示年份，不把單一日期視為定論。',
    side: '爭議'
  },
  {
    year: '1986—87',
    title: '修葺原建築，而非另起新殿',
    text: '修整工程自 1986 年 2 月延續至隔年 2 月。這不是讓時間倒轉，而是當時的人們選擇繼續使用既有建築，並承認它值得留下。',
    note: '桃園市政府園區沿革記載工程期間及原新建預算轉作修葺。',
    side: '修葺'
  },
  {
    year: '1994',
    title: '保存從倡議，進入文化資產制度',
    text: '桃園神社建築群於 1994 年被指定為古蹟。價值不再只靠一場事件裡的聲音支撐，也進入正式的文化資產制度。',
    note: '園區官方沿革記載 1994 年指定；指定層級與法規制度曾隨制度調整。',
    side: '指定'
  },
  {
    year: '2016—17',
    title: '修復與活化，新的選擇仍在發生',
    text: '後續修復處理屋頂防漏、木構件與白蟻防治等問題，也討論如何兼顧神社建築樣貌與忠烈祠功能。保存不是單一答案，而是一次次具體的取捨。',
    note: '市府 2016 年工程資訊記載修復重點與鳥居評估方向；2017 年公告修復落成。鳥居最後施作細節仍待工程報告核對。',
    side: '再修復'
  }
];

const objects = {
  torii: {
    label: '鳥居',
    number: '01 / 門與界線',
    title: '一座門，指向哪一種秩序？',
    body: '鳥居是神社空間的重要入口。2016 年市府工程說明曾提出由文資委員評估是否恢復原貌；這項記載呈現當時的討論方向，並不足以單獨證明後續工程的最終作法。',
    choice: '待核：比對修復工程工作報告與竣工圖，確認方案如何落地。',
    svg: '<path d="M58 80h354M82 97h306M106 98v196m218-196v196M40 294h390"/><path class="accent-line" d="M46 65v16m378-16v16"/>'
  },
  name: {
    label: '名稱座',
    number: '02 / 名稱與制度',
    title: '名字變了，建築就變了嗎？',
    body: '神社改作忠烈祠，名稱與祭祀對象改變，原有空間卻繼續被使用。建築因此同時留下不同政權、制度與紀念方式交疊的痕跡。',
    choice: '可查方向：調閱歷次名稱座照片、現場調查與修復圖說。',
    svg: '<path d="M78 98h306v38H78zM104 136v162m254-162v162M75 298h312M90 317h282"/><path class="accent-line" d="M180 117h102"/>'
  },
  roof: {
    label: '屋頂與木構',
    number: '03 / 材料與修復',
    title: '修好，不等於回到某個原點',
    body: '市府公開的修復資訊提及屋頂防漏、屋瓦、木籬與白蟻防治。材料更新與工法選擇都可能影響「看起來像原貌」與「讓建築繼續安全使用」之間的平衡。',
    choice: '待核：公開摘要未列出各構件更換比例與材料判定依據。',
    svg: '<path d="M52 142l212-78 212 78M76 145h376M104 145v150m256-150v150M80 295h360M96 166h328"/><path class="accent-line" d="M264 64v82"/>'
  }
};

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main">跳至展覽內容</a>
  <div class="reading-progress" aria-hidden="true"><span></span></div>
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="留下來的痕跡，回到首頁"><span class="wordmark-mark">L／T</span><span>數位策展 <i>—</i> 01</span></a>
    <nav aria-label="主要導覽"><a href="#story">展覽敘事</a><a href="#objects">建築檔案</a><a href="#response">觀展反思</a></nav>
    <span class="header-index">桃園・虎頭山 <span>24°59′N</span></span>
  </header>

  <main id="main">
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-topline"><span>一座建築的多重生命</span><span>桃園神社／忠烈祠　1935 — NOW</span></div>
      <div class="hero-copy">
        <p class="eyebrow">SDG 11.4 ／ 文化資產的保存與再詮釋</p>
        <h1 id="hero-title">留下來的<br/><em>痕跡</em><span class="hero-period">。</span></h1>
        <p class="hero-deck">一座曾被提議拆除的建築，如何在不同時代被重新命名、使用與修復？</p>
        <a class="round-link" href="#threshold" aria-label="開始觀展"><span>向下<br/>觀展</span><b>↓</b></a>
      </div>
      <div class="hero-art" aria-label="桃園神社／忠烈祠構件的原創示意圖，非比例復原圖">
        <div class="art-caption"><span>FIELD NOTE 01</span><span>示意繪圖・非比例復原</span></div>
        <svg class="architecture" viewBox="0 0 500 350" role="img" aria-labelledby="arch-title arch-desc">
          <title id="arch-title">以線條描繪的鳥居與本殿</title><desc id="arch-desc">原創構件示意圖，呈現鳥居、屋頂與建築軸線，不作為歷史建築的精確復原。</desc>
          <g class="arch-back"><path d="M49 124H451M71 141H429M91 142V293M409 142V293M35 293H465M89 309H411"/><path d="M119 221H381M137 204H363M151 203V293M349 203V293M124 293H376"/><path d="M100 171l150-53 150 53M119 172h262M130 186h240"/></g>
          <g class="arch-front"><path d="M32 80H468M51 98H449M76 99V324M424 99V324M20 324H480"/><path d="M183 282h134M197 269h106M209 269v55m82-55v55"/></g>
          <path class="arch-axis" d="M250 42v285"/><circle cx="250" cy="41" r="4"/>
        </svg>
        <div class="art-side-note">入口不是邊界。<br/>它也是一種選擇。</div>
      </div>
      <div class="hero-bottomline"><span>01　保存，不是把時間停住</span><span>SCROLL TO ENTER　⌄</span></div>
    </section>

    <section class="threshold section-pad" id="threshold">
      <div class="section-kicker"><span>進入現場</span><span>01 / 04</span></div>
      <div class="threshold-grid">
        <p class="display-statement">建築留下來，<br/>不代表它的意義<br/><i>從未改變。</i></p>
        <div class="threshold-note"><p>桃園神社在戰後改作忠烈祠。1985 年，地方政府曾提出拆除改建；建築師、學界與文化界的行動，讓原建築走向修葺與保存。多年後，建築群被指定為古蹟，又經歷新的修復。</p><p>這段歷史讓我們看見：保存從來不是把一棟建築凍結在過去，而是後人不斷決定哪些東西值得留下、如何繼續使用，以及由誰來詮釋。</p><a class="text-link" href="#story">沿著決策走一遍 <span>↘</span></a></div>
      </div>
      <div class="sdg-band"><span class="sdg-mark">11</span><div><b>SDG 11.4</b><p>加強保護和維護世界文化與自然遺產的努力。</p></div><a href="https://sdgs.un.org/goals/goal11" target="_blank" rel="noreferrer">聯合國目標 ↗</a></div>
    </section>

    <section class="timeline-section section-pad" id="story">
      <div class="section-kicker"><span>一個場所，幾次重新開始</span><span>02 / 04</span></div>
      <div class="timeline-intro"><h2>留下來的，<br/><em>不只是一棟建築。</em></h2><p>沿著名稱、功能與保存行動，看見同一個空間如何被不同時代重新安排。</p></div>
      <div class="timeline" aria-label="桃園神社／忠烈祠時間軸">
        <div class="timeline-rail"><span class="timeline-rail-fill"></span></div>
        ${milestones.map((item, i) => `<article class="timeline-item ${i % 2 ? 'is-offset' : ''}" data-index="${i}"><span class="timeline-dot" aria-hidden="true"></span><div class="timeline-year">${item.year}</div><div class="timeline-card"><span class="card-tag">${item.side}　/　0${i + 1}</span><h3>${item.title}</h3><p>${item.text}</p><details><summary>資料與判讀</summary><p>${item.note}</p></details></div></article>`).join('')}
      </div>
      <p class="timeline-caveat"><span>!</span> 事件日期採官方沿革、學術研究與公開資料可交叉支持的精度。1985 年爭議的決議日期在來源間有差異，本展不以單一日分割複雜的保存過程。</p>
    </section>

    <section class="objects-section section-pad" id="objects">
      <div class="section-kicker"><span>建築檔案／觀看細節</span><span>03 / 04</span></div>
      <div class="objects-heading"><div><p class="eyebrow">THE OBJECTS HOLD THE ARGUMENT</p><h2>把「保存」<br/>拆成幾個選擇。</h2></div><p>點選構件，看看它牽動的歷史問題。這些線稿是策展用示意圖，並非歷史照片或精確復原。</p></div>
      <div class="object-viewer">
        <div class="object-tabs" role="tablist" aria-label="選擇建築構件">
          ${Object.entries(objects).map(([key, object], i) => `<button class="object-tab ${i === 0 ? 'is-active' : ''}" id="tab-${key}" role="tab" aria-selected="${i === 0}" aria-controls="object-panel" tabindex="${i === 0 ? '0' : '-1'}" data-object="${key}"><span>0${i + 1}</span>${object.label}</button>`).join('')}
        </div>
        <div class="object-detail" id="object-panel" role="tabpanel" aria-labelledby="tab-torii" tabindex="0">
          <div class="object-drawing"><span class="drawing-index" id="object-number">${objects.torii.number}</span><svg viewBox="0 0 500 350" role="img" aria-label="建築構件線稿示意"><g class="object-lines">${objects.torii.svg}</g><path class="drawing-axis" d="M250 38v280"/></svg><span class="drawing-caption">SCHEMATIC / 非比例示意</span></div>
          <div class="object-copy"><p class="eyebrow">保存決策，留給後人繼續讀</p><h3 id="object-title">${objects.torii.title}</h3><p id="object-body">${objects.torii.body}</p><div class="open-question"><span>資料線索</span><p id="object-choice">${objects.torii.choice}</p></div></div>
        </div>
      </div>
      <div class="preservation-note"><span class="note-symbol">↗</span><p><strong>讓資料缺口也被看見。</strong>目前公開摘要足以確認修復工程處理的方向，卻不足以還原每個構件的材質、替換比例與審議理由。網站不把待查內容包裝成確定答案。</p></div>
    </section>

    <section class="question-section section-pad">
      <div class="section-kicker"><span>把展覽帶回日常</span><span>REFLECTION</span></div>
      <div class="question-layout"><p class="question-index">當一座建築<br/>同時承載不同<br/>時代的記憶，</p><h2>誰有權決定<br/><em>留下什麼？</em></h2><div class="question-footer"><span>沒有一個答案可以替代討論。</span><a href="#response" class="round-link round-link-dark"><span>做出<br/>你的選擇</span><b>↓</b></a></div></div>
    </section>

    <section class="response-section section-pad" id="response">
      <div class="section-kicker"><span>觀展反思／選擇練習</span><span>04 / 04</span></div>
      <div class="response-grid"><div class="response-intro"><p class="eyebrow">A QUESTION TO TAKE WITH YOU</p><h2>保存，<br/><em>先留住什麼？</em></h2><p>如果只能從一個方向開始，你會先替這座建築保留什麼？選擇後，讀一段延伸問題，帶著它離開展覽。</p></div>
        <div class="reflection" aria-labelledby="reflection-title">
          <h3 id="reflection-title">你會優先守住哪一種價值？</h3>
          <div class="reflection-options" role="group" aria-label="選擇一個保存優先方向">
            <button class="reflection-option" type="button" data-reflection="fabric" aria-pressed="false"><span>01</span><b>建築材料</b><small>構件、工法與時間痕跡</small><i>↗</i></button>
            <button class="reflection-option" type="button" data-reflection="use" aria-pressed="false"><span>02</span><b>持續使用</b><small>場所功能與公共生活</small><i>↗</i></button>
            <button class="reflection-option" type="button" data-reflection="memory" aria-pressed="false"><span>03</span><b>多重記憶</b><small>不同時代如何被說明</small><i>↗</i></button>
          </div>
          <p class="reflection-result" id="reflection-result" role="status" aria-live="polite">選一個方向，看看它帶出什麼新的追問。</p>
          <p class="reflection-privacy">這是留在目前頁面的思考練習；你的選擇不會傳送或儲存。</p>
        </div></div>
    </section>

    <section class="sources-section section-pad" id="sources">
      <div class="section-kicker"><span>延伸閱讀／來源</span><span>NOTES & SOURCES</span></div>
      <div class="sources-head"><h2>從可查的資料<br/><em>開始講述。</em></h2><p>本展以政府公開資料和研究論文建立基本年表。策展文字、示意圖與判讀為本網站原創；歷史細節仍需持續核對工程報告與原始檔案。</p></div>
      <ol class="source-list">
        <li><span>01</span><div><b>桃園市政府民政局</b><p>忠烈祠暨神社文化園區沿革、1985 年保存爭議與 1994 年指定資訊。</p></div><a href="https://cab.tycg.gov.tw/cp.aspx?Create=1&n=21311" target="_blank" rel="noreferrer" aria-label="開啟桃園市政府園區沿革">↗</a></li>
        <li><span>02</span><div><b>黃翔瑜，〈林衡道古蹟保存之特徵及其內在意涵的歷史考察〉</b><p>《博物館學季刊》37 卷 4 期，桃園神社保存事件脈絡與史料引註。</p></div><a href="https://libknowledge.nmns.edu.tw/nmns/upload/quaterly/000004472/209000c/37-4-2.pdf" target="_blank" rel="noreferrer" aria-label="開啟學術論文 PDF">↗</a></li>
        <li><span>03</span><div><b>桃園市政府，桃園忠烈祠修復工程資訊</b><p>2016 年公布的屋頂、木籬、防蟲與鳥居修復討論方向。</p></div><a href="https://news.tycg.gov.tw/News_Content.aspx?n=5016&s=634939" target="_blank" rel="noreferrer" aria-label="開啟修復工程資訊">↗</a></li>
        <li><span>04</span><div><b>桃園市政府，修復落成啟用公告</b><p>2017 年修復完成後的園區定位與市府說明。</p></div><a href="https://www.tycg.gov.tw/NewsPage_Content.aspx?n=10&s=635985" target="_blank" rel="noreferrer" aria-label="開啟修復落成公告">↗</a></li>
        <li><span>05</span><div><b>聯合國 SDG 11</b><p>目標 11.4：加強保護和維護文化與自然遺產。</p></div><a href="https://sdgs.un.org/goals/goal11" target="_blank" rel="noreferrer" aria-label="開啟聯合國 SDG 11">↗</a></li>
      </ol>
      <div class="research-gap"><span>研究待辦</span><p>核對桃園忠烈祠修復工程工作報告、文化資產審議紀錄，以及 1985 年議會原始議事錄；確認構件修復選擇與事件日期的差異。</p></div>
    </section>
  </main>

  <footer class="site-footer"><a class="wordmark" href="#top"><span class="wordmark-mark">L／T</span><span>留下來的痕跡</span></a><p>一座建築的多重生命<br/>TAOYUAN, TAIWAN　／　2026</p><a class="back-top" href="#top">回到入口 ↑</a></footer>
`;

const reflectionPrompts = {
  fabric: '從材料開始保存，就要追問：哪些是原構件、哪些曾經替換？修復報告如何說明每一次判斷？',
  use: '讓場所繼續被使用，也會改變它的意義。誰的需求進入了新的功能安排？誰的記憶可能因此退到背景？',
  memory: '讓不同時代的記憶並存，不代表它們自然受到同等重視。哪些人的經驗還需要進入史料、導覽與公開詮釋？'
};
const reflectionResult = document.querySelector('#reflection-result');
document.querySelectorAll('.reflection-option').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.reflection-option').forEach((option) => {
      option.setAttribute('aria-pressed', String(option === button));
    });
    reflectionResult.textContent = reflectionPrompts[button.dataset.reflection];
  });
});

const tabs = [...document.querySelectorAll('.object-tab')];
const objectPanel = document.querySelector('#object-panel');
function selectObject(key, focus = false) {
  const object = objects[key];
  if (!object) return;
  tabs.forEach((tab) => {
    const active = tab.dataset.object === key;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  objectPanel.setAttribute('aria-labelledby', `tab-${key}`);
  document.querySelector('#object-number').textContent = object.number;
  document.querySelector('#object-title').textContent = object.title;
  document.querySelector('#object-body').textContent = object.body;
  document.querySelector('#object-choice').textContent = object.choice;
  document.querySelector('.object-lines').innerHTML = object.svg;
  if (focus) document.querySelector(`#tab-${key}`).focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectObject(tab.dataset.object));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectObject(tabs[nextIndex].dataset.object, true);
  });
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  gsap.from('.hero-copy > *', { y: 26, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', delay: 0.1 });
  gsap.from('.architecture', { y: 48, opacity: 0, duration: 1.15, ease: 'power3.out', delay: 0.4 });
  gsap.to('.arch-front', { y: -9, scrollTrigger: { trigger: '.hero-art', start: 'top bottom', end: 'bottom top', scrub: 1 } });
  gsap.utils.toArray('.section-kicker, .threshold-grid, .timeline-intro, .object-viewer, .question-layout, .response-grid, .sources-head, .source-list').forEach((element) => {
    gsap.from(element, { y: 24, opacity: 0, duration: 0.65, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 86%', once: true } });
  });
  gsap.utils.toArray('.timeline-item').forEach((element) => {
    gsap.from(element, { y: 32, opacity: 0, duration: 0.65, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 84%', once: true } });
  });
  gsap.to('.timeline-rail-fill', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.timeline', start: 'top 70%', end: 'bottom 70%', scrub: true } });
  gsap.to('.reading-progress span', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.2 } });
}
