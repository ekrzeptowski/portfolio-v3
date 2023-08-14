import type { Education } from "@/types/Education";

export const education: Education[] = [
  {
    name: "Wyższa Szkoła Ekonomii i Informatyki w Krakowie",
    area_pl: "Informatyka",
    area_en: "Computer Science",
    degree_pl: "Inżynier",
    degree_en: "Engineer",
    date: {
      start: new Date(2022, 9, 1),
      end: null,
    },
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    date: new Date(2023, 2, 24),
    link: "https://www.credly.com/badges/e3e86b1e-ee8c-45ca-bc87-337f875c1781/public_url",
    issuer: "Microsoft",
  },
  {
    name: "IT Specialist - Networking",
    date: new Date(2023, 2, 22),
    link: "https://www.credly.com/badges/74cd9976-be1c-42cd-98ec-3d7a4d75602a/public_url",
    issuer: "Certiport",
  },
  {
    name: "IT Specialist - Databases",
    date: new Date(2023, 1, 10),
    link: "https://www.credly.com/badges/9b63204f-60e2-4df5-8122-5bf228c8aba7/public_url",
    issuer: "Certiport",
  },
  {
    name: "IT Specialist - Software Development",
    date: new Date(2023, 1, 24),
    link: "https://www.credly.com/badges/ffd887b8-a67a-4e25-899c-bf4501feea23/public_url",
    issuer: "Certiport",
  },
];
