export const useDate = () => {
  const formatDate = (dateString: string, locale: string = "en-US") => {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat(locale, {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const formatDateByDay = () => {};

  return {
    formatDate,
    formatDateByDay,
  };
};
