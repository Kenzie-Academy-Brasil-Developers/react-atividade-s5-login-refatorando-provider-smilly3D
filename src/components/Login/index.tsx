import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Provider/Auth";
import { Container, FormContainer, LoginContainer } from "./styled";

interface UserData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useAuth();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: UserData) => {
    signIn(data);
  };

  return (
    <Container>
      <LoginContainer>
        <h3>Login</h3>
        <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="alertArea">{errors.email?.message}</div>
          <input placeholder="email" {...register("email")} />
          <div className="alertArea">{errors.password?.message}</div>
          <input placeholder="password" {...register("password")} />
          <button type="submit">Enviar!</button>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
};
