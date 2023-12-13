export function generateStrongPassword(length = 12) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialSymbols = '!@#$%^&*()-=_+[]{}|;:,.<>?';

  // Combine character sets
  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialSymbols;

  // Ensure the password length is at least 12 characters
  length = Math.max(length, 12);

  // Generate a strong password by randomly selecting characters
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}

// Example usage:
const strongPassword = generateStrongPassword();
console.log(strongPassword);
