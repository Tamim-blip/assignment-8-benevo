# 🌱 Benevo — Small Actions. Big Impact.

**Benevo** is a community-driven volunteering platform that connects people with meaningful social-service activities across Bangladesh. Discover upcoming events, participate in community initiatives, organize volunteer activities, and make a positive difference through small actions.

<p align="center">
  <a href="https://assignment-8-benevo.vercel.app/">
    <strong>🚀 Live Demo</strong>
  </a>
  &nbsp; • &nbsp;
  <a href="https://github.com/Tamim-blip/assignment-8-benevo">
    <strong>📂 GitHub Repository</strong>
  </a>
</p>

---

## ✨ About the Project

Benevo aims to make community volunteering easier and more accessible. It provides a platform where organizers can publish social-service events and volunteers can discover opportunities that match their interests.

Whether it's planting trees, donating blood, distributing winter clothes, or cleaning public spaces, Benevo helps people come together to create meaningful change.

## 🚀 Key Features

### 👥 For Volunteers
- **Discover Events:** Explore upcoming community events and volunteering opportunities.
- **Category Filtering:** Find events based on categories such as Plantation, Blood Donation, Cleaning, Education, and Winter Clothes.
- **Join Events:** Participate in social-service activities.
- **Joined Events:** View events you have already joined.
- **Event Details:** Explore event descriptions, dates, locations, and other relevant information.

### 🛠️ For Organizers
- **Create Events:** Publish new community events with descriptions, images, locations, and event dates.
- **Manage Events:** View and manage events you have created.
- **Event Validation:** Prevent users from creating events with past dates.
- **Participation Management:** Prevent the same user from joining the same event multiple times.

### 🎨 User Experience
- Clean and user-friendly interface.
- Responsive design for different screen sizes.
- Modern component-based architecture.
- Easy navigation between event sections.

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Frontend framework |
| React | User interface |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| shadcn/ui | UI components |
| Lucide React | Icons |
| Express.js | Backend API |
| MongoDB | Database |
| Better Auth | Authentication |
| Vercel | Deployment |

## 📸 Project Preview

Visit the live application to explore the complete interface:

**[Open Benevo Live Demo →](https://assignment-8-benevo.vercel.app/)**

## 📂 Project Structure

The project uses a Next.js frontend and a separate Express.js backend.

```text
assignment-8-benevo/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── (activities)/
│   │   │   ├── events/
│   │   │   ├── create-event/
│   │   │   ├── manage-events/
│   │   │   └── joined-events/
│   │   │
│   │   ├── components/
│   │   └── ...
│   │
│   ├── components/
│   ├── lib/
│   └── types/
│
├── server/
│   ├── index.js
│   ├── package.json
│   └── vercel.json
│
├── .env.local
├── package.json
└── README.md
```

*Note: This is a representative structure. Adjust directory names to match the actual repository.*


## 🌍 Deployment

Benevo is deployed using Vercel.

- **Frontend:** [Benevo Live Application](https://assignment-8-benevo.vercel.app/)
- **Backend:** Express.js API hosted separately.
- **Database:** MongoDB.

Configure the production `NEXT_PUBLIC_API_URL` environment variable with your deployed backend's HTTPS URL before deploying the frontend.

## 🎯 Project Goals

Benevo is built around a simple idea: meaningful change begins with people working together.

The platform aims to:

- Encourage community participation.
- Make volunteering opportunities easier to discover.
- Help organizers coordinate social-service activities.
- Promote environmental awareness and social responsibility.
- Connect people who want to make a difference.

## 🔮 Future Improvements

Some ideas for expanding the platform:

- Volunteer impact dashboard.
- Event capacity management.
- Advanced event search and sorting.
- Email notifications and reminders.
- Event approval and verification.
- Volunteer attendance tracking.
- Interactive maps for event locations.

## 👨‍💻 Developer

**MD Tamim Islam**

Aspiring Full-Stack Web Developer passionate about building practical web applications and solving real-world problems through technology.

- **GitHub:** [@Tamim-blip](https://github.com/Tamim-blip)
- **Project:** [Benevo](https://assignment-8-benevo.vercel.app/)

---

<p align="center">
  Made with ❤️ and purpose.
  <br/>
  <strong>Benevo — Small Actions. Big Impact.</strong>
  <br/>
  Let's make the world a better place, one act at a time. 🌱
</p>
