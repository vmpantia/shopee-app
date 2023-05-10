type Props = {
    label:string;
    minimum:number;
    maximum:number;
}

const InputRange = (props:Props) => {
   const {label, minimum, maximum} = props;
   return (
        <div className='mb-4'>
            <label className='flex w-full mb-2 text-sm font-medium'>{label}:</label>
            <input className='flex w-full' type="range" id="vol" name="vol" min={minimum} max={maximum}/>
        </div>
   )
}

export default InputRange