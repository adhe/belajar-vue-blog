import { createClient } from "@supabase/supabase-js";
import type { User } from "@supabase/supabase-js";

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();
  const user = useState<any>("supabase-user", () => null);

  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabasePublishableKey,
  );

  const { data } = await supabase.auth.getSession();
  user.value = data.session?.user ?? null;
});
