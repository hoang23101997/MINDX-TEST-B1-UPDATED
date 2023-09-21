import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "You have": "You have",
      "tasks left!": "tasks left!",
      "Enter task ...": "Enter task ...",
      Delete: "Delete",
      Submit: "Submit",
      All: "All",
      Active: "Active",
      Completed: "Completed",
      "Delete All": "Delete All",
      "Made by Mindx": "Made by Mindx",
      "Available on": "Available on",
    },
  },
  vn: {
    translation: {
      "You have": "Bạn còn",
      "tasks left!": "nhiệm vụ còn lại!",
      "Enter task ...": "Nhập công việc ...",
      Delete: "Xóa",
      Submit: "Gửi",
      All: "Tất cả",
      Active: "Chưa hoàn thành",
      Completed: "Đã hoàn thành",
      "Delete All": "Xóa tất cả",
      "Made by Mindx": "Tạo bởi Mindx",
      "Available on": "Hiện có mặt tại",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
