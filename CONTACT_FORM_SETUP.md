# Contact Form Setup Guide

This guide explains how to set up the Google Apps Script backend for your portfolio contact form.

## Current Setup

- **Deployment ID**: `AKfycbzfC0fida-2X0qfFBuLX7PqgqfW8dwKD_33NaZPQnFr924D-_lCBtKHJWCVjCk7rtkHPA`
- **Web App URL**: `https://script.google.com/macros/s/AKfycbzfC0fida-2X0qfFBuLX7PqgqfW8dwKD_33NaZPQnFr924D-_lCBtKHJWCVjCk7rtkHPA/exec`

## Google Apps Script Setup

1. **Go to Google Apps Script**: Visit [script.google.com](https://script.google.com)

2. **Create a New Project**: Click "New Project"

3. **Replace the Code**: Copy the code from `google-apps-script-updated.js` in this repository (this is the latest version with CORS fixes)

4. **Update Configuration**:
   - Replace `barath.bhojan@gmail.com` with your actual email address
   - Optionally, add a Google Sheets ID to log form submissions

5. **Deploy as Web App**:
   - Click "Deploy" → "New deployment"
   - Choose type: "Web app"
   - Execute as: "Me"
   - Who has access: "Anyone"
   - Click "Deploy"

6. **Copy the Web App URL** and update it in `ContactSection.tsx` if needed

## Recent Updates (October 2025)

**CORS Issue Fix**: The contact form now uses FormData instead of JSON to avoid CORS preflight requests. Use the updated script in `google-apps-script-updated.js` for better compatibility.

## Troubleshooting Common Issues

### 1. CORS Errors (FIXED)
- **Solution**: The form now uses FormData instead of JSON requests
- This avoids the CORS preflight (OPTIONS) request that was causing the 405 error
- If you still see CORS errors, ensure the Google Apps Script is deployed with "Who has access: Anyone"
- Use the updated script from `google-apps-script-updated.js`

### 2. 405 Method Not Allowed
- This was caused by the OPTIONS preflight request
- **Fixed** by switching to FormData which doesn't trigger preflight
- If you see this error, redeploy the updated Google Apps Script

### 3. Email Not Sending
- Check that Gmail is enabled in your Google account
- Verify the email address in the script is correct
- Check spam folder for test emails
- The updated script includes better error handling for email failures

### 4. Script Errors
- View execution logs in Google Apps Script dashboard
- Check for syntax errors in the deployed script
- The updated script includes more detailed logging
- Use the `testContactForm()` function in the script to test manually

### 5. Network/Timeout Issues
- Google Apps Script has execution limits (6 minutes for custom functions)
- The updated script includes better error handling
- Check browser developer tools for detailed error messages

## Testing the Setup

1. **Test the endpoint directly**: Visit your Web App URL in a browser - it should return a JSON response
2. **Check the form**: Submit a test message through your portfolio
3. **Verify email delivery**: Check your inbox for the notification email
4. **Check logs**: Review execution logs in Google Apps Script dashboard

## Security Considerations

- The Web App is public but only accepts POST requests with specific data structure
- No sensitive data is exposed through the API
- Email validation is performed on both frontend and backend
- Consider adding rate limiting for production use

## Optional Enhancements

1. **Google Sheets Integration**: Add a spreadsheet ID to log all submissions
2. **Auto-Reply**: Send confirmation emails to form submitters
3. **Spam Protection**: Implement captcha or honeypot fields
4. **Analytics**: Track form submission rates and success metrics

## Current Error Handling

The contact form now includes comprehensive error handling for:
- Network connectivity issues
- Server timeouts
- Invalid responses
- Missing required fields
- Email format validation

All errors are logged to the console for debugging while showing user-friendly messages.
