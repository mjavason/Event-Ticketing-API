# Event Ticketing API

A robust and flexible API for managing event ticketing and ensuring seamless event experiences. The API is live at [Event Ticketing](https://event-ticketing-4y04.onrender.com).

## Overview

This API enables event organizers to efficiently handle all aspects of event ticketing and management. It covers event creation, ticket sales with payment processing, in-depth analytics, and attendee engagement features. The focus is on ensuring secure and smooth event experiences without any hassle.

## Getting Started

To set up and use the Event Ticketing API, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/mjavason/Event-Ticketing-API.git
   ```

2. Navigate to the project directory:

   ```shell
   cd Event-Ticketing-API
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

4. Set up the environment variables by creating a `.env` file in the root directory. Replace the placeholders with your actual values. Refer to the "Environment Variables" section below for details.

5. Start the server:

   ```shell
   npm start
   ```

The API will be accessible at `http://localhost:5000` by default.

## Features

- **Event Creation**: Easily create and configure events, including details, pricing, and seating plans.

- **Ticket Sales**: Sell event tickets online.

- **Attendee Management**: Efficiently track attendee registrations, check-ins, and attendance records.

- **Payment Processing**: Securely process ticket sales.

- **QR Code Integration**: Generate and scan QR codes for contactless ticket validation and check-in.

- **Event Analytics**: Gain insights into ticket sales, attendance, and revenue for informed decision-making.

- **Feedback and Surveys**: Collect attendee feedback to enhance future events.

- **Multi-Event Support**: Manage multiple events running simultaneously or at different times.

## Environment Variables

Before running the API, ensure you have set up the following environment variables in your `.env` file:

```env
ACCESS_TOKEN_SECRET=your-access-token-secret
API_DOCUMENTATION_URL=https://documenter.getpostman.com/view/29278179/2s9YJhxLPN
APP_NAME=EventTicketingApp
JWT_SECRET=user
MAIL_ADDRESS=your-email@mail.com
MAIL_PASSWORD=your-email-password
MONGODB_URL=your-mongodb-url
MONGO_DB_NAME=your-mongodb-database-name
REFRESH_TOKEN_SECRET=your-refresh-token-secret
SITE_LINK=https://event-ticketing-4y04.onrender.com
USERNAME=admin@mail.com
```

Replace the placeholders with your actual secret keys, URLs, and credentials.

## Documentation

For detailed documentation on how to use the Event Ticketing API and its endpoints, refer to the [API Documentation](https://documenter.getpostman.com/view/29278179/2s9YJhxLPN).

## Contributing

Contributions to the Event Ticketing API are welcome! If you'd like to contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Thoroughly test your changes.

5. Create a pull request with a clear description of your changes.

Your contributions are highly appreciated and will help improve the functionality and reliability of the API.
