import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      technologies: z.array(z.string()),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      date: z.date(),
    }),
});

export const collections = {
  project: projectCollection,
};
