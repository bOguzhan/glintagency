import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
            description: z.string(),
            author: z.object({
                name: z.string(),
                link: z.string(),
            }),
            image: z.object({
                source: image(),
                alt: z.string(),
            }),
            tags: z.array(z.string()),
        }),
});

const projectsCollection = defineCollection({
    schema: ({ image }) => 
        z.object({
            title: z.string(),
            pubDate: z.date(),
            description: z.string(),
            link: z.string(),
            author: z.object({
                name: z.string(),
                link: z.string(),
            }),
            // Make image optional so you can use video instead
            image: z.object({
                source: image(),
                alt: z.string(),
            }).optional(),
            // Add video support (usually a string path for public or assets)
            video: z.object({
                source: z.string(),
                alt: z.string(),
            }).optional(),
        }),
});

const authorsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            description: z.string(),
            image: z.object({
                source: image(),
                alt: z.string(),
            }),
        }),
});

export const collections = {
    posts: postsCollection,
    projects: projectsCollection,
    authors: authorsCollection,
};