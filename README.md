# week-5-challenge - Day Planner




# This weeks challenge

### Overview

This weeks challenge was to build a day planner for a company looking to maximise productivity for each day of the week

### Function

#### Day Planner

User is greeted with a time blocks for each hour of the working day. Each block shows the current time, has a field to so you can mark down the task for that hour and a save button. As the time flows through the day the colour of the block change, Green meaning coming up, Red meaning current task and Grey meaning time is up for that task. To keep track of the current time there is a clock at the top of the page counting down the seconds so you dont keep moving!

![Work Day Scheduler](https://user-images.githubusercontent.com/107826386/187870802-c784501b-4f54-4a6f-8880-c89609cc51b0.gif)

### After Hours

<img width="1728" alt="Screen Shot 2022-09-01 at 6 49 28 pm" src="https://user-images.githubusercontent.com/107826386/187873306-d6433055-75e5-44a0-9bde-bc984c59804a.png">



#### Tech

This projects takes advantage of multiple third pary APIs. Using moment JS for all time related components, Bootstrap for styling and Jquery for logic of the app.

#### Acceptance Criteria
```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


## Links

[Github Repo](https://github.com/AlexMastroianni/week-5-challenge)

[Live Site](https://alexmastroianni.github.io/week-5-challenge/)
