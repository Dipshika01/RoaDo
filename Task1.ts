import { startOfMonth, endOfMonth } from "date-fns";

// Define the UserSession type
type UserSession = {
  userId: string;
  loggedIn: Date;
  loggedOut: Date | null; // 'null' indicates the user hasn't logged out.
  lastSeenAt: Date;
};

// Checks if a session overlaps with the given month.
function isSessionActiveInMonth(
  session: UserSession,
  monthStart: Date,
  monthEnd: Date
): boolean {
  // Check if the session was active after the start of the month
  const sessionActiveAfterMonthStart =
    session.lastSeenAt > monthStart || session.loggedIn > monthStart;

  // Check if the session started before the end of the month or if the user hasn't logged out yet
  const sessionStartedBeforeMonthEnd =
    !session.loggedOut || session.loggedOut < monthEnd;

  // Return true if the session overlaps with the given month
  return sessionActiveAfterMonthStart && sessionStartedBeforeMonthEnd;
}

// Main function to calculate active users for a given month and year.
function getMonthlyActiveUsers(
  userSessions: UserSession[],
  month: number,
  year: number
): number {
  // Calculate the start and end dates of the given month
  const monthStart = startOfMonth(new Date(year, month));
  const monthEnd = endOfMonth(new Date(year, month));

  // Use a Set to store unique active user IDs
  const activeUsers = new Set<string>();

  // Iterate over each user session
  userSessions.forEach((session) => {
    // Check if the session is active in the given month
    if (isSessionActiveInMonth(session, monthStart, monthEnd)) {
      // Add the user ID to the activeUsers Set
      activeUsers.add(session.userId);
    }
  });

  // Return the size of the activeUsers Set, which represents the number of active users
  return activeUsers.size;
}

// Example usage:
// const activeUserCount = getMonthlyActiveUsers(userSessions, 7, 2024); // For August 2024
