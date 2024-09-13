import './ListDropdown.css'

const ListDropdown = (props) => {
    return (
        <div className='list-dropdown'>
            <label>
                {props.label}
            </label>

            <select required={props.required} value={props.value} onChange={(event)=>props.aoAlterado(event.target.value)}>
                {
                    props.item.map(item => <option key={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

export default ListDropdown;