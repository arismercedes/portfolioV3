import {z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object ({
        title: z.string(),
        type: z.string(),
        url: z.string().optional(),
        thumbnail: z.object({
            src: z.string(),
            alt: z.string(),
            }),
        images: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
                }),
        ),
        services: z.array(z.string()),
        
    })
})
export const collections = {
    projects: projectCollection,
};