const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Doctor' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Engineer' },
  ];
  
  const mockUserData = {
    name: 'John Doe',
    role: 'Doctor',
    specialization: 'Cardiology',
    patients: 50,
    researchProjects: 3,
  };
  
  export const loginApi = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find(u => u.email === email);
        if (user && password === 'password') {
          resolve({ token: 'mock-jwt-token', user });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  };
  
  export const registerApi = (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (mockUsers.find(u => u.email === email)) {
          reject(new Error('User already exists'));
        } else {
          const newUser = { id: mockUsers.length + 1, name, email, role: 'Unassigned' };
          mockUsers.push(newUser);
          resolve({ token: 'mock-jwt-token', user: newUser });
        }
      }, 500);
    });
  };
  
  export const fetchUserDataApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUserData);
      }, 500);
    });
  };