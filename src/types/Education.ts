interface EducationBase {
  name: string;
  date:
    | Date
    | {
        start: Date;
        end: Date | null;
      };
}

interface Degree extends EducationBase {
  area_pl: string;
  area_en: string;
  degree_pl: string;
  degree_en: string;

  [key: string]: string | Date | { start: Date; end: Date | null };
}

interface Certificate extends EducationBase {
  link?: string;
  issuer: string;
}

export type Education = Degree | Certificate;
