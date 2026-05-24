import Selector from './Selector'
import LinkInput from './LinkInput'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { ConvertData } from '../types';

const ConvertBar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<ConvertData>({lang: "English", vidId: ""});

  const handleSubmit = () => {
    if (!data.vidId) {
      return;
    }

    navigate(`/transcript/${data.vidId}`);
  };

  return (
    <div className="card w-auto bg-base-100 shadow-2xl rounded-full">
      <div className='card-body'>
        <div className='flex gap-2'>
          <Selector onChange={setData}/>
          <LinkInput onChange={setData}/>
          <button className="btn btn-primary btn-circle" onClick={() => handleSubmit()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConvertBar