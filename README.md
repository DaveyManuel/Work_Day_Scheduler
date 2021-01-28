# Work_Day_Scheduler

## User Story

With the completion of this assignment, I was able to implement code via HTML, CSS, and JS in order to create a work-day scheduler for a busy client. By using moment.js I grabbed the current day and current time and displayed both in the header of the planner. I created 8 columns to represent an 8 hour work day that coincides with the current hour of the day. By using the styles 'past', 'present', and 'future' I color coded each column grey, red, and green respectively. For each column when the save button is pressed, the text that is written in by the user will be saved. When the page is refreshed, the text will remain.

## Logic

### If/Then

For each column I created variables using JQuery to grab the data number attribute for each textarea. This number coincides with its specified hour, for example, 9AM has the data-number attribute of 9. Using if then statements I compared each data-number attribute with the current hour. If the data-number was less than the current hour I set the style to 'past' which would give it a grey color. If the data-number was equal to the current hour I set the style to 'present' which gave the column a red color. Lastly I set the styling of my columns to 'future' if the other two criteria were untrue, rather if the hours were still yet to come, and gave the columns a green color.

### Save Button Functionality