export type Service = {
  id: string;
  title: string;
  price: number | null;
  priceLabel: string;
  description: string;
  popular?: boolean;
};

export const services: Service[] = [
  {
    id: "installation",
    title: "Стандартный монтаж кондиционера",
    price: null,
    priceLabel: "Стоимость уточняйте",
    description:
      "Монтаж внутреннего и наружного блоков, прокладка трассы и проверка системы.",
    popular: true,
  },
  {
    id: "cleaning",
    title: "Чистка кондиционера",
    price: null,
    priceLabel: "Стоимость уточняйте",
    description:
      "Очистка фильтров, теплообменника, дренажа и внутренних элементов.",
  },
  {
    id: "refill",
    title: "Заправка кондиционера",
    price: null,
    priceLabel: "После диагностики",
    description:
      "Проверка системы и заправка необходимым объёмом хладагента.",
  },
  {
    id: "diagnostics",
    title: "Диагностика",
    price: null,
    priceLabel: "Стоимость уточняйте",
    description: "Поиск неисправности и предварительный расчёт ремонта.",
  },
  {
    id: "repair",
    title: "Ремонт кондиционера",
    price: null,
    priceLabel: "По результатам диагностики",
    description: "Устранение неисправностей климатического оборудования.",
  },
  {
    id: "dismantling",
    title: "Демонтаж кондиционера",
    price: null,
    priceLabel: "Стоимость уточняйте",
    description: "Аккуратный демонтаж внутреннего и наружного блоков.",
  },
  {
    id: "business",
    title: "Обслуживание для бизнеса",
    price: null,
    priceLabel: "Индивидуальный расчёт",
    description:
      "Плановое обслуживание климатического оборудования организаций.",
  },
];
