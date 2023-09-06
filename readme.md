# VocaSelect Career Guidance App

VocaSelect is an innovative career guidance app designed to help users explore and select suitable career paths based on their interests, likes, personality traits, and goals. Whether you're a high school student uncertain about your future or an individual looking to make a career change, VocaSelect provides personalized recommendations and resources to aid your decision-making process.

## Features

### Guiding Users with Undecided Career Paths
- Interest Assessment: Engage in an interactive assessment to uncover your interests and preferences.
- Personality Analysis: Leverage AI-powered personality analysis to gain insights into your potential career matches.
- Tailored Recommendations: Receive a curated list of potential career options aligned with your profile.


### Assisting Users with Chosen Career Paths

- Course Suggestions: For users who have a specific career in mind, the app generates tailored course recommendations related to their chosen field.
- Skill Development: Discover essential skills for your selected career and access recommended resources for skill enhancement.

## Technologies Used

- **Frontend:** Angular
- **Backend:** Node.js
- **Database:** PostgreSQL
- **AI Integration:** Using ChatGPT API
- **DevOps:** Docker, Render and vercel

## Installation and Setup

Follow these steps to set up the VocaSelect app locally:

1. **Clone the Repository:**
```
git clone `https://github.com/your-username/VocaSelect.git`
cd VocaSelect
```

2. **Install Dependencies:**

Navigate to the frontend directory and install frontend dependencies:
```
cd /frontend
ng server --o
```

Move to the `backend` directory and install backend dependencies:
```
cd /backend
npm install
```
3. **Database Setup:**

Create a PostgreSQL database and update the database configuration in `backend/config/database.js`.
Environment Variables:
```
Create .env files in both the frontend and backend directories based on the provided .env.example files. Fill in the required information.
Run the App:
```
4. **Start the application:**
   
- In the `frontend` directory, run the following command:

```
ng serve
```

- In the `backend` directory, run the following command:
```
npm start
```
5 **Access the App:**
Open a web browser and navigate to `http://localhost:4200` to access the VocaSelect app.

## Contributing
We welcome contributions from the community!!!!
