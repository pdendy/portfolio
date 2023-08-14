import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

const client = require("@sanity/client");

export const sanityClient = createClient({
    projectId: '5ludzxtr',
    dataset: 'production',
    apiVersion: '2023-08-04',
    useCdn: false,
    token: 'skcdus6RrJhJqsIDNMeOjyCuCOMdecjrz65s7Qh131ypaUlw90UkzOGvOttbtwyCorSg0dzp9grWfLo2Pu9zKvMDYy38dEE6CEw0XYcvwP2nvGfH9FU3COhzMxHu1W1peLnwWUzDnLYsIUv9hRnrgy6be848rPHXtJ5Y0TJQRkhF8FwQ7fTN',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);