type GTagEvent = {
  action: string;
  category: string;
  label: string;
};

export const eventGA = ({ action, category, label }: GTagEvent): void => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};
