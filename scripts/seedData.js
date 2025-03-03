const mongoose = require('mongoose');
const Church = require('../models/Church');
const Member = require('../models/Member');
const connectDB = require('../config/database');

const churches = [
    {
        name: "Grace Community Church",
        adminName: "John Smith",
        adminEmail: "john@gracechurch.com",
        adminPassword: "hashedPassword123"
    },
    {
        name: "Hope Fellowship",
        adminName: "Sarah Johnson",
        adminEmail: "sarah@hopefellowship.com",
        adminPassword: "hashedPassword456"
    },
    {
        name: "Faith Baptist Church",
        adminName: "Michael Brown",
        adminEmail: "michael@faithbaptist.com",
        adminPassword: "hashedPassword789"
    }
];

const generateMembers = (churchId) => {
    const members = [];
    const names = [
        "Emma Wilson", "David Lee", "Sophia Chen", "James Taylor",
        "Olivia Anderson", "William Martinez", "Ava Thompson", "Lucas Garcia",
        "Mia Rodriguez", "Ethan Kim"
    ];

    for (let i = 0; i < 10; i++) {
        const soulScore = Math.floor(Math.random() * 100);
        const spiritScore = Math.floor(Math.random() * 100);
        const bodyScore = Math.floor(Math.random() * 100);
        const lastQuizDate = new Date();
        lastQuizDate.setDate(lastQuizDate.getDate() - Math.floor(Math.random() * 30));

        members.push({
            name: names[i],
            churchId,
            soulScore,
            spiritScore,
            bodyScore,
            lastQuizDate,
            status: Math.random() > 0.2 ? 'active' : 'inactive'
        });
    }

    return members;
};

const seedDatabase = async () => {
    try {
        await connectDB();
        
        // Clear existing data
        await Church.deleteMany({});
        await Member.deleteMany({});
        
        // Insert churches
        const insertedChurches = await Church.insertMany(churches);
        console.log('Churches seeded successfully');

        // Insert members for each church
        for (const church of insertedChurches) {
            const members = generateMembers(church._id);
            await Member.insertMany(members);
            console.log(`Members seeded for ${church.name}`);
        }

        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase(); 