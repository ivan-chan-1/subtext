import Selector from './Selector'
import LinkInput from './LinkInput'
import Button from './Button'

const ConvertBar = () => {
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
        <div className='card-body'>
            <h2 className="card-title">Enter a Youtube Link</h2>
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