import { company } from "../config/company";

export const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const externalAttrs = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export const getPrimaryContactUrl = () =>
  company.vk || company.telegram || company.whatsapp || company.twoGis;

export const phoneHref = company.phone ? `tel:${company.phone.replace(/[^\d+]/g, "")}` : "";

export const buildMessage = (title: string, fields: Record<string, string>) => {
  const body = Object.entries(fields)
    .filter(([, value]) => value.trim())
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  return `${title}\n\n${body}\n\nПодскажите, пожалуйста, как лучше поступить?`;
};
