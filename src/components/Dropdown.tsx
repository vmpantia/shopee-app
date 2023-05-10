type Props = {
     label:string;
     datasource?:any[];
}

const Dropdown = (props:Props) => {
    const {label, datasource} = props;
    return (
    <div className='mb-4'>
        <label className='flex w-full mb-2 text-sm font-medium'>{label}:</label>
        <select className='flex w-full'>
            <option value="">Select</option>
            {datasource?.map(data => {
                return <option value={data.key}>{data.value}</option>
            })}
        </select>
    </div>
    )
}

export default Dropdown