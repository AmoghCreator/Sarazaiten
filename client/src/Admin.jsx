import {useForm} from 'react-hook-form';

function Admin(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return(
    <div> 
      <form>
        <input id="prompt" type="text-area" {...register("prompt" , {required : true})} />
      </form>
    </div>
  )
}
