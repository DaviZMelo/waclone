export default function ensureUserAuthorized(
  userId: string,
  allowedUsers: Array<string>,
  masterUser: string,
): boolean {
  const isAllowedUser = allowedUsers.includes(userId.toString());

  const isMasterUser = userId === masterUser;

  if (isAllowedUser || isMasterUser) {
    return true;
  }

  return false;
}
