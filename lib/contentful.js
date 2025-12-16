// lib/contentful.js
import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// 1. Fetch Personal Info (Single Entry)
export async function getPersonalInfo() {
    const response = await client.getEntries({
        content_type: 'personalInformation', // Make sure this ID matches your model exactly
        limit: 1, // We only need one
    });

    // Return the first item's fields, or null if empty
    return response.items.length > 0 ? response.items[0].fields : null;
}

// 2. Fetch All Projects (List)
// export async function getProjects() {
//     const response = await client.getEntries({
//         content_type: 'project',
//         order: '-fields.date', // Optional: Sort by date (newest first)
//     });
//
//     return response.items.map((item) => {
//         return { ...item.fields, id: item.sys.id }; // Clean up the data
//     });
// }

// 3. Fetch Skills (List)
export async function getSkills() {
    const response = await client.getEntries({ content_type: 'skill' });
    return response.items.map((item) => item.fields);
}


// Experience
export async function getExperience() {
    const response = await client.getEntries({
        content_type: 'experience',
        order: '-fields.period' // Optional: sort by period if you want
    });
    return response.items.map(item => item.fields);
}

// Certifications
export async function getCertifications() {
    const response = await client.getEntries({ content_type: 'certification' });
    return response.items.map(item => item.fields);
}


export async function getBlogPosts() {
    const response = await client.getEntries({ content_type: 'blogPost' });
    return response.items.map(item => item.fields);
}
