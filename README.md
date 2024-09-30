# Backend Repo:
[Link](https://github.com/rzzdr/SIH-2024-internal-PS)
## Tasks Accomplished

- [X] **AI-Powered Diagnostics:** A Machine learning model that analyze patient data which include pateint's medical history and pateint's lab results to assist in diagnosing conditions and recommending treatment options. The model can identify patterns and anomalies that may indicate various health conditions.

- [X] **Predictive Analytics for Patient Health** The model analyzes historical patient data to forecast potential health risks and suggest preventive measures.

- [X] **Personalized Treatment Recommendations** Based on all the the training data given, the model analyses all the pateint's data, performs diagnosise, and give personalized treament recommendations to the doctor.

- [X] **Patient Management Dashboard** Comprehensive dashboard that allows healthcare providers to view and manage patient data, diagnostic results, and treatment plans.

- [X] **Natural Language Processing (NLP) Integration** Implemented NLP features to allow healthcare providers to interact with the system.

- [X] **Interoperability with Existing Systems** Demonstration of how the enhanced system can be integrate with existing healthcare systems and electronic health records (EHRs) for seamless data exchange and interoperability.

## Technology Stack

This project leverages the following technologies:

- **Azure Container App** Will provide the best-in-class latency and auto scalability, ensuring the application can handle anything that comes its way.
- **FastAPI** Will handle requests asynchronously, making it faster and more efficient than other frameworks.
- **SQLAlchemy** Will provide robust ORM capabilities and efficient query handling, enabling us to build more complex queries with ease. 
- **Poetry** Will manage dependencies seamlessly, reducing the hassle of managing packages.
- **Azure SQL (PostgreSQL)** Will facilitate high-speed data exchange with Google Cloud Run, making it the perfect database for our web applications.
- **Next JS** Will rapidly develop apps for multiple devices using a single codebase, reducing development time.
- **Firebase Authentication** Will authenticate users through Google Sign-In and will provide JWT tokens, ensuring secure access to our web application.
- **Artificial Intelligence**
   - **Data Collection** Unstructured and Structured data related to Clinical notes, medical history, lab results, vitals etc were collected and all the irrelevant data was classified and removed from database. Creating Relevant Structured (Lab results, vitals) and Unstructured Data (Discharge Summary, Clinical notes etc) for better accuracy in training.
   - **LSTM Based GAN** A model with (LSTM based)GAN architecture was used to synthesise synthetic data for better accuracy and combined data handling.
   - **Data Preprocessing** Some data preprocessing is done on synthetic data before sending it to training and proper data structure is created in form of system, user and assistant prompt. Usage of some NLP techniques like stemming, POS tagging, Stopword Removal are used to increase model's efficiency.
   - **Training** GPT-4 Omni(GPT-4o) is used for training, all the preprocessed synthetic data is given to the model providing us a model with a 'F_1 score' of whopping 0.94 (Ranges between 0 to 1, larger the better)
## Technical Flow
<img title="Technical Flow" alt = "Technical Flow" src="https://github.com/rzzdr/SIH_INTERNAL_ROUND_1_The_Caffeine_Crew/blob/main/files/TechFlow.jpg">

## AI Model Training Process
<img title="AI Model Training Process" alt = "AI Model Training Process" src="https://github.com/rzzdr/SIH_INTERNAL_ROUND_1_The_Caffeine_Crew/blob/main/files/AIFlow.jpg">

## Key Features

- **AI-Powered Diagnostics** We have AI models to analyze patient data—such as medical history, lab results, and imaging—to assist in diagnosing conditions and recommending treatments 

- **Predictive Analytics for Health Risks** Our AI models use patients historical data to forecast potential health risks and suggest preventive measures, such as predicting chronic conditions 

- **Personalized Treatment Recommendations** We have utilized AI to offer personalized treatment plans tailored to each patient’s medical history and current condition, with recommendations that adapt as new data is available.

- **Real-Time Monitoring and Patient Management** We have also integrated real-time monitoring of patient vitals with AI-driven alerts for significant changes, and provide a comprehensive dashboard for healthcare providers to manage patient data, diagnostics, and treatment plans. 

- **NLP Integration** We have enabled natural language processing for healthcare providers to interact with the system using voice or text commands and have ensured that the system integrates seamlessly with existing healthcare systems and electronic health records (EHRs) for efficient data exchange.

- **Interoperability with Existing Systems** Our highly scalable backend can be seamlessly integrated into existing hospital systems. This project prioritizes a robust backend structure that can be easily adapted, eliminating the need for a complete system migration. This approach reduces costs and simplifies implementation compared to building a new system from scratch.  

## Local Setup Instructions

Follow these steps to run the project locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/rzzdr/healthcare-management-system
   cd healthcare-management-system
   npm run dev #(npm should be installed, react and vite should also be install via npm)
   ```
