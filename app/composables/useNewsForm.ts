export const useNewsForm = () => {
  const id = ref(null);
  const title = ref("");
  const content = ref("");
  const status = ref("draft");

  const resetForm = () => {
    id.value = null;
    title.value = "";
    content.value = "";
    status.value = "draft";
  };

  const loadNews = (news) => {
    id.value = news.id;
    title.value = news.title;
    content.value = news.content;
    status.value = news.status;
  };

  return {
    id,
    title,
    content,
    status,
    resetForm,
    loadNews,
  };
};
