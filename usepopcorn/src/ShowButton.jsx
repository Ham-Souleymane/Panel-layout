import { mdiMinusCircle, mdiPlusCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';

export function ShowButton({isOpen,setIsOpen}) {
  return(
  <button className='show-button' onClick={() => setIsOpen(e => !e)}>
    {isOpen ? <Icon path={mdiMinusCircle} size={0.8} c />
      : <Icon path={mdiPlusCircleOutline} size={0.8} fill="red" />}

  </button>
  )
}
