import { useForm, } from 'react-hook-form';
import InputTSX from './inputs-components/Input';

interface LoginFormRequest {
  user: string;
  password: string;
}
 
const LoginForm = () => {

  const { register, handleSubmit } = useForm<LoginFormRequest>();

  const onSubmit = (data: LoginFormRequest, e: any) => {
    e.preventDefault();
    console.log(data);
    window.location.href = '/home'
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full border border-gray-300 overflow-hidden">
        <div className="bg-gray-800 p-8">
          <h2 className="text-center text-4xl font-semibold text-white">Login</h2>
        </div>
        <div className="bg-white p-8">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="user" className="sr-only">Usuario</label>
              <InputTSX type="text" placeholder="Usuario" {...register('user')} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <InputTSX type="password" placeholder="Contraseña" {...register('password')} />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
