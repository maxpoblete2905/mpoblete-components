import React, { useState } from "react";
import { Form, Alert, Card } from "react-bootstrap";
import { ButtonComponent } from "../button/Button.component";
import { Theme } from "../../types/theme";

export interface LoginFormInput {
  username: string;
  password: string;
}

export interface DynamicFormProps {
  theme?: Theme;
  title?: string;
  subTitle?: string;
  onSubmit: (formData: LoginFormInput) => void;
}

export const LoginForm = ({ onSubmit, theme }: DynamicFormProps) => {
  const [formData, setFormData] = useState<LoginFormInput>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string | null }>({
    username: null,
    password: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("test", e);
    e.preventDefault();

    // Validaciones básicas, ajusta según tus necesidades
    if (!formData.username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is required",
      }));
      return;
    }

    if (!formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      return;
    }

    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card bg={theme} text="white">
        <Card.Header>
          <Card.Title>Login Form</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <Alert variant="danger">{errors.username}</Alert>
            )}
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <Alert variant="danger">{errors.password}</Alert>
            )}
          </Form.Group>
        </Card.Body>
        <Card.Footer>
          <ButtonComponent
            theme={"primary"}
            size={"sm"}
            label={"Guardar"}
            type={"submit"}
            AllCaps={false}
          />
        </Card.Footer>
      </Card>
    </Form>
  );
};

// // DynamicForm.tsx
// import { useState } from "react";
// import "./form.css";
// import "../grid/grid.css";
// import { Alert, Card, Col, Form, Row } from "react-bootstrap";
// import { ButtonComponent } from "../button/Button.component";
// import InputComponent from "../input/Input.component";

// export interface FormField {
//   id: string;
//   label: string;
//   type:
//     | "text"
//     | "email"
//     | "password"
//     | "number"
//     | "checkbox"
//     | "radio"
//     | "file"
//     | "date"
//     | "time"
//     | "submit"
//     | "reset"
//     | "button"
//     | "color"
//     | "range"
//     | "tel"
//     | "url";
// }

// export interface DynamicFormProps {
//   fields: FormField[];
//   onSubmit: (formData: { [key: string]: string }) => void;
//   color: "primary" | "secondary" | "dark";
//   title: string;
//   subTitle: string;
// }

// export const DynamicForm = ({
//   fields,
//   onSubmit,
//   color,
//   title,
//   subTitle,
// }: DynamicFormProps) => {
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   const [formData, setFormData] = useState<{ [key: string]: string }>({});

//   const handleInputChange = (id: string, value: string) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     onSubmit(formData);
//     setShowSuccessMessage(true);
//   };

//   const handleReset = () => {
//     setFormData({});
//     setShowSuccessMessage(false);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Card>
//         <Card.Header>{title} </Card.Header>
//         <Card.Body>
//           <Card.Title>{subTitle}</Card.Title>
//           <Row>
//             {fields &&
//               fields.map(({ id, label, type }) => (
//                 <Col md={6} key={id}>
//                   <InputComponent
//                     id={id}
//                     label={label}
//                     type={type}
//                     value={formData[id] || ""}
//                     onChange={(value: string) => handleInputChange(id, value)}
//                     color={color}
//                   />
//                 </Col>
//               ))}
//           </Row>
//         </Card.Body>
//         <Card.Footer>
//           <ButtonComponent
//             theme={"primary"}
//             size={"sm"}
//             label={"Guardar"}
//             type={"submit"}
//             AllCaps={false}
//           />
//           <ButtonComponent
//             theme={"secondary"}
//             size={"sm"}
//             label={"reset"}
//             type={"button"}
//             onClickEvent={handleReset}
//           />

//           {showSuccessMessage && (
//             <Alert variant="success" className="mt-3">
//               Registro de empleado exitoso.
//             </Alert>
//           )}
//         </Card.Footer>
//       </Card>
//     </Form>
//   );
// };
