export const useNews = () => {
  const { $supabase } = useNuxtApp();

  const deleteNews = async (id: number) => {
    const { error } = await $supabase.from("news").delete().eq("id", id);
    return {
      error,
    };
  };

  const updateNews = async (
    id: number,
    updates: {
      title?: string;
      content?: string;
      status?: "draft" | "published";
    },
  ) => {
    const { data, error } = await $supabase
      .from("news")
      .update(updates)
      .eq("id", id);

    return {
      data,
      error,
    };
  };

  const getNews = async (slug: string) => {
    return await useAsyncData(`dashboard-news-${slug}`, async () => {
      const { data, error } = await $supabase
        .from("news")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) throw error;
      return data;
    });
  };

  const createNews = async (newsData: {
    title: string;
    content: string;
    status?: "draft" | "published";
    photo?: string;
  }) => {
    const slug = newsData.title.toLowerCase().replace(/\s+/g, "-");

    const { data: news, error } = await $supabase.from("news").insert({
      title: newsData.title,
      slug: slug,
      content: newsData.content,
      photo: newsData.photo,
      status: newsData.status || "draft",
    });

    if (error) return { data: null, error };

    return {
      data: news,
      error: null,
    };
  };

  return {
    createNews,
    getNews,
    updateNews,
    deleteNews,
  };
};
