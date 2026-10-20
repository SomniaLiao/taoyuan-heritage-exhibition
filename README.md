# 留下來的痕跡｜桃園神社／忠烈祠

以桃園神社／忠烈祠為案例，透過歷史年表、建築構件互動與觀展反思練習，呈現保存如何受到後人的行動與選擇影響。策展對應 SDG 11.4「保護和維護文化與自然遺產」。

展名暫定。總統府目前不列入主展覽。

## 本機預覽

需求：Node.js 20.19+ 或 22.12+。

```sh
npm install
npm run dev
```

正式建置與預覽：

```sh
npm run build
npm run preview
```

## 觀展反思互動

展覽末段提供三種保存價值的選擇，點選後顯示延伸思考題。這是純前端互動；選擇只呈現在當前頁面，不會傳送或儲存。Google 試算表與 Apps Script 串接留待網站本體完成後再處理。

## GitHub Pages

- Repo：`somnialiao/taoyuan-heritage-exhibition`（公開）
- 部署方式：GitHub Actions；推送至 `main` 後自動建置與部署。
- 已部署並驗證的專案網址：[https://somnialiao.github.io/taoyuan-heritage-exhibition/](https://somnialiao.github.io/taoyuan-heritage-exhibition/)
- 部署狀態：GitHub Actions 工作流程成功；公開頁面回應 HTTP 200。

## 策展資料與待核事項

- 主題聚焦桃園神社／忠烈祠的戰後改作、1985 年保存爭議、指定與修復；總統府暫停列為延伸案例。
- 年表只呈現可由公開官方資料與研究論文支持的年份。1985 年議會事件日期在來源間有差異，因此本展只寫年份。
- 2016 年市府公開資料說明當時修復工程方向；鳥居最後修復選擇、細部材料和構件更換比例仍待修復工程報告與審議紀錄核對。
- 網站原創線稿為構件示意，非歷史照片、比例圖或建築復原圖。

## 主要來源

- [桃園市政府民政局：忠烈祠暨神社文化園區](https://cab.tycg.gov.tw/cp.aspx?Create=1&n=21311)
- [黃翔瑜：林衡道古蹟保存之特徵及其內在意涵的歷史考察](https://libknowledge.nmns.edu.tw/nmns/upload/quaterly/000004472/209000c/37-4-2.pdf)
- [桃園市政府：桃園忠烈祠修復工程資訊](https://news.tycg.gov.tw/News_Content.aspx?n=5016&s=634939)
- [桃園市政府：修復落成啟用公告](https://www.tycg.gov.tw/NewsPage_Content.aspx?n=10&s=635985)
- [聯合國：SDG 11](https://sdgs.un.org/goals/goal11)
