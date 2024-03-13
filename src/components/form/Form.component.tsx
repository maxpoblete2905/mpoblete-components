import React, { ChangeEvent, useState } from "react";
import { Form, Card } from "react-bootstrap";
import { ButtonComponent } from "../button/Button.component";
import { Theme } from "../../types/theme";
import { handlerTheme } from "../../customTheme/handlerThemeColor";
import { ThemeInterface } from "../../interfaces/themeColor";
import { CustomInput } from "../input/Input.component";

export interface LoginFormInput {
  username: string;
  password: string;
}
export interface DynamicFormProps {
  theme: Theme;
  title?: string;
  subTitle?: string;
  isneon?: boolean;
  onSubmit: (formData: LoginFormInput) => void;
  onForgotPassword: () => void; // Función para manejar el olvido de contraseña
  onGoogleLogin: () => void; // Función para manejar el inicio de sesión con Google
}

export const LoginForm = ({
  onSubmit,
  onForgotPassword,
  onGoogleLogin,
  theme,
  isneon = false,
}: DynamicFormProps) => {
  const [formData, setFormData] = useState<LoginFormInput>({
    username: "",
    password: "",
  });

  interface Error {
    username: boolean;
    password: boolean;
  }
  const [errors, setErrors] = useState<Error>({
    username: false,
    password: false,
  });

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: true,
      }));
      return;
    }

    if (!formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: true,
      }));
      return;
    }

    setErrors({
      username: false,
      password: false,
    });
    onSubmit(formData);
  };

  const stylesTheme: ThemeInterface = handlerTheme(theme);
  const neonEffect = ` 0 0 5px ${stylesTheme.textOnPrimary}, 0 0 5px ${stylesTheme.textOnPrimary}, 0 0 5px ${stylesTheme.textOnPrimary}, 0 0 5px ${stylesTheme.textOnPrimary}`;

  return (
    <Form onSubmit={handleSubmit}>
      <Card
        style={{
          background: stylesTheme.primary,
          color: stylesTheme.textOnPrimary,
          border: `${stylesTheme.textOnPrimary} solid 1px`,
          boxShadow: isneon ? neonEffect : "", // Aplicar el efecto de neón al botón
        }}
      >
        <Card.Header>
          <Card.Title>Login Form</Card.Title>
        </Card.Header>
        <Card.Body>
          <CustomInput
            id={"username"}
            label={"Username"}
            type={"email"}
            value={formData.username}
            placeholder={"Enter your username"}
            theme={theme}
            handleChange={handleChangeForm}
            isneon={isneon}
            errors={errors.username}
          />

          <CustomInput
            id={"password"}
            label={"Password"}
            type={"password"}
            value={formData.password}
            placeholder={"Enter your password"}
            theme={theme}
            handleChange={handleChangeForm}
            isneon={isneon}
            errors={errors.password}
          />

          <br />
          {/* Agregar enlace para "Olvidaste tu contraseña" */}
          <ButtonComponent
            type={"button"}
            theme={theme}
            size={"sm"}
            label={"Forgot Password?"}
            onClickEvent={() => onForgotPassword()}
            AllCaps={false}
            isneon={isneon}
          />

          {/* Agregar botón para "Iniciar sesión con Google" */}
          <ButtonComponent
            type={"button"}
            theme={theme}
            size={"sm"}
            label={"Login with Google"}
            onClickEvent={onGoogleLogin}
            AllCaps={false}
            isneon={isneon}
          />
        </Card.Body>
        <Card.Footer>
          <ButtonComponent
            theme={theme}
            size={"sm"}
            label={"Guardar"}
            type={"submit"}
            AllCaps={false}
            isneon={isneon}
          />
        </Card.Footer>
      </Card>
    </Form>
  );
};
