// Authentication helper functions

export const registerUser = (email, password, fullName) => {
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return { success: false, message: 'Email already registered!' };
    }

    // Create new user object
    const newUser = {
        id: Date.now(),
        email,
        password, // In real app, this should be hashed
        fullName,
        createdAt: new Date().toISOString(),
    };

    // Add to users array
    users.push(newUser);

    // Save to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true, message: 'Account created successfully!' };
};

export const loginUser = (email, password) => {
    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user by email
    const user = users.find(u => u.email === email);

    if (!user) {
        return { success: false, message: 'Email not found!' };
    }

    // Check password
    if (user.password !== password) {
        return { success: false, message: 'Invalid password!' };
    }

    // Save current logged-in user
    localStorage.setItem('currentUser', JSON.stringify(user));

    return { success: true, message: 'Login successful!', user };
};

export const logoutUser = () => {
    localStorage.removeItem('currentUser');
    return { success: true, message: 'Logged out successfully!' };
};

export const getCurrentUser = () => {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
};

export const resetPassword = (email, newPassword) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email);

    if (!user) {
        return { success: false, message: 'Email not found!' };
    }

    // Update password
    user.password = newPassword;

    // Save updated users
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true, message: 'Password reset successful! Please login with new password.' };
};