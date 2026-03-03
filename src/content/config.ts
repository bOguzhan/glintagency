import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: () =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
            description: z.string(),
            author: z.object({
                name: z.string(),
                link: z.string(),
            }),
            image: z.object({
                source: z.string(), // Changed from image() to z.string()
                alt: z.string(),
            }),
            tags: z.array(z.string()),
        }),
});

const projectsCollection = defineCollection({
    schema: () =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
            description: z.string(),
            link: z.string(),
            author: z.object({
                name: z.string(),
                link: z.string(),
            }),
            image: z.object({
                source: z.string(), // Changed from image() to z.string()
                alt: z.string(),
            }),
        }),
});

const authorsCollection = defineCollection({
    schema: () =>
        z.object({
            name: z.string(),
            description: z.string(),
            image: z.object({
                source: z.string(), // Changed from image() to z.string()
                alt: z.string(),
            }),
        }),
});

export const collections = {
    posts: postsCollection,
    projects: projectsCollection,
    authors: authorsCollection,
};