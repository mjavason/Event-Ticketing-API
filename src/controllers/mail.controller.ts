import { mailService, userService } from '../services';
import { APP_NAME, SITE_LINK } from '../constants';
import logger from '../helpers/logger';
const fs = require('fs');
const handlebars = require('handlebars');

async function renderMailTemplate(templatePath: string, data: object) {
  try {
    // Load the email template
    // const templatePath = './email-templates/welcome-email.html';
    const emailTemplate = fs.readFileSync(templatePath, 'utf-8');

    // Compile the template
    const compiledTemplate = handlebars.compile(emailTemplate);
    return compiledTemplate(data);
  } catch (e) {
    logger.error('Error compiling template');
    console.log(e);
    return false;
  }
}
class Controller {
  async sendWelcomeMail(email: string, firstName: string, lastName: string, token: string) {
    // Load the email template
    const templatePath = 'src/templates/welcome.html';

    const confirmationLink = `${SITE_LINK}/auth/welcome/${token}`;

    // Replace placeholders with actual data
    const data = {
      firstName: firstName,
      lastName: lastName,
      confirmationLink: confirmationLink,
    };
    // Compile the template
    const compiledTemplate = await renderMailTemplate(templatePath, data);

    if (!compiledTemplate) return false;
    // Send the email
    const info = await mailService.sendMail(
      email,
      compiledTemplate,
      `${APP_NAME} #100DaysOfAPIAwesomeness Welcome`,
    );

    console.log(`#100DaysOfAPIAwesomeness Welcome email sent to: ${email}`);

    return { info };
  }

  // Send the reset email
  async sendPasswordResetEmail(email: string, token: string) {
    let user = await userService.findOne({ email });
    if (!user) {
      console.log(`User with email: ${email} does not exist`);
      return false;
    }

    const resetLink = `${SITE_LINK}auth/reset-password/${token}`;
    const data = {
      email: email,
      passwordResetLink: resetLink,
    };

    const renderedEmail = await renderMailTemplate('src/templates/password_reset.html', data);

    if (!renderedEmail) {
      console.log('Mail template not found');
      return false;
    }

    // Send the email
    const info = await mailService.sendMail(email, renderedEmail, 'Password reset');

    console.log(`Password reset email sent to: ${email}`);

    return { info };
  }

  /**
   * Send an event reminder email.
   *
   * @param {string} email - The recipient's email address.
   * @param {string} eventName - The name of the event.
   * @param {string} eventDateAndTime - The date and time of the event.
   * @param {string} eventLocation - The location of the event.
   * @param {string} firstName - The recipient's first name.
   */
  async sendEventReminderMail(
    email: string,
    eventName: string,
    eventDateAndTime: string,
    eventLocation: string,
    firstName: string,
  ) {
    // Load the email template
    const templatePath = 'event_reminder.html';

    // Replace placeholders with actual data
    const data = {
      eventName: eventName,
      eventDateAndTime: eventDateAndTime,
      eventLocation: eventLocation,
      firstName: firstName,
    };

    // Compile the template
    const compiledTemplate = await renderMailTemplate(templatePath, data);

    if (!compiledTemplate) return false;

    // Send the email
    const info = await mailService.sendMail(email, compiledTemplate, 'Event Reminder');

    logger.info(`Event reminder email sent to: ${email}`);

    return { info };
  }
}

export const mailController = new Controller();
