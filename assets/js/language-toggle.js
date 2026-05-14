// Must run in the head to avoid rendering both languages before CSS applies.

let toggleLanguageSetting = () => {
  const language = determineLanguageSetting() === "zh" ? "en" : "zh";
  setLanguageSetting(language);
};

let setLanguageSetting = (language) => {
  if (language !== "zh" && language !== "en") {
    language = "en";
  }

  localStorage.setItem("language", language);
  applyLanguage(language);
};

let applyLanguage = (language) => {
  document.documentElement.setAttribute("data-language", language);
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  updateLanguageToggle(language);
};

let updateLanguageToggle = (language) => {
  const languageToggle = document.getElementById("language-toggle");
  if (!languageToggle) return;

  const nextLanguage = language === "zh" ? "English" : "中文";
  languageToggle.setAttribute("aria-label", `Switch language to ${nextLanguage}`);
  languageToggle.setAttribute("title", `Switch language to ${nextLanguage}`);
};

let determineLanguageSetting = () => {
  const storedLanguage = localStorage.getItem("language");
  if (storedLanguage === "zh" || storedLanguage === "en") {
    return storedLanguage;
  }

  const browserLanguages = navigator.languages || [navigator.language || ""];
  return browserLanguages.some((language) => language.toLowerCase().startsWith("zh")) ? "zh" : "en";
};

let initLanguage = () => {
  applyLanguage(determineLanguageSetting());

  document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");
    if (!languageToggle) return;

    updateLanguageToggle(determineLanguageSetting());
    languageToggle.addEventListener("click", function () {
      toggleLanguageSetting();
    });
  });
};
