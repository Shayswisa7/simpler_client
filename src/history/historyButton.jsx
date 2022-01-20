import { useNavigate } from 'react-router-dom';

function useHomePage(props) {
  const history = useNavigate();
  if (props.name === '') history('/CreateUser');

  return;
}
export default useHomePage;
