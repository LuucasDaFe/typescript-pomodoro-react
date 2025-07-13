# TypeScript Pomodoro React Application

## Project Overview
This is a React application built with TypeScript that implements the Pomodoro Technique, a time management method developed by Francesco Cirillo. The technique uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. The application allows users to:
- Start work sessions
- Take short breaks after each work session
- Take longer breaks after a specified number of cycles
- Track completed cycles, total working time, and number of pomodoros completed

## Technologies Used
- **React**: Front-end library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **CSS**: For styling components
- **HTML**: Structure of the application
- **Audio**: Audio notifications for session starts and ends

## Application Architecture

### Components
1. **App.tsx**: Main application component that renders the PomodoroTimer component with configuration props
2. **PomodoroTimer.tsx**: Core component that manages the timer logic, state, and renders the UI
3. **Timer.tsx**: Displays the current countdown time in minutes and seconds
4. **Button.tsx**: Reusable button component with configurable text, click handler, and optional CSS class

### Hooks
1. **useInterval.tsx**: Custom hook to handle interval timing with cleanup functionality

### Utils
1. **seconds-to-minutes.ts**: Converts seconds to a formatted minutes:seconds string (MM:SS)
2. **seconds-to-time.ts**: Converts seconds to a formatted hours:minutes:seconds string (HH:MM:SS)
3. **zero-left.tsx**: Ensures numbers are displayed with leading zeros for proper time formatting

### State Management
The application uses React's built-in state management (useState and useEffect hooks) to track:
- Current timer value (mainTime)
- Whether the timer is counting (timeCounting)
- Current mode (working, resting)
- Completed cycles and pomodoros
- Total working time

## Features

### 1. Configurable Timer Settings
The application allows configuration of:
- Work session duration (pomodoroTime)
- Short rest duration (shortRestTime)
- Long rest duration (longRestTime)
- Number of work sessions before a long break (cycles)

### 2. Session Management
- Start work sessions
- Start rest sessions (short or long)
- Pause and resume timer

### 3. Visual Indicators
- Background color changes based on the current mode (green for rest, red for work)
- Timer display with minutes:seconds format
- Text indicator showing current mode ("Working" or "Resting")

### 4. Audio Notifications
- Bell sound when starting a work session
- Different bell sound when finishing a work session

### 5. Statistics Tracking
- Number of completed cycles
- Total working time (displayed in HH:MM:SS format)
- Number of completed pomodoros (work sessions)

## How to Use

### Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Application
1. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```
2. Open your browser and navigate to `http://localhost:3000`

### Using the Timer
1. The default configuration is set in App.tsx:
   - Work session: 10 seconds (for demonstration purposes, typically 25 minutes)
   - Short break: 2 seconds (typically 5 minutes)
   - Long break: 5 seconds (typically 15-30 minutes)
   - Cycles before long break: 4

2. Use the buttons to control the timer:
   - "Work": Start a work session
   - "Rest": Start a rest session
   - "Pause"/"Play": Pause or resume the current session

3. The application will automatically:
   - Switch from work to short rest after completing a work session
   - Switch from rest to work after completing a rest session
   - Give a long rest after completing the configured number of cycles

4. Track your progress with the statistics at the bottom of the application

## Customization
To change the default timer settings, modify the props passed to the PomodoroTimer component in App.tsx:

```jsx
<PomodoroTimer
  pomodoroTime={1500} // 25 minutes in seconds
  shortRestTime={300} // 5 minutes in seconds
  longRestTime={900} // 15 minutes in seconds
  cycles={4} // Number of pomodoros before a long break
/>
```

## Code Quality and Best Practices
The application demonstrates several good software engineering practices:
- Type safety with TypeScript
- Component-based architecture
- Custom hooks for reusable logic
- Clean separation of concerns
- Error handling in utility functions
- Responsive design
- Clean, maintainable code structure

## Potential Enhancements
1. Add settings menu to allow users to configure times without code changes
2. Add task management functionality
3. Implement user profiles and data persistence
4. Add more themes/color schemes
5. Implement sound customization
6. Add keyboard shortcuts
7. Create mobile responsive design improvements

This Pomodoro application provides a solid foundation for time management using the Pomodoro Technique and can be extended with additional features as needed.
