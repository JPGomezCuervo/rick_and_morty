function validation (userData, errors) {
    let newErrors = { ...errors };
  
    if (!userData.username) {
      newErrors.username = 'Complete este campo';
    } else if (userData.username.length > 35) {
      newErrors.username = 'El email excede los 35 caracteres';
    } else if (!/^\S+@[^\s@]+\.[^\s@]+$/.test(userData.username)) {
      newErrors.username = ' Ingrese un email válido  ';
    } else {
      newErrors.username = '';
    };
  
    if (userData.password.length < 6 || userData.password.length > 10) {
      newErrors.password = 'La contraseña debe tener entre 6 a 10 caracteres';
    } else if (!/\d/.test(userData.password)){
      newErrors.password = 'La contraseña debe tener al menos un número';
    } else {
      newErrors.password = '';
    }
  
    return(newErrors);
  }
export default validation  