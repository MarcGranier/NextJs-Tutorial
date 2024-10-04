import { deleteUser, removeUser } from '@/utils/actions';

function DeleteButton({ id }: { id: string }) {
  const removeUserWithID = removeUser.bind(null, id);
  return (
    <form action={removeUserWithID}>
      <input type='hidden' name='id' value='shakeAndBake' />
      <button
        type='submit'
        className='bg-red-500 text-white text-xs rounded p-2'
      >
        delete
      </button>
    </form>
  );
}

export default DeleteButton;
