import loading from '../assets/loading.gif'

import '../styles/components/waiting.sass'

const Waiting = () => {
  return (<div className='loading-div'><img src={loading} alt='loading'/></div>)
}

export default Waiting;