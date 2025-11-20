export const useTags = () => {
  const { $supabase } = useNuxtApp();

  // Get all tags
  const getAllTags = async () => {
    return await useAsyncData("tags", async () => {
      const { data, error } = await $supabase
        .from("tags")
        .select("*")
        .order("name");

      if (error) throw error;
      return data;
    });
  };

  // Create new tag
  const createTag = async (name: string) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    const { data, error } = await $supabase
      .from("tags")
      .insert({ name, slug })
      .select()
      .single();

    return { data, error };
  };

  // Get news with tags
  const getNewsWithTags = async (slug: string) => {
    return await useAsyncData(`news-${slug}`, async () => {
      const { data, error } = await $supabase
        .from("news")
        .select(
          `
          *,
          news_tags (
            tags (
              id,
              name,
              slug
            )
          )
        `,
        )
        .eq("slug", slug)
        .single();

      if (error) throw error;
      return data;
    });
  };

  // Add tags to news
  const addTagsToNews = async (newsId: string, tagIds: string[]) => {
    const inserts = tagIds.map((tagId) => ({
      news_id: newsId,
      tag_id: tagId,
    }));

    const { error } = await $supabase.from("news_tags").insert(inserts);

    return { error };
  };

  // Remove tag from news
  const removeTagFromNews = async (newsId: string, tagId: string) => {
    const { error } = await $supabase
      .from("news_tags")
      .delete()
      .eq("news_id", newsId)
      .eq("tag_id", tagId);

    return { error };
  };

  // Get or create tag by name (useful for dynamic tagging)
  const getOrCreateTag = async (name: string) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    // Try to find existing tag
    const { data: existing } = await $supabase
      .from("tags")
      .select("*")
      .eq("slug", slug)
      .single();

    if (existing) return { data: existing, error: null };

    // Create new tag if doesn't exist
    return await createTag(name);
  };

  return {
    getAllTags,
    createTag,
    getNewsWithTags,
    addTagsToNews,
    removeTagFromNews,
    getOrCreateTag,
  };
};
