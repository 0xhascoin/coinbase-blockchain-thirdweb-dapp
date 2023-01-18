import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: "8webwv81",
    dataset: "production",
    apiVersion: "2021-03-25",
    token: process.env.NEXT_PUBLIC_SANITY_API_KEY,
    useCdn: false,
});