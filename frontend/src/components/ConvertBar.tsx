import Selector from './Selector'
import LinkInput from './LinkInput'
import Button from './Button'

const ConvertBar = () => {
  return (
    <div className="card w-auto bg-base-100 shadow-xl rounded-full">
        <div className='card-body'>
            <div className='flex gap-2'>
                <Selector />
                <LinkInput />
                <Button />
            </div>
        </div>
    </div>
  )
}

export default ConvertBar