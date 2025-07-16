import React, { useState, useEffect } from "react";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    const newErrors = {};

    // Validate name: required
    if (!form.name.trim()) {
      newErrors.name = "Nombre es requerido.";
    }

    // Validate email: required and proper format
    if (!form.email.trim()) {
      newErrors.email = "Email es requerido.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Formato de email inválido.";
    }

    // Validate password: required and must meet strength requirements
    if (!form.password) {
      newErrors.password = "Contraseña es requerida.";
    } else if (
      !/^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/.test(
        form.password
      )
    ) {
      newErrors.password =
        "Debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.";
    }

    // Validate password confirmation: required and must match password
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Debe confirmar la contraseña.";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    // Set the validation errors and return if the form is valid
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    validate();
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(JSON.stringify(form, null, 2));
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Formulario de Registro
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block">Nombre</label>
          <input
            name="name"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            value={form.name}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block">Email</label>
          <input
            name="email"
            type="email"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            value={form.email}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block">Contraseña</label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-full border p-2 pr-16 rounded"
              onChange={handleChange}
              value={form.password}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2 px-2 text-sm text-blue-600 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block">Confirmar Contraseña</label>
          <div className="relative">
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              className="w-full border p-2 pr-16 rounded"
              onChange={handleChange}
              value={form.confirmPassword}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2 px-2 text-sm text-blue-600 focus:outline-none"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          type="submit"
        >
          Registrar
        </button>
        {success && (
          <p className="text-green-600 mt-4 text-center">Registro exitoso</p>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
